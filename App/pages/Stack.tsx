import React from 'react';

const getImage = (fileName: string): string => `/images/${fileName}.png`;

interface Skill {
    name: string;
    description: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface SkillSectionProps {
    title: string;
    description: string;
    skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, description, skills }) => (
    <div className="text-center p-6">
        <p className="text-3xl mb-4 font-bold">{title}</p>
        <p className="text-md mb-6 text-gray-700">{description}</p>
        <div className="flex flex-wrap gap-8 justify-center">
            {skills.map((skill) => (
                <div key={skill.name} className="relative group flex flex-col items-center text-center w-40">
                    <img
                        src={getImage(skill.name)}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-transform duration-300 group-hover:rotate-45"
                        alt={skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                    />
                    <span
                        className="mt-2 text-lg font-medium">{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</span>
                    <p className="text-xs mt-2 text-gray-600">{skill.description}</p>
                    {skill.level && (
                        <p className="text-sm mt-2">Expertise: {'★'.repeat(
                            skill.level === 'Beginner' ? 1 :
                                skill.level === 'Intermediate' ? 2 :
                                    skill.level === 'Advanced' ? 3 : 4
                        )}</p>
                    )}
                </div>
            ))}
        </div>
    </div>
);

const Stack: React.FC = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-12 font-sans">
        <div className="text-center">
            <p className="text-2xl font-bold mb-4">
                <span className="block sm:inline">スキルレベルの</span>
                <span className="block sm:inline sm:mb-0 mb-8">評価基準</span>
            </p>
            <ul className="text-md text-left text-gray-700 mx-auto max-w-xl space-y-6">
                <li className="flex flex-wrap sm:flex-nowrap items-start">
                    <div className="flex items-center sm:mr-4">
                        <span className="mr-2">{'★'}</span>
                        <strong className="mr-2">Beginner:</strong>
                    </div>
                    <span className="block sm:inline sm:mt-0 mt-2">基本的な知識や操作を習得し、簡単なタスクを実行可能。</span>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap items-start">
                    <div className="flex items-center sm:mr-4">
                        <span className="mr-2">{'★★'}</span>
                        <strong className="mr-2">Intermediate:</strong>
                    </div>
                    <span className="block sm:inline sm:mt-0 mt-2">実務経験があり、一般的なタスクをこなせる。</span>
                </li>
                <li className="flex flex-wrap sm:flex-nowrap items-start">
                    <div className="flex items-center sm:mr-4">
                        <span className="mr-2">{'★★★'}</span>
                        <strong className="mr-2">Advanced:</strong>
                    </div>
                    <span className="block sm:inline sm:mt-0 mt-2">複雑な問題に対応可能で、他者をサポートできるレベル。</span>
                </li>
            </ul>
        </div>

        {/* Frontend Skills */}
        <SkillSection
            title="Frontend Frameworks"
            description="フロントエンド開発で使用する主要なフレームワークです。"
            skills={[{ name: 'react', description: '', level: 'Intermediate' }, { name: 'hono', description: '', level: 'Beginner' }, { name: 'ts', description: '', level: 'Beginner' }]}
        />

        <SkillSection
            title="Styling & UI"
            description="UI/UX デザインとスタイリングに関するスキルセットです。"
            skills={[{ name: 'tailwind', description: '' }]}
        />

        {/* Backend Skills */}
        <SkillSection
            title="Backend Development"
            description="バックエンドの開発で使用するスキルセットです。"
            skills={[{ name: 'php', description: '', level: 'Intermediate' }, { name: 'python', description: '', level: 'Beginner' }, { name: 'c', description: '', level: 'Beginner' }]}
        />

        <SkillSection
            title="Database"
            description="データベース管理とクエリ操作に関するスキルセットです。"
            skills={[{ name: 'mysql', description: '', level: 'Intermediate' }]}
        />

        {/* Cloud Skills */}
        <SkillSection
            title="Cloud & Infrastructure"
            description="クラウドプラットフォームとインフラ関連のスキルセットです。"
            skills={[{ name: 'aws', description: '', level: 'Beginner' }, { name: 'gcp', description: '', level: 'Beginner' }, { name: 'cloudflare', description: '', level: 'Beginner' }]}
        />

        {/* Dev Tools */}
        <SkillSection
            title="Development Tools"
            description="開発で使用する主要なツールです。"
            skills={[{ name: 'docker', description: '', level: 'Beginner' }, { name: 'zapier', description: '', level: 'Intermediate' }, { name: 'line', description: '', level: 'Intermediate' }, { name: 'contentful', description: '', level: 'Intermediate' }]}
        />

        <SkillSection
            title="Design Tools"
            description="デザイン関連のツールスキルセットです。"
            skills={[{ name: 'figma', description: '', level: 'Intermediate' }, { name: 'photoshop', description: '', level: 'Beginner' }]}
        />

        <SkillSection
            title="Management Tools"
            description="プロジェクト管理および業務効率化ツールです。"
            skills={[{ name: 'notion', description: '' }, { name: 'salesforce', description: '', level: 'Beginner' }]}
        />

        <SkillSection
            title="Automation Tools"
            description="自動化と効率化のためのツールです。"
            skills={[{ name: 'ai', description: '', level: 'Intermediate' }]} />
    </div>
);

export default Stack;
