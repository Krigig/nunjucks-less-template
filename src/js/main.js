//slider 
const mainButton = document.querySelector('.slider__button');
const BUTTON_MIDLE_WIDTH = 7;
const firstValue = document.querySelector('#use-ready-made-solutions-and-update');
mainButton.style.left = firstValue.offsetLeft- BUTTON_MIDLE_WIDTH+ 'px';

mainButton.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX
    };

    var dragged = false;

    var mouseMoveHandler = function (moveEvt) {
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX
      };

      startCoords = {
        x: moveEvt.clientX,
      };

      var newCoord = {
        x: mainButton.offsetLeft - shift.x,
      };

      var pinSpikeCoord = {
        x: newCoord.x + BUTTON_MIDLE_WIDTH,
      };
      
      if (pinSpikeCoord.x < mainButton.nextElementSibling.clientWidth && pinSpikeCoord.x > 0) {
        mainButton.style.left = newCoord.x + 'px';
      }
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });

// autoresize textarea
  var observe;
  if (window.attachEvent) {
      observe = function (element, event, handler) {
          element.attachEvent('on'+event, handler);
      };
  }
  else {
      observe = function (element, event, handler) {
          element.addEventListener(event, handler, false);
      };
  }
  function init () {
      var text = document.getElementById('text');
      function resize () {
          text.style.height = 'auto';
          text.style.height = text.scrollHeight+'px';
      }
      / 0-timeout to get the already changed text /
      function delayedResize () {
          window.setTimeout(resize, 0);
      }
      observe(text, 'change',  resize);
      observe(text, 'cut',     delayedResize);
      observe(text, 'paste',   delayedResize);
      observe(text, 'drop',    delayedResize);
      observe(text, 'keydown', delayedResize);

      text.focus();
      text.select();
      resize();
  }

  init()


