// /routes/productRoutes.js
const { response } = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Products');

module.exports = (app) => {

    app.get(`/`, async (req, res) => {
        response.send('hello!!!')
      });
    
    
  app.get(`/api/product`, async (req, res) => {
    try{
      let products = await Product.find();  
    return res.status(200).send(products);
    }catch(err){
      return res.status(200).send(err.message);
    }
  });

  app.post(`/api/product`, async (req, res) => {
    try{
      let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  }catch(err){
      res.status(err.response.status)
      return res.send(err.message);
    }
  })

  app.put(`/api/product/:id`, async (req, res) => {
  try{  const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })
  }catch(err){
    res.status(error.response.status)
    return res.send(error.message);
  }

  });

  app.delete(`/api/product/:id`, async (req, res) => {
   try{ const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })
  }catch(err){
    res.status(error.response.status)
    return res.send(error.message);
  }

  })

}