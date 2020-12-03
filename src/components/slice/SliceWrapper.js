import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const SliceWrapper = ({backgroundColor,textColor, backgroundImage, children}) => {
 return (backgroundImage ?
        <BackgroundImage
            Tag={`section`}
            fluid={backgroundImage}
            data-background-color={backgroundColor}
            data-text-color={textColor}
            data-has-background-image={typeof backgroundImage !== 'undefined'}
            className='background'
            
        >
          {children}
        </BackgroundImage>
    :
        <section
            data-background-color={backgroundColor}
            data-text-color={textColor}
        >
            {children}
        </section>
    );
};

export default SliceWrapper;