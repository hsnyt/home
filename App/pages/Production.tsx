import React from 'react';

const Production: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full max-w-5xl justify-center items-center">
            {/* 画像1 */}
            <div className="w-full max-w-sm flex flex-col items-center">
                <div className="w-full aspect-square shadow-2xl rounded-lg overflow-hidden">
                    <img
                        src="/images/production/1.png"
                        alt="1"
                        className="w-full h-full object-contain bg-white"
                    />
                </div>
                <p className="mt-8 text-xl font-semibold text-center text-gray-800">
                    Portfolio site
                </p>
            </div>

            {/* 画像2（背景的） */}
            <div className="w-full max-w-sm flex flex-col items-center">
                <div className="w-full aspect-square shadow-2xl rounded-lg overflow-hidden">
                    <img
                        src="/images/production/rescue.png"
                        alt="rescue"
                        className="w-full h-full object-contain bg-white opacity-10"
                    />
                </div>
                <p className="mt-8 text-xl font-semibold text-center text-gray-800">
                    Coming Soon - In development
                </p>
            </div>
        </div>
    </div>
);

export default Production;
