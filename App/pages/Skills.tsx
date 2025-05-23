import React from 'react';

const getImage = (fileName: string): string => `/images/${fileName}.png`;

interface Skill {
    name: string;
    displayName: string;
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
                            alt={skill.displayName}
                        />
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-600">
                        {skill.displayName}
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
                skills={[
                    {name: 'react', displayName: 'React '},
                    {name: 'hono', displayName: 'Hono'},
                    {name: 'ts', displayName: 'TypeScript'}
                ]}
            />

            <SkillSection
                title="Styling & UI"
                skills={[{name: 'tailwind', displayName: 'Tailwind CSS'}]}
            />

            {/* Backend Skills */}
            <SkillSection
                title="Backend Development"
                skills={[
                    {name: 'php', displayName: 'PHP'},
                    {name: 'python', displayName: 'Python'},
                    {name: 'c', displayName: 'C#'}
                ]}
            />

            <SkillSection
                title="Database"
                skills={[{name: 'mysql', displayName: 'MySQL'}]}
            />

            {/* Cloud Skills */}
            <SkillSection
                title="Infrastructure"
                skills={[
                    {name: 'aws', displayName: 'Amazon Web Services'},
                    {name: 'gcp', displayName: 'Google Cloud Platform'},
                    {name: 'cloudflare', displayName: 'Cloudflare'}
                ]}
            />

            {/* Dev Tools */}
            <SkillSection
                title="Development Tools"
                skills={[
                    {name: 'docker', displayName: 'Docker'},
                    {name: 'zapier', displayName: 'Zapier'},
                    {name: 'line', displayName: 'LINE Platform'},
                    {name: 'contentful', displayName: 'Contentful'}
                ]}
            />

            <SkillSection
                title="Design Tools"
                skills={[
                    {name: 'figma', displayName: 'Figma'},
                    {name: 'photoshop', displayName: 'Adobe Photoshop'}
                ]}
            />

            <SkillSection
                title="Others"
                skills={[
                    {name: 'notion', displayName: 'Notion'},
                    {name: 'salesforce', displayName: 'Salesforce'}
                ]}
            />
        </div>
    </div>
);

export default Skills;
