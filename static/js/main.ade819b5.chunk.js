(this.webpackJsonpbytebyte=this.webpackJsonpbytebyte||[]).push([[0],{105:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(25),i=n.n(a),u=(n(105),n(38)),o=n(254),s=n(255),E=n(256),b=n(257),j=(n(106),n(10)),l=n(85),d=n.n(l),f={I8:j.I8,U8:j.U8,I16BE:j.I16BE,I16LE:j.I16LE,U16BE:j.U16BE,U16LE:j.U16LE,I32BE:j.I32BE,I32LE:j.I32LE,U32BE:j.U32BE,U32LE:j.U32LE,I64LE:j.I64LE,I64BE:j.I64BE,U64LE:j.U64LE,U64BE:j.U64BE,I128BE:j.I128BE,I128LE:j.I128LE,U128BE:j.U128BE,U128LE:j.U128LE};function O(e){if(f[e])return f[e];var t=e.match(/(Byte)(\d+)(BE|LE)?/);if(!t)throw new Error("the input ".concat(e," is not valid"));var n=Object(u.a)(t,4),r=n[2],c=n[3];return function(e,t){return{byteWidth:e,read:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(j.formatByteLike)(n.slice(r,r+e),{le:t})},write:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e.write(Object(j.formatByteLike)(n,{le:t,convertEndian:t}),r,"hex")}}}(Number(r),"LE"===c)}var h=n(23);var B=function(){var e=Object(r.useState)(decodeURIComponent(window.location.search.slice(1))),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(u.a)(a,2),l=i[0],f=i[1],B=Object(r.useMemo)((function(){try{var e=JSON.parse(n);return e.reduce((function(e,t,n){var r="string"===typeof t?String(n):t.name,c="string"===typeof t?t:t.type;return e.field(r,O(c))}),Object(j.createFixedStruct)())}catch(t){return null}}),[n]),I=Object(r.useMemo)((function(){if(!l||!B)return null;var e=Object.entries(B.decode(Object(j.toBuffer)(l))).reduce((function(e,t){var n=Object(u.a)(t,2),r=n[0],c=n[1];return e.push([r,String(c)]),e}),[]);return Object.fromEntries(e)}),[l,B]);return Object(h.jsxs)(o.a,{gutter:32,children:[Object(h.jsx)(s.a,{xs:24,md:12,style:{padding:"32px"},children:Object(h.jsxs)(E.a,{size:"large",layout:"vertical",children:[Object(h.jsx)(E.a.Item,{label:"schema",children:Object(h.jsx)(b.a.TextArea,{value:n,onChange:function(e){return c(e.target.value)}})}),Object(h.jsx)(E.a.Item,{label:"input",children:Object(h.jsx)(b.a.TextArea,{value:l,onChange:function(e){return f(e.target.value)}})})]})}),Object(h.jsx)(s.a,{xs:24,md:12,style:{padding:"24px"},children:Object(h.jsx)(d.a,{data:I})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,258)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),I()}},[[250,1,2]]]);
//# sourceMappingURL=main.ade819b5.chunk.js.map