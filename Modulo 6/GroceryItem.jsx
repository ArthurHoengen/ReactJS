import React from 'react';

function GroceryItem(props) {
  function handleClick() {
    console.log(props.name, "has been added to your cart")
  }
  return (
    <button onClick={handleClick}>{props.name} </button>
  );
}

export default GroceryItem;