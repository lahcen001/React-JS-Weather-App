
import './App.css';
import axios from 'axios'
import React, {useState} from 'react'
import ProgressBar1 from './ProgressBar1';


function App() {


const [data, setData]= useState({});
const [location , setLocation] = useState('')
const [loader, setLoader] = useState(false)

const url = `http://api.openweathermap.org/data/2.5/weather?q=${location},usa&APPID=e273957891ab7b16f2a0c2f137025328`


const searchLocation =(event)=>{
  if(event.key === 'Enter'){
    setLoader(true)
    axios.get(url).then((response)=>{
      setData(response.data)
      setLoader(false)
      
    })
  }
}

  return (
 <div className="app">

 
<div className='search'>
{loader ? <ProgressBar1/> : <>
<input
value={location}
onChange={(e)=>setLocation(e.target.value)}
type="text"
onKeyPress={(e)=>searchLocation(e)}
placeholder='Enter Location'

/>
</>
  }

</div>


     <div className='container'>
      <div className='top'>
       <div className="location">{location}{ location ? (data.sys ?','+ data.sys.country :null) : ''  } </div>
         <div className='temp'>


            <h1>{data.main ? data.main.temp :null  }°F</h1> 
          </div>
          <div className='description'>
<p>{data. weather ? data.weather[0].description :null  }
</p>
          </div>
      </div>
      <div className='bottom'>
   
   <div className='feels'>
<p className='bold'>   {data.main ? data.main.feels_like:null  }°F</p>
<p >Feels Like</p>
   </div>

   <div className='humidity'>
    <p className='bold'>{data.main ? data.main.humidity:null  }% </p>
    <p>Humidity</p>
   </div>


   <div className='wind'>
  <p className='bold'>{data.wind ? data.wind.speed:null  }MPH</p> 
    <p>Wind Speed</p>
   </div>



      </div>
     </div>

    
    </div>
  );
}

export default App;
