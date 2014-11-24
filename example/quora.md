Xmasify the Quora Team Page
===========================

Open up http://www.quora.com/about/team and use the following
fine tuned Santa Hat placements:
![Quora Team](quora.jpg)

```
  (function() {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = '//usersnap.github.io/xmasify/xmasify/xmasify.js';
      var x = document.getElementsByTagName('script')[0];

      s.onload = function() {
          Xmasify.xmasify({
              wrap_sel: '.photos',
              member_sel: '.col',
              disableSound: false,
              static_dir: "//usersnap.github.io/xmasify/xmasify/",
              defs: {
                  width: 50,
                  left: 7,
                  top: -15
              }
          });
      };
      x.parentNode.insertBefore(s, x);
  })();
```

