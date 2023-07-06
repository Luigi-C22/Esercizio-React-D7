import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { carouselItems } from '../../data/carouselItems';
import { nanoid} from 'nanoid';

const Welcome = () => {

        return (

            <Carousel className='mb-3' >
                {carouselItems.map((item) => {
                    return (
                        <Carousel.Item key={nanoid()}>
                            <img className='d-block w-100' height={240} src={item.src} alt={item.alt} />
                            <Carousel.Caption>
                                <h3 className='carouselTitles'>{item.captionTitle}</h3>
                                <p className='smallTitle'>{item.captionDescription}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        );
    
};

export default Welcome;