const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
    Tilte:{
        type:String,
        required:true,
        unique:true,
        minLenght:5
    },
    content:{
        type:String,
        required:true,
        minLength:50
    },
    author:{
        type:String,
        required:true
    },
    tages:{
        type:[String],
        required:false
    },
    category:{
        type:String,
        default:"General"
    },
    likes:{
        type:[String],
        required:false
    },
    comments:{
        username:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        },
        commentedAt:{
            type:Date,
            default:Date.now
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date
    }

})

module.exports = mongoose.model("BlogPost",BlogPostSchema);