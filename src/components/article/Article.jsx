import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, description }) => (
  <div className="dnt__blog-container_article">
    <div className="dnt__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="dnt__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>{description}</p>
    </div>
  </div>
);

export default Article;
