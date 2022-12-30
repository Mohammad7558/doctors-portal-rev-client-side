import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AvailableAppointment/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='w-10/12 mx-auto'>
            <h1 className='text-center text-primary font-semibold text-2xl'>{format(selectedDate, 'PP')}</h1>
            <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
                {
                    treatment &&
                    <BookingModal
                        selectedDate={selectedDate}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;