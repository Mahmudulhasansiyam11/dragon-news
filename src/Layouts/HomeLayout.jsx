import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import NavBar from '../Components/NavBar/NavBar';
import LeftAside from '../Components/HomeLayout/LeftAside/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                {/* Latest News */}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                {/* NavBar */}
                <nav className='w-11/12 mx-auto my-3'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                {/* Left Aside */}
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                {/* Main */}
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                {/* Right Aside */}
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;