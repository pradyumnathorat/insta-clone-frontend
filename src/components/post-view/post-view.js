import { useEffect, useState } from "react";
import Card from "../../cards";
import Header from "../header/header";


const Postview = () => {
    const [posts , setposts ] = useState([]);
   
    useEffect(() => {
        fetch("https://insta-clone-app-uhy2.onrender.com/all").then((res) => res.json()).then((data) =>{
            setposts(data);
        }).catch((err) =>{
            if (err) {
                console.log(err);
            }
        })
    },[]);
    if (posts.length === 0) {
        return <h1>Loading...</h1>
    }
    return (
        <>
        <Header/>
        <div className="post-container">
            {[...posts].reverse().map((post , i) => {
                return(
                    <Card post={post} key={i}/>
                )
            })}
        </div>
        
        </>
    )
}
export default Postview;