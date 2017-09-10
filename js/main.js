// Hand rotation functions here

function startClock() {
  console.log('Tick, tock.');
  const now = new Date();
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();

  // takes the hands
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  // hours
  const hrDegs = ((hrs/12) * 360) + 90;

  // minutes
  const minsDegs = ((mins/60) * 360) + 90;

  // seconds
  const secsDegs = ((secs/60) * 360) + 90;

  // rotates hands
  hourHand.style.transform = `rotate(${hrDegs}deg)`;
  minuteHand.style.transform = `rotate(${minsDegs}deg)`;
  secondHand.style.transform = `rotate(${secsDegs}deg)`;

  // check vars are storing values
  console.log(hrs);
  console.log(mins);
  console.log(secs);
  console.log(hrDegs);
}

setInterval(startClock, 1000);
