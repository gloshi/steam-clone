import './App.css';
import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { getGames } from './redux/data/dataSlice';
import { getReview } from './redux/review/reviewSlice';

function App() {

  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(getGames())
    dispatch(getReview())
  },[dispatch])

  return (
    <div className="App">
      <NavBar/>
      <div className="AppGames">
      <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
