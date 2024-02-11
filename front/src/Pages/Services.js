import React from 'react';

const Services = () => {
    return (
        <div className="p-10">
            <h1 className="text-4xl mb-10  text-white font-light ">Chez HairSwift, nous offrons</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="border rounded p-5">
                    <h2 className="text-2xl mb-4">Coupe de cheveux</h2>
                    <p>Nous offrons des coupes de cheveux pour hommes, femmes et enfants.</p>
                </div>
                <div className="border rounded p-5">
                    <h2 className="text-2xl mb-4">Coloration</h2>
                    <p>Nous proposons une gamme de services de coloration, y compris des mèches, des balayages et des colorations complètes.</p>
                </div>
                <div className="border rounded p-5">
                    <h2 className="text-2xl mb-4">Coiffure</h2>
                    <p>Que vous ayez besoin d'une coiffure pour un événement spécial ou simplement pour changer de look, nous avons ce qu'il vous faut.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;