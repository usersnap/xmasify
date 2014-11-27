Xmasify the Microsoft Team Page
===============================

Open up http://news.microsoft.com/microsoft-senior-leaders/ and use the following
fine tuned Santa Hat placements:
![Microsoft Team](microsoft.jpg)

```
(function() {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = '//usersnap.github.io/xmasify/xmasify/xmasify.js';
      var x = document.getElementsByTagName('script')[0];

      s.onload = function() {
          Xmasify.xmasify({
              wrap_sel: '.executive-bios',
              member_sel: '.exec-block',
              disableSound: false,
              static_dir: "//usersnap.github.io/xmasify/xmasify/",
              defs: {
                  width: 100,
                  left: 95,
                  top: -27
              }
          });
      };
      x.parentNode.insertBefore(s, x);
  })();
```

Trivia
======

Xmasify.js was created by [@josef_trauner](https://twitter.com/josef_trauner) and [@dorfbauer](https://twitter.com/dorfbauer) for [Usersnap](https://usersnap.com/?gat=xmas).
Never ask for a screenshot again - get it from the visual bug tracker [Usersnap](https://usersnap.com/?gat=xmas).
