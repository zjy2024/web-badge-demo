import React, { useState } from 'react'
import './App.css'
import { Badge } from './components/Badge'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="container flex justify-center items-center">
      <div className="counter flex justify-center items-center gap-1">
        <Badge value={6666666} badgeContainerStyle={{}} badgeStyle={{ zIndex: 10 }}>
          <div className={`w-[100px] h-[100px] bg-blue-500`}></div>
        </Badge>
        <Badge value={666} badgeContainerStyle={{}} badgeStyle={{ zIndex: 10 }}>
          <div className={`w-[100px] h-[100px] bg-blue-500`}></div>
        </Badge>
        <Badge value={666} badgeContainerStyle={{}} badgeStyle={{ zIndex: 10 }}>
          <div className={`w-[100px] h-[100px] bg-blue-500`}></div>
        </Badge>
      </div>
    </div>
  )
}

export default App
