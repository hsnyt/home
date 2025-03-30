import React from 'react';

const Production: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
            <div className="shadow-xl hover:scale-110 transition-transform duration-300">
                <img src="/images/production/1.png" alt="1" width="400" className="w-full md:w-500"/>
            </div>
        </div>
    </div>
);

export default Production;
