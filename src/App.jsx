
import Carousel from './Carousel';
import video from './assets/video.mp4'
import car1 from './assets/car1.png'
import car2 from './assets/car2.jpg'
import car3 from './assets/car3.webp'
import car4 from './assets/car4.jpg'

function App() {
  const items = [
    { type: 'image', src: car1 },
    { type: 'image', src: car2 },
    { type: 'video', src: video },
    { type: 'image', src: car3 },
    { type: 'image', src: car4 },
  ];
  
  return (
    <>
      <div className=''>
        <Carousel items={items} />
      </div>
    </>
  )
}

export default App

