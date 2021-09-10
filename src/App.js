import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('vacation')

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=8`)
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setIsLoading(false);
        console.log(data)
      })
      .catch(err => console.log(err));
  }, [term]);


  return (
    <div className = "container mx-auto">
      { isLoading ? <h1 className = "text-6xl text-center mx-auto mt-32">Loading ...</h1> :
      <div className = "grid grid-cols-3">
        {images.map((image, index) => (
          <ImageCard key = {index} image = {image}/>
        ))}
      </div>
      }
    </div>
  );
}

export default App;
