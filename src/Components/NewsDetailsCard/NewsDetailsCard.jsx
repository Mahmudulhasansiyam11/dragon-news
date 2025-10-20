import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div className='p-5 space-y-5'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h3 className='font-bold'>{news.title}</h3>
            <p className='font-light'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary p-5'>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;