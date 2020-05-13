import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    author:"",
    comment:"",
    date:new Date("01-11-1997"),
    tags:[{
        type: String
    }],
    during:0
});

const Video = mongoose.model("Video", videoSchema);

export default Video;