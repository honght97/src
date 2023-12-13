var app = app || {};

var spBreak = 767;

app.init = function () {

  app.sample();

};

app.isMobile = function () {

  return window.matchMedia('(max-width: ' + spBreak + 'px)').matches;

};

app.sample = function () {
  console.log('sample');
}


$(function () {

  app.init();

});
