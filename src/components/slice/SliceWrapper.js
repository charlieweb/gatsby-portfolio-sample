import React from 'react';

const SliceWrapper = ({backgroundColor,textColor, children}) => {
  return (
    <section
     data-background-color={backgroundColor}
     data-text-color={textColor}
     >
      {children}
      </section>
  );
};

export default SliceWrapper;