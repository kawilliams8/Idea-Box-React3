import React, {Component} from 'react';
import Form from './Form';
import Ideas from './Ideas';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [
        // { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        // { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        // { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
      ]
    }
  }

  addIdea = (idea) => {
    this.setState({
      ideas: [...this.state.ideas, idea]
    })
  }

  deleteIdea = (id) => {
    let filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({
      ideas: filteredIdeas
    })
  }

  render() {
    return (
      <main className="App">
        <h1>Idea Box!</h1>
        <Form addIdea={this.addIdea}/>
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App;