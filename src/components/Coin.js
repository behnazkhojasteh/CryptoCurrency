import React from 'react'
import { Link, useParams } from 'react-router-dom';
import CoinId from './CoinId';
function Coin (props) {
  return (
     
    <tr scope="row" className='table_numbers'>
    <td><img src={props.icon} alt="icon" class='img-fluid ' /></td>
    <td><Link to={'/coin/'+props.id} >{props.name}</Link></td>
    <td>$ {props.price.toFixed(3)}</td>
    <td>{props.symbol}</td>
  </tr>
  )
}
export default Coin;
