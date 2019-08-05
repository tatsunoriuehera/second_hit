(function(){
  'use strict'
  var start=document.getElementById('start');
  var stop=document.getElementById('stop');
  var result=document.getElementById('result');
  var startTime;
  var isStarted=false;

  start.addEventListener('click',function() {
    isStarted='true';
    if(isStarted===true){
      return;
    }
    startTime=Date.now();
    this.className='pushed';
    stop.className='';
    result.textContent='0.000';
    result.className='standby';
  });

  stop.addEventListener('click',function() {
    var eapsedTime;
    var diff;
    if(isStarted===false){
      return;
    }
    isStarted='false';
    eapsedTime=(Date.now()-startTime)/1000;
    result.textContent=eapsedTime.toFixed(3);
    this.className='pushed';
    start.className='';
    result.className='';
    diff=eapsedTime-5.0;
    //if(diff> -1.0 && diff<1.0)
    //Math.abs:絶対値
    if(Math.abs(diff)<1.0){
      result.className='perfect';
    }

  });

})();
