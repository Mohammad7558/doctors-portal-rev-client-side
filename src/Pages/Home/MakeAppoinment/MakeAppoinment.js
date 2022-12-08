import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import doctorbg from '../../../assets/images/appointment.png';

const MakeAppoinment = () => {
    return (
        <section className='mt-16' style={{background: `url(${doctorbg})`}}>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 lg:w-1/2 rounded-lg" alt='logo' />
                    <div>
                        <h2 className='text-secondary font-bold text-xl mb-10'>Appointment</h2>
                        <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white ">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;