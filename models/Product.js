const mongoose = require('mongoose');
const {Schema} = mongoose;

const Products = new Schema({
     _id: Schema.Types.ObjectId,
    id: { type: Number},
    name: { type: String},
    price: { type: Number},
    salePrice: { type: Number},
    discount: { type: Number},
    pictures: [String],
    shortDetails: { type: String},
    description: { type: String},
    stock: { type: Number},
    new: { type: Boolean},
    sale: { type: Boolean},
    category: { type: String},
    colors: [String],
    size: [String],
    tags: [String],
    rating: { type: Number},
    variants: { type: Schema.Types.Mixed}
})

mongoose.model('Products', Products);