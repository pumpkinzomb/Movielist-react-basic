(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(3),i=n.n(s),o=n(1),c=n.n(o),l=n(4),m=n(5),u=n(6),p=n(9),v=n(7),f=n(10),d=n(8),g=n.n(d);n(21);function h(e){var t=e.poster;return r.a.createElement("img",{src:t,alt:"Movie Poster",width:"250px",className:"movie-poster"})}function E(e){var t=e.genre;return r.a.createElement("span",{className:"movie-genre"},t," ")}var y=function(e){var t=e.title,n=e.poster,a=e.genres,s=e.synopsis;return r.a.createElement("div",{className:"movie-content"},r.a.createElement("div",{className:"movie-column"},r.a.createElement(h,{poster:n})),r.a.createElement("div",{className:"movie-column"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"movie-genres"},a.map(function(e,t){return r.a.createElement(E,{genre:e,key:t})})),r.a.createElement("p",{className:"movie-synopsis"},r.a.createElement(g.a,{text:s,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},b=(n(23),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(s)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return r.a.createElement(y,{title:e.title,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis,key:e.id})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App-loading"},e?this._renderMovies():"Loadings...")}}]),t}(a.Component));i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.7138841e.chunk.js.map