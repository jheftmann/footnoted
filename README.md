# Footnoted
Easily add superscript footnote numbers to text that automatically link to corresponding footnotes below. Footnotes have a link to take you back to your previous reading position. Also makes a Top link after the footnotes.

[See the demo](http://jacobheftmann.com/projects/footnoted/)

## Installation
Link to `footnoted.min.js` (or customize and link to `footnoted.js`) after jQuery.

    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="footnoted.min.js"></script>

## Usage
1. Insert `<sup class="footnoted"></sup>` where you want a link to your footnotes to appear in your text. You don't need to add your own numbers or links.
2. Add the ID of `#footnotes` to the container of your footnotes. _Footnoted_ assumes you're using a list (either `<ol>` or `<ul>`) for your footnotes, but you can change this in `footnoted.js` if your page structure is different.

### Optional
- Link to `footnoted.css` if you want the default styling.
- You can style superscripts (`sup.footnoted`), footnotes (`#footnotes`, `#footnotes li`), or the top link (`li#back-to-top`) however you please.