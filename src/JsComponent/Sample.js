import React from 'react';
class Sample extends React.Component {
    state={
        name:"ehsan khorsand",
        age:28
    }
    render(){
        return(
<div>
name is {this.state.name}
<br/>
age is {this.state.age}
</div>

        );
    }
}
export default Sample;