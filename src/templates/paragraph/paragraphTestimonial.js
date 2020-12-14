import React from 'react'
import { graphql } from 'gatsby'
import Testimonials from '../../components/testimonials/testimonials'


export const ParagraphTestimonial = ({ node }) => {
 const testimonial = {
   author: node.field_testimonial_author,
   company: node.field_testimonial_company,
   jobtitle: node.field_testimonial_job_title,
   description: node.field_description
 }
 return (

   <Testimonials {...testimonial} />
 )
}

export const fragment = graphql`

  fragment paragraphTestimonialFragment on paragraph__testimonial {
    id
    field_testimonial_author
    field_testimonial_company
    field_testimonial_job_title
    field_description
  }
`