# target.js
> Choose target elements and show the text that you want when the mouse hover the point.

See the <a href="http://luisvinicius167.github.io/target.js/">Demo</a>.

### Installing

##### Npm:
```sh
 $ npm install target.js
```

##### Bower:
```sh
 $ bower install target.js
```

##### Manual install:
Just copy and paste the files present on 'dist' folder.

### Usage
In this example, let's say you want target the 'look' element:

```html
 <div id="look" class="look-box">
   <img src="http://link.to.image.com" alt="My look">
 </div>
```

Call ```set``` function to add the element, put the ```init``` function
after it and then see the magic happen:

 ```javascript
  target.set(
    {
      el: '#look'
      text: 'Nice product.',
      pointX: '1rem',
      pointY: '2rem'
    }
  ).init();
```

### API
``` Target.set( obj ) ```: Set the targets elements. Arguments needs to be object.

```javascript
  target.set(
    {
      el: id of target element, // '#el'
      text: the text that you want to show, // 'this is awesome.'
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
      text: the text that you want to show, // 'this is awesome.'
      pointX: the top value position of the point, // '10px'
      pointY: the left value position of the point // '1rem'
    }
  ).init();

  // alternative
  target.set(
    {
      el: id of target element, // '#el'
      text: the text that you want to show, // 'this is awesome.'
      pointX: the top value position of the point, // '10px'
      pointY: the left value position of the point // '1rem'
    }
  );

  target.init();
```

### Version
1.0.0

### License
The MIT License (MIT)

Copyright (c) 2016 Luis Vinicius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



