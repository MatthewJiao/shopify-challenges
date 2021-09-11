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
    let tagStr = ""
    let sep = "vvvvv"
    for (let i = 0; i < images.length; ++i) {
      if (i == images.length - 1) {
        sep = ""        
      } 
      tagStr += (images[i].explanation + sep)
      
    }
    console.log('tagStr')
    console.log(tagStr + "")
    //tagStr = tagStr.replaceAll('?', '')
    //tagStr = tagStr.replaceAll('=', '')
    //tagStr = tagStr.replaceAll('/', '')
    tagStr = tagStr.replace(/[^a-zA-Z0-9 ]/g, "")
    console.log(tagStr)
    //tagStr = "Pleiades star cluster, surrounded by cosmic dust clouds and shining from a mere 400 light-years away.   digg_url  'http:apod.nasa.govapodap080702.html'; digg_skin  'compact';vvvvvIf you were floating above the Earth right now, this is what you might see. Two "
    let API = "http://127.0.0.1:5000/predict/" + tagStr

    axios({
      method: "GET",
      url: API
    }).then((res) => {
      let temp = res.data
      console.log(temp + "")
      temp = temp.replaceAll("'", '')
      temp = temp.replaceAll(",", '')
      temp = temp.replaceAll("[[", '')
      temp = temp.replaceAll("]]", '')
      let newTags = temp.split('] [')
      setImageTags(newTags.map(item => (item.split(' ').splice(0, (item.split(' ').length - 1)/4))))
      console.log(imageTags + '')
      console.log(imageTags)

    })

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
          <ImageCard key = {index} image = {image} tags = {['imageTags[index]']}/>
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
