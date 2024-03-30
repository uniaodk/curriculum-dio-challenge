const headerElement = document.getElementById("header");
const languagesElement = document.getElementById("languages");
const respositoriesElement = document.getElementById("repositories");
const experiencesElement = document.getElementById("experiences");
const hardSkillsElement = document.getElementById("hard-skills");
const softSkillsElement = document.getElementById("soft-skills");

(async () => {
	const profile = await getProfile();
	headerElement.innerHTML = buildHeaderTemplate(profile.header);
	languagesElement.innerHTML = buildLanguagesTemplate(profile.languages);
	respositoriesElement.innerHTML = buildRepositoriesTemplate(profile.repositories);
	experiencesElement.innerHTML = buildExperiencesTemplate(profile.experiences);
	hardSkillsElement.innerHTML = buildHardSkillsTemplate(profile.hardSkills);
	softSkillsElement.innerHTML = buildSoftSkillsTemplate(profile.softSkills);
})();

function buildHeaderTemplate(header) {
	return `<img class="photo" src="${header.url_photo}" alt="Picture ${header.name}">
	<h1 class="title">Hi,<br>I am ${header.name}</h1>
	<div class="information">
		<a href="${header.url_linkedin}" target="_blank" class="job">${header.job}</a>
		<p class="location">${header.location}</p>
		<a href="tel:${header.phone}" class="phone">${header.phone}</a>
		<a href="mailto:${header.email}" class="email">${header.email}</a>
	</div>`
}

function buildLanguagesTemplate(languages) {
	if (!languages) return '';
	return languages.reduce((languagesTemplate, language) => {
		let template = `<li class="language">`;
		template += language.path_icon 
			? `<img src="${language.path_icon}" alt="${language.alt_icon}">`
			: `<span class="level">${language.level}</span>`;
		template += `<span>${language.name}</span>
		</li>`;
		return languagesTemplate + template;
	}, "");
}

function buildRepositoriesTemplate(repositories) {
	if (!repositories) return '';
	return repositories.reduce((repositoriesTemplate, repository) => {
		return repositoriesTemplate + `<li class="repository">
		<div class="detail">
			<span>${repository.name}</span>
			<a href="${repository.url}" target="_blank">${repository.url}</a>
		</div>
	</li>`
	}, '');
}

function buildExperiencesTemplate(experiences) {
	if (!experiences) return '';
	return experiences.reduce((experiencesTemplate, experience) => {
		return experiencesTemplate + `<li class="experience">
		<h3>${experience.job}</h3>
		<p class="period">${experience.period}</p>
		<p class="info">${experience.info}</p>
	</li>`
	}, '');
}

function buildHardSkillsTemplate(hardSkills) {
	if (!hardSkills) return '';
	return hardSkills.reduce((hardSkillsTemplate, hardSkill) => {
		return hardSkillsTemplate + `<li class="hard-skill">
		<img src="${hardSkill.path_icon}" alt="${hardSkill.name}">
	</li>`
	}, '');
}

function buildSoftSkillsTemplate(softSkills) {
	if (!softSkills) return '';
	return softSkills.reduce((softSkillsTemplate, softSkill) => {
		return softSkillsTemplate + `<li class="soft-skill">${softSkill}</li>`
	}, '');
}

toNode = (tagText) => {
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = tagText;
	return tempDiv.firstChild;
}