function init() {
  let dnd = new DND(); 
  dnd.setEventListeners();  
}

let windowLoad = new Promise(function(resolve) {
  window.addEventListener('load', resolve);
});

windowLoad.then(
  function(result) {
    init();
  }
);