import React from 'react'
import { useState, useEffect } from 'react'
function Util() {
    const [cursorX, setcursorX] = useState('0')
    const [cursorY, setcursorY] = useState('0')
    useEffect(() => {
    window.addEventListener("mousemove",(e)=>{
      setcursorX(e.pageX)
      setcursorY(e.pageY)
    })})
    return (<>
      <div className="cursoru duration-75 z-[2]" 
        style={{left:cursorX+"px",
        top:cursorY+"px",
      }}></div>
      <div className="cursor2u  z-[2]"  style={{left:cursorX+20+"px",
        top:cursorY+20+"px",
      }}></div></>
    )
}

export default Util