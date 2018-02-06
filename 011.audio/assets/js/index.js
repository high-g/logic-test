(function(){

  init();

  function init() {
    createjs.Sound.addEventListener('fileload', loadHandler);
    createjs.Sound.registerSound({id: 'sound01', src: 'assets/audio/joey_house.mp3'});
    
    var context = createjs.Sound.activePlugin.context;
    var analyserNode = context.createAnalyser();
    var FFTSIZE = 2048;
    
    analyserNode.fftsize = FFTSIZE;
    analyserNode.connect(context.destination);
    
    var freqByteData = new Uint8Array(FFTSIZE / 2);
    analyserNode.getByteFrequencyData(freqByteData);
    
    for(var i = 0; i < FFTSIZE / 2; i++) {
      var freqData = freqByteData[i];
      if(!freqData) freqData = 0;
      else freqData /= 256;
    }
  }
  
  function loadHandler() {
    createjs.Sound.play('sound01', {loop: -1});
  }
})();