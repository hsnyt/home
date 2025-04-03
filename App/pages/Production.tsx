import React from 'react';

const Production: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="flex flex-col md:flex-row gap-52 w-full max-w-5xl justify-center items-center">
            {/* 画像1 */}
            <div className="w-full max-w-sm flex flex-col items-center">
                <div className="w-full aspect-square shadow-2xl hover:scale-110 transition-transform duration-300">
                    <img
                        src="/images/production/1.png"
                        alt="1"
                        className="w-full h-full object-contain"
                    />
                </div>
                <p className="mt-12 text-lg font-semibold text-center">Portfolio site</p>
            </div>

            {/* 画像2（背景的） */}
            <div className="w-full max-w-sm flex flex-col items-center">
                <div className="w-full aspect-square shadow-2xl shadow-black hover:scale-110 transition-transform duration-300 opacity-20">
                    <img
                        src="/images/production/rescue.png"
                        alt="rescue"
                        className="w-full h-full object-contain"
                    />
                </div>
                <p className="mt-12 text-lg font-semibold text-center">Coming Soon　-　In development</p>
            </div>
        </div>
    </div>
);

export default Production;
