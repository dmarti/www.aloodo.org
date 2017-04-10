---
layout: index.html
---

Protect your users from fraud and malware, while
increasing the value of your brand and your content,
with one line of JavaScript.

	<script src="https://ad.aloodo.com/track.js"></script>

Aloodo is the <q>un-tracker</q> that is blocked by a wide
range of privacy tools, so helps you learn about, and help,
web users who are still vulnerable to third-party tracking.

Check if the `aloodo` object is loaded, and set up callbacks with

	if(typeof aloodo === 'object') {
		aloodo.onLoad(trackerDetected);
		aloodo.onDetected(trackingConfirmed);
	}

The `onLoad` callback is called when a fake tracker
iframe loads, and `onDetected` is called when tracking
is confirmed.

## Use cases

 * **Brands:** Protect your customer base from
   misleading tracking and targeting by fly-by-night
   competitors.  And check your marketing technology
   against tracking protection rates by known
   customers to weed out "too good to be true"
   ad impressions.

 * **Sites:** Report on the trackability of your
   site's real audience&mdash;if a low-value
   competitor claims to reach the same people for less
   money, now you can show prospective advertisers
   the difference between your real humans and their
   adfraud bots.

 * **Everybody:** Warn users who might be trackable
   from site to site, so that
   you can recommend legit [tracking
   protection](http://www.aloodo.org/protection/)
   in place of a problematic ad blocker.

## The un-tracking pixel

The un-tracking pixel attempts to set a third-party
"tracking" cookie.  Use it on sites where you prefer
not to run third-party JavaScript.

It will prime the browser with a <q>tracking</q>
cookie, so that tracking will be detected more quickly
on a site that does have the script.

(If you have a main site where you want to show warnings
or do other actions, you can put the pixel on your
other sites.)

Include the un-tracking pixel with

	<img src="https://ad.aloodo.com/px/www.example.com/"
	     alt="">

Substitute your site's hostname for `www.example.com`.

If you set up the pixel URL correctly, Aloodo will
serve the pixel with a long expiration time, so
that the browser won't re-load it from every page on
your site.  (This helps minimize the amount of data
that we can collect, and the load on our servers.)

You can use developer tools in your browser to check
that an `Expires:` header is being set for the image.
If you do not see `Expires:` and the browser is
re-loading the image on each page view, check that
the hostname in the image URL matches the hostname
part of the URL in the Referer header.

(Please contact us if you would like to start receiving
reports based on aggregated usage of the un-tracking
pixel on your site.  **We delete logs frequently, so
we we are not set up to do reports from old data.**)


## Questions? Suggestions?

 * Post an issue on the [project on
GitHub](https://github.com/Aloodo/ad.aloodo.com).


