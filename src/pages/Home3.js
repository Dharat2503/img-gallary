

import React, { useState, useEffect } from 'react';
import '../pages/Home.css';

const initialServices = [
  {
    name: "Retail, E-Commerce",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Food & Restaurants",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Healthcare & Fitness",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Logistic & Distribution",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Social Networking",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Travel & Hospitality",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "On-Demand Solution",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },
  {
    name: "Gaming",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    isOverlay: true 
  },



];

const Home3 = () => {
  const [services, setServices] = useState(initialServices);



  useEffect(() => {

  }, [services]);

  return (
    <section className="service_section" id="service_section">
      <div className="container">
        <div className="row">
          <div className="service_area">
            <h4>Our Sectors Of Service</h4>
            <p>
              We Create Applications In Practically Every Category Here. We’ll Build
              Whatever You Can Imagine.
            </p>
            <div className="services_grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`service_box ${service.isOverlay ? 'overlay' : ''}`}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <span>{service.name}</span>
                </div>
              ))}
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home3;
