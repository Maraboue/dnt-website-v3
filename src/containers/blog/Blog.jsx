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
        <Article imgUrl={blog01} refLink="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub" date="Research & Results" text="Dynamic Network Whitepaper" description="Read the whitepaper and deep dive into the core of the Dynamice Network." />
      </div>
      <div className="dnt__blog-container_groupB">
        <Article imgUrl={blog02} refLink="https://docs.google.com/document/d/e/2PACX-1vR_LcCdc9HBBLpmufoHLqPKs38zFeYzZPp0fo8Q2UNXhgq_K3UKM0oushG7lN1D4Bh_TF4Sjh_ueFOu/pub" date="Burning & Minting" text="Token Burning" description="Get to know the mechanisms behind the dynamic burning and minting." />
        <Article imgUrl={blog03} refLink="https://docs.google.com/document/d/e/2PACX-1vTO-bSLRZ9AKnrrPIGwdw7f3Aa7R86yWA7T56fITJ2LObRU-X1-FozsnJr5FeJ3NweH5F1A_YEyqeE7/pub" date="Overview" text="$DNT Overview" description="Take an overview look of the token and project here." />
        <Article imgUrl={blog04} refLink="https://docs.google.com/document/d/e/2PACX-1vTLgagJ4YEUFDJajGyl3SYT9tbbfLIvdq8e8Bj7qsK3IqAgdk0KUlK8b6LD_ejYawL6gdL91a4F-Hgq/pub" date="Deflationary mechanism" text="Network Based Burning" description="See how we manage to increse deflation even more." />
        <Article imgUrl={blog05} refLink="https://dynamic-network.medium.com/" date="Blog" text="Dynamic Network Blog" description="Follow updates and events in the network here." />
      </div>
    </div>
  </div>
);

export default Blog;
