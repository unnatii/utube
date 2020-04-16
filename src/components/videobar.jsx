import React from 'react';
import Videothumbnail from './videothumbnail';

const Videobar = ({videos,handleVideoSelect}) =>{
    const videolist=videos.map((video)=> <Videothumbnail handleSelect={handleVideoSelect}
    key={video.id.videoId} video={video}/>)
    return videolist;
        
    
}

export default Videobar;