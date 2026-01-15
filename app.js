const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  if (!day || !month || !year) {
    result.textContent = "Please fill all fields";
    return;
  }

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();

  if (
    year > todayYear ||
    (year === todayYear && month > todayMonth) ||
    (year === todayYear && month === todayMonth && day > todayDay)
  ) {
    result.textContent = "Birth date cannot be in the future";
    return;
  }

  let years = todayYear - year;
  let months = todayMonth - month;
  let days = todayDay - day;

  if (days < 0) {
    months--;

    const lastMonthDays = new Date(todayYear, todayMonth - 1, 0).getDate();
    days += lastMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} years, ${months} months, and ${days} days old`;
}
