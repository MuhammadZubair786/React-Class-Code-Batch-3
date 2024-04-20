import img1 from '../assets/images/download (1).jpg'
import img2 from '../assets/images/download.jpg'
import img3 from '../assets/images/images.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel  from "react-bootstrap/Carousel";
import {Image} from 'react-bootstrap'

function Slider(){
    return(
        <div className="row tu-world">
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={img1}
              alt="tu world"
              width={1710}
              height={315}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={img2}
              alt="hydraulic pumps"
              width={1710}
              height={315}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={img3}
              alt="everything industrial"
              width={1710}
              height={315}
            />
          </Carousel.Item>
        </Carousel>
      </div>

    )
}
export default Slider