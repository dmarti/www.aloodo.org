---
title: Tracking Protection
layout: index.html
date: 2017-04-30
---


When you protect yourself from third-party tracking, you're helping to:

 * Protect yourself from malware that spreads through ad networks

 * Protect your favorite web sites from data leakage and advertising fraud.

 * Protect brands from inadvertently supporting terrorism, child pornography, and other illegal sites
   through <q>programmatic</q> advertising.

You can help advertisers spend less on the annoying
ads that <q>follow</q> you around the web, and more
on helping to pay for the web sites you use.


<section id="safari">
## Disconnect for Apple Safari

[Disconnect](https://disconnect.me/disconnect)
protects the Safari browser on Apple computers and
devices from third-party tracking.

<a href="https://disconnect.me/disconnect" class="buttonlink">Get Disconnect</a></p>

</section>

<section id="privacybadger">
## Privacy Badger

[Privacy Badger](https://www.eff.org/privacybadger),
a project of the [Electronic Frontier
Foundation](https://www.eff.org/), is a tracking
protection extension for Firefox and Google Chrome.
Privacy Badger only blocks trackers that it detects
following you across multiple sites, so you will
probably see a few ads <q>following</q> you until your
Privacy badger is trained.

<a href="https://www.eff.org/privacybadger" class="buttonlink">Get Privacy Badger</a></p>
</section>

<section id="msie"> ## Microsoft Internet
Explorer</h2>

Tracking Protection is built in to Microsoft Internet
Explorer, but you need to subscribe to a Tracking
Protection List to protect yourself.

<a class="buttonlink"
href="javascript:window.external.msAddTrackingProtectionList('http://easylist-msie.adblockplus.org/easyprivacy.tpl',
'EasyPrivacy Tracking Protection List')">Subscribe
to the EasyPrivacy Tracking Protection List</a>.

You can manage your tracking protection lists from
the <q>Safety</q> item in the gear menu at the upper
right of your browser window.
</section>


## Note for ad blocker users 

Most ad blockers&mdash;even the ones that make misleading privacy claims&mdash;do **not** provide tracking protection by default.  For example, [Adblock Plus actually collects money from tracking companies to allow tracking, even when the user has turned on a privacy feature](http://blog.aloodo.org/posts/consumer-privacy-tool-not-so-much/).

You will need to install a tracking protection tool
as well.  All of the recommended options on this page
can be installed without removing your ad blocker.

## Permission to share this page

This page is available under the
Creative Commons Attribution 3.0 Unported](http://creativecommons.org/licenses/by/3.0/) license.  Please link to the original if possible.

function grayOut(name) {
	el = document.getElementById(name);
	if(el) {
		el.style.display = "none";
	}
}

function resetStuff() {
	var els = ['firefox', 'msie', 'safari', 'disconnect', 'privacybadger'];
	for (var i = 0; i<els.length; i++) {
		var el = document.getElementById(els[i]);
		if (el) {
			el.style.display = 'block';
		}
	}
	window.location.hash = "#tools";
	grayOut('resetstuff');
	return true;
}

function worksWith(name) {
	el = document.getElementById('wwtb-' + name);
	if (el) {
		el.style.display = 'inline';
	}
	el = document.getElementById('rfy-' + name);
	if (el) {
		el.style.display = 'block';
	}
}

if (bowser.firefox) {
	worksWith('firefox');
} else {
	grayOut('firefox');
}

if (bowser.chrome) {
	worksWith('crumble');
} else {
	grayOut('crumble');
}

if (bowser.msie) {
	worksWith('msie');
} else {
	grayOut('msie');
}

if (bowser.safari) { worksWith('safari') } else { grayOut('safari'); }

if (bowser.chrome ||
	bowser.firefox ||
	bowser.opera) {
		worksWith('disconnect');
} else {
		grayOut('disconnect');
}

if (bowser.chrome ||
	bowser.firefox) {
		worksWith('privacybadger');
} else {
		grayOut('privacybadger');
}

</script>
<script src="http://ad.aloodo.com/ad.js"></script>
	</body>
</html>

