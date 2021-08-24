import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/Video/VideoList/VideoList";
import VideoDetail from "./components/Video/VideoDetail/VideoDetail";
import youtube from "./components/API/YoutubeApi";


function App(){

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  useEffect(() => {
    onTermSubmit("buildings");
  }, []);


  const onTermSubmit = async term => {
    const response = await youtube.get(`/search`, {
      params: {q: term}
    });
  
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };


  return (
    <div className="ui container" style={{marginTop: "15px"}}>
      <SearchBar onTermSubmit={onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList keys={videos.map(video => video.id.videoId)} videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
