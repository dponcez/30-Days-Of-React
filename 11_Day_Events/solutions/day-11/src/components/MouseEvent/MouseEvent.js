import React, { useEffect, useState } from 'react';
import '../../styles/MouseEvent.scss'

const MouseEvent = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  
  const handleMouseMove = (e) => {
    let xAxis = null; 
    let yAxis = null;
    const moveX = window.clientX || e.nativeEvent.offsetX;
    const moveY = window.clientY || e.nativeEvent.offsetY;
    if( moveX || moveY ) {
      xAxis = moveX;
      yAxis = moveY;
    }

    setMousePosition({
      x: xAxis,
      y: yAxis
    })
  }

  useEffect(() => {
    handleMouseMove
  }, [mousePosition]);

  return (
    <div className='container'>
      <div className='coordinates'>
        <p>Mouse position in xAxis: <span>{mousePosition.x}px</span></p> 
        <p>Mouse position in yAxis: <span>{mousePosition.y}px</span></p>
      </div>
      <div className='button--container'>
        <button className='btn'
          onMouseMove={(e) => handleMouseMove(e)}
          style={{
            position: 'absolute',
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 1s cubic-bezier(0.25, 0.1, 0.04, 0.82) 0s, left 1s cubic-bezier(0.76, -0.09, 0.52, 1.09) 0s, top 1s cubic-bezier(0.54, 0.12, 0, 0.65) 0s'
          }}
        >Move me around</button>
        </div>
    </div>
  )
}

export default MouseEvent