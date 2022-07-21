!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).edjsHTML=e()}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(t,e,n,r){return new(n||(n=Promise))((function(o,c){function i(t){try{u(r.next(t))}catch(t){c(t)}}function a(t){try{u(r.throw(t))}catch(t){c(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}u((r=r.apply(t,e||[])).next())}))}function e(t,e){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var n={delimiter:function(){return"<br/>"},header:function(t){var e=t.data;return"<h".concat(e.level,">").concat(e.text,"</h").concat(e.level,">")},paragraph:function(t){var e=t.data;return"<p>".concat(e.text,"</p>")},list:function(t){var e=t.data,n="unordered"===e.style?"ul":"ol",r=function(t,e){var n=t.map((function(t){if(!t.content&&!t.items)return"<li>".concat(t,"</li>");var n="";return t.items&&(n=r(t.items,e)),t.content?"<li> ".concat(t.content," </li>")+n:void 0}));return"<".concat(e,">").concat(n.join(""),"</").concat(e,">")};return r(e.items,n)},image:function(t){var e=t.data,n=e.caption?e.caption:"Image";return'<img src="'.concat(e.file&&e.file.url?e.file.url:e.url,'" alt="').concat(n,'" />')},quote:function(t){var e=t.data;return"<blockquote>".concat(e.text,"</blockquote> - ").concat(e.caption)},code:function(t){var e=t.data;return"<pre><code>".concat(e.code,"</code></pre>")},embed:function(t){var e=t.data;switch(e.service){case"vimeo":return'<iframe src="'.concat(e.embed,'" height="').concat(e.height,'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>');case"youtube":return'<iframe width="'.concat(e.width,'" height="').concat(e.height,'" src="').concat(e.embed,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');default:throw new Error("Only Youtube and Vime Embeds are supported right now.")}}};function r(t){return new Error('[31m The Parser function of type "'.concat(t,'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m'))}var o=function(c){void 0===c&&(c={});var i=Object.assign({},n,c);return{parse:function(t){return t.blocks.map((function(t){return i[t.type]?i[t.type](t):r(t.type)}))},parseAsync:function(n){var o=n.blocks;return t(void 0,void 0,void 0,(function(){return e(this,(function(n){return[2,o.map((function(n){return t(void 0,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return i[n.type]?[4,i[n.type](n)]:[3,2];case 1:return t=e.sent(),[3,3];case 2:t=r(n.type),e.label=3;case 3:return[2,t]}}))}))}))]}))}))},parseBlock:function(t){return i[t.type]?i[t.type](t):r(t.type)},parseStrict:function(t){var e=t.blocks,n=o(i).validate({blocks:e});if(n.length)throw new Error("Parser Functions missing for blocks: ".concat(n.toString()));for(var c=[],a=0;a<e.length;a++){if(!i[e[a].type])throw r(e[a].type);c.push(i[e[a].type](e[a]))}return c},validate:function(t){var e=t.blocks.map((function(t){return t.type})).filter((function(t,e,n){return n.indexOf(t)===e})),n=Object.keys(i);return e.filter((function(t){return!n.includes(t)}))}}};return o}));
