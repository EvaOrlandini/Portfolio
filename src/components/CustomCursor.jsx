import { useEffect, useState } from 'react'
import '../styles/cursor.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  )
}

export default CustomCursor
