import React from 'react';
import './Experience.css';
import { BsBriefcase } from 'react-icons/bs';

const Experience = () => {
  const experienceData = [
    {
      title: 'Executive, Software Development',
      company: 'Cultive8 Technologies | Dhaka, Bangladesh',
      duration: 'September 2024 - December 2025',
      responsibilities: [
        'Spearheading end-to-end development of enterprise ERP modules (Payroll, Plucking, HR) using React.js, Node.js, and .NET Core.',
        'Architecting optimized database schemas with SQL Server & EF Core, improving report generation performance by 30%.',
        'Refactoring legacy APIs using Clean Architecture and async processing, successfully reducing API latency by 40%.',
        'Building a scalable, reusable React component library integrated with Zustand & Redux for state management.',
        'Resolved 45+ critical production issues, reducing user-reported system errors by over 50% through proactive debugging and code reviews.',
        'Mentored junior team members on React hooks, REST API standards, and Git workflows.'
      ]
    },
    {
      title: 'Intern Full Stack Developer',
      company: 'DataXpie Ltd. | UK (Remote)',
      duration: 'June 2023 - November 2023',
      responsibilities: [
        'Assisted in full-stack development tasks including frontend implementation with HTML5, CSS3, and JavaScript.',
        'Collaborated with experienced team members on web application features, conducting research and troubleshooting.',
        'Participated in team meetings, adhered to coding standards, and contributed to debugging and optimization efforts.',
        'Gained hands-on experience with full-stack development workflows in a remote, international team environment.'
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