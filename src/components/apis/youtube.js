import React from "react";
import axios from "axios";
// 'https://www.googleapis.com/youtube/v3' base url used in video
const KEY = "AIzaSyBNnPcGYMgsp27Z5hX4g6zZ9u59Pycw8tw"


export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : "snippet",
        maxResults : "5",
        key : KEY,

    }
})