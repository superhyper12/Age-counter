
let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs('2005-01-02'), 'year', true);
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);
