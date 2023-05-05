const express = require('express');
const productRoute = express.Router();

const product = require('../models/Products');

//Create Product
productRoute.route('/create-product').post((req, res, next) => {
  product.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
productRoute.route('/').get((req, res, next) => {
    product.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

//Edit Product
productRoute.route('/edit-product/:id').get((req, res, next) => {
   product.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
productRoute.route('/update-product/:id').put((req, res, next) => {
  product.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Product successfully updated!')
    }
  })
})
// Delete
productRoute.route('/delete-product/:id').delete((req, res, next) => {
  product.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = productRoute;