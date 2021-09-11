import React from 'react'
import parse from 'de-noun-parser';


const ImageCard = ({image}) => {
  const tags = ["test1", "test1", "test3"]
  const description = image.explanation.split('.')[0]
  

    return (
        <div style = {cardBorderStyle} className = "max-w-sm rounded-md overflow-hidden shadow-lg">
      <img src = {image.url} alt = {image.hdurl} style = {imageStyle} className = "w-full"/>
      <div className = "px-6 py-4">
        <div style = {titleStyle} className = "font-bold text-xl mb-2">
          {image.title}
        </div>
        <ul style = {infoStyle}>
          <li>
            <strong>Date:</strong> {image.date}
          </li>
          <li>
            <strong>Description:</strong> {description}.
          </li>
          
        </ul>
      </div>

      <div className = "px-6 py-4">
        
        {tags.map((tag, index) => (
            <span style = {tagStyle} key = {index} className = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
        
      </div>
      
    </div>
    )
}


const titleStyle = {
  color: "#618c40"
}

const cardBorderStyle = {
  borderColor: "#b5c98a",
  borderWidth: "2px",
  marginBottom: "0.5rem",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "white"
}

const infoStyle = {
  color: "#b5c98a"
}

const tagStyle = {
  color: "#618c40"
}

const imageStyle = {
}

export default ImageCard