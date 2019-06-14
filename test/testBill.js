var chai = require('chai');
var chaiHttp = require('chai-http');

process.env.NODE_ENV = 'test';
var server = require('../server');

var db = require('../models');
var expect = chai.expect;


// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

const users = [
  {
    firstName: 'Bobby',
    lastName: 'Jones',
    email: 'Bobby@email.com',
    phoneNumber: '206999999'
  },
  {
    firstName: 'Sally',
    lastName: 'Smite',
    email: 'Sally@email.com',
    phoneNumber: '4253828183'
  }
];

const bills = [
  {
    title: 'water',
    Company: 'PSE',
    Amount: 300.5,
    BillDue: Date.now(),
    BillPaid: false,
  },
  {
    title: 'internet',
    Company: 'Comcast',
    Amount: 40.83,
    BillDue: Date.now(),
    BillPaid: false,
  }
];

describe('GET /api/bills', function () {
  beforeEach(function () {
    request = chai.request(server);
  });

  it('should list two bills', function (done) {
    db.Bill.bulkCreate(bills)
      .then(function () {
        request.get('/api/bills').end(function (err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an('array')
            .that.has.lengthOf(2);

          expect(responseBody[0])
            .to.be.an('object')
            .that.includes({ title: 'water', Company: 'PSE' });

          expect(responseBody[1])
            .to.be.an('object')
            .that.includes({ title: 'internet', Company: 'Comcast' });

          done();
        });
      });
  });
});


describe('POST /api/bills/:billId', function () {
  beforeEach(function () {
    request = chai.request(server);
    // return db.sequelize.sync({ force: true });
  });

  // after(() => {
  //   sequelize.close();
  // });

  it('should show bill-user connections', function (done) {
    const reqBody ={
      'email': 'Sally@email.com',
      'billId': 1,
      'percentOwed': 34
    };
    db.Bill.bulkCreate(bills)
      // .then(db.User.bulkCreate(users))
      .then(function () {
        // request.post('/api/users/addbill')
        //   .send(reqBody)
        request.get('/api/bills')
          .end(function (err, res) {
            var responseStatus = res.status;
            var responseBody = res.body;
            console.log(responseBody);
            expect(err).to.be.null;

            expect(responseStatus).to.equal(200);

            // expect(responseBody)
            //   .to.be.an('array')
            //   .that.has.lengthOf(2);

            // expect(responseBody[0])
            //   .to.be.an('object')
            //   .that.includes({ title: 'water', Company: 'PSE' });

            // expect(responseBody[1])
            //   .to.be.an('object')
            //   .that.includes({ title: 'internet', Company: 'Comcast' });


            done();
          });
      });
  });
});
