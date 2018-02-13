(function(){
  TweenMax.to('#area1', 1, {
    y: 100,
    ease: 'linear'
  });
  
  TweenMax.set('#area2', {
    top: 200,
    scale: 2
  });
  
  TweenMax.staggerTo('#area3', .5, {opacity: .2 }, .2, function() {
    console.log('area3');
  });

  TweenMax.staggerFromTo('#area4', 1, {opacity: 0}, {opacity: 1});
})();