const progressBars = [
    {
      circularProgress: document.querySelector(".circular-progress-1"),
      progressValue: document.querySelector(".progress-value-1"),
      progressStartValue: 0,
      progressEndValue: 90,
      speed: 63,
    },
    {
      circularProgress: document.querySelector(".circular-progress-2"),
      progressValue: document.querySelector(".progress-value-2"),
      progressStartValue: 0,
      progressEndValue: 75,
      speed: 50,
    },
    {
      circularProgress: document.querySelector(".circular-progress-3"),
      progressValue: document.querySelector(".progress-value-3"),
      progressStartValue: 0,
      progressEndValue: 50,
      speed: 63,
    },
    {
      circularProgress: document.querySelector(".circular-progress-4"),
      progressValue: document.querySelector(".progress-value-4"),
      progressStartValue: 0,
      progressEndValue: 35,
      speed: 63,
    },
    {
      circularProgress: document.querySelector(".circular-progress-5"),
      progressValue: document.querySelector(".progress-value-5"),
      progressStartValue: 0,
      progressEndValue: 30,
      speed: 63,
    },
    {
      circularProgress: document.querySelector(".circular-progress-6"),
      progressValue: document.querySelector(".progress-value-6"),
      progressStartValue: 0,
      progressEndValue: 30,
      speed: 63,
    },
    // Add more progress bar settings as needed
  ];
  
  // Loop through the progress bars and start animations
  progressBars.forEach((bar) => {
    let progress = setInterval(() => {
      bar.progressStartValue++;
  
      bar.progressValue.textContent = `${bar.progressStartValue}%`;
      bar.circularProgress.style.background = `conic-gradient(var(--secondary-color) ${bar.progressStartValue * 3.6}deg, rgba(57, 88, 134, 0.1) 0deg   )`;
  
      if (bar.progressStartValue === bar.progressEndValue) {
        clearInterval(progress);
      }
    }, bar.speed);
  });
  