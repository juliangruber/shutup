
# shutup

EventEmitters by default print a warning on the console when you add more than
10 listeners. This module makes EventEmitters shut up!

## Usage

```js
var shutup = require('shutup');
var EventEmitter = require('events').EventEmitter;

var ee = shutup(new EventEmitter());

// or

var ee = new EventEmitter();
shutup(ee);

// now add as many listeners as you want without getting errors
```

Since a Stream also is an EventEmitter this works with streams the same way.

## ORLY?

This is the cooler version of `ee.setMaxListeners(Infinity)` and more
convenient since you can use it in the same line as you create the
EventEmitter.

This is how it looks with [through](https://github.com/dominictarr/through):

```js
var tr = shutup(through());
```

## API

### shutup (ee)

Sets `ee`'s maximum listeners to `Infinity` and returns `ee` afterwards.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install shutup
```

## License

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
