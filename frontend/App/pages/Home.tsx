import React from 'react';

const Home: React.FC = () => (
    <div className="relative min-h-screen flex flex-col items-center justify-center space-y-4">
        {/* コンテンツ */}
        <p className="text-5xl sm:text-6xl lg:text-8xl">Web Developer</p>
        <p className="text-xl sm:text-2xl lg:text-3xl">based in Tokyo.</p>
    </div>
);

export default Home;