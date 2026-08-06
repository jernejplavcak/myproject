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

    if (scrollInterval !== null) {
        return;
    }

    //const targetY = stopSection.offsetTop;
	const targetY = stopSection.offsetTop - 20;

    scrollInterval = setInterval(function () {

       // const nextY = window.pageYOffset + 2;
		const nextY = window.pageYOffset + 5;
        
		if (nextY >= targetY) {

            window.scrollTo({
                top: targetY,
                behavior: "smooth"
            });

            stopAutoScroll();
            return;
        }

        window.scrollTo(0, nextY);

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


// Floating button visibility

const projectSection = document.getElementById("three");
const autoScrollButton = document.getElementById("autoScrollButton");



function updateProjectButtonVisibility() {

    const projectRect = projectSection.getBoundingClientRect();
    const contactSection = document.getElementById("four");
    const contactRect = contactSection.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    // Section three is visible
    const projectVisible =
        projectRect.top < windowHeight &&
        projectRect.bottom > 0;

    // Section four is visible
    const contactVisible =
        contactRect.top < windowHeight &&
        contactRect.bottom > 0;


    if (projectVisible && !contactVisible) {
        autoScrollButton.style.display = "inline-flex";
    } else {
        autoScrollButton.style.display = "none";
    }
}


window.addEventListener("scroll", updateProjectButtonVisibility);
window.addEventListener("resize", updateProjectButtonVisibility);

updateProjectButtonVisibility();