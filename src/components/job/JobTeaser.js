import React from 'react'
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './jobs.scss';

const JobTeaser = props => {

  const {
    title,
    body,
    path,
  } = props

  const summary = body.processed.replace(/(<([^>]+)>)/gi, "").substring(0, 110) + '...' ;

   return (
     <div className="job__teaser">
       <div className="job__title">
         <Link to={path.alias }>
          {title }
           <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
        </Link>
       </div>
       
       <div className="job__body">
        <p dangerouslySetInnerHTML={{ __html: summary }} />
       </div>
     </div> 
   );

}

export default JobTeaser;