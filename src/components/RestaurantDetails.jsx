import React from 'react';
import img1 from './fride22.png';
import { useLocation } from "react-router-dom";


const RestaurantDetails = () => {
    const { state } = useLocation();
    return (
        <>
            <div className="nav-bg-img">
                
            </div>
            <div className='des-wrapper'>
                <div className='des-div'>
                    <img src={img1} alt='chicken' />
                    <div className='res-name-wrapper'>
                        <h1>{state.restaurant.name} Restaurant</h1>
                        <h3>Baghdad</h3>
                        <div className='des-card'>
                            <h4>Location: {state.restaurant.location}</h4>
                            <h4 className='rateColor'>Rate: ⭐️⭐️⭐️⭐️ {state.restaurant.range}</h4>
                        </div>
                    </div>
                </div>
                <div className='des-details-div'>
                    <div className='des-details-container'>
                        
                        <p>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, accusamus suscipit? Qui deserunt libero neque fugiat eius voluptas et doloremque. Inventore minus asperiores voluptatum aperiam, incidunt, pariatur necessitatibus quaerat excepturi, nam quidem corrupti doloribus? Quibusdam ipsa, et amet voluptatem similique laborum! Earum architecto debitis, eveniet error ipsam ducimus molestias aspernatur doloremque mollitia, illo harum rem atque sint similique quasi minima?!<br></br>
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default RestaurantDetails;