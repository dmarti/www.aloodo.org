---
layout: index.html
date: 2018-05-22
---

Aloodo is the <q>un-tracker</q> designed to be blocked
by all the popular Web privacy tools.  You can use it
to help your users learn if they are still vulnerable
to third-party tracking, and start to do something
about it.

## How it works

It starts with one script that attempts to load a
<q>tracking</q> iframe.

	<script src="https://ad.aloodo.com/track.js"></script>

Is the browser vulnerable to third-party tracking?  Check it in
a few lines of JavaScript. 

	if(typeof aloodo === 'object') {
		aloodo.onLoad(trackerDetected);
		aloodo.onDetected(trackingConfirmed);
	}

The `onLoad` callback is called when a fake tracker
iframe loads, and `onDetected` is called when tracking
is confirmed.  In the above example, Aloodo will call your
functions `trackerDetected` and `trackingConfirmed`.


## What can sites do with it?

 * **Brands:** Understand how well your customers
   and prospects are protected from misleading
   tracking and targeting by fly-by-night competitors.
   And check your marketing technology against
   tracking protection rates by known customers to
   weed out <q>too good to be true</q> ad impressions.

 * **Ad-supported sites:** Now it's easy to create a
   report for your advertisers on the trackability
   of your site's real audience&mdash;if a low-value
   competitor claims to reach the same people for less
   money, now you can show the difference between
   your real humans and their adfraud bots. (More:
   [Aloodo for publishers](/publishers/))

 * **Everybody:** Warn users who might be trackable
   from site to site, so that you can recommend legit
   [tracking protection](/protection/) in place of
   a problematic ad blocker.


## The un-tracking pixel

The un-tracking pixel attempts to set a third-party
<q>tracking</q> cookie.  Use it on sites where you prefer
not to run third-party JavaScript.

It will prime the browser with a <q>tracking</q>
cookie, so that tracking will be detected more quickly
on a site that does have the script.

(If you have a main site where you want to show
warnings or do other actions, you can put the pixel on
your other sites. For example, some blogs will let you
use a third-party image but not a third-party script.)

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

## The tracking protection test

Find out if this browser is vulnerable.

<p><a class="button" target="_blank" href="https://test.aloodo.click/">Run tracking protection test</a></p>

## Questions? Suggestions?

 * Post an issue on [GitHub](https://github.com/Aloodo/).


