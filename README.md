# gulp-ga

> Adds Google Analytics code into HTML files.

## Information

<table>
<tr>
<td>Package</td><td>gulp-ga</td>
</tr>
<tr>
<td>Description</td>
<td>Insert Google Analytics code into HTML with Gulp (gulpjs.com)</td>
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

## Options
### options.url
The page you want analysis (required)

    Type: `String`

Example:

```js
.pipe(ga({url: 'mydomain.com'})
```

### options.uid
Set the uid (required)

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

### options.anonymizeIp
Allow requests IP address anonymization

    Type: `Boolean`
    Default: `true`

Example:

```js
.pipe(ga({anonymizeIp: false}))
```


### options.demographics
Enable display features.

    Type: `Boolean`
    Default: `false`

Example:

```js
.pipe(ga({demographics: true}))
```

### options.linkAttribution
Set an enhanced link-tracking functionality.

    Type: `Boolean`
    Default: `false`

Example:

```js
.pipe(ga({linkAttribution: true}))
```

### options.bounceTime
Set a specific bounce time.

    Type: `Number`
    Default: `N/A`

Example:

```js
.pipe(ga({bounceTime: 15}))
```

### options.minify
Minify GA script code (remove `\n` and trailing whitespace).

    Type: `Boolean`
    Default: `false`

Example:

```js
.pipe(ga({minify: true}))
```

### options.sendPageView
Send page view option.

    Type: `Boolean`
    Default: `true`

Example:

```js
.pipe(ga({sendPageView: true}))
```

## LICENSE

(MIT License)

Copyright (c) 2014,2016 Zhonghai Zuo <zhonghai.zuo@gmail.com> zhhz

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
