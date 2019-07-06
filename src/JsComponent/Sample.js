import React from 'react';
import '../dist/css/index.min.css'; 
const Sample= ({people})=> {
    // state={
    //     name:"ehsan khorsand",
    //     age:28
    // }
         

        const mypeople=people.map((person)=>{
return(
    <div className="person" key={person.id}>
<div className='ddd'>
    name:{person.name}
</div>
<div className='ddd'>
age :{person.age}
</div>
</div>
);
        });
        return <div className="mypeople"> {mypeople}</div> ;
     }

export default Sample;