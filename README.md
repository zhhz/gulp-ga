# gulp-ga

> Adds google analystics code into html file.

## Information

<table>
<tr>
<td>Package</td><td>gulp-ga</td>
</tr>
<tr>
<td>Description</td>
<td>Insert google analystics code into html with gulp (gulpjs.com)</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage


#### Install

```bash
$ npm install gulp-ga --save-dev
```

## Example

```js
var gulp = require('gulp');
var ga = require('gulp-ga');

// Basic usage:
gulp.task('ga', function(){
  gulp.src('./index.html')
  .pipe(ga({url: 'mydomain.com', uid: 'UA-12345678-1'}))
  .pipe(gulp.dest('./'));
});

```

####You can view more examples in the [example folder.](https://github.com/zhhz/gulp-ga/tree/master/examples)

## Options
### options.url
The page you want analysis

    Type: `String`

Example:

```js
.pipe(ga({url: 'mydomain.com'})
```

### options.uid
Set the uid

    Type: `String`

Example:

```js
.pipe(ga({uid: 'UA-12345678-1'}))
```

### options.tag
Set a specific tag to insert before it.

    Type: `String`
    Default: `head`

Example:

```js
.pipe(ga({tag: 'head'}))
.pipe(ga({tag: 'body'}))
```

## LICENSE

(MIT License)

Copyright (c) 2014 Zhonghai Zuo <zhonghai.zuo@gmail.com> zhhz

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
