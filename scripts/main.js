window.addEventListener("scroll", function () {
	var header = document.querySelector(".sticky-header");
	var scrollPosition = window.scrollY;
	if (scrollPosition > 50) {
		header.style.background = "rgba(0, 0, 49, 1)";
	} else {
		header.style.background =
			"linear-gradient(to bottom, rgba(0, 0, 49, 1), rgba(0, 0, 49, 0.1))";
	}
});

window.onscroll = function () {
	var scrollableHeight =
		document.documentElement.scrollHeight - window.innerHeight;
	var scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
	document.getElementById("scroll-display").style.width =
		scrolledPercentage + "%";

	document.getElementById("mobile-nav").style.top = window.scrollY + "px";
};

function scrollToElementWithOffset(id) {
	// Get the target element by its ID
	var targetElement = document.getElementById(id);
	console.log(targetElement);
	if (targetElement) {
		// Calculate the target position, accounting for the header height
		var headerHeight = 100; // Set your header height in pixels
		var targetPosition =
			targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

		// Scroll to the target position
		window.scrollTo({
			top: targetPosition,
			behavior: "smooth", // Optional: Add smooth scrolling effect
		});
	}
}

// Burger menu animations
let mobileNavOpen = false;
document.getElementById("menu-icon").addEventListener("click", () => {
	if (mobileNavOpen) {
		mobileNavOpen = false;
		document.getElementById("mobile-nav").style.marginLeft = "100%";
		document.getElementById("bar1").style.transform =
			"rotate(0deg) translate(-5px, 0px)";
		document.getElementById("bar2").style.transform =
			"rotate(0deg) translate(-5px, 0px)";
	} else {
		mobileNavOpen = true;
		document.getElementById("mobile-nav").style.marginLeft = "0%";
		document.getElementById("bar1").style.transform =
			"rotate(45deg) translate(5px, 0px)";
		document.getElementById("bar2").style.transform =
			"rotate(-45deg) translate(5px, 0px)";
	}
});

function mobileNav(id) {
	mobileNavOpen = false;
	document.getElementById("mobile-nav").style.marginLeft = "100%";
	document.getElementById("bar1").style.transform =
		"rotate(0deg) translate(-5px, 0px)";
	document.getElementById("bar2").style.transform =
		"rotate(0deg) translate(-5px, 0px)";

	scrollToElementWithOffset(id);
}
