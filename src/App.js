import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import NavbarC from './components/Navbar'
import Loading from './components/Loading'
import axios from 'axios'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingTags, setIsLoadingTags] = useState(true)

  const [term, setTerm] = useState('vacation')
  const [imageTags, setImageTags] = useState([])

  const getTags = () => {
    let tagStr = []
    for (let i = 0; i < images.length; ++i) {
      let filtered = images[i].explanation
      //filtered = filtered.replace(/[^a-zA-Z0-9 ]/g, "")
      tagStr.push(images[i].explanation.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").filter((item) => item.length > 6).splice(0, (images[i].explanation.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").length - 1) / 20))
      
    }

    setImageTags(tagStr)
    console.log(tagStr)
 

   

    setIsLoadingTags(false)
    
  }

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=8`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
        getTags()
        
        console.log(data)
      })
      .catch(err => console.log(err));
  }, [term]);


  return (
    <div className = "mx-auto">
      <NavbarC/>

      { (isLoading || isLoadingTags) ? <Loading/> :
      <div style = {displayStyle} className = "mt-12">
        {images.map((image, index) => (
          <ImageCard key = {index} image = {image} tags = {imageTags[index]}/>
        ))}
      </div>
      }
    </div>
  );
}

const displayStyle = {
  backgroundColor: "white"
}


export default App;