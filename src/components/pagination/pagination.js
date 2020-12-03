import React from 'react';
import { Link } from 'gatsby';
import './pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({ pageSize, totalcount, currentPage, skip, base }) {

  const totalPages = Math.ceil(totalcount/pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const Prev = currentPage === 2 ? base : base + '/page/' + prevPage
  return (
    <>
    <div className="pagination">

    
      {currentPage !== 1 &&  
        <div className="nav__prev">
          <Link to= {`${Prev}`}> <FontAwesomeIcon icon={["fas", "arrow-left"]} /> </Link>
        </div>
      }
      <ul className="pagination__items">
      {Array.from({length : totalPages}).map((_, i) => (
        <li>
          <Link  activeClassName="current"
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${i > 0 ? base + '/page/' + (i + 1) : '/blog'}`}
          key={`page${i}`} >{ i + 1 }
          </Link>
        </li>
      ))}
       </ul>
      {currentPage !== totalPages &&
        <div className="nav__next">
          <Link to= {`${base}/page/${nextPage}`}> <FontAwesomeIcon icon={["fas", "arrow-right"]} /> </Link>
        </div>
     }
     </div>
   </>
  )
}