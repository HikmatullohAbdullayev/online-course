import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/home/Home';

function MainLayout(props) {
    return (
        <div>
            <header>
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