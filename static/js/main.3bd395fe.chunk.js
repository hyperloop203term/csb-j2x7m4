(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),i=n.n(o),c=n(26),l=n(15),u=n(6),s=n(27),p=n.n(s),d=n(55),f=n.n(d),h=n(136),m=n(11),g=n(12),v=n(14),y=n(13),b=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return console.log("props data",this.props.data),this.props.data?a.a.createElement(u.BootstrapTable,{data:this.props.data},a.a.createElement(u.TableHeaderColumn,{dataField:"id",isKey:!0},"Field A"),a.a.createElement(u.TableHeaderColumn,{dataField:"title"},"Field B"),a.a.createElement(u.TableHeaderColumn,{dataField:"url"},"Field C")):a.a.createElement("p",null,"?")}}]),n}(a.a.Component);function E(){E=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),c=new k(r||[]);return a(i,"_invoke",{value:L(e,n,c)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",h="executing",m="completed",g={};function v(){}function y(){}function b(){}var w={};u(w,i,function(){return this});var x=Object.getPrototypeOf,C=x&&x(x(N([])));C&&C!==n&&r.call(C,i)&&(w=C);var j=b.prototype=v.prototype=Object.create(w);function O(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function P(e,t){function n(a,o,i,c){var l=p(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t(function(t,a){n(e,r,t,a)})}return o=o?o.then(a,a):a()}})}function L(t,n,r){var a=d;return function(o,i){if(a===h)throw new Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var l=S(c,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var u=p(t,n,r);if("normal"===u.type){if(a=r.done?m:f,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=m,r.method="throw",r.arg=u.arg)}}}function S(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=b,a(j,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,l,"GeneratorFunction")),e.prototype=Object.create(j),e},t.awrap=function(e){return{__await:e}},O(P.prototype),u(P.prototype,c,function(){return this}),t.AsyncIterator=P,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new P(s(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},O(j),u(j,l,"Generator"),u(j,i,function(){return this}),u(j,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;F(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}var w=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)([]),s=Object(l.a)(i,2),d=s[0],m=s[1],g=Object(r.useState)(),v=Object(l.a)(g,2),y=v[0],w=v[1],x=Object(r.useState)(),C=Object(l.a)(x,2),j=C[0],O=(C[1],Object(r.useState)(100)),P=Object(l.a)(O,2),L=P[0],S=P[1],T=Object(r.useState)(1),F=Object(l.a)(T,2),k=F[0],N=F[1],_=Object(r.useState)(1e3),I=Object(l.a)(_,2),z=I[0],H=(I[1],Object(r.useState)(0)),B=Object(l.a)(H,2),G=B[0],D=B[1],A=function(e){S(e.currentTarget.textContent),o(d.slice(0,e.currentTarget.textContent))},R=function(){var e=Object(c.a)(E().mark(function e(){var t,n,r,a,i=arguments;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,n=i.length>1&&void 0!==i[1]?i[1]:1e3,r=i.length>2?i[2]:void 0,console.log("fetchUserData",t,n,r,L),"next"===r&&D(G+1),"prev"===r&&D(G-1),console.log("start",t),e.next=9,p.a.get("https://jsonplaceholder.typicode.com/photos?_start=".concat(t,"&_limit=").concat(n));case 9:a=e.sent,console.log("res",a),o(a.data.slice(0,L)),N(1),m(a.data);case 14:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(function(){R()},[]);var U={},K={onlyOneExpanding:!0,paginationSize:1,onExpand:function(){var e=Object(c.a)(E().mark(function e(t,n){var r;return E().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return U=Object.assign(U,U[t]=n),e.next=3,p.a.get("https://jsonplaceholder.typicode.com/photos?_start=".concat(0,"&_limit=",1));case 3:r=e.sent,console.log(r),w(r.data),console.log(t,n,U),console.log("handleClick",J({id:4}));case 8:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),sizePerPageList:[15,10],onPageChange:function(e,t){},sizePerPage:15,prePage:"Prev",nextPage:"Next",firstPage:"First",lastPage:"Last",totalSize:100,paginationShowsTotal:function(e,t,n){return a.a.createElement("p",{style:{color:"blue"}},"From ",e," to ",t,", totals is ",n,"\xa0\xa0(its a customize text)")},paginationPosition:"top",alwaysShowAllBtns:!0,withFirstAndLast:4===j,expandRowBgColor:"rgb(242, 255, 163)",expandBy:"column",expandBodyClass:function(e,t,n){return n?t>1?"custom-expand-body-1":"custom-expand-body-0":"current-is-hidden"},expandParentClass:function(e,t,n){return J(e)}},J=function(e){return e.id<3};return console.log("copyUserData",d,n),a.a.createElement("div",{className:"react-bootstrap-table container mt-4"},a.a.createElement("h2",null,"React Bootstrap Table with pagination"),n.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement(u.BootstrapTable,{dataSort:!0,hover:!0,fetchInfo:{dataTotalSize:1e3},trClassName:function(e,t){return J(e)?"":"disable-row-cell"},data:n,options:K,expandableRow:J,expandComponent:function(e,t){if(console.log("expandComponent",e,t),!0===e.id)return a.a.createElement(b,{data:y})},expandColumnOptions:{expandColumnVisible:!0,expandColumnComponent:function(e){var t=e.isExpandableRow,n=e.isExpanded,r="";return console.log("expandColumnComponent",t,n),r=t?n?"(-)":"(+)":" ",a.a.createElement("div",null," ",r," ")},columnWidth:50,expandedColumnHeaderComponent:function(e){var t=e.anyExpand?"(-)":"(+)";return a.a.createElement("div",null,t)}},autoCollapse:{sort:!0,search:!0,filter:!0},search:!0},a.a.createElement(u.TableHeaderColumn,{expandable:!1,dataField:"id",isKey:!0},"User ID"),a.a.createElement(u.TableHeaderColumn,{expandable:!1,dataField:"title"},"User Title"),a.a.createElement(u.TableHeaderColumn,{expandable:!1,dataField:"url"},"User URL")),a.a.createElement("div",null,a.a.createElement(h.a,{style:{float:"left",paddingBottom:".5rem"}},a.a.createElement(h.a.Toggle,{variant:"default",className:" border mt-3",id:"dropdown-basic",style:{boxShadow:"none"}},L),a.a.createElement(h.a.Menu,null,a.a.createElement(h.a.Item,{onClick:function(e){return A(e)}},"100"),a.a.createElement(h.a.Item,{onClick:function(e){return A(e)}},"50"),a.a.createElement(h.a.Item,{onClick:function(e){return A(e)}},"25"))),a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},G>0?a.a.createElement("button",{className:"external-pagination-btn pagination-btn-prev",onClick:function(e){return R((G-1)*z,1e3,"prev")}},"Prev"):null,a.a.createElement(f.a,{hideFirstLastPages:!0,pageRangeDisplayed:1,activePage:k,itemsCountPerPage:L,totalItemsCount:d.length,onChange:function(e){console.clear(),N(e);var t=(e-1)*L;console.log("123",e,n,d,t,L,parseInt(t,10)+parseInt(L,10)),o(d.slice(t,parseInt(t,10)+parseInt(L,10)))},innerClass:"mt-2 pagination"}),d.length/L===k?a.a.createElement("button",{className:"external-pagination-btn pagination-btn-next",onClick:function(e){return R((G+1)*z,1e3,"next")}},"Next"):null))):a.a.createElement("i",{className:"fa fa-spinner fa-3x fa-spin"}))},x=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement(u.BootstrapTable,{data:this.props.data,remote:!0,pagination:!0,fetchInfo:{dataTotalSize:this.props.totalDataSize},options:{sizePerPage:this.props.sizePerPage,onPageChange:this.props.onPageChange,sizePerPageList:[5,10],page:this.props.currentPage,onSizePerPageList:this.props.onSizePerPageList}},a.a.createElement(u.TableHeaderColumn,{dataField:"id",isKey:!0},"Product ID"),a.a.createElement(u.TableHeaderColumn,{dataField:"name"},"Product Name"),a.a.createElement(u.TableHeaderColumn,{dataField:"price"},"Product Price"))}}]),n}(a.a.Component);a.a.Component;var C=function(e){Object(v.a)(n,e);var t=Object(y.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(g.a)(n,[{key:"render",value:function(){return a.a.createElement(u.BootstrapTable,{data:this.props.data,remote:!0,options:{onSortChange:this.props.onSortChange}},a.a.createElement(u.TableHeaderColumn,{dataField:"id",isKey:!0,dataSort:!0},"Product ID"),a.a.createElement(u.TableHeaderColumn,{dataField:"name",dataSort:!0},"Product Name"),a.a.createElement(u.TableHeaderColumn,{dataField:"price",dataSort:!0},"Product Price"))}}]),n}(a.a.Component);a.a.Component,n(133);function j(){return a.a.createElement("div",{className:"App m-4"},a.a.createElement(w,null))}var O=document.getElementById("root");i.a.render(a.a.createElement(j,null),O)},65:function(e,t,n){e.exports=n(134)}},[[65,1,2]]]);
//# sourceMappingURL=main.3bd395fe.chunk.js.map