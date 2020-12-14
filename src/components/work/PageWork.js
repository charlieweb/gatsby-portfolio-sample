import React from 'react';
import ParagraphRow from '../../templates/paragraph/paragraphRow'
import MainWrapper from '../layout/MainWrapper';
import SliceWrapper from '../slice/SliceWrapper'
import HeroSection from '../layout/HeroSection'
import './work.scss'
const PageWork = (props) => {
  const {
    title,
    field_hero_background_color,
    field_secondary_title,
    field_hero_text_color,
    relationships: {
      field_hero_background_image,
      field_industry,
      field_hero_rows,
      field_body_content
      
    }
  } = props;
  
    let heroBackgroundImage = null;
    if (field_hero_background_image) {
        heroBackgroundImage = field_hero_background_image.relationships.field_image.localFile.childImageSharp.fluid;
    }
  return (
    
    <>
    <HeroSection
    
     backgroundColor={field_hero_background_color}
     textColor={field_hero_text_color}
     backgroundImage={heroBackgroundImage}
     title={field_secondary_title || title}
     
    >
      {field_hero_rows && field_hero_rows.map(content => {
        return <ParagraphRow {...content} key={content.id} />
      })}
    </HeroSection>
    
    <MainWrapper>
      <div className="primary-content"> 
         <div className="container">
            <div className="work__categories">
              { field_industry && field_industry.map(({name }, index) =>
                    <div key ={index}> 
                      {name }
                    </div>
                  )
                }
           </div>
         </div>
        {field_body_content && field_body_content.map(row => {
          const {
             field_background_color,
             field_text_color,
             relationships: {
              field_rows,
              field_background_image
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
              key= {row.id}
              >
              {field_rows && field_rows.map( content => { 
               return <ParagraphRow key={content.id} {...content} />
            })}
          </SliceWrapper>
        })}

       
      </div>
    </MainWrapper>

    </>
  )
}


export default PageWork;