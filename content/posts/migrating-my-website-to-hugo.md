---
title: "Migrating My Website to Hugo"
description: "Originally built with Next.js and hosted on Vercel, this setup didn’t fit my needs for various reasons."
date: 2020-06-18T16:13:23+02:00
publishdate: 2020-06-18T16:13:23+02:00
slug: migrating-my-website-to-hugo
---

During the last 12 months I have gone through various iterations of this website, which I created to begin publishing articles on various tech related topics. 

Originally built with Next.js and hosted on Vercel, this setup didn’t fit my needs for various reasons.

1. I have come to the realisation over the last 12 months that I much prefer working with static HTML, CSS and a sprinkling of JavaScript where needed when working on smaller to medium projects as opposed to going with something like React or Vue. This means that while Next.js is relatively lightweight compared to other frameworks, it is still too verbose for my needs.

> This doesn’t mean that everything I am working on is completely vanilla these days. During my day job at PlusNarrative we primarily build PHP based projects in Laravel and WordPress. The former being a framework that I am extremely passionate about. In my personal projects I work with a variety of languages/frameworks such as Laravel, Go, JavaScript, Alpine.js, Livewire and last but certainly not least Tailwind.

2) I thoroughly enjoy working with Tailwind which encourages styling to be added in the markup as opposed to the stylesheet. A personal pain point with React is how, when declaring classes on each component, I cannot simply use class=””, I have to use className=”” which seems a little unnecessary. Hopefully this is changed in future versions of React.

3) I dislike how my markdown files (which are actually .MDX files) contain code to set meta data for the post. If I am using an app to write or edit my files, I have to bring them across from the app and add the necessary code to the top of each file. (I assume that there could be a way around this but I never found one.)

4) It could be down to my personal implementation, but I found it tricky working with .env files and variables I did not want to expose to the public.

I initially decided to use this stack because I wanted to avoid paying monthly server costs, managing a server and worrying about deploying my updates usually associated with PHP based projects. 

It became a tedious task to work with the current setup, update it and plan future additions to the website let alone write content. I wanted to enjoy working on my website again and create content that other people from around the world would hopefully find valuable. 

## Enter Hugo.

Over the past few months I have been casually learning Go, simply because I wanted to learn a language that was completely different from what I am used to, PHP. After going down this path I began seeing a buzz around a framework called Hugo and found out that it is a static site generator built on top of Go. My interest was piqued. Upon landing on the homepage I noticed Hugo’s bold claim to be, and I quote:

> “The world’s fastest framework for building websites”

Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

In a nutshell this is exactly what I wanted, a framework that is incredibly fast, flexible and most importantly makes working on my website fun again. I already knew how fast the Go language is, but after reading more about Hugo followed by watching their speed benchmark video, I was blown away. I finally settled on the idea of migrating my existing website to this framework.

## Setup:

I predominantly work on Mac so for the purpose of this guide I will only be covering that aspect and not Windows or Linux.

You will need to install a few things in order to get started with Hugo, the easiest way is by making use of Homebrew. The Homebrew website contains the necessary info to get started if you aren’t already making use of it. Once this is installed you can create a new Hugo site by running the following command:

{{< highlight bash >}}
$ hugo new site site_name
{{< / highlight >}}

Throughout this guide I will be using an opinionated folder structure as well as personal practices that I make use of when building projects. The folder structure of your project might be completely different and it might not suit your needs.

## Folder structure:

After running the above mentioned command, Hugo will generate the following directory structure:

[INSERT IMAGE OF FOLDER STRUCTURE HERE]

This folder structure may seem foreign at first but I can assure you that once you get accustomed to it like most things, it is relatively straight forward. 

**Archetypes**: An archetype is a content template which contains a set of preconfigured frontmatter variables, you can add your own or modify them in any way that you like. For example if you would like to create a template that would be used for posts, you would add a file called posts.md in this directory. My archetype directory contains one template and that is for posts, I have the following frontmatter variables defined:

[INSERT ARCHETYPE POSTS FILE IMAGE]

This means that each post will have a title, date and a slug.

To use this template, I can run the following command which will generate a new post in the content/posts directory and the frontmatter values will be populated accordingly.

{{< highlight bash >}}
$ hugo new posts/new-post.md
{{< / highlight >}}
 
**Assets**: This directory is not created by default and is used when you want the contents to be processed by Hugo’s pipes. I utilize pipes in the following way:

1) I retrieve the content of the stylesheet, which then passes it through PostCSS which will apply my browser prefixes.
2) The output is then minified.
3) Once minified, the CSS is injected into a <style></style> tag within the <head></head> tags.

Note: Using the assets directory is optional, I created this so that I could make use of the above mentioned process.

