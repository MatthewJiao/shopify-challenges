import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import NavbarC from './components/Navbar'
import Loading from './components/Loading'
import axios from 'axios'
import "./App.css"

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingTags, setIsLoadingTags] = useState(true)

  const [term, setTerm] = useState('vacation')
  const [imageTags, setImageTags] = useState([])
  const imageCount = 8

  const removeVideos = (data) => {
    let lst = []
    for (let i = 0; i < data.length; ++i) {
      if (data[i].media_type != "video") {
        lst.push(data[i])
      }
    }

    return lst
  }

  const getMix = (items) => {
    // make sure keywords are unique, shuffle, select
    let uniq = [...new Set(items)];
    let shuffled = uniq.sort(() => 0.5 - Math.random())
    let selected = shuffled.slice(0, (shuffled.length - 1) / 3);
    return selected
  }

  const getTags = (images) => {
    let tagStr = ""
    let sep = "vvvvv"
    for (let i = 0; i < images.length; ++i) {
      if (i == images.length - 1) {
        sep = ""        
      } 
      tagStr += (images[i].explanation + sep)
      
    }

    tagStr = tagStr.replace(/[^a-zA-Z0-9 ]/g, "")
    //console.log(tagStr)

    // local api path for testing
    let LOCAL_API_PATH = 'http://127.0.0.1:5000'

    // live api path
    let LIVE_API_PATH = process.env.REACT_APP_LIVE_KEYWORD_API_PATH

    // endpoint route
    let route = '/predict'

    let API_ENDPOINT = LIVE_API_PATH + route

    axios({
      method: "POST",
      data: {
        "tagStr": tagStr
      },
      url: API_ENDPOINT
    }).then((res) => {
      let temp = res.data
      temp = temp.replaceAll("'", '')
      temp = temp.replaceAll(",", '')
      temp = temp.replaceAll("[[", '')
      temp = temp.replaceAll("]]", '')
      let newTags = temp.split('] [')
      setImageTags(newTags.map(item => (getMix(item.split(' ')))))
      //console.log(newTags)
      setIsLoadingTags(false)

    })

    
  }

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${imageCount}`)
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
}


export default App;