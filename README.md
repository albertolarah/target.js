# target.js
Choose targets elements and show the text who you want when the mouse hover the point.

### - How to install?

##### NPM:
```sh
 $ npm install target.js
```

##### Manual install:
Just copy and paste the files present on 'dist' folder.

### - API
``` Target.set( obj ) ```: Set the targets elements. Arguments needs to be object.
```javascript
  target.set( 
    {
      el: id of target element, // '#el'
      text: the texto who you want to show, // 'this is awesome.'
      pointX: the top value position of the point, // '10px'
      pointY: the left value position of the point // '1rem'
    } 
  )
```

``` Target.init( ) ```: When you set the targets elements, you need to init the target event. Two ways:
```javascript
  // one way | Recommended
  target.set( 
    {
      el: id of target element, // '#el'
      text: the texto who you want to show, // 'this is awesome.'
      pointX: the top value position of the point, // '10px'
      pointY: the left value position of the point // '1rem'
    } 
  ).init();

  // two way
  target.set( 
    {
      el: id of target element, // '#el'
      text: the texto who you want to show, // 'this is awesome.'
      pointX: the top value position of the point, // '10px'
      pointY: the left value position of the point // '1rem'
    } 
  );
  
  target.init();
```

### Version
1.0.0

### License
MIT.


