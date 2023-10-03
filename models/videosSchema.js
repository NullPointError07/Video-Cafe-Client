import mongoose from "mongoose";
import { Schema } from "mongoose";

const videoSchema = new Schema({
  song_title: {
    type: String,
    required: true,
  },
  singer_name: {
    type: String,
    required: true,
  },
  song_link: {
    type: String,
    required: true,
  },
  release_Date: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  lyrics: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
  song_duration: {
    type: String,
    required: true,
  },
});

const video = mongoose.model("video", videoSchema);

export default video;
