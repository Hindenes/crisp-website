(function (){
  var content = ['about', 'portfolio'];

  function hideOthers(thisId){
    content.forEach(function (id){
      if(id !== thisId) {
        document.getElementById(id).classList.add('hide');
      }
    });
  }

  function showElement(elementId) {
    document.getElementById(elementId).classList.remove('hide');
  }

  function updateNavigationMenu(selectedElementId) {
    var selectClass = 'nav-elem-selected';
    document.getElementsByClassName(selectClass)[0].classList.remove(selectClass);
    document.getElementById(selectedElementId + '-btn').classList.add(selectClass);
  }

  window.navigateTo = function(elementId) {
    showElement(elementId);
    hideOthers(elementId);
    updateNavigationMenu(elementId);
  }
})()
