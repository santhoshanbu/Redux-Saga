import {useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import {getData,putData} from './Redux/Action/get'

function App() {

  let dispatch=useDispatch()

  useEffect(() => {
    dispatch(getData());
  },[]);

  let data=useSelector((state)=>state.data.data)
  let val=useSelector((state)=>state.data[0].data)

  let up={
    _id:"61c31bb51e92e04c65f945d1",
    venue: "dfjsfsk",
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
          data ? data.map((item)=> (<p>{item.venue}</p> ) ):val.map((item)=> (<p>{item.venue}</p> ) )
        }
      </div>
      <button onClick={()=>dispatch(putData('61c31bb51e92e04c65f945d1',up))}>update</button>
      {/* <button onClick={()=>dispatch(postData(up))}>post</button> */}
    </div>
  );
}

export default App;
