# Footnoted
Easily add superscript footnote numbers to text that link to corresponding footnotes below.

## Installation
Link to `footnoted.js` after jQuery.

    &#60;script src="http://code.jquery.com/jquery-1.10.1.min.js"></script&#62;
    &#60;script src="http://code.jquery.com/footnoted.js"></script&#62;

## Usage
1. Insert `<sup class="footnoted"></sup>` where you want a link to your footnotes to appear in your text.
2. Add the ID of `#footnotes` to the container of your footnotes. _Footnoted_ assumes you're using a list (either `<ol>` or `<ul>`) for your footnotes, but you can change this in `footnoted.js` if your page structure is different.
3. Link to `footnoted.css` for the default styling.
9. You can style superscripts, footnotes, or the top link however you please.
10. You can also use a plugin for smooth-scrolling to the footnotes.