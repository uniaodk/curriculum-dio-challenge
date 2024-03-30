const acordeons = document.getElementsByClassName("acordeon");

for (const acordeon of acordeons) {
	acordeon.addEventListener('click', (element) => {
		if (element.target.localName === 'a') return;
		acordeon.classList.toggle("open")
	});
}
