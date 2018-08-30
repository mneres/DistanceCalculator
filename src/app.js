const config = require('./configurations/config');
const CustomerFileReader = require('./components/customerFileReader');

// let customers = [];
// request({
//   url: config.customerListUrl,
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//     'Accept-Charset': 'utf-8'
//   }
// }, function (err, response, customerFile){
//   if (err) {
//     // return cb(err);
//     console.log("error");
//   }
//   let customerArray = customerFile.split("\n");
//   customerArray.map(function(customerRow){
//     customerJson = JSON.parse(customerRow);
//     let customer = new Customer();
//     customer.setCustomer(customerJson);
//     customers.push(customer);
//   });
//   console.log("customers", customers);
// });

let fileReader = new CustomerFileReader(config);
fileReader.getCustomerList().then(
  function(response){
    console.log("list", response);
  }
)
