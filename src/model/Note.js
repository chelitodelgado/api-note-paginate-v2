const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const noteSchema =  Schema({

    title       : String,
    description : String,
    by          : String

});

noteSchema.plugin(mongoosePaginate);
module.exports = model('Note', noteSchema);