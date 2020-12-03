import React from 'react'

import { TextParagraph } from './paragraph/paragraphText'
import { ColorboxParagraph } from './paragraph/paragraphColorbox'
import { ImageParagraph } from './paragraph/paragraphImage'
import { ParagrapAnchor } from './paragraph/paragraphAnchor'
import { ParagraphImageText } from './paragraph/paragraphImageText'
import { ParagraphNumberTile } from './paragraph/paragraphNumberTile'
import { ParagraphLink } from './paragraph/paragraphLinks'
import { UserSlideParagraph } from './paragraph/paragraphUser'

const components = {
  'paragraph__text': TextParagraph,
  'paragraph__colored_box' : ColorboxParagraph,
  'paragraph__image' : ImageParagraph,
  'paragraph__anchor': ParagrapAnchor,
  'paragraph__image_title_text': ParagraphImageText,
  'paragraph__numbered_tile': ParagraphNumberTile,
  'paragraph__links' : ParagraphLink,
  'paragraph__user_carousel' : UserSlideParagraph,
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