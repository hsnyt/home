import React from 'react';

const Contact: React.FC = () => (
    <div
        className="min-h-screen flex items-center justify-center p-8"
    >
        <div className="text-center max-w-md">
            {/* タイトル（サイズをスマホとPCで変更） */}
            <p className="mb-6 text-5xl sm:text-6xl font-bold text-gray-800">
                Contact
            </p>

            <div style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                {/* スマホ用テキスト */}
                <p className="mb-8 text-lg text-gray-700 sm:hidden">
                    ご連絡は以下のボタンから<br />お願いいたします。
                    <br />
                    メールにて返信いたします。
                </p>
                {/* PC用テキスト */}
                <p className="mb-8 text-lg text-gray-700 hidden sm:block">
                    ご連絡は以下のボタンからお願いいたします。
                    <br />
                    メールにて返信いたします。
                </p>
                <a
                    href="mailto:hoshinoyuta.jp@gmail.com"
                    className="
                  inline-block
                  px-4
                  py-2
                  bg-black
                  text-white
                  text-md
                  rounded-full
                  transition
                  duration-300
                  hover:bg-gray-700
                  hover:shadow-lg
                "
                >
                    Send
                </a>
            </div>
        </div>
    </div>
);

export default Contact;