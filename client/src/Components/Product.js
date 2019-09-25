import React from 'react';

const Product = (props) => (
    <div className="card" style={{width: '18rem'}}>
    <div className="work-img">
        <a href="ShopMens"><img className="card-img-top img-fluid" src={props.product.image} alt="pacsun huf shirt"/></a>
        <div className="img-overlay"></div>
    </div>
    <div className="card-body">
        <p>{props.product.name}</p>
        <ul className="card-text">
            <li>{props.product.price}</li>
            <li>{props.product.description}</li>
        </ul>
    </div>
</div>
)

export default Product;