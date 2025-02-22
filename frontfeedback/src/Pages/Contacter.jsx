import React from 'react';
import { useState } from "react";

const Contacter = () => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            entreprise: "Djezzy",
            logo: "src/assets/bg1.png",
        },
        {
            id: 2,
            entreprise: "Djezzy",
            logo: "src/assets/bg1.png",
        },
        {
            id: 3,
            entreprise: "Djezzy",
            logo: "src/assets/bg1.png",
        },
        {
            id: 4,
            entreprise: "Djezzy",
            logo: "src/assets/bg1.png",
        }
    ]);

    return (
        <>
            {/* Color tags section - adjusted to match image */}
            <div className='flex flex-row space-x-1 p-4 bg-transparent'>
                <div className='w-32 h-2 bg-[#282D6E] rounded-full'></div>
                <div className='w-32 h-2 bg-[#656CC6] rounded-full'></div>
                <div className='w-32 h-2 bg-[#9A9ED0] rounded-full'></div>
            </div>

            {/* Main content */}
            <div className='bg-[url("src/assets/background.svg")] h-screen bg-cover bg-center'>
                <div className="w-full max-w-2xl px-4 mx-auto">
                    <h2 className="text-white text-xl mb-4">Contacter</h2>
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg mb-4 relative"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                                        <img 
                                            src={contact.logo} 
                                            alt={contact.entreprise}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-white opacity-80">
                                        {contact.entreprise}
                                    </span>
                                </div>
                                <button className="text-white opacity-60 hover:opacity-100 rounded- ">
                                    <svg 
                                        viewBox="0 0 24 24" 
                                        className="w-6 h-6"
                                        fill="none" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Contacter;