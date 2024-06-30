var i = 0;
function move() {
  if (i === 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var currentDateElem = document.getElementById("currentDate");
    var width = 1;
    var id = setInterval(frame, 10);
    const today = new Date();
    const startday = new Date('2024-07-01');
    const endday = new Date('2026-03-30');

    currentDateElem.innerText = today.toISOString().split('T')[0];

    function frame() {
      const totalDays = (endday.getTime() - startday.getTime()) / (1000 * 60 * 60 * 24);
      const elapsedDays = (today.getTime() - startday.getTime()) / (1000 * 60 * 60 * 24);
      const targetWidth = (elapsedDays / totalDays) * 100;

      if (width >= targetWidth) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        currentDateElem.style.left = `calc(${width}% - 20px)`;  // Adjust '20px' as needed to position the date correctly
      }
    }
  }
}
