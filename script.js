// Pop up Section

    function showPopup() {
      document.getElementById('popup').style.display = 'inline-flex';
  }

  function hidePopup() {
      document.getElementById('popup').style.display = 'none';
  }

  window.addEventListener('load', showPopup);

  setInterval(showPopup, 50000000);


// Pop up Section

// About Section Counter
document.addEventListener("DOMContentLoaded", function () {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
            clearInterval(counter);
        }
        }, duration);
    });
    });
// About Section Counter


// script.js

