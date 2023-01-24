import React from 'react';
import { useState} from 'react';
import { Link} from 'react-router-dom';
import CoinDetail from './CoinDetail';
import CreateChart from './CreateChart';

const time_format ={
  day:"1",
  week:'7',
  month:'30'
}

function CreateButton ()  {
  const [active, setActive] = useState("24h");
  return (
  <div >
   <div class='row'>
      {/* <div class='col-4 '>
        <Link to={'/'} class="btn btn-outline-warning " >🏠Home</Link>
      </div> */}
      <div class='col-md-8 position-absolute top-20 start-50  ' >
        <button  class="btn btn-warning " onClick={()=> setActive("24h")}>24h</button>
        <button  class="btn btn-warning "  onClick={()=> setActive('7d')}>7d</button>
        <button  class="btn btn-warning "  onClick={()=> setActive('1m')}>1m</button>
      </div>
    </div>
    <div>
      {active === "24h"    && <CreateChart  data={time_format.day}/>  }
      {active === "7d"    && <CreateChart  data={time_format.week} />}
      {active === "1m"   && <CreateChart data={time_format.month} /> }
    </div>
   </div>
  );
}
export default  CreateButton;