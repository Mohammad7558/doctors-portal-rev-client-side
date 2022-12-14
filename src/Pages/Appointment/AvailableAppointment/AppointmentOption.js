import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title justify-center text-primary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div className="card-actions justify-center">
                        <label disabled={slots.length === 0} htmlFor="my-modal-3" 
                         onClick={() => setTreatment(appointmentOption)}
                        className="btn btn-primary">Booking Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;