import React from 'react';

import './App.css';
import Sample from './JsComponent/Sample';

class App extends React.Component {
 state={
  people:[
  {id:"1",name:"ehsan khorsand" ,age:"28"},
  {id:"2",name:"mohsen khorsand" ,age:"30"},
  {id:"3",name:"behrooz gholamhosein fard" ,age:"25"}
]
};
  render(){
  
  return (
    <div className="App">
      
      <Sample people={this.state.people}/>
    </div>
  );
}
}

export default App;
