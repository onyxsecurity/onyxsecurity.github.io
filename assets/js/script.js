// read the MOTD file
fetch('motd.txt')
  .then(response => response.text())
  .then(motdText => {
    // split the MOTD text into an array of lines
    const motdLines = motdText.split('\n');
    
    // get a random MOTD from the array
    const motd = motdLines[Math.floor(Math.random() * motdLines.length)];
    
    // display the MOTD
    document.getElementById('motd').innerHTML = motd;
  });

// update the MOTD every 24 hours
setInterval(() => {
  // read the MOTD file
  fetch('motd.txt')
    .then(response => response.text())
    .then(motdText => {
      // split the MOTD text into an array of lines
      const motdLines = motdText.split('\n');
      
      // get a random MOTD from the array
      const motd = motdLines[Math.floor(Math.random() * motdLines.length)];
      
      // display the MOTD
      document.getElementById('motd').innerHTML = motd;
    });
}, 24 * 60 * 60 * 1000); // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds