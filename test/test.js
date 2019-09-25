var expect = require('chai').expect;
var request = require('request');

it('returns main page', (done) => {
    request('http://localhost:3006', (error, response, body) =>{
        expect(body).to.equal('Welcome');
        done();
    });

});

it('returns main page status ok', (done) => {
    request('http://localhost:3006', (error, response, body) =>{
    expect(response.statusCode).to.equal(200);
    done();
    });
});

it('returns array from products api', (done) => {
    request('http://localhost:3006/api/products', (error, response, body) =>{
        let data = JSON.parse(body)
        expect(data).to.be.an('array')
        done();
    });
})

it ('returns array from contacts api', (done) => {
    request('http://localhost:3006/api/contacts', (error, response, body) =>{
        let contacts = JSON.parse(body)
        expect(contacts).to.include({contact_id: 2, contact_name: "Mac Smith"})
        done()
    });
})

it ('returns product filter', (done) => {
    request('http://localhost:3006/api/productfilter/:query', (error, response, body) =>{
        let filter = JSON.parse(body)
        expect(filter).to.include({product_id: 1, product_name: "HUF Alameda Striped T-Shirt"})
        done()
    });
})
