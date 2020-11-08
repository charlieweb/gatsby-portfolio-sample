import React from 'react';
import ParagraphRow from '../../templates/paragraph/paragraphRow'
import MainWrapper from '../layout/MainWrapper';
import SliceWrapper from '../slice/SliceWrapper'
import HeroSection from '../layout/HeroSection'
const PageFull = (props) => {
  const {
    isFront,
    title,
    field_secondary_title,
    field_hero_background_color,
    field_hero_text_color,
    relationships: {
      field_hero_rows,
      field_body_content
      
    }
  } = props;
  return (
    <>
    <HeroSection
     backgroundColor={field_hero_background_color}
     textColor={field_hero_text_color}
     title={field_secondary_title || title}
     breadcrumb={isFront ? null : <li>{title}</li>}
    >
      {field_hero_rows && field_hero_rows.map(content => {
        return <ParagraphRow {...content} key={content.id} />
      })}
    </HeroSection>
    <MainWrapper>
      <div className="primary-content">
        {field_body_content && field_body_content.map(row => {
          const {
             field_background_color,
             field_text_color,
             relationships: {
              field_rows 
             }
          } = row;
          return !field_rows ? null : field_rows.map(content => {
            return <SliceWrapper
              backgroundColor={field_background_color}
              textColor={field_text_color}
              key={content.id}>
                <ParagraphRow {...content} />
              </SliceWrapper>
          })
        })}
      </div>
    </MainWrapper>

    </>
  )
}


export default PageFull;