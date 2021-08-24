import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/Video/VideoList/VideoList";
import VideoDetail from "./components/Video/VideoDetail/VideoDetail";
import useVideos from "./components/hooks/useVideos";

function App(){

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");
  
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])
  
  return (
    <div className="ui container" style={{marginTop: "15px"}}>
      <SearchBar onTermSubmit={search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            {/* video => setSelectedVideo(video) is equivalent to setSelectedVideo */}
            <VideoList keys={videos.map(video => video.id.videoId)} videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
