const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    googleId: String,
    facebookId:String
});
mongoose.model('user', userSchema);
