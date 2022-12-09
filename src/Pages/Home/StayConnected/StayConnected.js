import React from 'react';
import bg from '../../../assets/images/appointment.png'

const StayConnected = () => {
    return (
        <section className='mt-28 text-center' style={{ background: `url(${bg})` }}>
            <div className='text-white pt-28'>
                <h4 className='text-secondary text-xl'>Contact Us</h4>
                <h1 className='text-4xl font-normal'>Stay connected with us</h1>
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto lg:max-w-xl pb-28">
                    <form className="mt-6">
                        <div className="mb-2">
                            <input
                            placeholder='Email Adress'
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="my-5">
                            <input
                            placeholder='Subject'
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                        <textarea placeholder='Enter Review' id="message" rows="4" className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
                        </div>
                        <div className="mt-6">
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default StayConnected;