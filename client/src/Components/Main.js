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
                src="http://www.pacs-apparrel.com/media/catalog/product/cache/1/image/e8aa4bfade2021a5ce50180a6b98b3df/D/i/Diamond_Supply_Co_Mens_Multi_Pacsun_90S_Colorblock_Denim_Jackets..jpg"
                alt="First slide"
                width="100"
                height="700"
                />
                <Carousel.Caption>
                <h3>Shop Men's</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.asos-media.com/products/adidas-originals-mini-trefoil-logo-bodysuit-black/10501540-1-black?$XXL$&wid=513&fit=constrain"
                alt="Third slide"
                width="100"
                height="700"
                />

                <Carousel.Caption>
                <h3>Shop Womens</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://houseofheat.co/app/uploads/2019/05/sneaker-culture-is-eating-itself-alive-min-1200x1200.jpg"
                alt="Third slide"
                width="100"
                height="700"
                />

                <Carousel.Caption>
                <h3>Shop Sneakers</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
        
      )
    }
  }

  export default Main;

  