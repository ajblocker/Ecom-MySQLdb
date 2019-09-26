var expect = require('chai').expect;
var request = require('request');

// it('returns main page', (done) => {
//     request('http://localhost:3002', (error, response, body) =>{
//         console.log('response: ', body)
//         expect(body).to.equal('Welcome');
//         done();
//     });

// });

it('returns main page status ok', (done) => {
    request('http://localhost:3002', (error, response, body) =>{
    expect(response.statusCode).to.equal(200);
    done();
    });
});

it('returns array from products api', (done) => {
    request('http://localhost:3002/api/products', (error, response, body) =>{
        let data = JSON.parse(body)
        expect(Array.isArray(data)).to.equal(true);
        done();
    });
})

it ('returns array from contacts api', (done) => {
    request('http://localhost:3002/api/contacts', (error, response, body) =>{
        let data = JSON.parse(body)
        expect(Array.isArray(data)).to.equal(true);
        done()
    });
})

it ('returns product filter', (done) => {
    request('http://localhost:3002/api/productfilter/1?category=t-shirt&price=35', (error, response, body) =>{
        let filter = JSON.parse(body)
        expect(filter).to.include({product_id: 1, product_name: "HUF Alameda Striped T-Shirt"})
        done()
    });
})
