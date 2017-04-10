// Third party tracking check
// https://blog.zgp.org/welcome-how-is-everyone-s-tracking-protection-working/

function swapTracker(src) {
	var el = document.getElementById('check3p');
	if (el && el.hasAttribute('src')) {
		el.src = src;
	}
}

function setupAloodo() {
	swapTracker('/tk/js.png');
	if(typeof aloodo === 'object') {
		aloodo.onLoad(function() {swapTracker('/tk/ld.png')});
		aloodo.onDetected(function() {swapTracker('/tk/td.png')});
	}
}

window.addEventListener("load", setupAloodo, false);
