/**
 * ----------------------------|
 * Target.js                  |
 * ----------------------------|
 * author: Luis Vinícius       |
 * email: dev_luis@hotmail.com |
 *---------------------------- |
 */
;(function ( window, document ){
  'use strict';
  
  function setPositionRelative ( el ) {
    var value = getComputedStyle(el).getPropertyValue("position");
    if ( value === 'static' ) {
      el.style.position = 'relative';
    }
  };
  
  function Target () {
  }
  
  Target.prototype = { 
  
  /**
   * Set the element
   * @param el { element }
   * @param point { array }
   */
    
    set: function ( ) {
      var self = this;
      Array.prototype.forEach.call(arguments, function ( arg ) {
        console.log(typeof arg)
        if (typeof arg === 'object') {
          self.appendToParent(arg.el).then(function ( element ) {
            var positionStyle = 'top:' + arg.pointX + 'px;' + 'left:' + arg.pointY + 'px';
            element.style.cssText += positionStyle;
            element.setAttribute('data-text',arg.text);
          });
        }
      });
      return this;
    },
    
    appendToParent: function ( el ) {
      var item = document.querySelector(el);
      // set the image || element position
      setPositionRelative(item);
      return new Promise(function ( resolve, reject ) {
        var div = document.createElement('div');
        var p = document.createElement('p');
        p.classList.add('text-target-element');
        div.classList.add('target-element');
        div.appendChild(p);
        var element = item.appendChild(div);
        resolve(element);
      });
    },
    
    init: function ( ) {
      var targets = document.getElementsByClassName('target-element');
      Array.prototype.forEach.call(targets, function ( target ) {
        target.addEventListener('mouseenter', function ( e ) {        
          var el = e.target.children[0];
          el.innerHTML = e.target.getAttribute('data-text');
        }, false);
      })
    }
  };
  
  if ( !window.Target ) {
    window.target = new Target;
  }
}(window, document));
