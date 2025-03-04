import { useOutletContext } from "react-router-dom"
import List from "../component/List";

function AlbumIndex() {
    const list = useOutletContext();
    return(
        <div>這是相簿主頁
           <List list={list}></List>
        </div>
        
    )
}

export default AlbumIndex