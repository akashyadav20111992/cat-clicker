var cat = function(){
  this.name = ko.observable("halo");
  this.clicks = ko.observable(0);
  this.imgSrc = ko.observable("cat1.jpg");
  this.level = ko.computed(function(){
    if(this.clicks() <= 10){
      return "A";
    }
    else if (this.clicks() > 10) {
      return "B";
    }
  }, this);
  this.nicknames = ko.observableArray([
    {name:"nene"},
    {name:"nini"},
    {name:"nono"},
    {name:"nunu"}
  ]);
}
var ViewModel = function(){
  this.currentCat = ko.observable(new cat());
  this.incrementCounter = function(){
    this.currentCat().clicks(this.currentCat().clicks()+1);
  }
}
ko.applyBindings(new ViewModel());
