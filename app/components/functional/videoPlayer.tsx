import React, { useState } from 'react';
import Logos from '@university/Dama_logo.png';


function VideoPlayer() {
    // const [showPoster, setShowPoster] = useState(true); 
    // const handlePlay = () => {
    //     setShowPoster(false); // Hide the poster when the video starts playing
    // };

  return (
    <div>
      <iframe
        title="http server Video 1"
        src="http://127.0.0.1:8080/university/Inventory_System.mp4"
        width="670"
        height="490"
        className='rounded-xl mt-9'
        draggable={false}
        allow="fullscreen; loop"
        // onLoad={() => {
        //     const iframe = document.querySelector('iframe');
        //     if (iframe) {
        //       iframe.contentWindow.postMessage('play', '*');
        //     } else {
        //       console.error('Failed to find iframe element.');
        //     }
        //   }}
      ></iframe>

        <iframe
        title="http server Video 2"
        src="http://127.0.0.1:8080/university/dama_final.mp4"
        width="670"
        height="490"
        className='rounded-xl mt-9'
        draggable={false}
        allow="fullscreen; mute"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
