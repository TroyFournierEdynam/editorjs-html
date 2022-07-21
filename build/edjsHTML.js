!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).edjsHTML=t()}(this,(function(){"use strict";
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
    ***************************************************************************** */function e(e,t,n,r){return new(n||(n=Promise))((function(o,c){function a(e){try{u(r.next(e))}catch(e){c(e)}}function i(e){try{u(r.throw(e))}catch(e){c(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}u((r=r.apply(e,t||[])).next())}))}function t(e,t){var n,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}var n={delimiter:function(){return"<br/>"},header:function(e){var t=e.data;return"<h".concat(t.level,">").concat(t.text,"</h").concat(t.level,">")},paragraph:function(e){var t=e.data;return"<p>".concat(t.text,"</p>")},list:function(e){var t=e.data,n="unordered"===t.style?"ul":"ol",r=function(e,t){var n=e.map((function(e){if(!e.content&&!e.items)return"<li>".concat(e,"</li>");var n="";return e.items&&(n=r(e.items,t)),e.content?"<li> ".concat(e.content," </li>")+n:void 0}));return"<".concat(t,">").concat(n.join(""),"</").concat(t,">")};return r(t.items,n)},image:function(e){var t=e.data,n=t.caption?t.caption:"Image";return'<img src="'.concat(t.file&&t.file.url?t.file.url:t.url,'" alt="').concat(n,'" />')},quote:function(e){var t=e.data;return"<blockquote>".concat(t.text,"</blockquote> - ").concat(t.caption)},code:function(e){var t=e.data;return"<pre><code>".concat(t.code,"</code></pre>")},embed:function(e){var t=e.data;switch(t.service){case"vimeo":return'<iframe src="'.concat(t.embed,'" height="').concat(t.height,'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>');case"youtube":return'<iframe width="'.concat(t.width,'" height="').concat(t.height,'" src="').concat(t.embed,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');default:throw new Error("Only Youtube and Vime Embeds are supported right now.")}}};function r(e){return new Error('[31m The Parser function of type "'.concat(e,'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m'))}var o=function(c){void 0===c&&(c={});var a=Object.assign({},n,c);return{parse:function(e){return e.blocks.map((function(e){return a[e.type]?a[e.type](e):r(e.type)}))},parseAsync:function(n){return n.blocks.map((function(n){return e(void 0,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return a[n.type]?[4,a[n.type](n)]:[3,2];case 1:return e=t.sent(),[3,3];case 2:e=r(n.type),t.label=3;case 3:return[2,e]}}))}))}))},parseBlock:function(e){return a[e.type]?a[e.type](e):r(e.type)},parseStrict:function(e){var t=e.blocks,n=o(a).validate({blocks:t});if(n.length)throw new Error("Parser Functions missing for blocks: ".concat(n.toString()));for(var c=[],i=0;i<t.length;i++){if(!a[t[i].type])throw r(t[i].type);c.push(a[t[i].type](t[i]))}return c},validate:function(e){var t=e.blocks.map((function(e){return e.type})).filter((function(e,t,n){return n.indexOf(e)===t})),n=Object.keys(a);return t.filter((function(e){return!n.includes(e)}))}}};return o}));
