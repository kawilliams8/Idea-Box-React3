import React from 'react';
import Idea from './Idea';
import './Ideas.css'

const Ideas = ({ideas, deleteIdea}) => {
  return (
    ideas.map(idea => {
      return (
        <Idea 
          title={idea.title}
          description={idea.description}
          id={idea.id}
          key={idea.id}
          deleteIdea={deleteIdea}
        />
      )
    })
  )
}

export default Ideas;