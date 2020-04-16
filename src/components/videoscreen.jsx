import React from 'react';



const Videoscreen = ({video}) => {
    if(!video) return <div style={{height:'500px' ,
     backgroundColor:'black',color:'white', margin:'20px'}}>
        loading..</div>

const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`;

    return (
<div style={{height:'700px' ,margin:'20px'}}>
<iframe  width='100%' height='500px'title="videoplayer" src={videosrc} ></iframe>
    <h2>{video.snippet.title}</h2>
<h5><em>{video.snippet.channelTitle}</em></h5>
    <p>{video.snippet.description}</p>
</div>
    );
}

export default Videoscreen;

