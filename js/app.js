function init() {
    console.log("hello world");
    
    for (i=1; i<=100; i++){
        console.log("<div class=\"cell " +i+ "></div>")
    }
  }
  
window.addEventListener('DOMContentLoaded', init);