# Footnoted
Easily add superscript footnote numbers to text that link to corresponding footnotes below.

## Installation
Link to `footnoted.js` after jQuery.

    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="http://code.jquery.com/footnoted.js"></script>

## Usage
1. Insert `<sup class="footnoted"></sup>` where you want a link to your footnotes to appear in your text.
2. Add the ID of `#footnotes` to the container of your footnotes. _Footnoted_ assumes you're using a list (either `<ol>` or `<ul>`) for your footnotes, but you can change this in `footnoted.js` if your page structure is different.

### Optional
- Link to `footnoted.css` if you want the default styling.
- You can style superscripts, footnotes, or the top link however you please.
- You can also use a plugin for smooth-scrolling to the footnotes.
