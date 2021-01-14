import React from 'react';
import { graphql } from "gatsby";
import forms from '../../components/forms'

export const ParagraphContactForm = ({ node }) =>  {
  const FormList = forms[node.field_forms_type]
  return <FormList key={node.id} />
}


export const fragment = graphql`
  fragment paragraphContactFormFragment on paragraph__contact_form {
    id
    field_forms_type
  }
`