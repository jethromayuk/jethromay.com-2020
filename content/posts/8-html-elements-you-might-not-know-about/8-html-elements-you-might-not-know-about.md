---
title: "8 HTML Elements You Might Not Know About"
description: "In this guide, we will cover eight elements that you may not have heard of, or used before and look at examples of how you could use them in your next project."
date: 2020-08-02T11:43:13+02:00
slug: 8-html-elements-you-might-not-know-about
---

HTML which stands for "Hypertext Markup Language," is used to structure the content of a web page. It consists of a series of elements which enclose different parts of the page content to make them appear or act in a certain way.

As a developer, being able to write high-quality, accessible and semantic HTML is a great skill to have in your toolset. 

In this guide, we will cover eight elements that you may not have heard of, or used before and look at examples of how you could use them in your next project.

## Abbreviation:

The `<abbr>` tag defines text which is an abbreviation or an acronym, it also allows for an optional title attribute to provide a full description of the abbreviation or acronym.

<iframe height="265" style="width: 100%;" scrolling="no" title="Abbreivation Tag." src="https://codepen.io/jethro-may/embed/MWKNxqg?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/MWKNxqg'>Abbreivation Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<p>This document can be styled with <abbr title="Cascading Style Sheets">CSS</abbr></p>
```

The `<abbr>` tag has full browser support. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr#Browser_compatibility).

## Cite:

The `<cite>` tag defines the reference to a cited creative work, and it must include the title of that work.  Examples of where this can be used include the title of a song, book, research paper, website or blog post etc.

<iframe height="265" style="width: 100%;" scrolling="no" title="Cite Tag." src="https://codepen.io/jethro-may/embed/ZEQgPNG?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/ZEQgPNG'>Cite Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<p>
  <cite>Hey Jude</cite> by The Beatles was released in 1968.
</p>
```

The `<cite>` tag has full browser support. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite#Browser_compatibility).

## Details:

The `<details>` element creates a widget which can be opened or closed by the user. The default state of the widget is closed, opening the widget will reveal the hidden content inside of the element.

<iframe height="265" style="width: 100%;" scrolling="no" title="Details Tag." src="https://codepen.io/jethro-may/embed/NWxQJJJ?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/NWxQJJJ'>Details Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<details>
  This content is hidden.
</details>
```

The `<details>` element is supported in all browsers apart from Internet Explorer. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#Browser_compatibility).

## Mark:

The `<mark>` tag will define text which should be marked or highlighted by the browser.

<iframe height="265" style="width: 100%;" scrolling="no" title="Mark Tag." src="https://codepen.io/jethro-may/embed/GRoVeaG?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/GRoVeaG'>Mark Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<p>Sometimes you need to <mark>highlight</mark> text.</p>
```

The `<mark>` tag has full browser support. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark#Browser_compatibility).

## Output:

The `<output>` tag specifies the result of a calculation. In the following example, you can select a value between 0 - 100 as well as enter a second number into the second element, outputting the sum of the two numbers.

<iframe height="265" style="width: 100%;" scrolling="no" title="Output Tag." src="https://codepen.io/jethro-may/embed/rNxXbxM?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/rNxXbxM'>Output Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<form oninput="result.value=parseInt(number.value)+parseInt(range.value)">
  <input type="range" id="range" name="range" value="50" /> +
  <input type="number" id="number" name="number" value="50" /> =
  <output name="result" for="number range">100</output>
</form>
```

The `<output>` element is supported in all browsers apart from Internet Explorer. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output#Browser_compatibility).

## Summary:

The `<summary>` tag defines a heading for the `<details>` element. The `<summary>` tag must be the first child element inside the `<details>` element.

<iframe height="265" style="width: 100%;" scrolling="no" title="Summary Tag." src="https://codepen.io/jethro-may/embed/qBbevzj?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/qBbevzj'>Summary Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<details>
  <summary>Summary Heading</summary>
  This content is hidden.
</details>
```

The `<summary>` tag is supported in all browsers apart from Internet Explorer. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary#Browser_compatibility). 

## Time:

The `<time>` tag represents a time or date value. Optionally, you may include a 'datetime' attribute which will translate the value into a machine-readable format. Using the `<time>` tag allows for better search engine results.

<iframe height="265" style="width: 100%;" scrolling="no" title="Time Tag." src="https://codepen.io/jethro-may/embed/RwrXdXy?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/RwrXdXy'>Time Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<p>This post was published on <time datetime="2020-08-03">3 August, 2020</time>.</p>
```

The `<time>` tag is supported in all browsers apart from Internet Explorer. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#Browser_compatibility).

## Word Break Opportunity:

The `<wbr>` tag tells the browser where the ideal location is to break text when the browser window size changes. 

<iframe height="265" style="width: 100%;" scrolling="no" title="WBR Tag." src="https://codepen.io/jethro-may/embed/mdVNgbK?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jethro-may/pen/mdVNgbK'>WBR Tag.</a> by Jethro May
  (<a href='https://codepen.io/jethro-may'>@jethro-may</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

```
<p>This is a very loooooooooo<wbr>oooo</wbr>oooooooooooong sentence showing us how to use this tag.</p>
```

The `<wbr>` tag is supported in all browsers apart from Internet Explorer. View a detailed list of which browser versions this tag can be used in, [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr#Browser_compatibility).

## Conclusion

In this article, we reviewed a variety of different HTML tags that you can use in your projects. There are many other useful HTML tags, all of which seek out to solve specific problems. I hope you have learnt a thing or two and will be able to use these tags in your projects!
