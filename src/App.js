import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import NavbarC from './components/Navbar'
import Loading from './components/Loading'
import axios from 'axios'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingTags, setIsLoadingTags] = useState(true)

  const [term, setTerm] = useState('kitten')
  const [imageTags, setImageTags] = useState([])

  const removeVideos = (data) => {
    let lst = []
    for (let i = 0; i < data.length; ++i) {
      if (data[i].media_type != "video") {
        lst.push(data[i])
      }
    }

    return lst
  }

  var getTags = (images) => {
    var tagStr = []
    for (let i = 0; i < images.length; ++i) {
      if (images.media_type == "video") continue
      let filtered = images[i].explanation
      filtered = filtered.replace(/[^a-zA-Z0-9 ]/g, "")
      let lst = filtered.split(" ").filter((item) => item.length > 6)
      let shuffled = lst.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, (shuffled.length - 1)/5);

      tagStr.push(selected)
    }

    setImageTags(tagStr) 
    setIsLoadingTags(false)
    
  }

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=50`)
      .then(res => res.json())
      .then(data => {
        setImages(removeVideos(data));
        setIsLoading(false);
        getTags(data)
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