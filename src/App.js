import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RestaurantsList from './components/RestaurantsList';
import Footer from './components/Footer';
import RestaurantDetails from './components/RestaurantDetails';
import Nav from './components/Nav';

function App() {
  const [restaurant, setRestaurant] = useState([
    {
      id: 1,
      name: 'Fired chicken',
      location: 'Mansour',
      range: 100,
    }
  ]);
  

  return (
    <>
      <Routes>
        <Route exact path='/'
          element={
            <>
              <Nav />
              <RestaurantsList restaurant={restaurant} setRestaurant={setRestaurant}/>
              <Footer />
            </>}
        />
        <Route
          exact path='/restaurant-details/:id'
          element={
            <>
              <RestaurantDetails restaurant={restaurant} />
              <Footer />
            </>}
        />
      </Routes>
    </>
    
  );
}

export default App;
