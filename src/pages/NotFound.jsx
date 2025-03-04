import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function NotFound() {
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },2000)       
    },[navigate])

    return(
        <>這是不存在的頁面，在2秒後會自動跳回主頁</>
    )
}

export default NotFound