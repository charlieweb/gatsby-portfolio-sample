import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import JobTeaser from '../job/JobTeaser';
import Slider from "react-slick";
import Helmet from 'react-helmet';

export default () => {
  const data = useStaticQuery(graphql`
   query {
    allpost: allNodeJobPosting {
      nodes {
        title
        body {
          processed
        }
        path {
          alias
        }
      }
     }
   }
  `)
  const jobs = data.allpost.nodes;
   const settings = {
      
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      centerMode: false,
      arrows: true,
      dots: false,
      slidesToScroll: 4,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
    };
  return(
    <>
    <Helmet>
            <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
    </Helmet>
    <div className="slide__job">
      <h3>Current Openings</h3>
      <Slider {...settings}>
      {jobs.map((job,index)=>(
        
      <JobTeaser key={ index } {...job} />
                
      ))}
      </Slider>
    </div>
    </>
  )
}



