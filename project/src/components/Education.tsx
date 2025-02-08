import React from "react";

const Education = () => {
  const education = [
    {
      degree: "BTech in Biomedical Engineering",
      school: "SRM Institute of Science and Technology, KTR",
      period: "2022 - 2026",
      cgpa: "9.62 / 10",
    },
    {
      degree: "12th Grade",
      school: "Sri Chaitanya Junior College, Guntur",
      period: "2018 - 2020",
      marks: "939 / 1000",
      cgpa: "9.70 / 10",
      neetmarks: "496 / 720 (2021)",
    },
    {
      degree: "10th Grade",
      school: "Sri Krishna  Chaitanya Model School, Narasaraopet",
      period: "2017 - 2018",
      cgpa: "9.8 / 10",
    },
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

              <p className="text-gray-300">
                {edu.cgpa && <span>CGPA: {edu.cgpa} | </span>}
                {edu.marks && <span>Marks: {edu.marks} | </span>}
                {edu.neetmarks && <span>NEET: {edu.neetmarks}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
