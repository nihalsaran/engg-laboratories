import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ImageSlider component to handle multiple images for each lab
const ImageSlider = ({ images, labName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(current => 
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(current => 
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative aspect-video">
      <img 
        src={images[currentIndex]}
        alt={`${labName} - Image ${currentIndex + 1}`}
        className="rounded-md object-cover w-full h-full"
      />
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const LabsLandingPage = () => {
  const labs = [
    // {
    //   title: "Mechanical Workshop",
    //   description: "A comprehensive facility equipped with various machine tools, equipment, and workstations for mechanical fabrication, assembly, and hands-on training in manufacturing processes.",
    //   features: ["CNC Machines", "Lathe Operations", "Welding Station"],
    //   images: [
    //     `public/assets/mechanical_workshop_1.jpg`,
    //     `public/assets/mechanical_workshop_2.jpg`,
    //     `public/assets/mechanical_workshop_3.jpg`
    //   ]
    // },
    {
      title: "Material Testing Lab",
      description: "Advanced laboratory for analyzing material properties through various mechanical tests, featuring equipment for tensile, compression, hardness, and impact testing.",
      features: ["Universal Testing Machine", "Hardness Testers", "Impact Testing Equipment"],
      images: [
        `public/assets/material_testing_lab_1.jpg`,
        `public/assets/material_testing_lab_2.png`,
        `public/assets/material_testing_lab_3.png`,
        `public/assets/material_testing_lab_4.png`,
        `public/assets/material_testing_lab_5.png`,
        `public/assets/material_testing_lab_6.png`,
        `public/assets/material_testing_lab_7.png`,
        `public/assets/material_testing_lab_8.png`,
        `public/assets/material_testing_lab_9.png`,
        `public/assets/material_testing_lab_10.png`,
        `public/assets/material_testing_lab_11.png`,
        `public/assets/material_testing_lab_12.png`,
        `public/assets/material_testing_lab_13.png`
      ]
    },
    // {
    //   title: "Mechanics of Machines Lab",
    //   description: "Dedicated space for studying mechanical systems dynamics, kinematics, and mechanism analysis with various demonstration units and experimental setups.",
    //   features: ["Gear Trains", "Cam Analysis Units", "Balancing Equipment"],
    //   images: [
    //     `public/assets/mechanics_of_machines_lab_1.jpg`,
    //     `public/assets/mechanics_of_machines_lab_2.jpg`,
    //     `public/assets/mechanics_of_machines_lab_3.jpg`
    //   ]
    // },
    {
      title: "Heat Transfer Lab",
      description: "Specialized facility for conducting experiments related to various modes of heat transfer, featuring modern equipment for thermal analysis and measurement.",
      features: ["Conduction Apparatus", "Convection Setup", "Radiation Units"],
      images: [
        `public/assets/heat_transfer_lab_1.jpg`
      ]
    },
    {
      title: "Metrology Lab",
      description: "High-precision measurement facility equipped with advanced instruments for dimensional measurement, calibration, and quality control procedures.",
      features: ["CMM Machine", "Surface Roughness Tester", "Precision Gauges"],
      images: [
        `public/assets/metrology_lab_1.jpg`,
      ]
    },
    {
      title: "Hydraulics Lab",
      description: "Well-equipped laboratory for studying fluid power systems, featuring various hydraulic circuits, components, and test benches.",
      features: ["Hydraulic Trainers", "Flow Measurement", "Pressure Testing"],
      images: [
        `public/assets/hydraulics_lab_1.jpg`,
        `public/assets/hydraulics_lab_2.jpg`,
        `public/assets/hydraulics_lab_3.jpg`,
        `public/assets/hydraulics_lab_4.jpg`,
        `public/assets/hydraulics_lab_5.jpg`,
        `public/assets/hydraulics_lab_6.jpg`,
        `public/assets/hydraulics_lab_7.jpg`,
        `public/assets/hydraulics_lab_8.jpg`,
      ]
    },
    {
      title: "Fluid Mechanics Lab",
      description: "Comprehensive facility for studying fluid behavior and flow characteristics through various experimental setups and measurement systems.",
      features: ["Flow Visualization", "Pipe Networks", "Pump Test Rigs"],
      images: [
        `public/assets/fluid_mechanics_lab_1.jpg`,
        `public/assets/fluid_mechanics_lab_2.jpg`,
        `public/assets/fluid_mechanics_lab_3.jpg`,
        `public/assets/fluid_mechanics_lab_4.jpg`,
        `public/assets/fluid_mechanics_lab_5.jpg`,
        `public/assets/fluid_mechanics_lab_6.jpg`,
        `public/assets/fluid_mechanics_lab_7.jpg`,
        `public/assets/fluid_mechanics_lab_8.jpg`,
      ]
    },
    {
      title: "Automobile Lab",
      description: "Modern facility featuring various automotive systems and components for hands-on learning and testing of vehicle mechanics and performance.",
      features: ["Engine Test Beds", "Transmission Systems", "Diagnostic Equipment"],
      images: [
        `public/assets/automobile_lab_1.jpg`,
        `public/assets/automobile_lab_2.jpg`,
        `public/assets/automobile_lab_3.jpg`,
        `public/assets/automobile_lab_4.jpg`, 
        `public/assets/automobile_lab_5.jpg`,
        `public/assets/automobile_lab_6.jpg`,
        `public/assets/automobile_lab_7.jpg`,
        `public/assets/automobile_lab_8.jpg`,
        `public/assets/automobile_lab_9.jpg`,
        `public/assets/automobile_lab_10.jpg`,
        `public/assets/automobile_lab_11.jpg`,
        `public/assets/automobile_lab_12.jpg`,
        `public/assets/automobile_lab_13.jpg`
      ]
    },
    {
      title: "Thermal Lab",
      description: "Advanced laboratory for studying thermodynamic principles and heat engines, equipped with various thermal systems and measurement devices.",
      features: ["Steam Generators", "IC Engines", "Heat Exchangers"],
      images: [
        `public/assets/thermal_lab_1.jpg`
      ]
    },
    // {
    //   title: "Material Science Lab",
    //   description: "Specialized facility for studying material structures, properties, and behavior at microscopic levels with advanced analysis equipment.",
    //   features: ["Microscopes", "Sample Preparation", "Testing Equipment"],
    //   images: [
    //     `public/assets/material_science_lab_1.jpg`,
    //     `public/assets/material_science_lab_2.jpg`,
    //     `public/assets/material_science_lab_3.jpg`
    //   ]
    // },
    {
      title: "Manufacturing Science Lab",
      description: "State-of-the-art facility for studying and practicing various manufacturing processes and techniques with modern machinery.",
      features: ["Advanced CNC", "3D Printers", "Process Planning Tools"],
      images: [
        `public/assets/manufacturing_science_lab_1.jpg`,
        `public/assets/manufacturing_science_lab_2.jpg`,
        `public/assets/manufacturing_science_lab_3.jpg`
      ]
    },
    {
      title: "Refrigeration and Air Conditioning",
      description: "Comprehensive lab for studying HVAC systems, refrigeration cycles, and thermal comfort analysis with modern equipment.",
      features: ["AC Units", "Refrigeration Systems", "Psychrometric Chamber"],
      images: [
        `public/assets/refrigeration_and_air_conditioning_lab_1.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_2.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_3.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_4.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_5.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_6.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_7.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_8.jpg`,
        `public/assets/refrigeration_and_air_conditioning_lab_9.jpg`
      ]
    },
    // {
    //   title: "SQC & IE Lab",
    //   description: "Dedicated space for learning statistical quality control methods and industrial engineering principles with various analysis tools.",
    //   features: ["Quality Control Tools", "Work Study Equipment", "Process Analysis Software"],
    //   images: [
    //     `public/assets/sqc_ie_lab_1.jpg`,
    //     `public/assets/sqc_ie_lab_2.jpg`,
    //     `public/assets/sqc_ie_lab_3.jpg`
    //   ]
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Engineering Laboratories
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-gray-700">
                  {lab.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ImageSlider images={lab.images} labName={lab.title} />
                <div className="mt-4">
                  <p className="text-gray-600 mb-3">{lab.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {lab.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabsLandingPage;