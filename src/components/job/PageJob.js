import React from 'react';
import MainWrapper from '../layout/MainWrapper';
import { Container } from 'react-bootstrap';
import ParagraphRow from '../../templates/paragraph/paragraphRow'

export default function JobsPage({ body, rows }) {

  return (
     <MainWrapper>
       <Container>
           <div className="top__section">
            {rows && rows.map((content, index) => {
              return <ParagraphRow {...content} key={index} />
            })}
           </div>
        <div className="job__body" dangerouslySetInnerHTML={{ __html: body.processed}}></div>
       </Container>
     </MainWrapper>

  )
  
}