document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  // Add a DOMContentLoaded event listener to detect when the HTML page has loaded
document.addEventListener('DOMContentLoaded', function() {
    // Target the paragraph element with id="text"
    const paragraph = document.getElementById('text');
    
    // Replace the text content of the paragraph with "This is really cool!"
    paragraph.textContent = "This is really cool!";
});
