import React from 'react';
import MainWrapper from '../layout/MainWrapper';
import { Container } from 'react-bootstrap';


export default function JobsPage({ title, body }) {

  return (
     <MainWrapper>
       <Container>
        <h1 className='page-title'> { title }</h1>
        <div className="job__body" dangerouslySetInnerHTML={{ __html: body.processed}}></div>
       </Container>
     </MainWrapper>

  )
  
}