// import React ,{useState}from "react";
// import { addDoc , collection , db ,uploadBytes,ref,storage ,getDownloadURL} from "../firebase/firebase"

// function AddProduct(){
//     let {state , dispatch} = useContext(GlobalContext);
//     let [image , setImage] = useState('');
//     let [itemInp , setItemInp] = useState('');
//     let [price , setPrice] = useState('');
//     let [cateory , setCategory] = useState('');
//     let [delieveryType , setDeliveryType] = useState('');

//     let mathRandom ;
//     async function add(){
//         mathRandom = Math.floor(Math.random() * 1000000000);
//         let dataRef = collection(db,'imagesIds')

//         try {
//             let storageRef = ref(storage,`${state.ResUser.UID}/${mathRandom}`)
//             await uploadBytes(storageRef,image)
//             let URL =  await getDownloadURL(ref(storage, `${state.ResUser.UID}/${mathRandom}`))
//             await addDoc(dataRef,{
//                 ids : mathRandom
//             })
//             let productObj = {
//                 imageUrl : URL,
//                 itemname : itemInp,
//                 price : price,
//                 cateory : cateory,
//                 delieverytype : delieveryType
//             }
//             let ObjDataRef = collection(db,'ResUsers',state.ResUser.UID ,'products')
//             try {
//                 await addDoc(ObjDataRef , productObj);
//                 setImage('');
//                 setItemInp('');
//                 setPrice('');
//                 setCategory('');
//                 setDeliveryType('');
                
//             } catch (error) {
//                 console.log(error)
//             }
//         } catch (error) {
//             console.log(error)
//         }
        
        
//     }
//     return(
//         <>

//         <h3>Add Product</h3>
//         <label>Image Upload : <input type='file' onChange={(e)=>{setImage(e.target.files[0])}} /></label><br />
//         <label>Item Name : <input type='text' value={itemInp} onChange={(e)=>{setItemInp(e.target.value)}} /></label><br />
//         <label>Price : <input type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}} /></label><br />
//         <label>Category : <input type='text' value={cateory} onChange={(e)=>{setCategory(e.target.value)}} /></label><br />
//         <label>Delivery Type : <input type='text' value={delieveryType} onChange={(e)=>{setDeliveryType(e.target.value)}} /></label>
//         <br />
//         <button onClick={add}>Add Product</button>
//         </>
//     )
// }

// export default AddProduct;