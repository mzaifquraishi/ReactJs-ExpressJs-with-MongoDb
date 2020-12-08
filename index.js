//  index.js

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/local`,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once("open",function(){
  console.log('Connection Open \n');
}).on("error",function(e){
  console.log('Error : ',e);
})

const bodyParser = require('body-parser');
const { response } = require('express');
require('./models/Product');
const Product = mongoose.model('Products');

const app = express();


app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT} \n `+process.env.MONGODB_URI)
});

