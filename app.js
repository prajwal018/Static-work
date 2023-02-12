function toggleNavbar() {
	let navbar = document.getElementById('navbarSupportedContent');
	if (navbar.style.display === 'block') {
		navbar.style.display = 'none';
	} else {
		navbar.style.display = 'block';
	}
}
document
	.getElementById('home-link')
	.addEventListener('click', function (event) {
		event.preventDefault();
		document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
	});

document
	.getElementById('link-link')
	.addEventListener('click', function (event) {
		event.preventDefault();
		document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
	});
