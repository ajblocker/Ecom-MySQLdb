import React from 'react';

class Pricing extends React.Component {
    render() {
      return (
        <div>
           <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h2 className="pricingHeader">Subscribe</h2>
                        <hr/>
                        <p class="lead">Sign up for weekly updates on upcoming deals and free, unlimited shipping!!</p>
                        <p class="lead">Buy a plan </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 wow fadeIn" data-wow-delay="0.4s">
                        <div class="card-price">
                            <div class="card-header">Basic</div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>5-7</strong> day shipping</li>
                                    <li class="list-group-item"><strong>$5</strong> off first purchase</li>
                                    <li class="list-group-item"><strong>$5.99</strong>a month</li>
                                </ul>
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-info btn-block">Sign up</button>
                            </div>
                        </div>
                    </div>
                <div class="col-md-4 wow fadeIn" data-wow-delay="0.4s">
                  <div class="card-price">
                    <div class="card-header standard">Standard</div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>1-2</strong> day shipping</li>
                        <li class="list-group-item"><strong>$7</strong>off first purchase</li>
                        <li class="list-group-item"><strong>$10.99</strong>a month</li>
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-outline-info btn-block">Sign up</button>
                        </div>
                  </div>
                </div>
                 <div class="col-md-4 wow fadeIn" data-wow-delay="0.4s">
                    <div class="card-price">
                        <div class="card-header">Pro</div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>SAME DAY SHIPPING</strong></li>
                                <li class="list-group-item"><strong>$10</strong> off first purchase</li>
                                <li class="list-group-item"><strong>$19.99</strong>for one year</li>
                            </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-outline-info btn-block">Sign up</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      )
    }
  }

  export default Pricing;