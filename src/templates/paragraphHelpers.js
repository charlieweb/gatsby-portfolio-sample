import React from 'react'

import { TextParagraph } from './paragraph/paragraphText'
import { ColorboxParagraph } from './paragraph/paragraphColorbox'
import { ImageParagraph } from './paragraph/paragraphImage'

const components = {
  'paragraph__text': TextParagraph,
  'paragraph__colored_box' : ColorboxParagraph,
  'paragraph__image' : ImageParagraph,
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