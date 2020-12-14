import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from "gatsby"
import UserTeaser from '../user/UserTeaser'
import Slider from "react-slick";
import Helmet from 'react-helmet';
import './userslide.scss';
const Userslide = props => {
  const {
    title,
  } = props
  const settings = {
      
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      centerMode: false,
      arrows: true,
      dots: false,
      slidesToScroll: 5,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    };
  return (
    
    <StaticQuery
      query={graphql`
        query {
        allusers: allUserUser(filter:{field_listing_placement:{ne:null, nin:"none"}} sort:{order:ASC fields:[field_listing_placement, field_first_name]}) {
        nodes {
        field_first_name
        field_position
        path {
          alias
        }
        relationships {
            user_picture {
               localFile {
                 childImageSharp {
                   fluid(maxWidth: 270, quality: 100) {
                     ...GatsbyImageSharpFluid_withWebp
                   }
                 }
               }
            }
         }
        }
     }
   }
      `}
      
      render={data => (
        
        <div>
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
          
          <div className='slider__wrapper'>
            <div className='container'>
            <h3>{title}</h3>
            </div>
            <Slider {...settings}>
            {data.allusers.nodes.map((user,index)=>(
            
              <UserTeaser key={ index } {...user} />
              
            ))}
            </Slider>
            <div className='container'><Link className='btn__link' to='/about/team'>See all Team members</Link></div>
            
          </div>
        </div>
      )}
    />
  )
}

Userslide.propTypes = {
  title: PropTypes.string,
}



export default Userslide
