import {call,put,takeLatest,fork} from 'redux-saga/effects'
import { GetRequest,PutRequest } from '../Request/GetReqest'

function* GetRequests(){
    try{
        let Response= yield call(GetRequest)
        yield put({type:'POST',data:Response})
    }catch(err){
        console.log(err)
    }
    
}
function* PutRequests({id,data}){
    try{
        let Res= yield call(PutRequest,id,data)
        if(Res.status===200){
            yield put({type:'PUTOPERATION',data:Res.data,id:id})
        }
        
    }catch(err){
        console.log('error')
        console.log(err)
    }
}

// function* PostRequests({data}){
//         try{
//         let Res=yield call(PostRequest,data)
//         if(Res.status === 200){ 
//             yield put({type:'POSTDATA',data:data})
//         }
//         }catch(err){
//         console.log(err)
//         }
// }

function* getWatcherSaga() {
    yield takeLatest("GET", GetRequests);
  }

function* putWatcherSaga() {
    yield takeLatest("PUT", PutRequests);
  }

// function* postWatcherSaga(){
//     yield takeLatest('POST',PostRequests);
// }
  
  export const watcherUserSaga=[fork(getWatcherSaga),fork(putWatcherSaga)]
