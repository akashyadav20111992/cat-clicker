var ViewModel = function(){
  this.name = ko.observable("halo");
  this.clicks = ko.observable(0);
  this.imgSrc = ko.observable("cat1.jpg");
  this.incrementCounter = function(){
    this.clicks(this.clicks()+1);
  }
}
ko.applyBindings(new ViewModel());
