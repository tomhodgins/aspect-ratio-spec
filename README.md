# aspect-ratio-spec

A spec for an Aspect Ratio property in CSS

**View online:** [aspect-ratio.html](https://tomhodgins.github.io/aspect-ratio-spec/aspect-ratio.html)

**View demo:** [demo.html](https://tomhodgins.github.io/aspect-ratio-spec/demo.html)

## What is this about?

This spec aims to define the syntax and functionality of a new 'aspect-ratio' property for a CSS to allow CSS authors to describe the desired 'aspect-ratio' of an element, unless a more specific 'width' and 'height' are assigned.

## Proposed Syntax

```css
div {
  aspect-ratio: 16/9;
}
```

**View Syntax Example:** [aspect-ratio.css](example/aspect-ratio.css)

## Plugin & Demo

As a reference for the syntax described in the spec, I have included a JavaScript plugin that reads the proposed syntax and displays the desired behaviour of the proposed functionality.

**View Plugin:** [aspect-ratio.js](plugin/aspect-ratio.js)

**View Demo:** [demo.html](demo.html)

## Who am I?

I'm an independent web developer, not affiliated with any major companies. The research & development contained in this spec is my own.

## How you can help

At this stage the work on this spec is focused on specifying the behaviour described in this [Github thread](https://github.com/WICG/aspect-ratio/issues/7) as well as the plugin working at [staticresource.com/aspect-ratio.html](http://staticresource.com/aspect-ratio.html).

For now, the most productive way to provide input would be by contributing to the conversation in the [Gitter chat room for the EQCSS project](https://gitter.im/eqcss/eqcss).