**Content**: All website content is stored within this directory. The content directory can also have nested folders which would correspond to the various content sections of your website. For example, if your website has a blog, you would create a blog folder which would contain the websites articles.

**Data**: I did not need to make use of this folder, so I removed it but this directory is used when you would like to add additional data/configuration for Hugo to utilize when generating your website. The files created in this directory must use the YAML, TOML or JSON file extensions

**Layout**: The layouts directory contains the various layouts used for posts, pages and other components on your website. There are a number of different templates that you can make use of, the two most common layouts are single.html and list.html. When creating a layout for a post or page, a single.html template file is used. When creating a page that renders multiple types of content a list.html file is used.

**Static**: The static directory is pretty straight forward, it stores all of the static assets for your website, such as CSS, JS and images. The content of this directory is stored as is, so Hugo won’t modify it.

**Config.toml**: This file is used to house basic configuration for the project. It can also be created in other formats such as JSON or YAML but the purpose remains the same. There is a wide variety of directives that ship with Hugo which can be used that will enable you to fine tune your environment. Most projects will have a single config file which will reside inside the root of the project but for larger projects you can create a config directory which could contain multiple config files for various purposes or environments such as staging and production.

My configuration file is pretty straight forward and contains some basic variables that I use throughout the site:

1 I set the base URL for the project.
2 I set the default language for the HTML.
3 I set the title, which is used inside the <title></title> tags.
4 I enabled git info, which will allow me to retrieve the last git revision for each post.
5 I also use disableKinds to temporarily remove tags and categories from my project.

Custom paremeters can be added to your config file, which will be available globally in your project. These are defined by adding [params] followed by each variable on a new line:

[INSERT SCREENSHOT OF PARAMS]

Once these params are added you can access them throughout the site by using the following syntax, changing out the last value for the desired key.

{{< highlight go >}}
{{ $.Site.Params.title }}
{{< / highlight >}}

Permalinks are pretty straight forward, these options indicate what the default URL structure should be for both posts and pages.

If you would like to read through the rest of the available configuration options you can find them here.

Note that upon successful compilation of the project, it will generate a further two directories:

**Resources**: The resources directory is used to cache certain aspects of your website to speed up generation, such as images and css files.

**Public**: The public directory is generated at build time and will contain the production build of your project, which will be used to serve your website to the web.

## Additional Setup:

I needed to add a few additional NPM packages to my project, Tailwind, PostCSS and Autoprefixer. 

{{< highlight bash >}}
$ npm i tailwindcss && npm i postcss && npm i autoprefixer
{{< / highlight >}}

Tailwind is used as the basis for most of my personal projects, it provides a fantastic base to work with when starting new projects. I also like to make use of PostCSS, which can be used to require a wide variety of plugins including the above mentioned Tailwind and Autoprefixer. 

I initialize Tailwind and create a postcss.config.js file with the following commands:

{{< highlight bash >}}
$ npx tailwind init && touch postcss.config.js 
{{< / highlight >}}

The first command initializes a blank Tailwind configuration file followed by creating the PostCSS configuration file.

[INSERT IMAGES OF CONFIGURATION FILES]

## Adding Layouts:

There are various types of layout files that can be created in Hugo and they all serve a specific purpose. The two most common layouts are baseof.html, list.html and single.html.

In order to create a set of default layouts, you will need to create a directory called _default inside the layouts directory. This will house the default layouts used through the website. I created a baseof.html, list.html and single.html.

The baseof.html template is the master template for the website, inside this template you would include your head, main and footer tags, as well as any style, script or meta tags that you wish to use. Layout files include a construct called blocks, which allow you to define parts of the website such as the main content, which would then be filled with your page/post content. A block can be defined with the following syntax:

{{< highlight go >}}
{{ block “main” . }} {{ end }}
{{< / highlight >}}

This creates a block called main, which will house the content of a post or page.

My baseof.html template is slightly more complex than what might suit most people so a simple layout file with blocks could look like this:

[INSERT IMAGE OF SIMPLE BASE TEMPLATE]

One thing to note with the baseof.html template is that if you would like to create a custom home page, you would need to create a file with the name index.html inside the layouts directory which will serve as your home page layout.

The content of this page can be pulled in via a markdown file inside the content directory which needs to have the name _index.md. If you choose to not make use of a markdown file, you can also use raw html and avoid creating an _index.md file altogether.

To create a page template a single.html is used to display its content, which can include optional markup if needed. My single.html simply makes use of the main block and fills it with the content of my pages as I do not need custom markup for my pages.

{{< highlight go >}}
{{ define “main” }}
{{ .Content }}
{{ end }}
{{< / highlight >}}

In my case the above mentioned file is not used as my post template because my requirements for this template are slightly more complex. In order to create a specific layout for my posts, I created a directory within layouts called posts and then added a single.html file. Creating this folder indicates that this layout is purely for the posts content type. The reason I chose to not use the default single.html is because I wanted to be able to update the meta tags, add a canonical link for each post and add some additional markup that is used purely on posts.

