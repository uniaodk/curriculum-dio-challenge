async function getProfile() {
	const profile = await fetch("https://raw.githubusercontent.com/uniaodk/curriculum-dio-challenge/main/assets/data/profile.json");
	return await profile.json();
}

