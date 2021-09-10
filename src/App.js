import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}q=${term}&ima
    ge_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <div className = "container mx-auto">
      <div className = "grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key = {image.id} image = {image}/>
        ))}
      </div>
    </div>
  );
}

export default App;
