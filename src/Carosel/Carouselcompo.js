import React from 'react';
import './Carousel.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';
import {Constants} from '../constants';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Carouselcompo(){
    return(
      <div className="userCarousel">
        <FavoriteBorderOutlinedIcon className="favicon" />
        <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >        
        {Constants.map((item) => (                
          <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
          />                
        ))}
      </Carousel>
      </div>
    );
}

export default Carouselcompo;