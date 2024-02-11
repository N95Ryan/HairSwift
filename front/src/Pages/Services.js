import React from 'react';

const Services = () => {
    return (
        <div className="p-10 text-white">
            <h1 className="text-4xl mb-10 font-bold shadow-2xl">Chez HairSwift, nous proposons</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="border rounded p-5 bg-white text-black font-semibold">
                    <h2 className="text-2xl mb-4">Coupe de cheveux</h2>
                    <p className='font-semibold'>Nous offrons des coupes de cheveux pour hommes, femmes et enfants.</p>
                </div>
                <div className="border rounded p-5 bg-white text-black font-semibold">
                    <h2 className="text-black text-2xl mb-4 font-semibold">Coloration</h2>
                    <p className='font-semibold'>Nous proposons une gamme de services de coloration, y compris des mèches, des balayages et des colorations complètes.</p>
                </div>
                <div className="border rounded p-5 bg-white text-black font-semibold">
                    <h2 className="text-black text-2xl mb-4 font-semibold">Coiffure</h2>
                    <p className='font-semibold'>Que vous ayez besoin d'une coiffure pour un événement spécial ou simplement pour changer de look, nous avons ce qu'il vous faut.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;