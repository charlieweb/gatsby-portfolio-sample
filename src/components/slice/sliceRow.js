import React from 'react'

const SliceRow = ({columnArrangement, topSpacing, bottomSpacing, contentSpacing, contentWidth, contentBorders, utilityClasses, children}) => {
    return (
        <div data-column-arrangement={columnArrangement}
             data-top-spacing={topSpacing}
             data-bottom-spacing={bottomSpacing}
             data-content-spacing={contentSpacing}
             data-content-width={contentWidth}
             data-content-borders={contentBorders}
             className={[
                 'slice__row',
                 ...utilityClasses
             ].join(' ')}
        >
            {children}
        </div>
    );
};

export default SliceRow;
