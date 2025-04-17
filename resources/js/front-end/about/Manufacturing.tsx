import React from 'react';
import { ArrowRight, Ruler, Target, AlertCircle, Zap, Wrench, Cog, Shield, Cpu } from 'lucide-react';

interface Capability {
  id: string;
  title: string;
  image: string;
  features: string[];
  precision?: string; // Added technical specification
  capacity?: string; // Added technical specification
}

interface ManufacturingProps {
  className?: string;
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  capabilities?: Capability[];
  buttonText?: string;
  buttonLink?: string;
  companyName?: string;
}

const Manufacturing: React.FC<ManufacturingProps> = ({
  className = '',
  title = <>Manufacturing <span className="text-primary-600">Capabilities</span></>,
  subtitle = 'Technical Expertise',
  description = 'Our vertically integrated manufacturing facility combines advanced technologies and processes to deliver complete solutions from concept to finished component.',
  capabilities = [
    {
      id: 'CAP-01',
      title: 'Aluminum Die Casting',
      image: 'https://images.unsplash.com/photo-1612690021485-a4b7f3c8bf9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: [
        'High-pressure die casting up to 1,600 tons',
        'Multi-cavity tooling for efficient production',
        'Aluminum alloys: ADC12, A380, A356, A413',
        'Component weight range: 50g to 10kg'
      ],
      precision: '±0.1mm',
      capacity: '500,000 units/year'
    },
    {
      id: 'CAP-02',
      title: 'CNC Precision Machining',
      image: 'https://images.unsplash.com/photo-1592204153678-5be290cf857e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: [
        '25 CNC machining centers including 5-axis',
        'High-precision machining to ±0.01mm tolerance',
        'Advanced CAM programming capabilities',
        'Complex geometry and thin-wall machining'
      ],
      precision: '±0.01mm',
      capacity: '750,000 units/year'
    },
    {
      id: 'CAP-03',
      title: 'Surface Treatment',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: [
        'Anodizing line (Type II and Type III)',
        'Powder coating with automated application',
        'E-coating for corrosion protection',
        'Mechanical finishing: polishing, bead blasting'
      ],
      precision: 'Class A surface',
      capacity: '900,000 units/year'
    }
  ],
  buttonText = 'View All Capabilities',
  buttonLink = '#',
  companyName = 'CQS'
}) => {
  // Technical patterns
  const gridPatternClass = "bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]";
  const diagonalPatternClass = "bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:8px_8px]";

  // Current year for reference codes
  const currentYear = new Date().getFullYear();

  // Icons for capabilities (you can map these to specific capability IDs if needed)
  const capabilityIcons = {
    'CAP-01': <Zap size={16} className="text-primary-600" />,
    'CAP-02': <Wrench size={16} className="text-primary-600" />,
    'CAP-03': <Shield size={16} className="text-primary-600" />
  };

  // Icons for feature lists (you can use these randomly or map to specific features)
  const featureIcons = [
    <Target size={12} className="text-primary-500" />,
    <Cog size={12} className="text-primary-500" />,
    <Cpu size={12} className="text-primary-500" />,
    <AlertCircle size={12} className="text-primary-500" />
  ];

  return (
    <section className={`py-16 md:py-24 bg-white relative overflow-hidden ${className}`}>
      {/* Technical background patterns */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none ${gridPatternClass}`}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_49px,#eee_50px,#eee_51px,transparent_51px),linear-gradient(to_bottom,transparent_49px,#eee_50px,#eee_51px,transparent_51px)] [background-size:50px_50px] opacity-[0.4]"></div>

      {/* Technical corner accents */}
      <div className="absolute top-8 right-8 w-32 h-32 border-t border-r border-neutral-300 hidden lg:block"></div>
      <div className="absolute bottom-8 left-8 w-32 h-32 border-b border-l border-neutral-300 hidden lg:block"></div>

      {/* Technical measurement marks */}
      <div className="absolute top-0 left-0 right-0 h-2 flex opacity-30 hidden md:flex">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 border-r border-neutral-400/20 relative">
            {i % 5 === 0 && (
              <div className="absolute top-0 right-0 w-0.5 h-2 bg-neutral-400/50"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          {/* Technical section label */}
          <div className="inline-flex items-center bg-neutral-800/90 text-white px-4 py-2 mb-6 border-l-2 border-primary-600 relative">
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary-500"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary-500"></div>
            <Ruler className="mr-2" size={14} />
            <span className="text-sm font-medium tracking-wider uppercase">{subtitle}</span>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight text-center">
            {title}
          </h2>

          <div className="w-20 h-0.5 bg-neutral-300 mb-8 relative">
            <div className="absolute -top-1.5 left-1/2 w-3 h-3 border border-neutral-300 transform -translate-x-1/2 rotate-45"></div>
          </div>

          <p className="text-center text-neutral-600 max-w-2xl mb-12 relative">
            {description}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-neutral-400 whitespace-nowrap">
              <span className="mr-2">REF: {companyName}-CAP-{currentYear}</span>
              <span className="inline-block w-16 h-px bg-neutral-300 align-middle mx-2"></span>
              <span>VERSION 1.2</span>
            </div>
          </p>
        </div>

        {/* Blueprint-style technical detail */}
        <div className="w-full h-px bg-neutral-200 mb-10 relative">
          <div className="absolute -top-3 left-0 text-xs font-mono text-neutral-500">CAPABILITIES.INDEX</div>
          <div className="absolute -top-3 right-0 text-xs font-mono text-neutral-500">PRECISION.SPECS</div>
          {capabilities.map((capability, index) => (
            <div
              key={`marker-${index}`}
              className="absolute -top-1 w-0.5 h-2 bg-primary-600"
              style={{ left: `${(index + 1) * 25 - (index * 5)}%` }}
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-mono text-primary-600">
                {capability.id}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={`capability-${index}`}
              className="bg-white border border-neutral-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Enhanced technical reference badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm shadow-sm px-2 py-1 text-xs font-mono text-neutral-600 border border-neutral-200 z-10 flex items-center group-hover:border-primary-400 transition-colors">
                <span className="text-primary-600 mr-1">ID:</span>
                {capability.id}
              </div>

              {/* Technical corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-primary-600/30 transition-colors duration-300 z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-primary-600/30 transition-colors duration-300 z-10"></div>

              <div className="h-48 overflow-hidden relative">
                {/* Measurement marks */}
                <div className="absolute left-0 top-0 bottom-0 w-1 flex flex-col z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex-1 border-b border-white/30 relative">
                      {i % 2 === 0 && (
                        <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-white/50"></div>
                      )}
                    </div>
                  ))}
                </div>

                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <div className={`absolute inset-0 ${diagonalPatternClass} opacity-10`}></div>

                {/* Enhanced title area with technical elements */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary-800/80 backdrop-blur-sm flex items-center justify-center rounded-sm border border-primary-600/50 mr-3">
                      {capabilityIcons[capability.id as keyof typeof capabilityIcons]}
                    </div>
                    <h3 className="text-white font-bold text-xl">{capability.title}</h3>
                  </div>

                  {/* Technical specifications */}
                  <div className="mt-2 flex items-center space-x-4 text-xs">
                    <div className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-sm border-l border-primary-600/50">
                      <span className="text-primary-400 mr-1 font-mono">PRE:</span>
                      {capability.precision}
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-sm border-l border-primary-600/50">
                      <span className="text-primary-400 mr-1 font-mono">CAP:</span>
                      {capability.capacity}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-neutral-200">
                {/* Technical specification header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Process Specifications</div>
                  <div className="text-xs font-mono text-neutral-400">{capability.id}.SPECS</div>
                </div>

                <ul className="space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <li
                      key={`feature-${index}-${featureIndex}`}
                      className="flex items-start text-sm text-neutral-600 group/item"
                    >
                      <div className="w-5 h-5 bg-neutral-50 border border-neutral-200 flex items-center justify-center rounded-sm mr-2 flex-shrink-0 mt-0.5 group-hover/item:bg-primary-50 group-hover/item:border-primary-200 transition-colors">
                        {featureIcons[featureIndex % featureIcons.length]}
                      </div>
                      <span className="group-hover/item:text-neutral-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technical footer */}
                <div className="mt-4 pt-3 border-t border-dashed border-neutral-200 flex justify-between items-center">
                  <div className="text-[10px] font-mono text-neutral-400">
                    SYS.VER.{currentYear}.{index+1}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">
                    <span className="text-primary-500">{capability.id}</span>/{companyName}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center relative">
          {/* Technical detail for the button */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-neutral-500 flex items-center">
            <div className="w-12 h-px bg-neutral-300 mr-2"></div>
            <span>ACTION.REFERENCE</span>
            <div className="w-12 h-px bg-neutral-300 ml-2"></div>
          </div>

          <a
            href={buttonLink}
            className="inline-flex items-center px-6 py-3 bg-neutral-800 hover:bg-primary-600 text-white font-medium transition-colors border border-neutral-700 hover:border-primary-700 relative group"
          >
            {/* Technical corner elements */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {buttonText}
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </a>

          {/* Technical reference number */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-neutral-500">
            DOC.{companyName}.CAP.{currentYear}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
