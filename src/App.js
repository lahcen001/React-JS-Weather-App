import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e273957891ab7b16f2a0c2f137025328'


  return (
    <div className="app">
     <div className='container'>
      <div className='top'>
       <div className="location">Harisson</div>
         <div className='temp'>
            <h1>65F</h1> 
          </div>
          <div className='description'>
<p>Clouds</p>
          </div>
      </div>
      <div className='bottom'>d</div>
     </div>
    </div>
  );
}

export default App;
