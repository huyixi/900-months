const wall = document.getElementById('wall');

function update() {
  const startDateInput = document.getElementById('start-date');
  let startDate = startDateInput && startDateInput.value ? new Date(startDateInput.value) : null;

  if (startDate === null || isNaN(startDate.getTime())) {
    console.error("Invalid start date");
    return;
  }

  const currentDate = new Date();
  const monthsLived = calculateMonthsLived(startDate, currentDate);

  document.getElementById('months-lived').textContent = `${monthsLived} / 900`;

  createWall(monthsLived);
}

function calculateMonthsLived(startDate, endDate) {
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();
  return years * 12 + months;
}

function createWall(monthsLived) {
  const wall = document.getElementById('wall');
  wall.innerHTML = '';

  for (let i = 0; i < 900; i++) {
    const brickEle = document.createElement('div');
    brickEle.classList.add('brick');
    if (i < monthsLived) {
      brickEle.classList.add('active');
    }
    wall.appendChild(brickEle);
  }
}

document.getElementById('start-date').addEventListener('change', update);

document.addEventListener('DOMContentLoaded', () => {
  const defaultDate = new Date('2000-06-21');
  document.getElementById('start-date').value = defaultDate.toISOString().split('T')[0];
  update();
});
