import React from 'react';

//type iteams
type typeTodos = {
  items: string[]
}
 
const Todos = ({items}: typeTodos) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


export default Todos;
