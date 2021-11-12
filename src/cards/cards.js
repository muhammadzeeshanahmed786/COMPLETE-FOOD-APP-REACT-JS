import React , {useContext,useState}from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'
import { GlobalContext } from "../context/context";

import {db, collection, addDoc} from "../components/firebase/firebase";

let products = {
    1: {
        images: "https://images.indianexpress.com/2016/01/chicken-tikka-youtube-barnalis-kitchen-2.jpg",
        price: "700 PKR",
        title: "Chicken Tikka",
        delivery: "Free"

    },
    2: {
        images: "https://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg?downsize=200:155",
        price: "500 PKR",
        title: "Vegetable Salad",
        delivery: "Free"

    },
    3: {
        images: "https://i.ytimg.com/vi/QbRA0AMpAcs/maxresdefault.jpg",
        price: "70 PKR",
        title: "Phulka",
        delivery: "Free"

    },
    4: {
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzzTu04mzfYoevp_xXSs0JfsL5KcfEZQH9A&usqp=CAU",
        price: "1700 PKR",
        title: "Mutton Biryani",
        delivery: "Free"

    },
    5: {
        images: "data:image/jpeg;base64,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",
        price: "2100 PKR",
        title: " Koyla Karahi",
        delivery: "Free"

    },
    6: {
        images: "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
        price: "400 PKR",
        title: "Chicken Biryani",
        delivery: "Free"

    }
}




export default function CardsM() {
    const { state, dispatch } = useContext(GlobalContext);
    let [image,setImage]=useState('');
    let [title,setTitile]=useState('')
    let [price,setPrice]=useState('')

    return (
        <div>
            <span style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "3rem", color: "rgb(51, 51, 51)", fontFamily: "avenirRegular, sans-serif" }}>Our Products</h1>
            </span>
            {
                Object.keys(products).map((key) => {
                    const product = products[key];
                   
                    let addCard = async () => {

                        let cardObj={
                        image:product.images,
                        title:product.title,
                        price:product.price
                        }

                        let cardRef = collection(db, 'Cards');
                        await addDoc(cardRef, cardObj);

                        // console.log(cardObj,"image")
                        { alert("Card Added!") }
                        dispatch({ type: "ADD_CART", payload: cardObj });


                    }
                    return (
                        <div style={{ padding: "10px 80px", display: "inline-block" }}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.images} />
                                <Card.Body>
                                    <Card.Title style={{ textAlign: "center", fontSize: "2rem" }}>{product.title}</Card.Title>
                                    <Card.Text style={{ textAlign: "center", fontSize: "1.4rem" }}>
                                        {product.price}
                                    </Card.Text>
                                    <Button onClick={addCard} variant="primary" style={{ backgroundColor: "#8ED444", width: "230px", border: "none", cursor: "pointer", height: "50px", textAlign: "center", padding: "5px", fontSize: "1.6rem", fontWeight: "bold" }}>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

