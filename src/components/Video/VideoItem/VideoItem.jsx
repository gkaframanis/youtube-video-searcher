import "./VideoItem.css";

const VideoItem = ({video, onVideoSelect}) => {

    const onVideoItemClick = () => {
        onVideoSelect(video);
    };

    return (
        <div className="item video-item" onClick={onVideoItemClick}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;