import React from 'react'
import parse from 'de-noun-parser';


const ImageCard = ({image}) => {
  const tags = ["test1", "test1", "test3"]
  
  

    return (
        <div className = "max-w-sm rounded overflow-hidden shadow-lg">
      <img src = {image.hdurl} alt = "" className = "w-full"/>
      <div className = "px-6 py-4">
        <div className = "font-bold text-purple-500 text-xl mb-2">
          {image.title}
        </div>
        <ul>
          <li>
            <strong>Date:</strong> {image.date}
          </li>
          <li>
            <strong>Description:</strong> {image.date}
          </li>
          <li>
            <strong>Likes:</strong> {image.date}
          </li>
        </ul>
      </div>

      <div className = "px-6 py-4">
        
        {tags.map((tag, index) => (
            <span key = {index} className = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
        
      </div>
      
    </div>
    )
}


export default ImageCard