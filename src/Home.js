import React from 'react'
import './Home.css'
import Product from './Product';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <Carousel 
            renderIndicator={false}
            showThumbs={false}
            className="home__image"
            autoPlay
            interval={2000}
            infiniteLoop
            showArrows={false}
  
            >
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/Zjk0ZWU0ZTIt/Zjk0ZWU0ZTIt-NWE2MGJlOGIt-w1500._CB662983655_.jpg" />
                    
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTUzYjk4NTYt/YTUzYjk4NTYt-ZmNlYWQwMzAt-w1500._CB664441282_.jpg" />
                    
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/21-1109-ACQ-Gateway-BAU-JulyGateway_Updates_DT_ENG_1x__PREMIUM_1500x600_V01._CB666373981_.jpg" />
        
                </div>
            </Carousel>
            {/* <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" */}
    
        {/* /> */}
        <div className="home__row">
        <Product 
        id="12321341"
        title="EAMTI 1.25CT 925 Sterling Silver Bridal Rings Sets Cubic Zirconia Halo CZ Engagements Rings Wedding Bands for Women Promise Rings for her Size 4-11"
        price={1000.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/61eLai1zRmL._AC_UY535_.jpg"
        />
        <Product 
        id="49538094"
        title="Glass Rose -Preserved Rose in Glass Dome Gift Flower,Beauty Rose Gift for Her and Valentine's Day Mother's Day Christmas Anniversary Birthday Thanksgiving (red)"
        price={25.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/61oz3y-FGxL._AC_SX522_.jpg"
        />
        </div>
     <div className="home__row">
        <Product 
        id="4903850"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
        price={199.99}
        rating={3}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product 
        id="23445930"
        title="Kids Crafts Wood Arts and Crafts for Kids DIY Bird House Kit for Children to Build and Paint Reinforced Design - Creative Kids Activities Projects Party Favors for Boys and Girls"
        price={98.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/61CdxxvRInS._AC_SY355_.jpg"
        />
        <Product 
        id="3254354345"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
        price={598.99}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        </div>
        <div className="home__row">
         <Product
          id="90829332"
          title="Vodzsla Triple Portable Monitor for Laptop,Full HD IPS 11.6'' Dual Monitor Screens Extender,HDMI/USB/Type-C Plug and Play Gaming Computer Monitor for 13.3”-16” Mac Windows Chrome Laptops"
          price={1094.98}
          rating={4}
          image="https://m.media-amazon.com/images/I/71M0-jMPQ+L._AC_SX679_.jpg"
         />
        </div>
        <div className="home__row">
        <Product 
        id="12321341"
        title="OGG K6 Wireless Earbuds ANC Bluetooth Earphones, Active Noise Cancelling Headset, Wireless Bluetooth Earbuds with Mart Touch,8 Hours Playback and 55 Extra Hours of Charging Case (White)"
        price={130.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/61DaSYsIWOL._AC_SX569_.jpg"
        />
        <Product 
        id="49538094"
        title="AphroditeL Tiffany Style Handmade Stained Glass Dragonfly 10-Inch Pillar Accent Lamp for Living Room Bedroom Bedside Table Decoration Table Lamp"
        price={39.0}
        rating={4}
        image="https://m.media-amazon.com/images/I/61aqcOkAMzS._AC_SX679_.jpg"
        />
        </div>
     </div>
        </div>
    );
}

export default Home
