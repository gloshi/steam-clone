import React, { useState } from 'react'
import Params from './Params'
import GamesList from './GamesList'
import { useResize } from './useResize'

const Home = () => {

  const size = useResize()
  console.log(size)

  return (
    <>
    <div style={{paddingTop:30}} ></div>
    <Params  />
    <GamesList />
  </>
  )
}

export default Home