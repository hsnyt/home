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
    <div className="text-center p-6">
        <p className="text-3xl mb-4 font-bold">{title}</p>
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
                </div>
            ))}
        </div>
    </div>
);

const Stack: React.FC = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-12 font-sans　pt-20 sm:pt-32">

        {/* Frontend Skills */}
        <SkillSection
            title="Frontend Development"
            skills={[{ name: 'react' }, { name: 'hono'}, { name: 'ts'}]}
        />

        <SkillSection
            title="Styling & UI"
            skills={[{ name: 'tailwind'}]}
        />

        {/* Backend Skills */}
        <SkillSection
            title="Backend Development"
            skills={[{ name: 'php' }, { name: 'python' }, { name: 'c' }]}
        />

        <SkillSection
            title="Database"
            skills={[{ name: 'mysql' }]}
        />

        {/* Cloud Skills */}
        <SkillSection
            title="Infrastructure"
            skills={[{ name: 'aws' }, { name: 'gcp' }, { name: 'cloudflare' }]}
        />

        {/* Dev Tools */}
        <SkillSection
            title="Development Tools"
            skills={[{ name: 'docker' }, { name: 'zapier' }, { name: 'line' }, { name: 'contentful' }]}
        />

        <SkillSection
            title="Design Tools"
            skills={[{ name: 'figma' }, { name: 'photoshop' }]}
        />

        <SkillSection
            title="Others"
            skills={[{ name: 'notion' }, { name: 'salesforce' }]}
        />
    </div>
);

export default Stack;
