
// --------------------------- Backgroud dots animation -----------------------------
function createDots() {
    const numDots = 150; // Number of dots
    const container = document.getElementById('dots-container');
    const containerRect = container.getBoundingClientRect();
    const dots = [];

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${Math.random() * containerRect.width}px`; // Position relative to container's width
        dot.style.top = `${Math.random() * containerRect.height}px`;
        dot.style.opacity = Math.random() //* 1.5 + 0.5; // Random opacity between 0.5 and 1
        container.appendChild(dot);
        dots.push(dot);
    }

    dots.forEach(dot => {
        moveDot(dot);
    });
}

function moveDot(dot) {
    const startX = parseFloat(dot.style.left);
    const startY = parseFloat(dot.style.top);

    const amplitudeX = Math.random() * 10 + 10; // Amplitude of movement in X direction
    const amplitudeY = Math.random() * 10+ 10; // Amplitude of movement in Y direction
    const frequency = Math.random() * 0.0002 + 0.0002; // Frequency of movement

    let startTime = null;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) * frequency;

        const x = startX + amplitudeX * Math.sin(progress);
        const y = startY + amplitudeY * Math.sin(progress * 0.7); // Adjust phase for Y movement

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

createDots(); // Call createDots function to start the animation


//--------------------- Name animation ---------------------

const letters = "Sabcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 40);
}



