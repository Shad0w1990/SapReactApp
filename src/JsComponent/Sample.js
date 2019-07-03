import React from 'react';
class Sample extends React.Component {
    // state={
    //     name:"ehsan khorsand",
    //     age:28
    // }
  
    render(){ 
        
         const {lists} = this.props;

        const mytest=lists.map((test)=>{
return(
    <div className="test" key={test.id}>
<div>
    name:{test.name}
</div>
<div>
age :{test.age}
</div>
</div>
);
        });
        return <div className="mytest"> {mytest}</div> ;
    }
}
export default Sample;