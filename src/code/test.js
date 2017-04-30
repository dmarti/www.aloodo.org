var failMessage = '<div class="warning"> <p><b>Third-party tracking detected:</b> Your browser is vulnerable to third-party tracking. Please install or configure <a href="/protection/">tracking protection</a> to help protect yourself and the web sites you use.<p> <form target="_blank" method="GET" action="https://new.aloodo.org/protection/"> <input type="submit" value="Get tracking protection"></form>';

var abWarning = '<p id="abpwarning"><b>This browser appears to be running an ad blocker that is not providing tracking protection. You need <a href="/protection/">tracking protection</a></b>.</p>';

var passMessage = '<p><b>Third-party tracking not detected.</b> This browser is safe from some common kinds of tracking.</p> <p>Thank you for helping to protect the web sites you use from data leakage, fraud, and malware.</p> <p>(This test covers some of the basics, but no system can test for every kind of data collection.  For more info on protecting yourself online, please see <a href="https://ssd.eff.org/en/playlist/want-security-starter-pack">Want a security starter pack?</a> from the Electronic Frontier Foundation.)</p>';

var inProgress = '<p>Test in progress. Please wait.</p>';

var testFailed = false;

function addMSIEscript() {
	var ns = document.createElement('script');
	ns.src = 'https://ad.aloodo.com/alert.js';
	document.body.appendChild(ns);
}

function tick() {
	testprogress.value += 100;
}


function setMessage(html) {
	var el = document.getElementById('message');
	if (el) {
		el.innerHTML = html;
	}
}

function trackingDetected() {
	if (window.location != 'https://new.aloodo.org/test/result/') {
		window.location = 'https://new.aloodo.org/test/result/';
		return;
	}
	testprogress.style.display = 'none';
	setMessage(failMessage);
	testFailed = true;
}

function showPass() {
	if (testFailed) {
		return;
	}
	testprogress.style.display = 'none';
	setMessage(passMessage);
}

function setupAloodo() {
	if(typeof aloodo === 'object') {
		aloodo.setOption('debug', true);
		aloodo.onDetected(trackingDetected);
	}
}

function startTest() {
	localStorage.setItem('tptest', true);
	bounce('https://test.aloodo.click/');
}

function clearResults() {
	localStorage.removeItem('tptest');
	bounce('https://new.aloodo.org/test/');
}

function setupButtons() {
	var el = document.getElementById('start');
	if (el) {
		el.addEventListener('click', startTest, false);
	}
	var el = document.getElementById('getProtection');
	if (el) {
		el.addEventListener('click', bounce, 'https://new.aloodo.org/protection/');
	}
	var el = document.getElementById('clearResults');
	if (el) {
		el.addEventListener('click', clearResults, false);
	}
}

function bounce(url) {
	window.location = url;
}

function setBounce(url) {
	window.setTimeout(bounce, 5000, url);
}

function setupProgress() {
	if (window.location == 'https://new.aloodo.org/test/') {
		return;
	}
	if (window.location.pathname == '/test/result/') {
		if (window.location.host != 'new.aloodo.org') {
			window.location = 'https://test.aloodo.click/';
		}
		return;
	}
	if (window.location.host == 'test.aloodo.click') {
		setBounce('https://test.aloodo.info/');
		testprogress.value = 0;
	} else if (window.location.host == 'test.aloodo.info') {
		setBounce('https://test.aloodo.link/');
		testprogress.value = 5000;
	} else if (window.location.host == 'test.aloodo.link') {
		setBounce('https://test.aloodo.net/');
		testprogress.value = 10000;
	} else if (window.location.host == 'test.aloodo.net') {
		setBounce('https://new.aloodo.org/test/result/');
		testprogress.value = 15000;
	} else {
		bounce('https://test.aloodo.click');
	}

	setMessage(inProgress);	
        window.setInterval(tick, 100);
	testprogress.style.display = 'block';
}

function setupResult() {
	if (window.location.pathname != '/test/result/') {
		return;
	}
	setMessage(inProgress);
	testprogress.value = 20000;
	window.setInterval(tick, 100);
	testprogress.style.display = 'block';
	window.setTimeout(showPass, 5000);
}

function setup() {
	if (typeof(bowser) !== "undefined" && bowser.msie) {
		addMSIEscript();
	}
	setupAloodo();
	setupButtons();
	setupProgress();
	setupResult();
}

window.addEventListener("load", setup, false);

