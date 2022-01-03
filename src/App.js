import {useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import {getData,putData,postData,deleteData} from './Redux/Action/get'

function App() {
  let dispatch=useDispatch()

  console.log('running1')

  useEffect(() => {
    console.log('running2')
    dispatch(getData());
  },[]);

  let data=useSelector((state)=>state.data.data?state.data.data:state.data[0].data)

  let up={
    // _id:"61cbe9856dcdb5f767923192",
    venue: "santhosh",
    description: "abcdsdfgfg",
    startdate: "2021-12-22",
    endate: "2021-12-22",
    country: "India",
    district: "Mahe",
    state: "Puducherry",
    city: "gfgt",
    event_sponsor: "sdff",
    event_organizer: "dfd",
    __v: 0
}
  return (
    <div className="App">
      <div>haii</div>
      <div>
        {
          data ? data.map((item)=> (<p>{item.venue}</p> ) ):null
        }
      </div>
      <button onClick={()=>dispatch(putData('61cbe9856dcdb5f767923192',up))}>update</button>
      <button onClick={()=>dispatch(postData(up))}>post</button>
      <button onClick={()=>dispatch(deleteData('61cbe9856dcdb5f767923192'))}>dalete</button>
    </div>
  );
}

export default App;
