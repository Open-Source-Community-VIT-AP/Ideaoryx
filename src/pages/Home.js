import React, { useState } from 'react'
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Hero from '../components/heroSection/Hero';
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar';
import Timeline from '../components/timeline/Timeline';

function Home() {

    const [isOpen, setisOpen] = useState(false)

    const toggle = () => setisOpen(!isOpen)

    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>

            <Hero/>
            <br />
            <About/>
            <br />
            <br />
            <Timeline/>
            <br />
            <Footer/>
        </div>
    )
}

export default Home
