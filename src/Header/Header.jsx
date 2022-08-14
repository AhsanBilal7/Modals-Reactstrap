import Carousel from "react-bootstrap/Carousel";
import './Header.css'
import img1 from "../images/11.jpg";
import img2 from "../images/22.jpg";
import img3 from "../images/33.jpg";
{
  /* <img src={images["img1.png"]} /> */
}
function CarouselFadeExample() {
  return (
    <Carousel fade className="mainheader" >
      <Carousel.Item>
   <div className="cimage"> <img className="d-block w-100" src={img3} alt="First slide" /> </div>
        <Carousel.Caption>
          <h3>Parallax</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="cimage"> <img className="d-block w-100" src={img1} alt="Second slide" /> </div>

        <Carousel.Caption>
          <h3>Sea View</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="cimage"> <img className="d-block w-100" src={img2} alt="Third slide" /> </div>

        <Carousel.Caption>
          <h3>Meadows</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
