import React from 'react';
import './Experience.css';
import { BsBriefcase } from 'react-icons/bs';

const Experience = () => {
  const experienceData = [
    {
      title: 'Executive, Software Development',
      company: 'Cultive8 Technologies | Dhaka, Bangladesh',
      duration: 'September 2024 – Present',
      responsibilities: [
        'Led development of enterprise ERP modules for payroll and employee management systems',
        'Improved application stability by 40% through systematic bug resolution',
        'Enhanced reporting system performance with optimized data loading and filtration',
        'Implemented key features including Excel/PDF exports and dynamic filtering',
        'Reduced report generation time by 30% through database and API optimization',
        'Mentored junior developers in Agile practices and code quality standards'
      ]
    },
    {
      title: 'WordPress Developer Intern',
      company: 'DataXpie | UK',
      duration: 'June 2023 - Nov 2023',
      responsibilities: [
        'Developed and maintained WordPress projects using modern development practices',
        'Enhanced website performance through plugin optimization and bug fixes',
        'Created custom themes and plugins using WordPress tech stack'
      ]
    }
  ];

  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="timeline-icon">
              <BsBriefcase />
            </div>
            <div className="experience-content">
              <h3 className="job-title">{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="duration">{job.duration}</p>
              <ul className="responsibilities">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;