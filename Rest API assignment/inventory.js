var mongoose = require('mongoose');

var inventory = mongoose.model('inventory', {
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

module.exports = inventory;