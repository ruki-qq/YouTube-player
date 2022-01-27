import { useState } from 'react'
import youtubeData from '../api/youtubeData'

const useVideos = (inputText) => {
    const [videos, setVideos] = useState(null);
    const getContent = async (event, order) => {
        event.preventDefault();
        const res = await youtubeData.get("/search", {
          params: {
            part: "id,snippet",
            q: inputText,
            order: order,
          },
        });
        console.log(inputText);
        console.log(order)
        const list = [];
        res.data.items.forEach((element) => {
          list.push({
            id: element.id.videoId,
            thumb: element.snippet.thumbnails.medium.url,
            title: element.snippet.title,
            description: element.snippet.description,
            channel: element.snippet.channelTitle,
          });
        });
        setVideos(list);
        
      };
    return [videos, getContent];
}

export default useVideos;