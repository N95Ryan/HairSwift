import React, { useState } from 'react';

const hairdressers = [
    { name: 'Anne', slots: ['9:00', '10:00', '11:00', '14:00', '15:00'] },
    { name: 'Ryan', slots: ['9:30', '10:30', '11:30', '14:30', '15:30'] },
    { name: 'Nathan', slots: ['9:00', '10:00', '11:00', '14:00', '15:00'] },
    { name: 'Nolan', slots: ['9:30', '10:30', '11:30', '14:30', '15:30'] },
    { name: 'Jason', slots: ['9:00', '10:00', '11:00', '14:00', '15:00'] },
];

const Reservation = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const selectSlot = (hairdresser, slot) => {
        const confirmation = window.confirm(`Confirmez-vous la réservation avec ${hairdresser} à ${slot} ?`);
        if (confirmation) {
            setSelectedSlot(`Vous avez réservé un créneau avec ${hairdresser} à ${slot}`);
        }
    };

    return (
        <div className="p-10">
            {hairdressers.map((hairdresser, index) => (
                <div key={index} className="mb-5">
                    <h2 className="text-2xl mb-2 text-white font-bold shadow-2xl">{hairdresser.name}</h2>
                    {hairdresser.slots.map((slot, index) => (
                        <button
                            key={index}
                            className="mr-2 mb-2 bg-white hover:bg-gray-700 text-black hover:text-white font-bold py-2 px-4 rounded"
                            onClick={() => selectSlot(hairdresser.name, slot)}
                        >
                            {slot}
                        </button>
                    ))}
                </div>
            ))}
            {selectedSlot && <div className="mt-5 bg-white text-black font-bold rounded p-4 max-w-md mx-auto bottom-0 left-0 right-0 animate-fade-up">{selectedSlot}</div>}            </div>
    );
};

export default Reservation;