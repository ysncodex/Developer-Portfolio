import React from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">
        Featured <span>Projects</span>
      </h2>
      <div className="portfolio__container container">
        {portfolio.map((item, index) => {
          return <PortfolioItem key={item.id} {...item} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
