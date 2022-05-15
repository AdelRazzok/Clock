const secondsHand = document.querySelector('.seconds-hand');

function setDate() {
	const nowDate = new Date();
	const hours = nowDate.getHours();
	const minutes = nowDate.getMinutes();
	const seconds = nowDate.getSeconds();
	const secondsToDegrees = ((seconds / 60) * 360);

	secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`;
}

setInterval(setDate, 1000);