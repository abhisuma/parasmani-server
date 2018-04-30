# parasmani-server

.env file consists database engine configurations. you can get a free hosting of mongodb on <https://mlab.com> .

Run the following commands in the command line

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

The server will be hosted on localhost:4000 .

## To add questions

Rewrite your data to data.json file.  
Then open /utils/addData.js, and Rewrite the url variable with the url of the server.

run  `npm install`
then run `node addData.js`

Data should be array of object in the following format :

```json
{
  "question":"ENTER QUESTION HERE",
  "difficulty":"A",
  "language":"English",
  "subject":"Math",
  "correct":1,
  "opt1":"HERE",
  "opt2":"HERE",
  "opt3":"HERE",
  "opt4":"HERE",
}
```
