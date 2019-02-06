const express = require("express");//takes express object and puts into var express - can name it what ever you want
//server has a general term app
const server = express()//constructing server in place of apache server in PHP
//fat arrow for return function, '/' is the root of the source 
//defining route to get for super global var GET
server.get('/', (request, response)=>{
  console.log("This is the home route.");
  response.send('<h1>My Awesome Node Site!</h1>');
});
//see above the req and res, same thing, name it whatever you want.
//after the slash is setting a address location http://localhost:9000/api/user when calling request
server.get('/api/user', (req, res)=>{//Just like request to server for information!
  const user = {
    name: "Some Name",
    occupation: "Slacker",
    age: 17,
    email: "someEmail@something.com"
  };
  res.send(user);
})
//Can only have one port per server, don't use same number as front end as back end!
//Call back function second param
server.listen(9000, ()=>{//Tells what port to listen on for requests, most websites 80, https 443, should stay 1000 or above
  console.log('Server running at localhost: ', 9000);
});