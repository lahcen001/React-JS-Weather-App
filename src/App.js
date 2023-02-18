
import './App.css';
import axios from 'axios'
import React, {useState} from 'react'



function App() {


const [data, setData]= useState({});
const [location , setLocation] = useState('')

const url = `http://api.openweathermap.org/data/2.5/weather?q=${location},usa&APPID=e273957891ab7b16f2a0c2f137025328`


const searchLocation =(event)=>{
  if(event.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  }
}

  return (
 <div className="app">
<div className='search'>


<input
value={location}
onChange={(e)=>setLocation(e.target.value)}
type="text"
onKeyPress={(e)=>searchLocation(e)}
placeholder='Enter Location'

/>


</div>


     <div className='container'>
      <div className='top'>
       <div className="location">{location}</div>
         <div className='temp'>
            <h1>65F</h1> 
          </div>
          <div className='description'>
<p>Clouds</p>
          </div>
      </div>
      <div className='bottom'>
   
   <div className='feels'>
<p className='bold'>65F</p>
<p >Feels Like</p>
   </div>

   <div className='humidity'>
    <p className='bold'>20%</p>
    <p>Humidity</p>
   </div>


   <div className='wind'>
  <p className='bold'> 12 MPH</p> 
    <p>Wind Speed</p>
   </div>



      </div>
     </div>
    </div>
  );
}

export default App;
