(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),o=(a(39),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),d=a(12),h=a(13),p=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"navbar-nav ml-auto mx-auto text-lighten-1"},l.a.createElement("span",{className:"navbar-brand text-dark"},"Photo Gallery")))))},E=a(10),v=a.n(E),f=a(30),b=a.n(f),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"likePhoto",value:function(e){v.a.post("https://api.unsplash.com/photos/".concat(e,"/like?client_id=").concat("gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY")).then((function(e){console.log(e.data)}))}},{key:"render",value:function(){var e=this,t=this.props.photo;return l.a.createElement("div",{className:"col-sm-12 col-md-3"},l.a.createElement("span",{"data-toggle":"modal","data-target":"#"+t.id},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("img",{src:t.urls.full+"w=1500&h=400",className:"img-fluid img-gallery",alt:"Responsive"})))),l.a.createElement("div",{className:"modal fade",id:t.id,tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog text-center modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-6"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("img",{src:t.urls.full+"w=1500&h=400",className:"img-fluid modal-image",alt:"Responsive"}))),l.a.createElement("div",{className:"col-sm-12 col-md-6"},l.a.createElement("span",{"data-dismiss":"modal"},l.a.createElement("label",{className:"close"})),l.a.createElement("div",{className:"modal-footer-info text-left"},l.a.createElement("p",null,l.a.createElement("i",{onClick:function(){e.likePhoto(t.id)},className:"fa fa-heart-o","aria-hidden":"true"})," ",t.likes),l.a.createElement("br",null),l.a.createElement("div",{className:"modal-info"},l.a.createElement("div",null,t.alt_description?t.alt_description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"btn btn-link",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"fa fa-ellipsis-h","aria-hidden":"true"})),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},l.a.createElement("a",{className:"dropdown-item",href:t.links.download},"download"),l.a.createElement("a",{className:"dropdown-item",href:t.user.portfolio_url},"user portfolio")))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"modal-footer-container"},l.a.createElement("p",null,l.a.createElement("small",null,"uploaded ",t.created_at?b()(t.created_at).calendar():null)),l.a.createElement("p",null,l.a.createElement("small",null,"by ",t.user.username),l.a.createElement("img",{src:t.user.profile_image.small,className:"rounded-circle",alt:t.user.username}))))))))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={galleryPhotos:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.unsplash.com/photos/?client_id=".concat("gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY")).then((function(t){e.setState({galleryPhotos:t.data})}))}},{key:"render",value:function(){var e=this.state.galleryPhotos;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},e&&e.map((function(e){return l.a.createElement(g,{photo:e,key:e.id})}))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,null))}}]),t}(n.Component),j=function(e){var t=e.collection;return l.a.createElement("div",null,l.a.createElement("div",{id:t.id,className:"carousel slide carousel-fade text-center","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner"},t.preview_photos&&t.preview_photos.map((function(e,t){return l.a.createElement("div",{className:"carousel-item ".concat(0===t?"active":""),key:e.id},l.a.createElement("img",{src:e.urls.small,alt:"..."}))}))),l.a.createElement("a",{className:"carousel-control-prev",href:"#".concat(t.id),role:"button","data-slide":"prev"},l.a.createElement("div",{id:"chevron-arrow-left"})),l.a.createElement("a",{className:"carousel-control-next",href:"#".concat(t.id),role:"button","data-slide":"next"},l.a.createElement("div",{id:"chevron-arrow-right"}))))},k=function(e){var t=e.collection;return l.a.createElement("div",{className:"col-sm-12 col-md-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-9"},l.a.createElement("h5",null,l.a.createElement("b",null,t.title)),l.a.createElement("div",null,t.description?t.description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua."),l.a.createElement("div",{style:{margin:"10px 0px 10px 0px"}},l.a.createElement(d.b,{to:"/collection/".concat(t.id)},"See collecion photos")),l.a.createElement("hr",null),l.a.createElement("div",null,t.tags&&t.tags.map((function(e,t){return l.a.createElement("span",{className:"badge badge-light tag",key:t},e.title)})))),l.a.createElement("div",{className:"col-sm-12 col-md-3"},l.a.createElement(j,{collection:t}))))),l.a.createElement("br",null))},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={collections:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://api.unsplash.com/collections/?client_id=".concat("gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY")).then((function(t){e.setState({collections:t.data})}))}},{key:"render",value:function(){var e=this.state.collections;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-10 offset-lg-1"},e&&e.map((function(e){return l.a.createElement(k,{collection:e,key:e.id})})))))}}]),t}(n.Component),O=function(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"nav justify-content-center"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link active",to:""},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/search"},"Search")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/collections"},"Collections"))))},x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={collectionPhotos:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("https://api.unsplash.com/collections/".concat(t,"/photos?client_id=").concat("gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY")).then((function(t){e.setState({collectionPhotos:t.data})}))}},{key:"render",value:function(){var e=this.state.collectionPhotos;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},e&&e.map((function(e){return l.a.createElement(g,{photo:e,key:e.id})}))))}}]),t}(n.Component),C=a(33),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={searchInput:"",result:{}},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();v.a.get("https://api.unsplash.com/search/photos?client_id=".concat("gCouJE6hRjWt7VFkyxrAGhBL9T_m1-MJ51ruYu7LbJY","&query=").concat(a.state.searchInput)).then((function(e){a.setState({result:e.data}),console.log(a.state.result)}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.result;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-8 offset-md-2 text-center"},l.a.createElement("h3",null,"Search a photo"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",className:"search-input",id:"searchInput",placeholder:"Search...",onChange:this.handleChange})))),l.a.createElement("div",{className:"row"},e.results&&e.results.map((function(e){return l.a.createElement(g,{photo:e,key:e.id})}))))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement("div",{className:"container main-container"},l.a.createElement(O,null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:y}),l.a.createElement(h.a,{path:"/collections",component:w}),l.a.createElement(h.a,{path:"/collection/:id",component:x}),l.a.createElement(h.a,{path:"/search",component:_})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.833d353a.chunk.js.map