import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import NavbarC from './components/Navbar'
import Loading from './components/Loading'


function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingTags, setIsLoadingTags] = useState(true)

  const [term, setTerm] = useState('vacation')
  const [imageTags, setImageTags] = useState([])

  const getTags = () => {
    let tagStr = ""
    let sep = "<<<>>>"
    for (let i = 0; i < images.length; ++i) {
      if (i == images.length - 1) {
        sep = ""        
      } 
      tagStr += (images[i].explanation + sep)
      
    }
    tagStr = tagStr.replaceAll('?', '')
    fetch(`http://127.0.0.1:5000/predict/` + tagStr)
    .then((data) => {
      console.log('data')
    })
    console.log('jkkk')
    
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
          <ImageCard key = {index} image = {image}/>
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
