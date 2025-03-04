import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const api = "https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

function AlbumPhoto() {
    const [photo,setPhoto] = useState({})
    const {id} = useParams();
    const navigate =useNavigate()

    useEffect (()=>{
       (async()=>{
        try {
            const response = await axios.get(`${api}/${id}?client_id=${accessId}`);
            setPhoto(response.data)
        } catch (error) {
            alert(error);
            
        }
       } )();
    },[id])

    return(
        <div>這是單張圖片{id}
        <br />
        <p>{photo.description}</p>
        <img src={photo?.urls?.regular} className="img-fluid" alt="" />
        <br />
        <button type="button" className="btn-primary mt-2" onClick={()=>navigate(-1)}>回到上一頁</button>
        </div>
    )
}
export default AlbumPhoto