import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";
import List from "../component/List";

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;


function AlbumSearch() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);
    const [searchParams,setSearchParams]=useSearchParams()
    useEffect(() => { 
        if(search!== ""){(async () => {
            try {
                const response = await axios.get(`${api}?client_id=${accessId}&query=${search}`)
                const { results } = response.data
                setList(results)
                return
            } catch (error) {
                console.log("請求失敗", error);
            }
        })();}       
    }, [search])

    useEffect(()=>{
        setSearch(searchParams.get("query"))
    },[searchParams])

    return (
        <div>
            這是搜尋頁面
            <input type="text" className="form-control"
                defaultValue={search}
                onKeyUp={(e) => {
                    if (e.code === "Enter") {
                        //setSearch(e.target.value)
                        setSearchParams({query :e.target.value})
                    }
                }} />
           <List list={list}></List>
        </div>
    )
}
export default AlbumSearch