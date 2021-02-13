import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import './video.scss'
const Video = ({ url  }) => {
  
  return (
    <div className="paragraph__video">
      <div className="video-wrapper">
        <ReactPlayer
              className='video'
              url={url}
              light
              controls
              width='100%'
              height='100%'
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 1,
                    fs: 1,
                    modestbranding: 1,
                    rel: 0,
                    playsinline: 1,
                    vq: 'highres',
                  }
                },
                vimeo: {
                  playerOptions: {
                    autoplay: 1,
                    byline: 0,
                    portrait: 0,
                    title: 0,
                  }
                }
              }}
            />
          </div>
        </div>
  );
} 
Video.propTypes = {
  video: PropTypes.string,
}
export default Video;