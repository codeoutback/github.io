
//Function to show the associates degree
function assoc() {
    document.getElementById("assocDrpDwn").classList.toggle("show");
  }
  
//Function to show the bachelors degree
  function bach() {
    document.getElementById("bachDrpDwn").classList.toggle("show");
  }
  
//Function to show the certs degree
  function certs() {
    document.getElementById("certDrpDwn").classList.toggle("show");
  }


  window.onclick = function(event) {
    if (!event.target.matches('.expand')) {
      var dropdowns = document.getElementsByClassName("drpDwn-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDrpdwn = dropdowns[i];
        if (openDrpdwn.classList.contains('show')) {
          openDrpdwn.classList.remove('show');
        }
      }
    }
  }
  