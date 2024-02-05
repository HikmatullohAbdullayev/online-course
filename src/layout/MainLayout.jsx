import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function MainLayout(props) {
    return (
        <div className='mt-0'>
            <header className='shadow-md pb-10 pt-0 mt-0' >
            <Header/>
            </header>
            <main>
            <Outlet/>
            </main>

            <footer>
            <Footer/>
            </footer>
            
        </div>
    );
}

export default MainLayout;