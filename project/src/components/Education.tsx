import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University XYZ',
      period: '2020 - Present',
      description: 'Focus on Software Engineering and Artificial Intelligence',
      achievements: [
        'Dean\'s List 2021-2022',
        'President of Computer Science Club',
        'Winner of Annual Hackathon 2022'
      ]
    },
    {
      degree: 'High School Diploma',
      school: 'ABC High School',
      period: '2016 - 2020',
      description: 'Advanced Placement in Computer Science and Mathematics',
      achievements: [
        'Valedictorian',
        'First Place in Regional Programming Competition',
        'Math Club President'
      ]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-purple-400 pl-6 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-300">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-400">{edu.period}</span>
              </div>
              <p className="text-gray-300">{edu.description}</p>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Achievements
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;