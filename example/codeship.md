Xmasify the Codeship Team Page
==============================

Open up https://codeship.com/team and use the following
fine tuned Santa Hat placements:
![Codeship Team](codeship.jpg)

```
(function() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = '//usersnap.github.io/xmasify/xmasify/xmasify.js';
    var x = document.getElementsByTagName('script')[0];

    s.onload = function() {
        Xmasify.xmasify({
            wrap_sel: '.row.bloxs',
            member_sel: '.blox--team',
            disableSound: false,
            static_dir: "//usersnap.github.io/xmasify/xmasify/",
            defs: {
                width: 200,
                left: 40,
                top: -28
            },
            pos_map: [{
                flip: true,
                top: -38,
                left: -2
            }, {}, {
                flip: true,
                left: 23,
                top: -52
            }, {
                flip: true,
                left: -28
            }, {
                left: 50,
                top: -30
            }, {
                width: 220
            }, {
                width: 220
            }, {}]
        });
    };
    x.parentNode.insertBefore(s, x);
})();
```

Trivia
======

Xmasify.js was created by [@josef_trauner](https://twitter.com/josef_trauner) and [@dorfbauer](https://twitter.com/dorfbauer) for [Usersnap](https://usersnap.com/?gat=xmas).
Never ask for a screenshot again - get it from the visual bug tracker [Usersnap](https://usersnap.com/?gat=xmas).
