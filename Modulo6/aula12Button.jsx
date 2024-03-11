// Default values for props

// function Example(props) {
//     return <h1>{props.text}</h1>
//   }
  
//   Example.defaultProps = {
//     text: 'This is default text',
//   };

// ou

// function Example({text='This is default text'}) {
//     return <h1>{text}</h1>
//  }
 
// ou

// function Example(props) {
//     const {text = 'This is default text'} = props;
//     return <h1>{text}</h1>
//   }

import React from 'react';

function Button(props) {
  
    return (
      <button>{props.text}</button>
    );
}

Button.defaultProps = {
  text: 'Default Text of Big Button',
}

export default Button;