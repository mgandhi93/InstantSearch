(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(58),i=a.n(c),s=(a(68),a(30)),l=a(31),o=a(36),u=a(32),g=a(37),m=a(59),h=a.n(m),d=a(116),f=a(121),E=a(126),p=a(124),S=a(125),v=a(119),b=a(122),C=a(120),N=a(123),y=a(113),j=a(115),w=a(60),O=a.n(w),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:a.props.currentRefinement},a.onChange=function(e,t){var n=t.newValue;n||a.props.onSuggestionCleared(),a.setState({value:n})},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.props.refine(t)},a.onSuggestionsClearRequested=function(){a.props.refine()},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"getSuggestionValue",value:function(e){return e.name}},{key:"renderSuggestion",value:function(e){return r.a.createElement(y.a,{attribute:"name",hit:e,tagName:"mark"})}},{key:"render",value:function(){var e=this.props,t=e.hits,a=e.onSuggestionSelected,n=this.state.value,c={placeholder:"Search for a product...",onChange:this.onChange,value:n};return r.a.createElement(O.a,{suggestions:t,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,onSuggestionSelected:a,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:c})}}]),t}(n.Component),R=Object(j.a)(q),k=(a(102),Object(d.a)(function(){return null})),P=h()("QBE3NXD3HZ","0b63627a2efff1c9f74bbe7c9b6fb1e8");function V(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"hit-name"},r.a.createElement(y.a,{attribute:"name",hit:e.hit})),r.a.createElement("div",{className:"hit-location"},r.a.createElement(y.a,{attribute:"location",hit:e.hit})),r.a.createElement("div",{className:"hit-date"},r.a.createElement(y.a,{attribute:"date",hit:e.hit})))}var x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.onSuggestionSelected=function(e,t){var n=t.suggestion;a.setState({query:n.name})},a.onSuggestionCleared=function(){a.setState({query:""})},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header-title"},r.a.createElement("a",{href:"/"},"Concerts Listings")),r.a.createElement("p",{className:"header-subtitle"},"using"," ",r.a.createElement("a",{href:"https://github.com/algolia/react-instantsearch"},"React InstantSearch")," with Autocomplete")),r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{indexName:"concerts",searchClient:P},r.a.createElement(E.a,{hitsPerPage:25}),r.a.createElement(R,{onSuggestionSelected:this.onSuggestionSelected,onSuggestionCleared:this.onSuggestionCleared})),r.a.createElement(f.a,{indexName:"concerts",searchClient:P},r.a.createElement("div",{className:"left-panel"},r.a.createElement("h2",null,"Name"),r.a.createElement(p.a,null),r.a.createElement(S.a,null),r.a.createElement(v.a,{attribute:"name",showMore:!0}),r.a.createElement(E.a,{hitsPerPage:20})),r.a.createElement(k,{defaultRefinement:e}),r.a.createElement(b.a,{hitComponent:V}),r.a.createElement("div",{className:"pagination"},r.a.createElement(C.a,null)),r.a.createElement("div",{className:"poweredBy"},r.a.createElement(N.a,null)))))}}]),t}(n.Component);i.a.render(r.a.createElement(x,null),document.getElementById("root"))},63:function(e,t,a){e.exports=a(114)},68:function(e,t,a){}},[[63,2,1]]]);
//# sourceMappingURL=main.b29f0f67.chunk.js.map