import { format } from 'date-fns/esm';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const names = form.names.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: names,
            slot,
            email,
            phone,
        }

        console.log(booking)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-primary my-3 font-medium'>{name}</h1>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input value={date} disabled type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='names' type="text" placeholder="Type Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Type Your Email" className="input input-bordered w-full" />
                        <input name='phone' type="tel" placeholder="Type Phone No" className="input input-bordered w-full" />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;