Inside my posts template I define meta which will be used for each post, this includes twitter cards, open graph meta tags and a canonical link for my post. This meta is then injected into the <head></head> tags of my website.

{{< highlight go >}}
{{ define “meta” }}
{{ end }}

{{ define “main” }}
{{ end }}
{{< / highlight >}}

In order to display a list of posts on my posts page I created a list.html template inside the layouts/posts directory. This template also includes an internal template called pagination.html. 

Internal templates are templates that ship with Hugo. These templates include boilerplate code which covers a lot of common use cases such as pagination, google analytics, disqus comments and more.

To include an internal template, use the following syntax:

{{< highlight go >}}
{{ template “_internal/pagination.html” .  }}
{{< / highlight >}}

To make use of this pagination template, I had to create a range loop which will loop through everything with the type of posts. I created a variable called $paginator, set which content type I wanted to loop through and set the range loop to to iterate over these pages.

{{< highlight go >}}
{{ $paginator := .Paginate (where .Pages “Type” “posts” ) }}
{{ range $paginator.Pages }}
{{ .Title }}
{{ end }}
{{< / highlight >}}

This will loop through all of the content inside my posts directory and output the titles of each post which is specified in the frontmatter variables. The default pagination value is set to 10 by Hugo which can be overridden inside the config.toml file by adding a paginate variable followed by your desired value:

{{< highlight toml >}}
Paginate: 5
{{< / highlight >}}

The final layout which I created was a custom 404.html template which follows the same structure as a single.html template. This template is used when a user attempts to visit a broken link or a link that does not exist. 

{{< highlight go >}}
{{ define “main” }}
<h1>Oops!</h1>
{{ end }}
{{< / highlight >}}

## Adding Partials:

A partial is a file that is used to include something on a page, this could be anything from a newsletter signup form or a header/footer etc. Partials are generally used for components that are reused throughout the site and serves as a handy method to avoid duplicate code. Partials can be created by adding a partials directory inside the layouts directory. Once you have created your partial, you can include that file by using the following syntax in the desired location of your project:

{{< highlight go >}}
{{ partial “header.html” . }}
{{< / highlight >}}

## Adding Page Content:

Page content is pulled into layouts via a variety of data sources, the most common is by using markdown files but you can also use plain HTML. Pages live inside the content directory with the file name corresponding to the page name, such as about.html or contact.html. 

Hugo allows pages to specify frontmatter variables at the top of the file, which follow the same format as markdown:

{{< highlight markdown >}}
---
title: “About”
menu: main
weight: 1
---
{{< / highlight >}}

The above syntax specifies the page has the title of “About”, it is visible inside the main menu and specifies a weight of 1. Weighting is used to specify the order of the pages in the navigation menu, this means that if you add an additional page with the weight of 2, it will be displayed after the “About” page. 

Directly below the frontmatter variables will be the page content, this can be in the form of plain text using markdown syntax or HTML.

## Adding Post Content:

Posts can be added in a similar way to pages, they also reside inside the content directory, however if you have created a blog or posts archetype, you would create a blog/posts directory inside the content directory. This would separate your page and posts content into the appropriate directory.

A key difference with posts and pages is the frontmatter variables. It is considered good practice to add a title, date/publication date and a slug that will be used for the post. Further variables can be specified such as a description but these cover the most common use cases.

## Deploying to Netlify:

I was previously hosting my website on the Vercel platform but decided to migrate back to Netlify simply because I find the platform to be more user and developer friendly. Netlify also offers a whole host of features that Vercel does not, such as build plugins, analytics and more. 

If you have worked with Netlify you might know that you can create an optional netlify.toml file which allows you to specify additional configuration options for your project. My config file is relatively straight forward:

[INSERT SCREENSHOT OF NETLIFY.TOML FILE]

I specify the defaults to be used when building my project. The build command for my project is hugo followed by --minify which minifies the project at build time and I set the default publish directory to be used which is public. 

The last optional configuration that I specify is the default version of Hugo to be used when building my project followed by the default hugo environment which is set to production.

The netlify docs elaborate further on what else can be added to your configuration file.

## Closing Thoughts:

I have thoroughly enjoyed working with Hugo, there have been a few minor frustrations along the way but that has purely been down to my own understanding of it. However a quick Google search has often yielded the answers to the questions I had. While my project is relatively simple and I have not developed any complicated layouts I am happy with Hugo and I can’t find fault in anything that it does. It suits my needs and I look forward to working with it in future.

If you are looking for an incredibly fast static site generator, Hugo ticks all of the boxes. If you are looking for a new challenge and framework, I cannot recommend it enough.
