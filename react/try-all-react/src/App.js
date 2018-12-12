import React, { Component } from 'react';
import Table from './Table'
import Form from './Form';
import Form2 from './Form2';

class App extends Component {
  state={
     characters:[
      {
        'name':'唐唐',
        'job':'FE'
      },
      {
        'name':'唐马儒',
        'job':'鉴宝师'
      },
      {
        'name':'唐僧',
        'job':'国师'
      }
    ]
    
  }
  render () {
    const {characters}=this.state;
    

    return (
      <div className="container">
        <Table  characterData={characters}
        removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
        <Form2>
          </Form2>
      </div>
    )
  }
  removeCharacter=index=>{
    const { characters }=this.state;
    this.setState({
      characters:characters.filter(
        (character,i)=>{
          return i!==index
        }
      )
    })
  }
  handleSubmit=character=>{
    this.setState({
      characters:[character,...this.state.characters]
    })
  }
}
export default App
