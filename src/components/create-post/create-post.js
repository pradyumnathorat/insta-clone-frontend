import { useState } from "react";
import {   useNavigate } from "react-router-dom";

import Header from "../header/header";
import "./create-post.css";
const Post = () => {
    const nav = useNavigate();
    const [ Author , setAuthor] = useState("");
    const [ Location , setLocation] = useState("");
    const [ Description , setDescription] = useState("");
    const [ image , setimage] = useState("");
    // const [active,setActive] = useState(false);

    // if(Author && Location && Description && image){
    //     setActive(true);
    // }

    const uploadpost = () => {
        if(Author && Location && Description && image)  {
            const formdata = new FormData();
            formdata.append('Author' , Author);
            formdata.append('Location' , Location);
            formdata.append('Description' , Description);
            formdata.append('image' , image);
            
            fetch("http://localhost:3004/post" , { 
                method : "POST",
                body : formdata
            })
            nav('/post-view')
        }else{
            alert("Please fill all fields");
        }
        
    }
    return (
        <>
        <Header/>
        <div className="container">
            <input className="file" type="file" onChange={(e) => {setimage(e.target.files[0])}}/>

            <div className="two-input">
            <input className="Author" type="text" placeholder="Author" value={Author} onChange={(e) => {setAuthor(e.target.value)}}/>
            <input className="Location" type="text" placeholder="Location" value={Location} onChange={(e) => {setLocation(e.target.value)}}/>
            </div>
            
            <input className="Description" type="text" placeholder="Description" value={Description} onChange={(e) => {setDescription(e.target.value)}}/>
           
            <button  className="button" style={Author && Location && Description && image?{backgroundColor:"blue" , color:"white"}:{}} onClick={uploadpost}>Post</button>
           
            
        </div>
        </>
    )
}

export default Post;