import React, {useState} from 'react'
import ReactLoading from 'react-loading';



const Loading = () => {
    const type = "cylon"
    const color = "#97bd4e"
    return (
        <div style = {loadingStyle}>
            <ReactLoading type={type} color={color} height={667} width={375} />
        
        </div>
      
    )
}

const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
}





export default Loading