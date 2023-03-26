import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="dnt__blog section__padding" id="docs">
    <div className="dnt__blog-heading">
      <h1 className="gradient__text">Want to know more?<br /> Get to know the Dynamic Network in depth.</h1>
    </div>
    <div className="dnt__blog-container">
      <div className="dnt__blog-container_groupA">
        <Article imgUrl={blog01} date="Research & Results" text="Dynamic Network Whitepaper" description="Read the whitepaper and deep dive into the core of the Dynamice Network." />
      </div>
      <div className="dnt__blog-container_groupB">
        <Article imgUrl={blog02} date="Burning & Minting" text="Token Burning" description="Get to know the mechanisms behind the dynamic burning and minting." />
        <Article imgUrl={blog03} date="Overview" text="$DNT Overview" description="Take an overview look of the token and project here." />
        <Article imgUrl={blog04} date="Deflationary mechanism" text="Network Based Burning" description="See how we manage to increse deflation even more." />
        <Article imgUrl={blog05} date="Blog" text="Dynamic Network Blog" description="Follow updates and events in the network here." />
      </div>
    </div>
  </div>
);

export default Blog;
