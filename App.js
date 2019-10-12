import  React,{Component} from 'react';
import logo from './logo.svg';
import {SearchBox} from './search/search';
import {Card} from './card-list/card-list.component';
import './App.css';



class  App extends React.Component {
constructor(){
  super()
    this.state={
      text:[],
      searchField:''
    }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((user)=>this.setState({text:user}));  
}

// handle = (e)=> {
// this.setState({msg:e.target.value});
// };
onSearchChange=(event)=>{

  this.setState({searchField:event.target.value});
};

render(){
  
  const { text, searchField } = this.state;
  const filteredMonsters = text.filter(text =>
    text.name.toLowerCase().includes(searchField.toLowerCase())
  );
   {/* <input type='search' placeholder='type here' onChange={this.handle}></input> */}
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
    <SearchBox  onSearchChange={this.onSearchChange}></SearchBox>
     
         <Card monster={filteredMonsters}>
         </Card>
  
    </div>
  );
}
}

export default App;
