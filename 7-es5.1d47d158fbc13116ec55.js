function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(u){r=!0,a=u}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"dn/6":function(e,t,n){"use strict";n.r(t);var i=n("fXoL"),r=n("ofXK"),a=n("2Vo4"),o=n("XNiG"),s=n("LRne"),u=n("itXk"),c=n("HDdC"),l=n("mCNh"),h=n("VRyK"),y=n("IzEk"),d=n("bHdf");function p(){return Object(d.a)(1)(Object(s.a).apply(void 0,arguments))}var f=n("z+Ro");function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[t.length-1];return Object(f.a)(i)?(t.pop(),function(e){return p(t,e,i)}):function(e){return p(t,e)}}var b=n("1G5W"),v=n("oB13"),g=n("5+tZ"),k=n("l7GE"),w=n("ZUHj");function C(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n;return"function"==typeof t[t.length-1]&&(n=t.pop()),e.lift(new m(t,n))}}var S,m=function(){function e(t,n){_classCallCheck(this,e),this.observables=t,this.project=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new P(e,this.observables,this.project))}}]),e}(),P=function(e){function t(e,n,i){var r;_classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).observables=n,r.project=i,r.toRespond=[];var a=n.length;r.values=new Array(a);for(var o=0;o<a;o++)r.toRespond.push(o);for(var s=0;s<a;s++){var u=n[s];r.add(Object(w.a)(_assertThisInitialized(r),u,u,s))}return r}return _inherits(t,e),_createClass(t,[{key:"notifyNext",value:function(e,t,n,i,r){this.values[n]=t;var a=this.toRespond;if(a.length>0){var o=a.indexOf(n);-1!==o&&a.splice(o,1)}}},{key:"notifyComplete",value:function(){}},{key:"_next",value:function(e){if(0===this.toRespond.length){var t=[e].concat(_toConsumableArray(this.values));this.project?this._tryProject(t):this.destination.next(t)}}},{key:"_tryProject",value:function(e){var t;try{t=this.project.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}]),t}(k.a),O=n("lJxs"),j=n("7o/Q"),A=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_classCallCheck(this,e),this.accumulator=t,this.seed=n,this.hasSeed=i}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new I(e,this.accumulator,this.seed,this.hasSeed))}}]),e}(),I=function(e){function t(e,n,i,r){var a;return _classCallCheck(this,t),(a=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).accumulator=n,a._seed=i,a.hasSeed=r,a.index=0,a}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){if(this.hasSeed)return this._tryNext(e);this.seed=e,this.destination.next(e)}},{key:"_tryNext",value:function(e){var t,n=this.index++;try{t=this.accumulator(this.seed,e,n)}catch(i){this.destination.error(i)}this.seed=t,this.destination.next(t)}},{key:"seed",get:function(){return this._seed},set:function(e){this.hasSeed=!0,this._seed=e}}]),t}(j.a),R=function(){function e(t,n){_classCallCheck(this,e),this.compare=t,this.keySelector=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new x(e,this.compare,this.keySelector))}}]),e}(),x=function(e){function t(e,n,i){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).keySelector=i,r.hasKey=!1,"function"==typeof n&&(r.compare=n),r}return _inherits(t,e),_createClass(t,[{key:"compare",value:function(e,t){return e===t}},{key:"_next",value:function(e){var t;try{var n=this.keySelector;t=n?n(e):e}catch(r){return this.destination.error(r)}var i=!1;if(this.hasKey)try{i=(0,this.compare)(this.key,t)}catch(r){return this.destination.error(r)}else this.hasKey=!0;i||(this.key=t,this.destination.next(e))}}]),t}(j.a),T=n("DH7j"),V=n("Cfvw"),Q=function(){function e(t){_classCallCheck(this,e),this.predicate=t}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new E(e,this.predicate))}}]),e}(),E=function(e){function t(e,n){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).predicate=n,i.skipping=!0,i.index=0,i}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){var t=this.destination;this.skipping&&this.tryCallPredicate(e),this.skipping||t.next(e)}},{key:"tryCallPredicate",value:function(e){try{var t=this.predicate(e,this.index++);this.skipping=Boolean(t)}catch(n){this.destination.error(n)}}}]),t}(j.a),L=function(){function e(t,n){_classCallCheck(this,e),this.predicate=t,this.thisArg=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new B(e,this.predicate,this.thisArg))}}]),e}(),B=function(e){function t(e,n,i){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).predicate=n,r.thisArg=i,r.count=0,r}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}t&&this.destination.next(e)}}]),t}(j.a),z=["youtubeContainer"],Z=((S=function(){function e(t,n){_classCallCheck(this,e),this._ngZone=t,this._videoId=new a.a(void 0),this._height=new a.a(390),this._width=new a.a(640),this._startSeconds=new a.a(void 0),this._endSeconds=new a.a(void 0),this._suggestedQuality=new a.a(void 0),this.ready=new i.j,this.stateChange=new i.j,this.error=new i.j,this.apiChange=new i.j,this.playbackQualityChange=new i.j,this.playbackRateChange=new i.j,this._youtubeContainer=new o.a,this._destroyed=new o.a,this._isBrowser=n?Object(r.d)(n):"object"==typeof window&&!!window}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;if(this._isBrowser){var t=Object(s.a)(!0);if(!window.YT){if(this.showBeforeIframeApiLoads)throw new Error("Namespace YT not found, cannot construct embedded youtube player. Please install the YouTube Player API Reference for iframe Embeds: https://developers.google.com/youtube/iframe_api_reference");var n=new o.a;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=function(){e._existingApiReadyCallback&&e._existingApiReadyCallback(),e._ngZone.run((function(){return n.next(!0)}))},t=n.pipe(Object(y.a)(1),_(!1))}var i,r=function(e,t,n,i,r,a,o){var c,h,y=t.pipe(C(Object(u.b)([i,r])),Object(O.a)((function(e){var t=_slicedToArray(e,2),n=t[0],i=_slicedToArray(t[1],2),r=i[0],o=i[1];return n?{videoId:n,width:r,height:o,events:a}:void 0})));return Object(u.b)([e,y,Object(s.a)(o)]).pipe((c=n,Object(l.a)(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=null;return"function"==typeof t[t.length-1]&&(i=t.pop()),1===t.length&&Object(T.a)(t[0])&&(t=t[0].slice()),function(e){return e.lift.call(Object(V.a)([e].concat(_toConsumableArray(t))),new u.a(i))}}(c),(h=function(e){var t=_slicedToArray(e,2);return t[0],!t[1]},function(e){return e.lift(new Q(h))}),Object(O.a)((function(e){return _slicedToArray(e,1)[0]})))),function(e,t){var n=!1;return arguments.length>=2&&(n=!0),function(i){return i.lift(new A(e,t,n))}}(H,void 0),(function(e){return e.lift(new R(void 0,void 0))}))}(this._youtubeContainer,this._videoId,t,this._width,this._height,this.createEventsBoundInZone(),this._ngZone).pipe((i=function(e){Y(e)||e.destroy()},Object(g.a)((function(e){return e?Y(e)?Object(s.a)(e):new c.a((function(t){var n=!1,r=!1;return e.addEventListener("onReady",(function e(i){r=!0,n||(i.target.removeEventListener("onReady",e),t.next(i.target))})),function(){n=!0,r||i(e)}})).pipe(Object(y.a)(1),_(void 0)):Object(s.a)(void 0)}))),Object(b.a)(this._destroyed),Object(v.a)(new o.a));r.subscribe((function(t){e._player=t,t&&e._pendingPlayerState&&e._initializePlayer(t,e._pendingPlayerState),e._pendingPlayerState=void 0})),function(e,t,n){Object(u.b)([e,t,n]).subscribe((function(e){var t=_slicedToArray(e,3),n=t[0],i=t[1],r=t[2];return n&&n.setSize(i,r)}))}(r,this._width,this._height),function(e,t){Object(u.b)([e,t]).subscribe((function(e){var t=_slicedToArray(e,2),n=t[0],i=t[1];return n&&i&&n.setPlaybackQuality(i)}))}(r,this._suggestedQuality),function(e,t,n,i,r,a){var o=Object(u.b)([n,i]).pipe(Object(O.a)((function(e){var t=_slicedToArray(e,2);return{startSeconds:t[0],endSeconds:t[1]}}))),s=o.pipe(D(e,(function(e){return!!e&&!function(e){var t=e.getPlayerState();return-1!==t&&5!==t}(e)}))),c=t.pipe(D(e,(function(e,t){return!!e&&e.videoId!==t}))),l=e.pipe(D(Object(u.b)([t,o]),(function(e,t){var n=_slicedToArray(e,2),i=n[0],r=n[1];return!(!t||i==t.videoId&&!r.startSeconds&&!r.endSeconds)})));Object(h.a)(l,c,s).pipe(C(Object(u.b)([e,t,o,r])),Object(O.a)((function(e){var t=_slicedToArray(e,2);return t[0],t[1]})),Object(b.a)(a)).subscribe((function(e){var t=_slicedToArray(e,4),n=t[0],i=t[1],r=t[2],a=t[3];i&&n&&(n.videoId=i,n.cueVideoById(Object.assign({videoId:i,suggestedQuality:a},r)))}))}(r,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),r.connect()}}},{key:"createEventsBoundInZone",value:function(){var e=this,t={};return new Map([["onReady",this.ready],["onStateChange",this.stateChange],["onPlaybackQualityChange",this.playbackQualityChange],["onPlaybackRateChange",this.playbackRateChange],["onError",this.error],["onApiChange",this.apiChange]]).forEach((function(n,i){n.observers.length&&(t[i]=e._runInZone((function(e){return n.emit(e)})))})),t}},{key:"ngAfterViewInit",value:function(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}},{key:"ngOnDestroy",value:function(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"_runInZone",value:function(e){var t=this;return function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t._ngZone.run((function(){return e.apply(void 0,i)}))}}},{key:"playVideo",value:function(){this._player?this._player.playVideo():this._getPendingState().playbackState=1}},{key:"pauseVideo",value:function(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=2}},{key:"stopVideo",value:function(){this._player?this._player.stopVideo():this._getPendingState().playbackState=5}},{key:"seekTo",value:function(e,t){this._player?this._player.seekTo(e,t):this._getPendingState().seek={seconds:e,allowSeekAhead:t}}},{key:"mute",value:function(){this._player?this._player.mute():this._getPendingState().muted=!0}},{key:"unMute",value:function(){this._player?this._player.unMute():this._getPendingState().muted=!1}},{key:"isMuted",value:function(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}},{key:"setVolume",value:function(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}},{key:"getVolume",value:function(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}},{key:"setPlaybackRate",value:function(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}},{key:"getPlaybackRate",value:function(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}},{key:"getAvailablePlaybackRates",value:function(){return this._player?this._player.getAvailablePlaybackRates():[]}},{key:"getVideoLoadedFraction",value:function(){return this._player?this._player.getVideoLoadedFraction():0}},{key:"getPlayerState",value:function(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:-1}},{key:"getCurrentTime",value:function(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}},{key:"getPlaybackQuality",value:function(){return this._player?this._player.getPlaybackQuality():"default"}},{key:"getAvailableQualityLevels",value:function(){return this._player?this._player.getAvailableQualityLevels():[]}},{key:"getDuration",value:function(){return this._player?this._player.getDuration():0}},{key:"getVideoUrl",value:function(){return this._player?this._player.getVideoUrl():""}},{key:"getVideoEmbedCode",value:function(){return this._player?this._player.getVideoEmbedCode():""}},{key:"_getPendingState",value:function(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}},{key:"_initializePlayer",value:function(e,t){var n=t.playbackState,i=t.playbackRate,r=t.volume,a=t.muted,o=t.seek;switch(n){case 1:e.playVideo();break;case 2:e.pauseVideo();break;case 5:e.stopVideo()}null!=i&&e.setPlaybackRate(i),null!=r&&e.setVolume(r),null!=a&&(a?e.mute():e.unMute()),null!=o&&e.seekTo(o.seconds,o.allowSeekAhead)}},{key:"videoId",get:function(){return this._videoId.value},set:function(e){this._videoId.next(e)}},{key:"height",get:function(){return this._height.value},set:function(e){this._height.next(e||390)}},{key:"width",get:function(){return this._width.value},set:function(e){this._width.next(e||640)}},{key:"startSeconds",set:function(e){this._startSeconds.next(e)}},{key:"endSeconds",set:function(e){this._endSeconds.next(e)}},{key:"suggestedQuality",set:function(e){this._suggestedQuality.next(e)}}]),e}()).\u0275fac=function(e){return new(e||S)(i.ub(i.s),i.ub(i.u,8))},S.\u0275cmp=i.ob({type:S,selectors:[["youtube-player"]],viewQuery:function(e,t){var n;1&e&&i.Pb(z,!0),2&e&&i.Ib(n=i.Db())&&(t.youtubeContainer=n.first)},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,t){1&e&&i.vb(0,"div",null,0)},encapsulation:2,changeDetection:0}),S);function H(e,t){var n=_slicedToArray(t,3),i=n[0],r=n[1],a=n[2];if(r){if(e)return e;var o=a.runOutsideAngular((function(){return new YT.Player(i,r)}));return o.videoId=r.videoId,o}e&&e.destroy()}function Y(e){return"getPlayerStatus"in e}function D(e,t){return Object(l.a)(C(e),(n=function(e){var n=_slicedToArray(e,2),i=n[0],r=n[1];return t(r,i)},function(e){return e.lift(new L(n,void 0))}),Object(O.a)((function(e){return _slicedToArray(e,1)[0]})));var n}n.d(t,"Lazy1Component",(function(){return M}));var N,M=((N=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e)}}]),e}()).\u0275fac=function(e){return new(e||N)},N.\u0275cmp=i.ob({type:N,selectors:[["ng-component"]],decls:3,vars:2,consts:[["videoId","OXgF9GeoX8o",3,"startSeconds","endSeconds"]],template:function(e,t){1&e&&(i.xb(0,"p"),i.Nb(1,"lazy1 works!"),i.wb(),i.vb(2,"youtube-player",0)),2&e&&(i.nb(2),i.Hb("startSeconds",100)("endSeconds",105))},directives:[Z],styles:[""]}),N)}}]);