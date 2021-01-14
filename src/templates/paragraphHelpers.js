import React from 'react'

import { TextParagraph } from './paragraph/paragraphText'
import { ColorboxParagraph } from './paragraph/paragraphColorbox'
import { ImageParagraph } from './paragraph/paragraphImage'
import { ParagraphAnchor } from './paragraph/paragraphAnchor'
import { ParagraphImageText } from './paragraph/paragraphImageText'
import { ParagraphNumberTile } from './paragraph/paragraphNumberTile'
import { ParagraphLink } from './paragraph/paragraphLinks'
import { UserSlideParagraph } from './paragraph/paragraphUser'
import { ParagraphLogoBanner } from './paragraph/paragraphLogoBanner'
import { ParagraphTestimonial } from './paragraph/paragraphTestimonial'
import { ParagraphTextlink } from './paragraph/paragraphTextLink'
import { paragraphImgFormText } from './paragraph/paragraphFormText'
import { ParagraphWorkTile } from './paragraph/paragraphWorkTile'
import { ParagraphListingView } from './paragraph/paragraphListingView'
import { ParagraphContactForm } from './paragraph/paragraphContactForms'

const components = {
  'paragraph__text': TextParagraph,
  'paragraph__colored_box' : ColorboxParagraph,
  'paragraph__image' : ImageParagraph,
  'paragraph__anchor': ParagraphAnchor,
  'paragraph__image_title_text': ParagraphImageText,
  'paragraph__numbered_tile': ParagraphNumberTile,
  'paragraph__links' : ParagraphLink,
  'paragraph__user_carousel' : UserSlideParagraph,
  'paragraph__logo_image_banner' : ParagraphLogoBanner,
  'paragraph__testimonial' : ParagraphTestimonial,
  'paragraph__text_link' : ParagraphTextlink,
  'paragraph__image_form_text': paragraphImgFormText,
  'paragraph__work_tile' : ParagraphWorkTile,
  'paragraph__listing_view' : ParagraphListingView,
  'paragraph__contact_form' : ParagraphContactForm,
}

export const getParagraph = node => {
  if (!node) {
    return
  }
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type]
    return <ParagraphComponent key={node.id} node={node} />
  }

  return <p key={node.id}>Unknown type: {node.type}</p>
}