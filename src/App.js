import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import NavbarC from './components/Navbar'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('vacation')

  const objToArr = (obj) => {
    const arr = []
    for (const item in obj) {
      arr.push(item)
    }
    return arr
  }

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=8`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
        console.log(images)
      })
      .catch(err => console.log(err));
  }, [term]);


  return (
    <div className = "mx-auto">
      <NavbarC/>

      { isLoading ? <h1 className = "text-6xl text-center mx-auto mt-32">Loading ...</h1> :
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
