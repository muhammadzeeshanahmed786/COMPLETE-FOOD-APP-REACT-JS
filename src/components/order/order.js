import React, {useState,useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import { GlobalContext } from "../../context/context"
import './order.css'
import { db, getDocs, collection, query, where} from "../firebase/firebase"
function Order() {


let [cardsOrders,setOrders]=useState([]);
  useEffect(async () => {
        let cardRef = collection(db, 'Cards');
        let allCards = await getDocs(cardRef);
        let myCardsClone = cardsOrders.slice(0);
        allCards.forEach((doc) => {
            console.log(doc.id, doc.data().title);
            myCardsClone.push(doc.data());
        });
        setOrders(myCardsClone);
    }, [])

    return(
<div style={{textAlign:"center"}}>
    <h1>Order List</h1>
    {
    

    <table className="table">
    <thead>
    {
        cardsOrders.length==0 ? "You Did Not Place Any Order!":
        <>
        <tr>
            <th>Sr#</th>
            <th>Dish Name</th>
            <th>Price</th>
        </tr>
        </>
}
    </thead>
    <tbody>
        {
            cardsOrders.map(({price,title}, index) => (

                <tr key={price + index}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>RS:{price}</td>
                </tr>
            )


            )
        }

    </tbody>
</table>
    }
</div>  
 
    )}
export default Order;