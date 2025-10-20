import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Components/HomeLayout/RightAside/RightAside';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState([]);

    // console.log(id, data, news);

    useEffect(()=>{
        const newsDetails = data.find(news => news.id == id);
        setNews(newsDetails)
    }, [id, data]);

    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
                <section className='col-span-9'>
                    <h3 className='font-bold mb-5'>News Details</h3>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;