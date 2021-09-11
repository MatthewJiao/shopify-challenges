import React, {useState} from 'react'
import parse from 'de-noun-parser';
import { BsHeart } from 'react-icons/bs';
import { IconContext } from "react-icons";


const ImageCard = ({image}) => {
  const tags = ["test1", "test1", "test3"]
  const description = image.explanation.split('.')[0]
  const [isLike, setIstLike] = useState(false)

    return (
        <div style = {cardBorderStyle} className = "max-w-sm rounded-md overflow-hidden shadow-lg">
      <img src = {image.url} alt = {image.hdurl} style = {imageStyle} className = "w-full"/>
      <div className = "px-6 py-4">
        <div style = {titleStyle} className = "font-bold text-xl mb-2">
          {image.title}
        </div>
        <ul style = {infoStyle}>
          <li style = {{color: "#8ca35a"}}>
            <strong>Date:</strong> {image.date}
          </li>
          <li>
            <strong>Description:</strong> {description}.
          </li>
          
        </ul>
      </div>

      <div style = {botStyle} className = "px-6 py-4 pt-1">
        <div>
          {tags.map((tag, index) => (
              <span style = {tagStyle} key = {index} className = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #{tag}
            </span>
          ))}
        </div>
        <button style = {heartButtonStyle}>

          <BsHeart style = {heartStyle} />   

        </button>     
      </div>
      
    </div>
    )
}

const heartStyle = {
fill: "red"
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