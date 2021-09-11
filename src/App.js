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
    let sep = "<<<>>>"
    for (let i = 0; i < images.length; ++i) {
      if (i == images.length - 1) {
        sep = ""        
      } 
      tagStr += (images[i].explanation + sep)
      
    }
    tagStr = tagStr.replaceAll('?', '')
    console.log(tagStr)
    let API = `http://127.0.0.1:5000/predict/I this dramatic artist's vision, debris along the outer reaches of a planet forming disk orbits in the glare of a distant sun. But inset are actual images of such disks around two nearby stars - AU Microscopii (top left; edge-on) and HD107146 (right: face-on) - as seen by the Hubble Space Telescope. Combined with infrared images from the Spitzer Space Telescope that show debris disks around known planet bearing stars, the data provide the first direct link between extrasolar disks and planets, suggesting a scenario where evolving planets scatter debris produced by collisions into giant disks. In time, the dusty disks may dwindle and become like our own Solar System's comet reservoir, the Kuiper Belt.   News: The answer to Lewin's Challenge APOD can be found here.<<<>>>Why isn't spiral galaxy M66 symmetric  Usually density waves of gas, dust, and newly formed stars circle a spiral galaxy's center and create a nearly symmetric galaxy.  The differences between M66's spiral arms and the apparent displacement of its nucleus are all likely caused by the tidal gravitational pull of nearby galaxy neighbor M65. Spiral galaxy M66, pictured above, spans about 100,000 light years, lies about 35 million light years distant, and is the largest galaxy in a group including M65 and NGC 3628 known as the Leo Triplet.  Like many spiral galaxies, the long and intricate dust lanes of M66 are seen intertwined with the bright stars and nebulas that light up the spiral arms.<<<>>>Above is a microwave image of the entire sky. The plane of our galaxy runs horizontally through the center. This historic all-sky map is based on the first two years of data from NASA's COsmic Background Explorer (COBE) satellite. After computer processing to remove contributions from nearby objects and the effects of the earth's motion, the map shows temperature variations in the early Universe as red "spots". These spots are the oldest, most distant structures known. As our Universe expanded and cooled, conglomerations of mass formed. The COBE images confirm that only a million years after the big-bang - which occurred roughly 15 billion years ago - parts of the universe were visibly hotter than other parts. By studying the size and distribution of the spots found with COBE and future missions, astronomers hope to learn what matter and processes caused the spots to form - and hence determine the composition, density, and future of our Universe.<<<>>>Four years ago, Comet Hale-Bopp was discovered out near Jupiter falling toward the inner Solar System.   Two years ago, it provided spectacular pictures as it neared its closest approach to the Sun.  Still today, spectacular pictures of the brightest comet of the 1990s are surfacing.  Above, Comet Hale-Bopp was photographed in 1997 behind the Superstition Mountains in Arizona.  Clearly visible are the comets white dust tail that shines by reflected sunlight, and the blue ion tail that shines by glowing gas.  Currently, there are several comets visible from the proper location with a small telescope.  A comet visible to the unaided eye appears about once every five years.<<<>>>What's happening over the water  Pictured here is one of the better images yet recorded of a waterspout, a type of tornado that occurs over water.  Waterspouts are spinning columns of rising moist air that typically form over warm water. Waterspouts can be as dangerous as tornadoes and can feature wind speeds over 200 kilometers per hour.  Some waterspouts form away from thunderstorms and even during relatively fair weather.  Waterspouts may be relatively transparent and initially visible only by an unusual pattern they create on the water.  The featured image was taken in 2013 July near Tampa Bay, Florida. The Atlantic Ocean off the coast of Florida is arguably the most active area in the world for waterspouts, with hundreds forming each year.    Experts Debate: How will humanity first discover extraterrestrial life<<<>>>Why would the dome of a telescopic observatory appear translucent red  As one of the telescopes of the Etscorn Observatory of New Mexico Tech waited to inspect small portions of the night sky, playful observers decided to make this unusual image.  Tricks needed to create this seemingly impossible shot included opening the observatory dome slightly, using a red light to illuminate the inside of the dome, spinning the dome, and using a long exposure.  The open slit in the dome then allowed the camera to incrementally image the inside of the observatory, including the telescope.  A fortuitous break in the clouds allowed the stars of the Big Dipper asterism to shine through.<<<>>>Aloha and welcome to a breathtaking skyscape. The dreamlike panoramic view looks out from the 4,200 meter volcanic summit of Mauna Kea, Hawai'i, across a layer of clouds toward a starry night sky and the rising Milky Way. Anchoring the scene on the far left is the dome of the Canada-France-Hawaii Telescope (CFHT), with north star Polaris shining beyond the dome to the right. Farther right, headed by bright star Deneb, the Northern Cross asterism is embedded along the plane of the Milky Way as it peeks above the horizon. Both Northern Cross and brilliant white Vega hang over a foreground grouping of cinder cones. Near the center are the reddish nebulae, stars and dust clouds of the central Milky Way. Below, illumination from the city lights of Hilo creates an eerie, greenish glow in the clouds. Red supergiant star Antares shines above the Milky Way's central bulge while bright Alpha Centauri lies still farther right, along the dusty galactic plane. Finally, at the far right is the large Gemini North Observatory. The compact group of stars known as the Southern Cross is just left of the telescope dome. Need some help identifying the stars  Just slide your cursor over the picture, or download this smaller, labeled panorama.<<<>>>Almost lost in this cosmic jumble of stars, gas and dust is a faint but definite blue arc -- a stream of young stars whose formation was probably triggered as a small dwarf galaxy was torn apart approaching the giant elliptical galaxy Centaurus A. The 2,000 light-year long arc is revealed in the upper right corner of this processed color digital image, while the dense central region of Centaurus A is near the bottom. Star clusters that make up the blue arc are likely strung out along the incoming trajectory of the small galaxy and are estimated to be only 200-400 million years old. The remarkable result suggests that astronomers have identified a spectacular example of a kind of galactic cannibalism in progress, a process which is believed to contribute to the formation and evolution of large galaxies, including our own Milky Way. Over time, stars and star clusters in this stream should eventually disperse and merge with tumultuous Centaurus A.  The image data was recorded with the four meter Blanco telescope at Cerro Tololo Inter-American Observatory.
`

    axios({
      method: "GET",
      url: API
    }).then((res) => console.log(res.data))
    
    
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
