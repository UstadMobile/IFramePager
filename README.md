IFramePager

This is a touch swiper script that allows the user to swipe
from iframe to iframe.  Most touch swipe scripts dont support
this because the event handlers need to be tied to the iframe
body

Use like so:

var testEl = document.getElementById("carouselcontainer");
var iframePager = new IFramePager(testEl, {
    urls: ["assets/jqm-frame0.html", "assets/frame1.html",
           "assets/frame2.html", "assets/frame3.html"],
            threshold: 20
});

setTimeout(function() {
    iframePager.go(1);
}, 2000);//go to the next page after 1 second

Where carouselcontainer is a relatively positioned div that
will container the swiper.
Threshold is the minimum horizontal distance in pixels needed
for a swipe to be triggered
urls is an array of pages to use as the iframe sources

