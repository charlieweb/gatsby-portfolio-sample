import React from 'react';
import { graphql } from 'gatsby';

import Video from '../../components/video/video';


export const ParagraphVideo = ({ node }) => {
  
  const videosource = node.relationships?.field_video?.field_media_oembed_video;
  
    return (
      <Video
        url = {videosource }
      />
    );
}


export const fragment = graphql`

  fragment paragraphVideo on paragraph__video {
    id
    relationships {
      field_video {
        field_media_oembed_video
      }
    }
  }
`