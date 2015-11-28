var through = require('through2'),
  gutil = require('gulp-util');

module.exports = function(opts) {
  opts                 = opts || {};
  opts.url             = opts.url || '';
  opts.tag             = opts.tag || 'head';
  opts.uid             = opts.uid || '';
  opts.anonymizeIp     = opts.anonymizeIp     === false ? false : true;
  opts.demographics    = opts.demographics    === true  ? true  : false;
  opts.linkAttribution = opts.linkAttribution === true  ? true  : false;
  opts.sendPageView    = opts.sendPageView    === true  ? true  : false;
  opts.minify          = opts.minify          === true  ? true  : false;

  return through.obj(function(file, enc, cb) {
    if(file.isNull()) return cb(null, file);
    if(file.isStream()) return cb(new Error('gulp-ga: streams not supported'));

    var ga = "  <script>\n" +
        "      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
        "      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n" +
        "      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n" +
        "      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n" +
        "\n" +
        "      ga('create', '" + opts.uid + "', '" + opts.url + "');\n" +
        "      ga('set', 'anonymizeIp'," + opts.anonymizeIp + ");\n";
    if(opts.demographics)     { ga += "      ga('require', 'displayfeatures');\n"; }
    if(opts.linkAttribution)  { ga += "      ga('require', 'linkid', 'linkid.js');\n"; }
    if(opts.bounceTime > 1)   { ga += "      setTimeout(\"ga('send', 'event', 'read', '" + opts.bounceTime + " seconds')\"," +  opts.bounceTime + "000);\n"; }
    if(opts.sendPageView) { ga += "      ga('send', 'pageview');\n"; }

    ga += "    </script>\n  </" + opts.tag + ">\n";

    if(opts.minify) {
      ga = ga.replace(/\s*\n\s*/g, '');
    }
    var content = file.contents.toString();
    content = content.replace('<\/' + opts.tag + '>', ga);
    file.contents = new Buffer(content);
    cb(null, file);
  });
};
