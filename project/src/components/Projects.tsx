 import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import saline from './p1.jpg';
import p21 from './p21.jpg';
import p31 from './p31.jpg';
import p22 from './p22.jpg';
import p23 from './p23.jpg';
import p24 from './p24.jpg';
import p25 from './p25.jpg';
import p32 from './p32.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Real-time Monitoring Saline System',
      description: `As part of my journey in Biomedical Engineering, I developed a project aimed at automating saline bag monitoring. This system utilizes:
        - Arduino for control
        - Load cell and HX711 module for real-time weight monitoring
        - LCD display to provide status updates
        - Piezo buzzer for alerts when the saline level is low
        This project enhances patient safety by notifying healthcare professionals immediately, ensuring timely intervention.`,
      images: [saline], // Multiple images
      github: 'https://github.com/sivanji01',
      demo: 'https://sites.google.com/u/1/d/16g4BIkLEuaQrBUuSH5Gy97LH35gdzX5t/p/1ga3oJfWQy3ly29cKTbibnd3q5YcRb97b/preview?authuser=1&pli=1',
    },
    {
      title: 'Spirometer for Lung Function Testing',
      description: `This project focuses on diagnosing COPD through spirometry and advanced imaging:
        **Diagnostic Component**:
        - **Spirometer for Lung Function Testing**: Measures key parameters like FVC and FEV1 to assess lung function and identify airflow limitations, a hallmark of COPD.
        - **Image Segmentation and Enhancement**: Utilizes CT or X-ray to segment lung structures for detecting abnormalities.
        - **Confirmation of COPD**: Combines spirometry data with imaging to confirm the diagnosis.
        **Therapeutic Component**:
        - **Hyperthermia Treatment**: Uses radiofrequency, microwaves, or ultrasound to deliver controlled heat, improving airway clearance and reducing inflammation.
        - **Localized Therapy**: Targets affected lung areas with minimal side effects.`,
      images: [p21, p22, p23, p24, p25], // Multiple images
      github: 'https://github.com/sivanji01',
      demo: 'https://github.com/sivanji01',
    },
    {
      title: 'Insole Pressure Distribution Analysis',
      description: `This project focuses on developing a system for insole pressure distribution analysis using Arduino and force sensors. It aims to measure and visualize pressure variations under the foot, offering insights into gait patterns and foot health:
        **Components Used**:
        - **Arduino Board**: Central controller to process sensor data.
        - **Force Sensors**: Positioned at heel, arch, and forefoot to measure pressure at each point.
        - **Multiplexer**: Efficiently handles multiple sensor inputs.
        - **Power Supply**: Powers sensors and Arduino board.
        - **Data Logger/Wireless Module**: Transfers data for analysis.
        **Working Principle**:
        - **Pressure Sensing**: Force sensors detect pressure during standing or walking.
        - **Signal Processing**: Arduino converts analog signals to digital values.
        - **Data Visualization**: Pressure data is displayed as heatmaps or numerical values, highlighting high-pressure zones.
        **Applications**:
        - **Medical Analysis**: Identifies foot-related issues like flat feet or diabetic ulcers.
        - **Gait Analysis**: Provides insights into walking patterns and postural alignment.
        - **Sports Science**: Optimizes foot mechanics to reduce injury risks.
        - **Footwear Design**: Tailors insoles to individual pressure profiles for comfort and support.`,
      images: [p31, p32], // Multiple images
      github: 'https://github.com/sivanji01',
      demo: 'https://example.com',
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {/* Aligning images properly */}
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {project.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`${project.title} image ${imgIndex + 1}`}
                      className="w-full sm:w-2/3 md:w-3/4 lg:w-2/3 xl:w-3/4 object-cover h-72" // Adjusted size
                    />
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-purple-400"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
