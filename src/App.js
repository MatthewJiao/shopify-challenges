import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
import NavbarC from './components/NavbarC'
import Loading from './components/Loading'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('kitten')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
        console.log(data)
      })
      .catch(err => console.log(err));
  }, [term]);


  return (
    <div className = "mx-auto">
      <NavbarC/>
      <ImageSearch searchText = {(text) => setTerm(text)}/>
      {!isLoading && images.length === 0 ? <h1 className = "text-5xl text-center mx-auto mt-32">No Images Found</h1>: '' }
      { isLoading ? <Loading/> :
      <div className = "grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageCard key = {index} image = {image}/>
        ))}
      </div>
      }
    </div>
  );
}

export default App;
