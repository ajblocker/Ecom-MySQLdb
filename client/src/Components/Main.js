import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Main extends React.Component {
    render() {
      return (
          <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.pacsun.com/on/demandware.static/-/Sites-pacsun-Library/default/dw33a97d3c/2016/pacsun-denim/desktop/slide2.jpg"
                alt="First slide"
                width="100"
                height="700"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://couponash.com/thumbs/coupons/coupon_3afc7d5ac8869f65c4a042908a4a51d4.jpg"
                alt="Third slide"
                width="100"
                height="700"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/iwewfLP5IoU/maxresdefault.jpg"
                alt="Third slide"
                width="100"
                height="700"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        
      )
    }
  }

  export default Main;

  