import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Helmet from 'react-helmet';

const ContribList = ({ heading, content }) => {
  const settings = {
      
      infinite: false,
      speed: 500,
      slidesToShow: 3.5,
      centerMode: false,
      arrows: true,
      dots: false,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
    };
  return(
    <>
     <div className="contrib__list">
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
       <h3>{heading}</h3>
       <Slider {...settings}>
       {content}
       </Slider>
     </div>
    </>
  );

}


ContribList.propTypes = {
  content: PropTypes.object,
}

export default ContribList;