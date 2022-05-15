const hoursHand   = document.querySelector('.hours-hand');
const minutesHand = document.querySelector('.minutes-hand');
const secondsHand = document.querySelector('.seconds-hand');

function setDate() {
	const nowDate = new Date();

	const hours = nowDate.getHours();
	const hoursToDegrees = ((hours / 60) * 360) + 90;
	hoursHand.style.transform = `rotate(${hoursToDegrees}deg)`;

	const minutes = nowDate.getMinutes();
	const minutesToDegrees = ((minutes / 60) * 360) + 90;
	minutesHand.style.transform = `rotate(${minutesToDegrees}deg)`;

	const seconds = nowDate.getSeconds();
	const secondsToDegrees = ((seconds / 60) * 360) + 90;
	secondsHand.style.transform = `rotate(${secondsToDegrees}deg)`;

}

setInterval(setDate, 1000);