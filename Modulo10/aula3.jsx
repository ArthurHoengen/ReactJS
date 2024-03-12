import React from 'react';
 
function StyleDemo() {
  const myStyle = {
    background: 'lightblue',
    color: 'darkblue',
    marginTop: '100px',
    fontSize: 50,
  }
  return (
    <>
      <button style={myStyle}>button</button>
    </>
  );
}
 
export default StyleDemo