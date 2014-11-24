/**
  * xmasify.js - christmasify your team page
  *
  * written by Josef Trauner (@joseft_trauner) and Gregor Dorfbauer (@dorfbauer)
  * for the Usersnap team page
  *
  **/

/* Example usage:

DOM-Structure:

<div class="team-members">
    <div class="team-member">
           ... image, text, ...
    </div>
    ...
    <div class="team-member">
          ... image, text, ...
    </div>
</div>

Call (please note wrap_sel + member_sel):

Xmasify.xmasify({
    wrap_sel: '.team-members',
    member_sel: '.team-member',
    disableSound: false,
    static_dir: "/xmasify/",
    pos_map: [{
        width: 240,
        top: -104,
        left: -34,
        rot: 0,
        flip: true
    }]
});
*/
var Xmasify = (function() {

    if (!window.jQuery) {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    var BASE_URL = "/";

    function createHat(teamm, sett, idx) {
        sett = sett || {};
        sett.flip = sett.flip || false;
        sett.width = sett.width || 200;
        sett.rot = sett.rot || 0;
        sett.top = sett.top || -50;
        sett.left = sett.left || 50;

        var hutStyle = document.createElement('style');
        hutStyle.type = 'text/css';

        var rules;
        if (sett.flip) {
            rules = document.createTextNode('@-webkit-keyframes wiggle' + idx + ' {from {-webkit-transform: rotateZ(' + (sett.rot + 2) + 'deg) rotateY(180deg);} 50% {-webkit-transform: rotateZ(' + (sett.rot - 2) + 'deg) rotateY(180deg);}   to {-webkit-transform: rotateZ(' + (sett.rot + 2) + 'deg) rotateY(180deg);}}');
        } else {
            rules = document.createTextNode('@-webkit-keyframes wiggle' + idx + ' {from {-webkit-transform: rotateZ(' + (sett.rot + 2) + 'deg);} 50% {-webkit-transform: rotateZ(' + (sett.rot - 2) + 'deg);}   to {-webkit-transform: rotateZ(' + (sett.rot + 2) + 'deg);}}');
        }
        var rules2 = document.createTextNode('.hut' + idx + ':hover { -webkit-animation-name: wiggle' + idx + ';  -webkit-animation-duration: .4s;  -webkit-animation-iteration-count: infinite;   -webkit-animation-timing-function: ease;}');
        hutStyle.appendChild(rules);
        hutStyle.appendChild(rules2);
        document.body.appendChild(hutStyle);
        var hut = document.createElement('div');
        hut = jQuery(hut);
        hut.addClass('hut' + idx);
        hut.css({
            width: sett.width + 'px',
            height: sett.width + 'px',
            position: 'absolute',
            backgroundImage: 'url(' + BASE_URL + 'santas_hat.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: sett.width + 'px',
            transform: 'rotateZ(' + sett.rot + 'deg)',
            top: sett.top,
            left: sett.left
        });
        if (sett.flip) {
            hut.css('transform', 'rotateY(180deg)');
        }
        teamm.append(hut);
    }

    function createSong() {
        var audio = document.createElement("iframe");
        audio.src = "https://archive.org/embed/JingleBells_903&autoplay=1";
        document.body.appendChild(audio);
        jQuery(audio).css({ position: "fixed", bottom: 0, left: 0, height: 30, width:100 });
    }

    function christmas(options) {
        var wrap_sel = options.wrap_sel;
        var member_sel = options.member_sel;
        var member_wrap_sel = options.member_wrap_sel;
        //create song
        if (!options.disableSound) {
            createSong();
        }
        if (options.static_dir) {
            BASE_URL = options.static_dir;
        }
        var memb = jQuery(wrap_sel);
        memb.find(member_sel).css('position', 'relative');
        var posMap = options.pos_map || [];
        memb.find(member_sel).each(function(k, v) {
            var m = jQuery(this);
            createHat(m, posMap[k], k);
        });
    }
    return {
        xmasify: function(options) {
            christmas(options);
        }
    };
}());
