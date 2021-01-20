import React from 'react';
import ParagraphRow from '../../templates/paragraph/paragraphRow'
import MainWrapper from '../layout/MainWrapper';
import SliceWrapper from '../slice/SliceWrapper';
import './page.scss';
import Helmet from 'react-helmet';
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
const PageFull = (props) => {
  const {
    
    relationships: {
     
      field_hero_rows,
      field_body_content
      
    }
  } = props;
  
  return (
    
    <>
    <Helmet>
            <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/solid.min.css"
            />
    </Helmet>
    <div className="top__content">
      <div className="hero__wrapper">
       {field_hero_rows && field_hero_rows.map((content, index) => {
        return <ParagraphRow {...content} key={index} />
      })}
      </div>
    </div>
    
    <MainWrapper>
      <div className="primary-content">
       
        {field_body_content && field_body_content.map((row, index) => {
          const {
             field_background_color,
             field_text_color,
             relationships: {
              field_background_image,
              field_rows 
             }
          } = row;
          let backgroundImage = null;
             if (field_background_image) {
              backgroundImage = field_background_image.relationships.field_image.localFile.childImageSharp.fluid;
             }
          return<SliceWrapper 
              backgroundColor={field_background_color}
              backgroundImage={backgroundImage}
              textColor={field_text_color}
              key= {index}
              >
              {field_rows && field_rows.map( (content, index) => { 
               return <ParagraphRow key={index} {...content} />
            })}
          </SliceWrapper>
        })}
       
      </div>
    </MainWrapper>

    </>
  )
}


export default PageFull;