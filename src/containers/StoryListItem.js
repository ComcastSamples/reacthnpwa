import React from 'react';

const StoryListItem = (props) => {
  console.log(props)
  // const { items }  = props
  // console.log(items)
  // const items = props.items;
  return (
    <h1>Hola</h1>
    // items.then(item => {
    //   console.log(item)
    //   return <li key={item.id}>{item.id}</li>
    // })
    // items.then(item => {
    //   console.log(item)
    //   item.forEach( data => {
    //     return <li key={data.id}>{data.id}</li>
    //   });
    // })
  );
}

export default StoryListItem;