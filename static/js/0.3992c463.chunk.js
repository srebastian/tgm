(this.webpackJsonptelegram_react=this.webpackJsonptelegram_react||[]).push([[0],{384:function(t,e,i){"use strict";i.r(e);var n=i(28),a=i(5),o=i(6),s=i(8),r=i(7),l=i(0),u=i.n(l),c=(i(613),function(t){Object(s.a)(i,t);var e=Object(r.a)(i);function i(){return Object(a.a)(this,i),e.apply(this,arguments)}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=this.props,i=e.options,a=e.eventListeners,o=(i.url,i.loop),s=i.autoplay,r=i.animationData,l=i.stringData,u=i.rendererSettings,c=i.segments;this.options={container:this.el,renderer:"canvas",loop:Boolean(o),autoplay:Boolean(s),segments:Boolean(c),animationData:r,stringData:l,rendererSettings:u},this.options=Object(n.a)(Object(n.a)({},this.options),i);this.options.animationData,this.options.fileId;window.RLottie.loadAnimation(this.options,(function(e){if(t.anim=e,window.RLottie.hasFirstFrame(t.anim)){if(!a)return;a.forEach((function(t){var e=t.eventName,i=t.callback;"firstFrame"===e&&i&&i()}))}})),this.registerEvents(a)}},{key:"componentDidUpdate",value:function(t,e,i){var a=this,o=this.props,s=o.options,r=o.eventListeners,l=t.options,u=t.eventListeners;if(s.animationData!==l.animationData||s.fileId!==l.fileId){this.unregisterEvents(u),this.destroy(),this.options=Object(n.a)(Object(n.a)({},this.options),s);this.props.options.url;window.RLottie.loadAnimation(this.options,(function(t){a.anim=t,r&&r.forEach((function(t){var e=t.eventName,i=t.callback;"firstFrame"===e&&i&&i()}))})),this.registerEvents(r)}}},{key:"componentWillUnmount",value:function(){this.unregisterEvents(this.props.eventListeners),this.destroy(),this.options.blob=null,this.options.container=null,this.options=null,this.anim=null}},{key:"play",value:function(){window.RLottie.play(this.anim)}},{key:"playSegments",value:function(t,e){window.RLottie.playSegments(this.anim,t,e)}},{key:"pause",value:function(){return!window.RLottie.isPaused(this.anim)&&(window.RLottie.pause(this.anim),!0)}},{key:"destroy",value:function(){this.anim&&window.RLottie.destroy(this.anim)}},{key:"registerEvents",value:function(t){var e=this;this.anim&&t&&t.forEach((function(t){var i=t.eventName,n=t.callback;window.RLottie.addEventListener(e.anim,i,n)}))}},{key:"unregisterEvents",value:function(t){var e=this;this.anim&&t&&t.forEach((function(t){var i=t.eventName,n=t.callback;window.RLottie.removeEventListener(e.anim,i,n)}))}},{key:"render",value:function(){var t=this,e=this.props,i=e.width,a=e.height,o=e.ariaRole,s=e.ariaLabel,r=e.title,l=e.onClick,c=e.onMouseEnter,h=e.onMouseOut,p=e.style,m=Object(n.a)({width:i||"100%",height:a||"100%",overflow:"hidden",outline:"none"},p);return u.a.createElement("div",{style:m,title:r,role:o,"aria-label":s,tabIndex:"0",onClick:l,onMouseEnter:c,onMouseOut:h},u.a.createElement("picture",{ref:function(e){return t.el=e},className:"dev_page_tgsticker tl_main_card_animated js-tgsticker_image"}))}},{key:"isPaused",get:function(){return!!this.anim&&window.RLottie.isPaused(this.anim)}}]),i}(u.a.Component));e.default=c},613:function(t,e,i){}}]);
//# sourceMappingURL=0.3992c463.chunk.js.map