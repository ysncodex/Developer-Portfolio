import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import './portfolioItem.css';

const PortfolioItem = ({ img, title, date, description, technologies, tags, demo, index }) => {
  const isEven = index % 2 === 1;

  return (
    <div className={`portfolio-card ${isEven ? 'portfolio-card--reverse' : ''}`}>
      <div className="portfolio-card__row">
        {!isEven ? (
          <>
            <div className="portfolio-card__image-container">
              <img src={img} alt={title} className="portfolio-card__image" />
            </div>
            <div className="portfolio-card__content">
              <div className="portfolio-card__header">
                <h3 className="portfolio-card__title">{title}</h3>
                <div className="portfolio-card__tags">
                  {tags.map((tag, index) => (
                    <span key={index} className="portfolio-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="portfolio-card__date">{date}</p>
              <p className="portfolio-card__description">{description}</p>
              <div className="portfolio-card__technologies">
                <p className="portfolio-card__tech-title">Technologies:</p>
                <p className="portfolio-card__tech-list">{technologies.join(', ')}</p>
              </div>
              <a href={demo} className="portfolio-card__button" target="_blank" rel="noopener noreferrer">
                See more <HiArrowRight className="button-icon" />
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="portfolio-card__content">
              <div className="portfolio-card__header">
                <h3 className="portfolio-card__title">{title}</h3>
                <div className="portfolio-card__tags">
                  {tags.map((tag, index) => (
                    <span key={index} className="portfolio-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="portfolio-card__date">{date}</p>
              <p className="portfolio-card__description">{description}</p>
              <div className="portfolio-card__technologies">
                <p className="portfolio-card__tech-title">Technologies:</p>
                <p className="portfolio-card__tech-list">{technologies.join(', ')}</p>
              </div>
              <a href={demo} className="portfolio-card__button" target="_blank" rel="noopener noreferrer">
                See more <HiArrowRight className="button-icon" />
              </a>
            </div>
            <div className="portfolio-card__image-container">
              <img src={img} alt={title} className="portfolio-card__image" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;