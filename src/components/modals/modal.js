import React from "react"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          <Link to={closeTo}>
            Close
          </Link>
          {children}
        </React.Fragment>
      ) : (
       <div { ...rest }>
          {children}
        </div>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
