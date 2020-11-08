import React from 'react';


export default function Breadcrumb({children}) {
  return (
        <nav className="breadcrumb">
            <ol>
                {children}
            </ol>
        </nav>
    );
}
