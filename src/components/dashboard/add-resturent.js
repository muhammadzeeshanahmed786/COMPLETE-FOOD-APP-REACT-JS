import React,{useState} from "react";
import { getStorage, ref } from "firebase/storage";
const storage = getStorage();   







function AddResturent(){
    
    let [image,setImage]=useState(null);
    let [title,setTitle]=useState();
    let [address,setAddress]=useState();

    
    function Add(){
        let imageFile=image[0]
const mountainImagesRef = ref(storage, 'images/' + imageFile.name);

        console.log(mountainImagesRef)
       
    }


    function handleChange (e){
        
            setImage(e.target.files);
        
    }
    return(
        <div style={{textAlign:"center",paddingTop:"100px"}}>
        <h1>Add Resturent</h1>
     
        <input style={{paddingLeft:"200px" }} type="file"
         onChange={handleChange}/>
         <br/><br/>

    
        <label>Add Title:</label><br/>
        <input type="Text" placeholder="Title"/><br/>
        <label>Address:</label><br/>

        <input type="Text" placeholder="Price"/><br/>
        

        <button onClick={Add}>Add </button>


    </div>
    )
}

export default AddResturent;