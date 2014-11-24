Xmasify the Usersnap Team Page
==============================

Open up https://usersnap.com/team/ and use the following
fine tuned Santa Hat placements:
![Usersnap Team](usersnap.jpg)

```
(function() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = '//usersnap.github.io/xmasify/xmasify/xmasify.js';
    var x = document.getElementsByTagName('script')[0];

    s.onload = function() {
        Xmasify.xmasify({
            wrap_sel: '.team-members',
            member_sel: '.team-member',
            disableSound: false,
            static_dir: "//usersnap.github.io/xmasify/xmasify/",
            pos_map: [{
                width: 240,
                top: -104,
                left: -34,
                rot: 0,
                flip: true
            }, {
                width: 200,
                top: -80,
                left: 100,
                rot: 0,
                flip: false
            }, {
                width: 230,
                top: -81,
                left: 66,
                rot: -13,
                flip: false
            }, {
                width: 200,
                top: -68,
                left: 101,
                rot: 0,
                flip: false
            }, {
                width: 250,
                top: -106,
                left: 36,
                rot: -24,
                flip: false
            }, {
                width: 250,
                top: -96,
                left: -6,
                rot: 0,
                flip: true
            }, {
                width: 200,
                top: -49,
                left: 103,
                rot: 0,
                flip: false
            }, {
                width: 216,
                top: -70,
                left: 99,
                rot: 0,
                flip: false
            }, {
                width: 240,
                top: -84,
                left: -30,
                rot: 0,
                flip: true

            }]
        });
    };
    x.parentNode.insertBefore(s, x);
})();
```

