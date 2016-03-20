/**
 * ----------------------------|
 * Pointer.js                  |
 * ----------------------------|
 * author: Luis Vinícius       |
 * email: dev_luis@hotmail.com |
 *---------------------------- |
 */
;(function ( window, document ){
  'use strict';
  
  function Pointer () {
    this.elements = [];
  }
  
  Pointer.prototype = { 
  
  /**
   * Set the element
   * @param el { element }
   * @param point { Array }
   */
    
    set: function ( arr ) {
      var self = this;
      arr.forEach(function ( obj ) {
        self.appendToParent(obj.el).then(function ( element ) {
          var positionStyle = 'top:' + obj.pointX + 'px;' + 'left:' + obj.pointY + 'px';
          element.style.cssText += positionStyle;
          element.setAttribute('data-text',obj.text);
        });
      });
      
      return this;
    },
    
    addElement: function ( el ) {
      this.elements.push(el);
    },
    
    appendToParent: function ( el ) {
      var item = document.querySelector(el);
      return new Promise(function(resolve, reject) {
        var div = document.createElement('div');
        var p = document.createElement('p');
        p.classList.add('text-pointer-element');
        div.classList.add('pointer-element');
        div.appendChild(p);
        var element = item.appendChild(div);
        resolve(element);
      });
    },
    
    init: function ( ) {
      var pointers = document.getElementsByClassName('pointer-element');
      var self = this;

      Array.prototype.forEach.call(pointers, function ( pointer ) {
        pointer.addEventListener('mouseenter', function ( e ) {        
          var el = e.target.children[0];
          el.innerHTML = e.target.getAttribute('data-text');
        }, false);
      })
    }
  };
  
  if ( !window.Pointer ) {
    window.Pointer = new Pointer;
  }
}(window, document));