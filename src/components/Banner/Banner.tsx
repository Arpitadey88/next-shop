import { Carousel } from 'react-responsive-carousel';
import sliderImage1 from '../../images/slider/sliderImg_1.jpg';
import sliderImage2 from '../../images/slider/sliderImg_2.jpg';
import sliderImage3 from '../../images/slider/sliderImg_3.jpg';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='relative'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <Image priority src={sliderImage1} alt='sliderImage' />

                </div>
                <div>
                    <Image src={sliderImage2} alt='sliderImage' />

                </div>
                <div>
                    <Image src={sliderImage3} alt='sliderImage' />

                </div>
            </Carousel>
            <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
        </div>
    );
};

export default Banner;