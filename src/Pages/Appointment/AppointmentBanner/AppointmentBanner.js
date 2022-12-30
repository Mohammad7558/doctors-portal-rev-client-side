import React from 'react';
import { DayPicker } from 'react-day-picker';
import imgbg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <section style={{ backgroundImage: `url(${imgbg})` }}>
            <div className='w-10/12 mx-auto items-center grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-2 py-16'>
                <div className='m-auto'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
                <div>
                    <img src={chair} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;