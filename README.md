xmasify.js - christmasify your team page
=====================================

X-masify your team page and add Santa's hat to every team member and
awesome christmas music with xmasify.js

[![Example Team Page](example/example-team.jpg)](https://usersnap.com/team?gat=xmas)

Quick Start
-----------

Embed the xmasify.js library to your page:
```
<script type="text/javascript" src="xmasify/xmasify.js"></script>
```

(Install is as easy as ```bower install xmasify```)

Find your team page's DOM structure. Xmasify.js needs one wrapping element class for all
team members and one selector class for a single team member. 

Short example:
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

Invoke Xmasify.js as follows:
```
<script type="text/javascript">
Xmasify.xmasify({
    wrap_sel:    '.team-members',	// wrapping class
    member_sel:  '.team-member',        // person selector
    disableSound: false,	        // disable auto-play music
    static_dir:  "/xmasify/"            // where to find the christmas hat image
});
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

Xmasify.js was created by (https://usersnap.com/team)[Usersnap].
Never ask for a screenshot again - get it from the visual bug tracker (https://usersnap.com/?gat=xmas)[Usersnap].


