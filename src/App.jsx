
import Carousel from './Carousel';
import vid3 from './assets/vid3.mp4'

function App() {
  const items = [
    { type: 'image', src: 'https://via.placeholder.com/800x400?text=Image+1' },
    { type: 'video', src: vid3 },
    { type: 'image', src: 'https://via.placeholder.com/800x400?text=Image+2' },
    { type: 'video', src: vid3 },
    { type: 'image', src: 'https://via.placeholder.com/800x400?text=Image+3' },
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

