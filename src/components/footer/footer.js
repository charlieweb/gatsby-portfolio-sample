import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import useSiteMetadata from '../../hooks/use-site-metadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../hooks/font-awesome';
import './footer.scss';
const Footer = () => {
const { twitter, facebook, instagram, linkedin } = useSiteMetadata();
  return (
    
     <footer>
       <Container>
         <div className="footer__above">
           <h3>Work With Us</h3>
           <p>We look forward to kicking off your next project. we can help at every stage</p>
           <div className="work__link"><Link to='/start-a-project'>Start a project</Link></div>
         </div>
         <div className="footer__menu">
            <ul>
              <li><Link to='/about/careers'>Jobs</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
         </div>
         <div className="footer__social-icons">
           <ul>
             <li><a href={twitter}   target="__blank">twitter<FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
             <li><a href={linkedin}  target="__blank">linkedin<FontAwesomeIcon icon={["fab", "linkedin-in"]} /></a></li>
             <li><a href={instagram} target="__blank">instagram<FontAwesomeIcon icon={["fab", "instagram"]} /></a></li>
             <li><a href={facebook}  target="__blank">facebook<FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
           </ul>
         </div>
         <div className="footer__bootom">
            <div className="copy">
            © {new Date().getFullYear()} Chapter Three. All rights reserved.
            {` `}
            </div>
            <ul className="privacy">
              <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
              <li><Link to='/site-credits'>Site Credits</Link></li>
            </ul>
         </div>
        
       </Container>
     </footer>
  );


}

export default Footer