const axios = require('axios')
const data = require('./data.json')

const url = "http://localhost:4000"

data.forEach((dat) => {
  axios.post(url+"/addQuestion",dat).then((val) => {
    console.log("Success")
  }).catch((val) => {
    console.log("Faliure")
  })
})
