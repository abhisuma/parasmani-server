const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017`);
const schema = mongoose.Schema;


var questionSchema = new schema({
  title: String,
  options: {
    A: String,
    B: String,
    C: String,
    D: String,
  },
  answer:{
    type: String,
    enum: ['A','B','C','D']
  }
});

const t = mongoose.model('Questions',questionSchema);

const p = t({
  title: 'question title',
  options:{
    A: 'jfhkc',
    B: 'shdsk',
    C: 'ahsha',
    D: 'kdhf'
  },
  answer: 'A'
})

p.save();
t.find({},(error,user)=>{
  console.log(user);
})
