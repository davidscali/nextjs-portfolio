import React, { useState } from 'react';



function VideoPlayer() {
    // const [showPoster, setShowPoster] = useState(true); 
    // const handlePlay = () => {
    //     setShowPoster(false); // Hide the poster when the video starts playing
    // };
//
  return (
    <div>
      <iframe
        title="http server Video 1"
        src="https://vnogecem2sozqdxb.public.blob.vercel-storage.com/VidoePlayerBlog/Inventory_System-fJtQr9ScgWgwtZDvwmT89U519zcN9h.mp4"
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
        src="https://vnogecem2sozqdxb.public.blob.vercel-storage.com/VidoePlayerBlog/dama_final-2PVKFHbLhRbi2U0vwkBowBxWkXZGOj.mp4"
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
