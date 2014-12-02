xmasify.js - christmasify your team page
========================================

X-masify your team page and add Santa's hat to every team member and
awesome christmas music with xmasify.js

A Santa’s hat and some awesome christmas music - that are the perfect ingredients for a shining christmas time :-)

We created some neat github library to christmasify your web worker’s life. Now it’s up to you to upgrade you team page! 

Examples: [Atlassian](example/atlassian.md), [Codeship](example/codeship.md), 
[FoundersExperts](example/foundersexperts.md), [Google](example/google.md), 
[Microsoft](example/microsoft.md), [Ostheimer](example/ostheimer.md), 
[Product Hunt](example/producthunt.md), [Quora](example/quora.md) and 
[Usersnap](example/usersnap.md).

[![Example Team Page](example/example-team.jpg)](https://usersnap.com/team?gat=xmas)

Quick Start with Tag Manager
----------------------------
Create a new custom HTML [tag manager](https://www.google.com/tagmanager/) tag with the following content:
Please make sure to adapt the DOM selectors ```wrap_sel``` and ```member_sel``` to your team page DOM layout.
```
<script type="text/javascript">
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
            static_dir: "//usersnap.github.io/xmasify/xmasify/"
        });
    };
    x.parentNode.insertBefore(s, x);
})();
</script>
```
You can limit the placement to your team page and a time window in tag manager easily.

Find out the DOM structure of your team page
--------------------------------------------

Short example of a team page DOM: All team members are wrapped up in ```.team-members``` 
whereas single team members have the ```.team-member``` class.

```
<div class="team-members">
    <div class="team-member">
           ... image, text, ...
    </div>
    ...
    <div class="team-member">
          ... image, text, ...
    </div>
</div>
```

This means  ```wrap_sel``` is  ```.team-members``` and  ```member_sel``` is  ```.team-member```.
 ```member_sel``` is used to  ```.find()``` relative from the  ```wrap_sel```!

Install on your site
--------------------

Embed the xmasify.js library to your page:
```
<script type="text/javascript" src="xmasify/xmasify.js"></script>
```

(Install is as easy as ```bower install xmasify```)

Find your team page's DOM structure. Xmasify.js needs one wrapping element class for all
team members and one selector class for a single team member. 

Invoke Xmasify.js as follows:
```
<script type="text/javascript">
Xmasify.xmasify({
    wrap_sel:    '.team-members',       // wrapping class
    member_sel:  '.team-member',        // person selector
    disableSound: false,                // disable auto-play music
    static_dir:  "/xmasify/"            // where to find the christmas hat image
});
</script>
```

Fine Tuning
-----------

Not every photograph looks the same. Xmasify.js allows fine adjustments for the christmas hat
placement.

You can specify placements, sizes, roation and image flips for every team member with the ```pos_map```
parameter:

```
Xmasify.xmasify({
    wrap_sel: '.team-members',
    member_sel: '.team-member',
    disableSound: false,
    static_dir: "/xmasify/",
    defs: {
        width: 200
        top: -50,
        left: 50,
        rot: 0,
        flip: false
    },
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
    }]
});
    
```

Trivia
======

Xmasify.js was created by [@josef_trauner](https://twitter.com/josef_trauner) and [@dorfbauer](https://twitter.com/dorfbauer) for [Usersnap](https://usersnap.com/?gat=xmas).
Never ask for a screenshot again - get it from the visual bug tracker [Usersnap](https://usersnap.com/?gat=xmas).


