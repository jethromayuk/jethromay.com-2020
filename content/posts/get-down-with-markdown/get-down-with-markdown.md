---
title: "Get Down With Markdown"
description: "In this tutorial I will cover some basic syntax used inside markdown files which will allow you to start creating beautifully structured content."
date: 2020-07-19T12:58:51+02:00
slug: get-down-with-markdown
---

Most developers will encounter Markdown files at some stage of their careers, via repository platforms such as GitHub or Bitbucket. Markdown files use the `.md` file extension and will contain specific syntax used to construct the file. Many content management systems and frameworks support markdown out the box, so to start using it is as simple as creating a file and adding its content. 

Markdown files are extremely powerful because it allows the creator the ability to easily construct beautiful and semantic markup without having to build it with code. They are often used inside git repositories as documentation but have also grown to be extremely popular on blogging platforms. I personally store my posts on [GitHub](https://github.com/jethromay/) which [Hugo](https://gohugo.io/) then turns into semantic HTML.

In this tutorial I will cover some basic syntax used inside Markdown files which will allow you to start creating beautifully structured content.

## Headings:

Headings will be represented by adding a # symbol before the title. The number of # symbols signifies the order of importance, so by adding a single # it will represent a `<h1>` tag. Adding additional # symbols will decrease the order of importance with the number of symbols indicating the appropriate `<h1>` to `<h6>` tag.

    # Heading 1 <h1>
    ## Heading 2 <h2>
    ### Heading 3 <h3>
    #### Heading 4 <h4>
    ##### Heading 5 <h5>
    ###### Heading 6 <h6>

## Paragraphs:

There is no specific syntax used when writing paragraphs in markdown syntax. Paragraphs can be created by adding one or more blank lines:

    I am a paragraph.
    
    I am another paragraph. 

When adding headings and paragraphs, make sure they are all separated by a new line and are not on top of each other.

## Line breaks:

Line breaks are similar to paragraphs except instead of a single blank line you will add two blank lines to signify a line break. 
    
    I am a paragraph with a line break below me.
    
    
    I am a paragraph with a line break above me.

## Bold Text:

As we go further into this tutorial, you will find that there are many ways to achieve the same result. For example, bold text can be added to a document in the following ways: 

`**Bold text**` will render **Bold text** 

Or by using a double underscore on either side of the word or phrase:

`__Bold text__` will render __Bold text__

## Italic text:

The syntax for italic text is similar to that of bold text. A single asterisk or underscore will be used on either side of the text or phrase.

`*Italic text*` will render: *Italic text* 

`_Italic text_` will render: _Italic text_ 

## Underlined text:

To underline text is as simple as adding a double underscore on either side of the word or phrase:

`__Underlined text__` will render: __Underlined text__.

## Lists:

Lists have varying syntax. 

To create ordered lists, simply add items with numbers followed by a period. Each list item will need to be on a new line.

    1. Ordered list item #1
    2. Ordered list item #2
    3. Ordered list item #3

They do not need to be in numerical order:

    1. Ordered list item #1
    3. Ordered list item #3 
    2. Ordered list item #2

You may also nest lists:

    1. Ordered list item #1
    2. Ordered list item #2
    3. Ordered list item #3
        1. Ordered nested list item #1
        2. Ordered nested list item #2
    
To create an unordered list, simply add either a dash (-), asterisk (*), or plus signs (+) in front of your line items.

    - Unordered list item #1
    - Unordered list item #2
    - Unordered list item #3

Much like the ordered list, the same principle applies when nesting unordered lists.

    - Unordered list item #1
    - Unordered list item #2
    - Unordered list item #3
        - Unordered nested list item #1
        - Unordered nested list item #2
        - Unordered nested list item #3
    
## Links:

To create a link, enclose the text you wish to link with square brackets followed by the link in parentheses.

    [example.com](https://example.com/)

[example.com](https://example.com/)

If you would like to add a title to the link, you would add the following:

    [example.com](https://example.com/ "Link title")
 
 [example.com](https://example.com/ "Link title")

Links can also be created by adding a chevron on either side of the link:

    <https://example.com>

<https://example.com>

Using the above syntax is especially useful for email addresses:

    [Email us!](mailto:email@example.com)
 
 [Email us!](mailto:email@example.com)

## Images:

Images have a similar syntax to links, except they have an exclamation mark in front of the square brackets, followed by the alt text inside the square brackets and the path to the image in parentheses.

    ![Alt text](/posts/get-down-with-markdown/image-1.jpg

![Alt text](/posts/get-down-with-markdown/image-1.jpg)

Much like links a title can also be added to an image by adding the following:

    ![I am the alt text](/posts/get-down-with-markdown/image-2.jpg "Image title") 

![I am the alt text](/posts/get-down-with-markdown/image-2.jpg "Image title")

## Block Quotes:

A blockquote can be created by adding a right facing chevron `>` in front of a paragraph.

    > I am a blockquote
    
Using this syntax will render the following:

> I am a block quote

## Code:

Code blocks can be added to markdown files by enclosing the word, phrase or code with backticks. (``) 

    `A code block using backticks`
    
Alternatively you may create code blocks by indenting by at least four spaces or with one tab:

    A code block created using four spaces or one tab.
    
## Horizontal rules:

There are a number of ways to add a horizontal rule to a document by either adding three or more asterisks (***), dashes or underscores:

    ---
    
    _________________
    
    ***
    
Any of the above will render:    

***

## HTML:

Some Markdown applications or frameworks allow you to insert HTML tags into the file. This is useful if you would like to use certain HTML tags instead of Markdown syntax. Using this approach it is much easier to change the attributes of an element.

    I am using regular **bold** syntax with an HTML link <a href="#" class="text-blue-100">Link</a> 
    
As you can see Markdown is extremely powerful and user-friendly, it has many benefits and provides creators with an easy way to create beautifully structured content. It is a huge time saver and allows you to focus on what truly matters most, your content.




