import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <button className='text-base-100 bg-secondary px-3 py-2'>Latest</button>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={100}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur sunt, necessitatibus nemo molestiae corporis.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur sunt, necessitatibus nemo molestiae corporis.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur sunt, necessitatibus nemo molestiae corporis.</p>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;