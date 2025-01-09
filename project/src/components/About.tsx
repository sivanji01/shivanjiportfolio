import React from 'react';

const About = () => {
  const skills = [
    {
      title: '3D Segmentation and Modeling',
      description: `Proficient in using tools like 3D Slicer for medical imaging. 
        Segmented complex structures like the heart, lungs, and thorax into distinct components (e.g., atria, ventricles, right/left lungs).
        Expertise in image enhancement and segmentation using advanced techniques like seed-based segmentation.`,
    },
    {
      title: 'Biomedical Instrumentation',
      description: `Skilled in designing and developing biomedical devices for diagnostic and therapeutic applications. 
        Experience includes:
        - Developing a COPD diagnostic cum therapeutic device combining spirometry and hyperthermia therapy.
        - Creating innovative systems like automated saline bag monitoring for patient safety.`,
    },
    {
      title: 'Circuit Fabrication and Microcontroller Programming',
      description: `Proficient in designing and implementing circuits for biomedical applications. 
        Hands-on experience with Arduino and sensors for real-time monitoring systems, including:
        - Saline bag monitoring with load cells and piezo buzzers.
        - Insole pressure distribution analysis using force sensors.`,
    },
    {
      title: 'Data Processing and Feature Extraction',
      description: `Skilled in handling biomedical signals like ECG:
        - Downloading and processing data from databases (e.g., MIT).
        - Adding noise, filtering using Butterworth high-pass filters, and extracting statistical features.
        - Knowledge of machine learning for classifying biomedical data.`,
    },
    {
      title: 'Imaging Techniques',
      description: `Knowledgeable in imaging modalities like CT scans and PET scans.
        Experience in segmenting and enhancing medical images for better diagnosis and visualization.`,
    },
    {
      title: 'Research and Innovation',
      description: `Strong focus on addressing healthcare challenges in low-resource settings.
        Conducted community initiatives, such as NGO-based healthcare programs, showcasing leadership and problem-solving skills.`,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <p className="text-gray-300 mb-6">
          I am Alluri Sivanji, a 3rd-year Biomedical Engineering student at SRM University, Kattankulathur. 
          I am passionate about combining engineering and healthcare to improve medical technology and patient outcomes.
        </p>

        {/* Skills Section */}
        <h3 className="text-2xl font-semibold text-white mb-6 mt-12">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-purple-600"
            >
              <h4 className="text-lg font-semibold text-purple-400 mb-2">{skill.title}</h4>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
