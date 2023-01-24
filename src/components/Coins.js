import React from 'react'
import { Link } from 'react-router-dom';
import Coin from './Coin';
import { useState ,useEffect} from 'react';
import Axios from 'axios';

function Coins(){
  const[listOfCoins, setlistOfCoins]=useState([]);
  const[searchWord, setWord]=useState("");
  useEffect (()=>{
    
    const interval=setInterval(()=>{
      Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&currency=CAD").then
      ((response) => {
        setlistOfCoins(response.data.coins);
    })
      },1000)
     return()=>clearInterval(interval)
    },[])
   
    const filterList = listOfCoins.filter((coin) =>{
      return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    })
  
  return (
    <div>
    <input class="form-control placeholder-glow placeholder-wave placeholder col-8  inputplace" type="text" placeholder="search your dream coin "  onChange={(event) => { setWord(event.target.value); } }></input>
          <table className='table table-hover table-striped '>
            <thead class='thead-dark thee'>
              <tr scope="row">
                <th scope="col "> </th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Symbol</th>
              </tr>
            </thead>
            <tbody>
              {filterList.map((coin) => {
                return (
									
                  <Coin  name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} id={coin.id}/>

                );
              })}

            </tbody>
          </table>

        </div>
       
  )
}
export default Coins;