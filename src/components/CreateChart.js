import React from "react";
import axios from 'axios';
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart, 
  Area,
  ResponsiveContainer,
  
  
} from "recharts";

import moment from 'moment';
function CreateChart({data}){
  const {id} = useParams();
  const[listOfCoin, setlistOfCoin]=useState([]);
  const[listOfMarket , setlistOfMarket]=useState([]);
  const coindetails = [];
  const market=[];
  
  axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=cad&days=${data}data&interval=daily%27%20\%20%20-H%20%27accept:%20application/json%27`)
       .then((response)=>{
          setlistOfCoin(response.data.prices);
          setlistOfMarket(response.data.market_caps);
      })

    let momentFormat ;
    switch (data) {
        case "1":
            momentFormat = 'LT'
            break;
        case "7":
        case "30":
          momentFormat = 'MMM DD'
            break;
        default:
            momentFormat = 'LT'
            break;
    }

    listOfCoin.map((price) => {
       coindetails.push({name:moment(price[0]).format(momentFormat) , value:price[1].toFixed(2)})
      })
      listOfMarket.map((price) => {
        market.push({name:moment(price[0]).format(momentFormat) , value:price[1].toFixed(2)})
       })

    return(
    
<div class='row'>
  <div class=' col-12 ' >
  <h3 class='text-capitalize g-col-3 g-start-6'  > {id} prices</h3>
        <ResponsiveContainer width="95%" height={500}>
        <AreaChart  data={coindetails}
        margin={{ top: 70, right: 20, left: 30, bottom: 30 }}>
       <defs>
           <linearGradient id="colorvalue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={1}/>
              <stop offset="85%" stopColor="#8884d8" stopOpacity={0.5}/>
           </linearGradient>
       </defs>

     <XAxis dataKey="name" />
     <YAxis  dataKey="value" domain={['auto', 'auto']}/>
     <CartesianGrid strokeDasharray="3 3" />
     <Tooltip />
     <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorvalue)" />
     </AreaChart>
     </ResponsiveContainer>
  </div>
</div>
    );

    
}
export default CreateChart;