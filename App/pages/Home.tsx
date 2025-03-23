import React, { useState, useEffect } from "react";

const Home: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [typedText, setTypedText] = useState<string[]>(["", ""]); // 配列で管理
    const [typingIndex, setTypingIndex] = useState<number>(0);
    const [currentLine, setCurrentLine] = useState<number>(0);
    const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true); // カーソルの表示・非表示を管理
    const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false); // タイピングが完了したかどうか

    const sections = [
        { id: 0, title: ["Web Developer", "Based in Tokyo"] },
        { id: 1, title: ["Under construction......"], bg: "bg-gray-100" }
    ];

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const progress = (currentScroll / totalHeight) * 100;
        setScrollProgress(progress);

        const currentSection = Math.floor(currentScroll / window.innerHeight);
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // sectionsには依存していないので空配列でOK

    useEffect(() => {
        if (activeSection === 0) {
            if (currentLine === 0) {
                // Web Developer をタイピングで表示
                if (typingIndex < sections[0].title[currentLine].length) {
                    const interval = setInterval(() => {
                        setTypedText((prev) => {
                            const newText = [...prev];
                            newText[currentLine] += sections[0].title[currentLine][typingIndex];
                            return newText;
                        });
                        setTypingIndex((prev) => prev + 1);
                    }, 100);
                    return () => clearInterval(interval);
                }

                if (typingIndex >= sections[0].title[currentLine].length && currentLine < sections[0].title.length - 1) {
                    setTimeout(() => {
                        setCurrentLine(1); // 次の行へ進む
                        setTypingIndex(0);
                        setIsCursorVisible(true); // 2行目のタイピングが始まる時にカーソルを再表示
                    }, 1000);
                }
            } else if (currentLine === 1) {
                // Based in Tokyo をタイピングで表示
                if (typingIndex < sections[0].title[currentLine].length) {
                    const interval = setInterval(() => {
                        setTypedText((prev) => {
                            const newText = [...prev];
                            newText[currentLine] += sections[0].title[currentLine][typingIndex];
                            return newText;
                        });
                        setTypingIndex((prev) => prev + 1);
                    }, 100);
                    return () => clearInterval(interval);
                }
            }
        }
    }, [typingIndex, activeSection, currentLine, sections]);  // sectionsを依存配列に追加

    // カーソルの点滅処理
    useEffect(() => {
        if (typingIndex >= sections[0].title[currentLine]?.length) {
            setIsCursorVisible(false); // 文字入力完了後、カーソルを非表示
            if (currentLine === 1) {
                setIsTypingComplete(true); // 最終行（2行目）のタイピングが完了したことを設定
            }
        } else {
            const cursorInterval = setInterval(() => {
                setIsCursorVisible((prev) => !prev);
            }, 500);

            return () => {
                clearInterval(cursorInterval);
            };
        }
    }, [typingIndex, currentLine]);

    return (
        <div className="relative min-h-screen">
            <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-2 sm:w-1 md:w-2 lg:w-2 bg-gray-300 z-50">
                <div className="h-full bg-blue-500" style={{ height: `${scrollProgress}%` }} />
            </div>

            <div className="fixed top-1/2 md:right-10 lg:right-10 right-5 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`w-2 h-2 md:w-4 md:h-4 lg:w-4 lg:h-4 rounded-full cursor-pointer ${activeSection === section.id ? "bg-blue-500" : "bg-gray-500"}`}
                        onClick={() => {
                            window.scrollTo({
                                top: section.id * window.innerHeight,
                                behavior: "smooth",
                            });
                        }}
                    />
                ))}
            </div>

            {sections.map((section, index) => (
                <div key={section.id} className={`h-screen flex items-center justify-center ${section.bg}`}>
                    <div className={`text-3xl font-bold ${index === 0 ? "text-center" : "text-left w-full pl-10"}`}>
                        {index === 0 ? (
                            <>
                                <p className="text-4xl sm:text-2xl md:text-6xl lg:text-8xl">
                                    {typedText[0]}{isCursorVisible && currentLine === 0 &&
                                    <span className="text-black">|</span>}
                                </p>
                                {currentLine === 1 && (
                                    <p className="text-xl sm:text-sm md:text-2xl lg:text-2xl">
                                        {typedText[1]}{isCursorVisible && currentLine === 1 &&
                                        <span className="text-black">|</span>}
                                    </p>
                                )}
                            </>
                        ) : (
                            section.title.map((line, idx) => (
                                <p key={idx}
                                   className={idx === 0 ? "text-4xl sm:text-xl md:text-4xl lg:text-6xl" : "text-2xl sm:text-sm md:text-2xl lg:text-2xl"}>
                                    {line}
                                </p>
                            ))
                        )}
                    </div>
                </div>
            ))}

            {isTypingComplete && (
                <div className="fixed bottom-5 left-0 right-0 text-center">
                </div>
            )}
        </div>
    );
};

export default Home;
