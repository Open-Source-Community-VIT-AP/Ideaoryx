import React from 'react'
import logo from '../src/assets/Ideaoryx.png'
import './loader.css'

function Loader() {
    return (
        <div>
            <div className="loader">
            <div className="wrapperload">
                <div className="loder_elem">
                    <h2>Ideate</h2>
                </div>
                <div className="loder_elem">
                    <h2>Create</h2>
                </div>
                <div className="loder_elem">
                    <h2>Innovate</h2>
                </div>
                <div className="loder_elem">
                    <img src={logo} alt="IdeaOryx logo" />
                </div>
            </div>    
        </div>
        </div>
    )
}

export default Loader
