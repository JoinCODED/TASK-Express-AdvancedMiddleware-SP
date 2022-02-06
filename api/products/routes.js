const express = require('express');

const {
  getProducts,
  productCreate,
  productDelete,
  productUpdate,
} = require('./controllers');

const router = express.Router();

router.get('/', getProducts);
router.post('/', productCreate);
router.delete('/:productId', productDelete);
router.put('/:productId', productUpdate);

module.exports = router;
