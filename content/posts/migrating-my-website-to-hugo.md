---
title: "Migrating My Website to Hugo"
description: "Originally built with Next.js and hosted on Vercel, this setup didn’t fit my needs for a couple of reasons."
publishdate: 2020-06-23T12:46:00+02:00
date: 2020-06-23T12:46:00+02:00
slug: migrating-my-website-to-hugo
---

During the last 12 months I have gone through various iterations of my website, which was created to publish educational articles on various tech related topics. Originally built with Next.js and hosted on Vercel, this setup didn’t fit my needs for a couple of reasons.

First and foremost I have come to the realisation that I much prefer working with static HTML, CSS and a sprinkling of JavaScript where needed, returning to the basics that made the web so wonderful in the first place. It enables me to quickly scaffold projects without worrying about the complexity of React, Vue or other frameworks. This means that while Next.js is relatively lightweight compared to other frameworks, it is still too verbose for my needs.

> This doesn’t mean that everything I am working on is completely vanilla these days. During my day job at [PlusNarrative](https://plusnarrative.com/) we primarily build PHP based projects in Laravel and WordPress. The former being a framework that I am extremely passionate about. In my personal projects I work with a variety of languages/frameworks such as PHP, Laravel, Go, JavaScript, Alpine.js, Livewire and last but certainly not least Tailwind.

I thoroughly enjoy working with Tailwind which encourages styling to be added in the markup as opposed to the stylesheet. A personal pain point with React is how, when declaring classes on each component, I cannot simply use class="", I have to use className="" which seems a little unnecessary. Hopefully this is changed in future versions of React.

I also dislike how my markdown files (which were actually .MDX files) contain code to set metadata for the post. If I am using an app to write or edit my files, I have to bring them across from the app and add the necessary code to the top of each file. (Perhaps there is a way around this, but I never found one.)

Last but not least, I found it tricky working with .env files and variables I did not want to expose to the public.

I initially decided to use this stack because I wanted to avoid paying monthly server costs, managing a server and worrying about deploying my updates usually associated with PHP based projects. 

It became a tedious task to work with the current setup, update it and plan future additions to the website let alone write content. I wanted to enjoy working on my website again and create content other people from around the world would hopefully find valuable. 

## Enter [Hugo](https://gohugo.io/).

Over the past few months I have been casually learning Go, simply because I wanted to learn a language that was completely different from what I am used to, PHP. After going down this path I began seeing a buzz around a framework called Hugo and found out that it is a static site generator built on top of Go. My interest was piqued. Upon landing on the homepage I noticed Hugo’s bold claim to be, and I quote:

> "The world’s fastest framework for building websites."
>
> Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

In a nutshell this is exactly what I wanted, a framework that is incredibly fast, flexible and most importantly makes working on my website fun again. I already knew how fast Go projects were, but after further research followed by watching their speed benchmark [video](https://www.youtube.com/watch?v=CdiDYZ51a2o&feature=emb_title), I was blown away. I finally settled on the idea of migrating my existing website to this framework.

## Setup:

I predominantly work on Mac so for the purpose of this tutorial I will not be covering Windows or Linux implementations. This tutorial will not cover every aspect of Hugo, but it will go through the various steps I took when setting up my project.

In order to get started with Hugo, the easiest way is by making use of [Homebrew](https://brew.sh/).

```
$ brew install hugo
```

Once this is installed you can create a new Hugo project by running the following command:

```
$ hugo new site site_name
```

There are many other helpful commands that can be used in Hugo projects which can be found [here](https://gohugo.io/commands/).

Throughout this tutorial I will be using an opinionated folder structure as well as personal practices that I make use of when building projects.

## Folder structure:

After running the command to create a new project, Hugo will generate the following directory structure:

{{< figure src="/img/posts/folder-structure.jpg" alt="Hugo folder structure" >}}

This folder structure may seem foreign at first, but I can assure you that once you get accustomed to it like most things, it is relatively straight forward. 

**Archetypes**: An archetype is a content template which contains a set of preconfigured [frontmatter](https://gohugo.io/content-management/front-matter/) variables, you can add your own or modify them in any way that you see fit. For example if you would like to create a frontmatter template that would be used for posts, you would add a file called posts.md in the archetypes directory. When Hugo creates a post it will use the variables specified in this file.

My archetype directory contains one template for posts, which has the following frontmatter variables defined:

{{< figure src="/img/posts/archetype-posts.jpg" alt="Hugo archetype configuration" >}}

This means that each post will have a title, date and a slug.

To use this template, I can run the following command: 

```
$ hugo new posts/new-post.md
```

This command creates a new post in the content/posts directory with the frontmatter values populated accordingly.

**Content**: Website content will be stored in this directory. The content directory can also have nested folders which would correspond to the various content sections of your website. For example, if your website has a blog, you would create a blog folder which would contain the websites articles.

**Data**: I did not need to make use of this folder, so I removed it but this directory can be used when you would like to add additional data/configuration for Hugo to utilize when generating your website. The files created in this directory must use the YAML, TOML or JSON file extensions.

**Layout**: The layouts' directory contains the various layouts used for posts, pages and other components on your website. There are a number of different templates that you can make use of, the two most common layouts are single.html and list.html. When creating a layout for a post or page, a single.html template file must be used. When creating a page that renders multiple types of content a list.html file must be used.

**Static**: The static directory is pretty straight forward, it stores static assets for your website, such as CSS, JS and images. The content of this directory is stored as is, so Hugo won’t modify it.

**Assets**: Hugo does not generate this directory by default. If you would like CSS/JS assets processed by Hugo’s [pipes](https://gohugo.io/hugo-pipes/), you may create this directory. I utilize pipes in the following way:

I retrieve the content of the stylesheet, which then passes it through PostCSS which will apply my browser prefixes and minify the output. Once minified, the CSS is injected into a style tag within the head tags of my website.

Note: Using the assets' directory is optional, I created it so that I could make use of the above mentioned process.

**Config.toml**: The basic configuration for the project will be stored within this file. It can also be created in a number of formats such as JSON or YAML but the concept remains the same. There is a wide variety of [directives](https://gohugo.io/getting-started/configuration/#all-configuration-settings) that ship with Hugo which can be used that will enable you to fine tune your environment. Most projects will have a single config file which will reside inside the root of the project but for larger projects you can create a config directory which could contain multiple config files for various purposes or environments such as staging and production.

My configuration file is pretty straight forward and contains some basic variables that I use throughout the site:

{{< figure src="/img/posts/config.jpg" alt="My Hugo configuration file" >}}

Custom parameters can be added to your config file, which will be available globally in your project. These are defined by adding [params] followed by each variable on a new line.

Once these params are added you can access them throughout the project by using the following syntax, changing out the last value for the desired key:

```
{{ $.Site.Params.title }}
```

> When building your project, Hugo will create two further directories:
>
> **Resources**: Hugo caches certain aspects of your website to speed up generation, such as images and css files.
>
> **Public**: This will contain the production build of your project, which will be used to serve your website to the web.

## Additional Setup:

I needed to add a few additional packages to my project, Tailwind, PostCSS and Autoprefixer which are installed by running the following commands chained together:

```
$ npm i tailwindcss && npm i postcss && npm i autoprefixer
```

I use Tailwind for all of my personal projects, it provides a fantastic base to work with when starting new projects. PostCSS can be used to require a wide variety of additional plugins including the above mentioned Tailwind and Autoprefixer. I initialize Tailwind and create a postcss.config.js file with the following commands:

```
$ npx tailwind init && touch postcss.config.js 
```

The first command initializes a blank Tailwind configuration file followed by creating the PostCSS configuration file. 

Once this is created I add the following:

{{< figure src="/img/posts/postcss-config.jpg" alt="My PostCSS configuration file" >}}

## Adding Layouts:

There are various types of layout files that can be created in Hugo, and they all serve a specific purpose. The two most common layouts are baseof.html, list.html and single.html.

In order to create a set of default layouts, you will need to create a directory called _default inside the layouts' directory. This will house the default layouts used through the website. I created a baseof.html, list.html and single.html.

The baseof.html template is the master template for the website, inside this template you would include your head, main and footer tags, as well as any style, script or meta tags that you wish to use. 

Layout files include a construct called blocks, which allow you to define parts of the website such as the main content, which are then filled with your page/post content. 

A block can be defined with the following syntax:

```
{{ block "main" . }} {{ end }}
```

This creates a block called main, which will house the content of a post or page.

My baseof.html template is slightly more complex than what might suit most people, a simpler baseof.html file with blocks could look like this:

{{< figure src="/img/posts/base.jpg" alt="A simple baseof.html template file" >}}

When working with the baseof.html template, it is important to note that should you wish to create a home page that differs from this structure, you will need to create a separate template which will override this. 

In order to create a home page template, create a file inside the root of the layouts' directory called index.html. The markup used inside this template will be used solely for the home page.

{{< figure src="/img/posts/home.jpg" alt="A simple home page template" >}}

The content of this page can be pulled in via a markdown file inside the content directory. I chose to use markdown, so I created a file named _index.md. If you choose to not make use of a markdown file, you can also use HTML and avoid creating an _index.md file altogether.

To create a page template, a single.html must be created inside the _default directory to display its content, which can include optional markup if needed. My single.html simply makes use of the main block and fills it with the content of my pages. I do not need any custom markup for my pages so the following suits my needs:

```
{{ define "main" }}
{{ .Content }}
{{ end }}
```

In my project I do not use this template for my posts because my requirements for this template are slightly more complex. In order to create a specific layout for my posts, I created a directory within layouts called posts and then added a single.html file. Creating this folder indicates that this layout is purely for the posts content type. The reason I chose to not use the default single.html is because I wanted to be able to update the meta tags, add a canonical link for each post and add some additional markup that is used purely on posts.

Inside my posts template I define meta which will be used for each post, this includes twitter cards, open graph meta tags and a canonical link for my post. This meta is then injected into the head tags of my website.

```
{{ define "meta" }}
{{ end }}

{{ define "main" }}
{{ end }}
```

In order to display a list of posts on my posts page I created a list.html template inside the layouts/posts directory. This template needed to have the ability to paginate posts, luckily Hugo already ships with some boilerplate code known as internal templates. Internal templates cover a lot of common use cases such as pagination, google analytics, disqus comments and more. 

I included the pagination.html template using the following syntax:

```
{{ template "_internal/pagination.html" .  }}
```

To make use of this pagination template, I had to create a range loop which will loop through everything which has the content type of posts. I created a variable called $paginator, set which content type I wanted to loop through and set the loop to iterate through my posts:

```
{{ $paginator := .Paginate (where .Pages "Type" "posts" ) }}
{{ range $paginator.Pages }}
{{ .Title }}
{{ end }}
```

This will loop through the content inside my posts directory and output the titles of each post which is specified in the frontmatter variables. The default number of paginated posts is 10 per page which can be overridden inside your config.toml file by adding the "paginate" variable followed by your desired value:

```
Paginate: 5
```

The final layout which I created was a custom 404.html template which follows the same structure as a single.html template. This template will be used when a user attempts to visit a broken link, or a link that does not exist. 

```
{{ define "main" }}
<h1>Oops!</h1>
{{ end }}
```

## Adding Partials:

A partial is a file that is used to include something on a page, this could be anything from a newsletter signup form or a header/footer component etc. Partials will be used to include components that are reused throughout the site and serves as a handy method to avoid duplicate code. Partials can be created by adding a partials' directory inside the layouts' directory. Once you have created your partial, you can include that file by using the following syntax in the desired location of your project:

```
{{ partial "header.html" . }}
```

## Adding Page Content:

Page content can be pulled into layouts via a variety of data sources, the most common is by using markdown files, but you can also use plain HTML. Pages live inside the content directory with the file name corresponding to the page name, such as about.html or contact.html. 

Hugo allows pages to specify frontmatter variables at the top of each file, which follow the same format as markdown:

```
---
title: "About"
menu: main
weight: 1
---
```

The above syntax indicates that the title of the page is "About", it is visible inside the main menu and specifies a weight of 1. 

> [Weighting](https://gohugo.io/templates/lists/#by-weight) 
>will be used to specify the order of the pages in the navigation menu, this means that if you add additional pages with the weight of 2, it will be displayed after the "About" page. 

Directly below the frontmatter variables will be the page content, this can be in the form of plain text using markdown syntax or HTML.

## Adding Post Content:

Posts will be added similarly to pages, they also reside inside the content directory, however if you have created a blog or posts archetype, you would create a blog/posts directory inside the content directory. This would separate your pages and posts content into the appropriate directories.

A key difference with posts and pages is the frontmatter variables. It is considered good practice to add a title, date/publication date, and a slug that will be used for the post. Further variables can be specified such as a description, but these cover the most common use cases.

## Deploying to Netlify:

The final step was to deploy this website to Netlify. I was previously hosting my website on the Vercel platform but decided to migrate back to Netlify simply because I find the platform to be more user and developer friendly. Netlify also offers a whole host of features that Vercel does not, such as [build plugins](https://docs.netlify.com/configure-builds/build-plugins/), [analytics](https://www.netlify.com/products/analytics/) and more. 

If you have worked with Netlify you might know that you can create an optional netlify.toml file which allows you to specify additional configuration options for your project. My config file is relatively straight forward:

{{< figure src="/img/posts/netlify.jpg" alt="My Netlify configuration file" >}}

I specify the defaults to be used when building my project. The build command for my project is hugo followed by --minify which will minify the project at build time, and I set the default publish directory to be used which is public. 

The last optional configuration that I specify is the default version of Hugo to be used when building my project followed by the default hugo environment which is set to production.

I use GitHub for my personal projects, to push this project to the Netlify platform was as simple as importing the project into Netlify, the config file then populates my settings and deploys the project to a vanity URL. After changing my domain settings the process was complete!

## Closing Thoughts:

I have thoroughly enjoyed working with Hugo and Netlify once again. There have been a few minor frustrations along the way but that has purely been down to my own understanding of Hugo. However, a quick Google search has often yielded the answers to the questions I had. While my project is relatively simple, and I have not developed any complicated layouts I am happy with Hugo and I can’t find fault in anything that it sets out to achieve. It suits my needs, and I look forward to adding further features to this project as well as working on new projects that utilize this framework.

If you are looking for an incredibly fast static site generator, Hugo ticks all the boxes. 

If you are looking for a new challenge and framework, I cannot recommend it enough.
