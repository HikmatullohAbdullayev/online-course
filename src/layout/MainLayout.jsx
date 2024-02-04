import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/home/Home';

function MainLayout(props) {
    return (
        <div className='mt-0'>
            <header className='shadow-md pb-10 pt-0 mt-0' >
            <Header/>
            </header>
            <main>
            <Home/>
            </main>

            <footer>
            <Footer/>
            </footer>
            
        </div>
    );
}

export default MainLayout;