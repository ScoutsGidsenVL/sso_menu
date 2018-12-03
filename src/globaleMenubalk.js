// function $(selector){
//     var self = {};
//     self.selector = selector;
//     self.element = document.querySelector(self.selector);

//     self.insert = function(){
//       return self.selector;
//     }
// }


function $(selector){
  var self = {};
  self.selector = selector;
  self.element = document.querySelector(self.selector);
  self.basis = [{"naam":"Scouts en Gidsen Vlaanderen","url":"https://www.scoutsengidsenvlaanderen.be"},{"naam":"Hopper","url":"http://www.hopper.be"},{"naam":"Groepsadministratie","url":"https://groepsadmin.scoutsengidsenvlaanderen.be/groepsadmin"}]
  self.html = function(){

    return self.element;
  }
  self.init = function(urls){
    getUl(self.basis);
    if(urls == null){ 
      self.element.innerHTML = '<div id="global-menu" class="region"> <div class="globale_menubalk">'+getUl(self.basis)+'</div></div>';
      return self;
    }
    self.element.innerHTML = urls;
    return self;
  }
  function getUl(urls) {
    ul = '<ul id="items" ng-controller="WebsiteController" class="ng-scope">'
    urls.forEach(element => {
      ul += '<li><a href="'+ element['url'] +'">'+ element['naam'] +'</a></li>';
    });
    ul += '</ul>'
    return ul;
  }
  
  
  return self
}