---
title: "2020 Website Refresh"
description: "With the advent of 2020, I decided that it was time to launch a brand-new website"
date: 2020-05-10
slug: 2020-website-refresh
---

With the advent of 2020, I decided that it was time to launch a brand-new website. Not only did I want to refresh the look and feel of my website, but I also wanted to create a platform where I could share my thoughts as well as the knowledge I have learnt throughout my career thus far, hopefully helping other developers.

When it came to designing the website, I decided that I wanted to focus on minimalism and develop a site that's main focus was the content. I did not want a website that looked busy or overly flashy. It had to be clean, legible and have subtle nuances that complimented the overall look and feel of the website.

My development requirements were pretty simple. It needed to first and foremost have the ability to display blog posts. I quite liked the idea of using markdown files and being able to have my posts in the same repository as the website which could be viewed by anyone. It needed to utilize semantic HTML markup, which I suppose is not a requirement but more of personal preference and best practice. I also needed to have a form where viewers of the website could sign up to my mailing list. For my mailing list, I decided to go with Mailchimp because of their extremely generous free plan. I decided against adding a contact form because I have yet to see any real benefit from adding one to my website.

I recently discovered Tailwind, a utility-first CSS framework that allows for rapid development of custom designs. After playing around with it for a few weeks, I immediately fell in love. The great thing about it is that it allows the developer the ability to customize every aspect of the framework, from default container size to custom breakpoints and so much more. Gone are the days of being restricted to opinionated styles that are a nightmare to override. I thus began developing a static version of my new website using Tailwind. It was slightly challenging at first, mainly due to not knowing what the naming conventions were. I began to realize how it all pieced together after developing a variety of different components and pages.

Having chosen my preferred front-end development framework, I needed to decide on what the rest of the stack would be. I played around with a few ideas, being a PHP developer by trade I initially built this website in Laravel. I have a strong passion for the framework as well as the entire eco-system. However, this did not fit my needs. I wanted to build something that utilized the JAM stack, simply because it was something different and would be a fantastic learning experience. An added benefit and most certainly a big plus is that you can host your website for free, the only added cost being the purchase of a domain. For further information on what the JAM stack is, a brief guide is available here.

Shortly after this decision to go down the JAM stack route, I discovered Gatsby, which is a framework based on top of React. I have immense respect for this framework and what the team behind it are currently doing and will most certainly use it again. However, after developing a further iteration of my website, I found that it did not fit my needs either. I began searching for an alternative. My short term goal at this point was to find something which allowed me to keep using React and not abandon it altogether.

Not long after this, I stumbled upon Vercel and Next.js. Having read the majority of the documentation, this was exactly how I wanted to build my new website. It combined simplicity with modern development processes and technologies and most importantly allowed me to keep using React.

The most challenging part of migrating to this framework and platform was wrapping my head around the deployment process and how to add/update domain-related settings. If Google didn't have the answers, I found quite a few on their Spectrum community forum, which is very beneficial!

I will be writing further blog posts about Next.js, Vercel and various other topics in the coming weeks and months, which will hopefully guide other developers in setting up their projects, so stay tuned!

This website will remain an ongoing work in progress, which you will be able to follow on my Twitter account as i gradually add or replace features.

