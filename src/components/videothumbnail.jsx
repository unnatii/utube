import React from 'react';


const Videothumbnail = ({video,handleSelect}) => {
   return (
       <div style={{height:'130px',width:'350px',backgroundColor:'#F0F0F0',margin:'10px 0 0 0'}}
       onClick={()=>handleSelect(video) }>
           <img align='left' style={{margin:'20px 0 10px 10px'}}
           alt='' src={video.snippet.thumbnails.default.url}/>
   <p style={{margin:'20px 0 0 0'}}>{video.snippet.title}</p>
       </div>
   )
}

export default Videothumbnail