import React from 'react'

export default function MainWrapper({ children }) {
 return (
  <main className="main__wrapper">
        <div className="main">
            {children}
        </div>
  </main>
  );
}
