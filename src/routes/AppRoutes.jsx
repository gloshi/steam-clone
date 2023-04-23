import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import { ROUTE } from '../utils'
import Cart from '../components/Cart'
import SingleGame from '../components/SingleGame'
import GameReview from '../components/GameReview'
import Info from '../components/Info'
import Explore from '../components/Explore'
import FAQ from '../components/Faq'
const AppRoutes = () => {
  return (
<Routes>
        <Route index element={<Home/>}/> 
        <Route path={ROUTE.SHOP} element={<Home/>}/> 
        <Route path={ROUTE.CART} element={<Cart/>} />
        <Route path={ROUTE.GAME} element={<SingleGame/>} />
        <Route path={ROUTE.REVIEW} element={<GameReview/>} />
        <Route path={ROUTE.INFO} element={<Info/>} />
        <Route path={ROUTE.EXPLORE} element={<Explore/>} />
        <Route path={ROUTE.FAQ} element={<FAQ/>} />

</Routes>
  )
}

export default AppRoutes