import React from 'react';

const getImage = (fileName: string): string => `/images/${fileName}.png`;

interface Skill {
    name: string;
}

interface SkillSectionProps {
    title: string;
    skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg p-3 shadow-sm">
                        <img
                            src={getImage(skill.name)}
                            className="w-full h-full object-contain"
                            alt={skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                        />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">
                        {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => (
    <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
            {/* Frontend Skills */}
            <SkillSection
                title="Frontend Development"
                skills={[{name: 'react'}, {name: 'hono'}, {name: 'ts'}]}
            />

            <SkillSection
                title="Styling & UI"
                skills={[{name: 'tailwind'}]}
            />

            {/* Backend Skills */}
            <SkillSection
                title="Backend Development"
                skills={[{name: 'php'}, {name: 'python'}, {name: 'c'}]}
            />

            <SkillSection
                title="Database"
                skills={[{name: 'mysql'}]}
            />

            {/* Cloud Skills */}
            <SkillSection
                title="Infrastructure"
                skills={[{name: 'aws'}, {name: 'gcp'}, {name: 'cloudflare'}]}
            />

            {/* Dev Tools */}
            <SkillSection
                title="Development Tools"
                skills={[{name: 'docker'}, {name: 'zapier'}, {name: 'line'}, {name: 'contentful'}]}
            />

            <SkillSection
                title="Design Tools"
                skills={[{name: 'figma'}, {name: 'photoshop'}]}
            />

            <SkillSection
                title="Others"
                skills={[{name: 'notion'}, {name: 'salesforce'}]}
            />
        </div>
    </div>
);

export default Skills;
