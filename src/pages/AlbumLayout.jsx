import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet,Link } from "react-router-dom"
import List from "../component/List";

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;


function AlbumLayout() {
    const [list,setList]=useState([]);
    useEffect(()=>{
        
        (async()=>{
            try {
                const response = await axios.get(`${api}?client_id=${accessId}&query=animal`)
                const {results} = response.data
                setList(results)             
            } catch (error) {
                alert("請求失敗",error);               
            }
        })();
        
    },[])
    return(
        <div className="row">
            <div className="col-4">
                左側選單列表
                <p><Link to="search">搜尋頁面</Link></p>
                <List list={list}></List>
            </div>
            <div className="col-8">
                <Outlet context={list}/>
            </div>
        </div>
    )
}

export default AlbumLayout