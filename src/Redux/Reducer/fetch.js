let initial={data:[]}

const fetch=(state=initial,action)=>{
    switch(action.type){
        case 'GET':
            return {...state};
         case 'PUT':
           return  state.data.map((manager,item) =>{
                           if(manager._id === action.id){ 
                           let newlist=[...state.data]
                           newlist.splice(item,1,action.data)
                           let obj={...state,data:newlist}
                           return obj
                       }
                    }
                );
            //  console.log(state)
            //  return state
            // console.log('santhosh')
            // return {...state}
        case 'POST':
            return {...state,data:action.data};
        case 'PUTOPERATION':
            return {
                ...state
            };
            // state.data.map((manager,item) =>{
            //     console.log(action.id)
            //            if(manager._id === action.id){ 
            //            let newlist=[...state.data]
            //            console.log('clone',newlist)
            //            newlist.splice(item,1,action.data)
            //            console.log('modify',newlist)
            //            let obj={...state,data:newlist}
            //            return obj
            //        }
            //     }
            // );
          
        default:
            return state;
    }

}

export default fetch