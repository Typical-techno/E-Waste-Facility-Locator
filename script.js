// Pop up Section

const messages = [
    "Electronic waste, or e-waste, refers to discarded electronic devices and equipment, including smartphones, laptops, tablets, televisions, and more. The generation of e-waste has been steadily increasing due to the rapid pace of technological advancement and consumer electronics turnover.",

    "E-waste contains hazardous materials such as lead, mercury, cadmium, and various toxic chemicals. If not properly managed, these substances can leach into the environment, contaminating soil, water, and air. This poses significant risks to human health and the ecosystem.",

    "Recycling e-waste helps recover valuable resources like precious metals (gold, silver, and palladium), copper, and rare earth elements. This reduces the need for mining and extraction of these materials, which can be both environmentally destructive and resource-intensive.",

    "E-waste has become a global issue, with millions of tons generated each year. Many developed countries export their e-waste to developing nations, where it is often processed informally under unsafe conditions, leading to environmental and health concerns.",

    "Formal e-waste recycling involves regulated processes in specialized facilities that ensure safe handling and disposal of hazardous materials. Informal recycling, often practiced in developing countries, involves unregulated, makeshift operations that can be harmful to both workers and the environment."
  ];

const popup = document.getElementById('popup');
const popupc = document.getElementById('popupc');
const close = document.getElementById('close');

let currentMessageIndex = 0;

  function showPopup() {
    const message = messages[currentMessageIndex % messages.length];
    popupc.textContent = message;

    popup.style.display = 'inline-flex';
    currentMessageIndex++
  }

function hidePopup() {
    popup.style.display = 'none';
    setTimeout(showPopup, 15000);
}

setTimeout(showPopup, 3000);

;

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