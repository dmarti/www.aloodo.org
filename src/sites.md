---
title: Aloodo for Web Sites
layout: index.html
date: 2017-10-16
---

How many of the people who visit your site are using
some kind of protection from third-party tracking?

Ad fraud and attribution fraud can make data-driven
marketing difficult, by creating confusing data about
which campaigns and projects are bringing in your
desired users.

Data on tracking-protected users can be a valuable
way to check that your audience is authentic.
When you know the tracking protection profile of
your real users, campaigns that bring in bogus users
will stand out right away&mdash;and help keep your
marketing focused.


## Measuring the problem

In order to measure tracking protection,
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


## Step three: understand your users

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

This data helps you create a report on the
trackability of your site's real audience. If a
campaign claims to reach the same people for less
money, now you have the data to evaluate it.


## Follow-up

Please [contact us](http://blog.aloodo.org/people/)
for more info, or follow our
[blog](http://blog.aloodo.org/) for updates.

