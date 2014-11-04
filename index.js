var through = require('through2'),
  gutil = require('gulp-util');

module.exports = function(opts) {
  if(!opts) opts = {};
  if(!opts.url) opts.url = '';
  if(!opts.tag) opts.tag = 'head';
  if(typeof opts.uid === 'undefined') opts.uid = '';

  return through.obj(function(file, enc, cb) {
    if(file.isNull()) return cb(null, file);
    if(file.isStream()) return cb(new Error('gulp-ga: streams not supported'))

    var ga = "  <script>\n" +
        "      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
        "      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n" +
        "      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n" +
        "      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n" +
        "\n" +
        "      ga('create', '" + opts.uid + "', '" + opts.url + "');\n" +
        "      ga('send', 'pageview');\n" +
        "    </script>\n  </" + opts.tag + ">\n";

    var content = file.contents.toString();
    content = content.replace('<\/' + opts.tag + '>', ga);
    file.contents = new Buffer(content);
    cb(null, file)
  });
};
