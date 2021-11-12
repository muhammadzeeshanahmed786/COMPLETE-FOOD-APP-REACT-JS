import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../image/image1.jpg'
import image2 from '../image/image2.jpg'
import image3 from '../image/image3.jpg'
import SliderText from "./Slider-text"
function CarouselImage(){
  return(
    <Carousel style={{width:"100%",height:"450px"}}>
    <Carousel.Item style={{width:"100%",height:"450px"}}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
        style={{width:"100px"}}
      />
      <Carousel.Caption >
       
      <SliderText/>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{width:"100%",height:"450px"}}>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
        style={{width:"100px"}}

      />
  
      <Carousel.Caption>
        
      <SliderText/>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item  style={{width:"100%",height:"450px"}}>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"

      />
  
      <Carousel.Caption>
        {/* <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      <SliderText/>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselImage