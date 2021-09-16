import React, {useState} from 'react'
import parse from 'de-noun-parser';


const ImageCard = ({image}) => {
  const tags = image.tags.replaceAll(',', '').split(' ')
  console.log(tags)
  
  
    return (
      <div style = {cardBorderStyle} className = "max-w-sm rounded-md overflow-hidden shadow-lg">
        <img src = {image.webformatURL} alt = {image.largeImageURL} style = {imageStyle} className = "w-full"/>
          <div className = "px-6 py-4">
           <div style = {titleStyle} className = "font-bold text-xl mb-2">
            
        </div>
        <ul style = {infoStyle}>
          <li style = {{color: "#31948e"}}>
            <strong>View:</strong> {image.views}
          </li>
          <li>
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {image.likes}
          </li>
          
        </ul>
      </div>

      <div style = {botStyle} className = "px-6 py-4 pt-1">
        <div>
          {tags.map((tag, index) => (
              <span style = {tagStyle} key = {index} className = "inline-block rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          ))}
        </div>
           
      </div>
      
    </div>
    )
}



const heartButtonStyle = {
  height: "2rem",
  cursor: "pointer",
  color: "black",
}

const botStyle = {
  display: "flex",
  justifyContent: "space-between"
}

const titleStyle = {
  color: "#15827b"
}

const cardBorderStyle = {
  borderColor: "#6DCBC5",
  borderWidth: "3px",
  marginBottom: "0.5rem",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "white"
}

const infoStyle = {
  color: "#6DCBC5"
}

const tagStyle = {
  color: "#368580",
  backgroundColor: "#deffe2",
  marginTop: "0.2rem", 
  marginBottom: "0.2rem", 

}

const imageStyle = {
}

export default ImageCard