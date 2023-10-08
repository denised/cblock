
# CBlock: a simple conditional block that can be controlled via code.

The new gutenberg blocks provide new ways of building Wordpress sites, but thus far there does not seem
to be much that makes it easy to make a site dynamic.  This plugin is a very simple step in that direction
for a common use case: enabling action on a block via code.

Really, that is all it is: a named `<div>` that you can see and edit in the block editor, then manipulate
in code (either in php or javascript).  Each cblock is
* always visible in the block editor
* always present in the DOM
* by default not visible in the rendered web page

The mechanism is simple: a `cblock` block gets rendered into DOM as a `div` with a specific class and
attribute that make it easy to target in code.

The primary advantage this plugin provides over a complete roll-your-own approach is a consistent visualization of the conditional block in the block editor, which can make it easier to allow page editors to work with them.

## Example

## Comment

I'm not an expert in all the gutenberg-fu, but I think the general idea is that your active website will be managed by a React type app that runs on the client side.  In that approach, I imagine that there are other, better, ways
to manage the visibility or other state of part of the DOM.  But if you have an existing php site, or aren't desiring
to go to a completely React type solution yet, this can be a simple way to bridge the gap.

