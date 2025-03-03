import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import Banner from '../Header/Banner/Banner';
import cafeteria from '../../assets/cafeteria.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            
            <Banner></Banner>

            <section className='grid grid-cols-3 gap-4 mx-auto'>
                {/* cafeteria */}
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={cafeteria}
                            alt="Cafeteria" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Cafeteria</h2>
                        <p>Fuel your mind and body with our fresh, nutritious, and delicious meals – because great ideas start with great food!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="/cafeteria/breakfast">Details</Link></button>
                        </div>
                    </div>
                </div>
                {/* Bus Tracker */}
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={cafeteria}
                            alt="Cafeteria" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bus Tracker</h2>
                        <p>Fuel your mind and body with our fresh, nutritious, and delicious meals – because great ideas start with great food!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="/bustracker">Details</Link></button>
                        </div>
                    </div>
                </div>
                {/* Faculty Info */}
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={cafeteria}
                            alt="Cafeteria" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Faculty Information</h2>
                        <p>Fuel your mind and body with our fresh, nutritious, and delicious meals – because great ideas start with great food!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="/facultyinfo">Details</Link></button>
                        </div>
                    </div>
                </div>
                {/* Event & Club Management */}
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={cafeteria}
                            alt="Cafeteria" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Event & Club</h2>
                        <p>Fuel your mind and body with our fresh, nutritious, and delicious meals – because great ideas start with great food!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="/eventclub">Details</Link></button>
                        </div>
                    </div>
                </div>
                {/* campus navigation */}
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={cafeteria}
                            alt="Cafeteria" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Campus Navigation</h2>
                        <p>Fuel your mind and body with our fresh, nutritious, and delicious meals – because great ideas start with great food!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to="/campusnav">Details</Link></button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;