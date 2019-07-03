import React from 'react';

import './App.css';
import Sample from './JsComponent/Sample';

class App extends React.Component {
 state={
  lists:[
  {id:"1",name:"ehsan khorsand" ,age:"28"},
  {id:"2",name:"mohsen khorsand" ,age:"30"},
  {id:"3",name:"behrooz gholamhosein fard" ,age:"25"}
]
};
  render(){
  
  return (
    <div className="App">
      
      <Sample lists={this.state.lists}/>
    </div>
  );
}
}

export default App;
