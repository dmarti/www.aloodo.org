---
title: Aloodo for Web Publishers
layout: index.html
date: 2017-05-13
---

How many of the people who visit your site are using
some kind of protection from third-party tracking?
For publishers seeking to reclaim ad revenue, user
tracking protection is vital. Without protection,
third-party tracking enables low-quality sites
to claim to offer ads that reach your valuable
audience.  And third-party tracking [drives ad
standards down and creates incentives for ad
blocking](https://digitalcontentnext.org/blog/2016/04/27/service-journalism-and-the-web-advertising-problem/).

Tools to fix the problem are available for all the
common browsers, but you have to understand the problem,
and encourage readers to get protected, in order
to move ad money back from tech intermediaries to
your site.

## Measuring the problem

In order to measure the problem on one news site,
you can use some  _first_-party data collection
to measure people's vulnerability to _third_-party
data collection.

The three parts of that big question are:

 * Does first-party JavaScript load and run?

 * Does third-party JavaScript (from a site on popular filter lists) load and run?

 * Can a third-party <q>tracker</q> see state from other sites?

This will be easy to do with a little single-pixel
image and the [Aloodo tracking detection
script](/).


## Step one: add an image and two scripts to the page footer

The lines that matter are:

```
<script src="/code/check3p.js"></script>
<script src="https://ad.aloodo.com/track.js"></script>
<img id="check3p" src="/tk/sr.png"
 height="1" width="1" alt="">
```

I'm including a single-pixel image and two scripts:
the Aloodo one and a new first-party script.

In most tracking protection configurations, the Aloodo
script will be blocked, because `ad.aloodo.com`
appears on the commonly used tracking protection
lists.


## Step two: write the first-party script

The local script can be as simple as this:  [/code/check3p.js](/code/check3p.js)

All it does is swap out the tracking image source three times.

 * **When the script runs,** to check that this is a browser with JavaScript on.

 * **When the Aloodo tracking script runs,** to check if this browser is blocking the script from loading.

 * **When the Aloodo script confirms that tracking is possible.**

The work is done in the `setupAloodo` function,
which runs after the page loads.  First, it sets the
`src` for the tracking pixel to `js.png`, then sets
up two callbacks: one to run after the Aloodo script
is loaded, and switch the image to `ld.png`, and
one to run if the script can <q>track</q> the user,
and switch the image to `td.png`.


## Step three: make reports and sell ads

In this example you can use the regular server logs to compare
the number of clients that load the original image,
and the JavaScript-switched one, to the number that
load the two <q>tracking</q> images.

(There are two different tracking callbacks because
of [the details of how Aloodo has to detect Privacy
Badger](http://blog.aloodo.org/posts/track-js-script/),
among other things. Not all tracking protection works
the same.)

This can be connected to other analytics systems, too.
Some analytics, however, are blocked by some tracking
protection.

This data helps sites create a report for advertisers
on the trackability of the site's real audience. If a
low-value competitor claims to reach the same people
for less money, now you can show the difference
between your numbers and theirs. Either you're
reaching different people, or you have more real
humans and they have more adfraud bots, or both.


## Follow-up

Depending on the data you collect, you might
choose to do a variety of tracking protection campaigns.
Aloodo is designed to support:

 * Extra articles in soft paywall systems for protected
   users

 * Tracking warnings, optionally integrated with a
 settings page or privacy
   policy

 * Reverse tracking walls: deny certain pages to users
   who are vulnerable to tracking

 * Anti-adblocker integration, to help move ad blocker
   users to publisher-friendly privacy tools

Please [contact us](http://blog.aloodo.org/people/)
for more info, or follow our
[blog](http://blog.aloodo.org/) for updates.

