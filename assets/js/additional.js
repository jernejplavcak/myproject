document.getElementById("contactForm").addEventListener("submit", function(event) {
	event.preventDefault();
	
	  const form = this;

	// Check if all fields are valid
	if (!form.checkValidity()) {
		form.reportValidity();
		return;
	}

	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	const subject = encodeURIComponent("Portfolio contact from " + name);

	const body = encodeURIComponent(
		"Name: " + name +
		"\nEmail: " + email +
		"\n\nMessage:\n" + message
	);

	window.location.href =
		"mailto:jernejplavcak92@gmail.com?subject=" +
		subject +
		"&body=" +
		body;
});


let scrollInterval = null;

const scrollButton = document.getElementById("autoScrollButton");
const stopSection = document.getElementById("four");

function startAutoScroll(event) {
	event.preventDefault();

	// Prevent multiple intervals
	if (scrollInterval !== null) {
		return;
	}

	// Calculate target position when scrolling starts
	const targetY = stopSection.getBoundingClientRect().top + window.pageYOffset;

	// Already at or below the target
	if (window.pageYOffset >= targetY) {
		return;
	}

	scrollInterval = setInterval(function () {

		const nextY = window.pageYOffset + 2;

		// Stop exactly at the section
		if (nextY >= targetY) {
			window.scrollTo({
				top: targetY,
				behavior: "auto"
			});

			stopAutoScroll();
			return;
		}

		window.scrollTo({
			top: nextY,
			behavior: "auto"
		});

	}, 20);
}

function stopAutoScroll() {
	if (scrollInterval !== null) {
		clearInterval(scrollInterval);
		scrollInterval = null;
	}
}

// Start scrolling
scrollButton.addEventListener("click", startAutoScroll);

// Stop immediately when the user interacts
["mousemove", "mousedown", "wheel", "touchstart", "keydown"].forEach(event =>
	document.addEventListener(event, stopAutoScroll, { passive: true })
);


//Get current year
function getCurrentYear() {
    return new Date().getFullYear();
}

//assign the current year
document.getElementById("currentYear").textContent = getCurrentYear();