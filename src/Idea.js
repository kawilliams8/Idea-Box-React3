import React from 'react';
import './Idea.css';

const Idea = ({title, description, id, deleteIdea}) => {
  return (
    <article className="Idea">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>Delete Idea</button>
    </article>
  )
}

export default Idea;