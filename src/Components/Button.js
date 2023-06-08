import React from 'react'

const Button = ({children,txtColor="white",bgColor="brown",eventHandler,borderColor="1px solid black", btnWidth="60px"}) => {
    const btnStyle = {
        backgroundColor: bgColor,
        color: txtColor,
        padding: '10px 10px',
        width: btnWidth,
        border: borderColor,
        borderRadius: '5px',
        cursor: 'pointer'
    }
  return (
    <div>
        <button style={btnStyle} onClick={eventHandler}>{children}</button>
    </div>
  )
}

export default Button