(()=>{var e={4184:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&e.push(a)}}else if("object"===l){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";o.r(n),o.d(n,{AvailableInPro:()=>N,ControlNotice:()=>C,PRO_ON_FREE_FLAG:()=>x,ProBadge:()=>B,ProItem:()=>z,ProModal:()=>O,ProModalTextContext:()=>w,UpgradeToPro:()=>k,addProTagToItem:()=>M,addProTagToItems:()=>S,getStringValueWithId:()=>d,isFreeVersion:()=>F,noticeMessage:()=>b,proBadgeClasses:()=>A,proItemOnFree:()=>I,proItemOnFreeClass:()=>T,sortItemsByPro:()=>D,tryOnline:()=>_,upgradeToPro:()=>g,upgradeToProURL:()=>v,useProModal:()=>y});const e=window.wp.element,t=window.wp.components,r=window.wp.i18n;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l.apply(this,arguments)}const a=window.kubio.utils,i=window.lodash;var s,u=o.n(i);const c={pro:{link:top.kubioUtilsData.homepage_url,pricing_link:top.kubioUtilsData.upgrade_url,typography:(0,r.__)("Available only in the PRO version","kubio"),upgrade:{label:(0,r.__)("Upgrade to PRO","kubio")},try:{label:(0,r.__)("Try PRO Online","kubio"),msg:(0,r.__)("Get unlimited options with Kubio PRO","kubio"),link:top.kubioUtilsData.theme_try_online},subscribe:{label:(0,r.__)("PRO version coming soon","kubio"),msg:(0,r.__)("The PRO version of Kubio will be available soon. Please enter your email below and we’ll announce you when it’s ready.","kubio")},popup:{option:(0,r.__)("This option is available only in the PRO version.","kubio"),innerpage:(0,r.__)("Adding predefined blocks to inner pages is available only in the PRO version.","kubio"),colorscheme:(0,r.__)("Customizing color scheme colors is available only in the PRO version.","kubio"),component:(0,r.__)("This component is available only in the PRO version.","kubio"),gradient:(0,r.__)("Customizing gradient settings is available only in the PRO version.","kubio"),buttonsLimit:(0,r.__)("Adding more than 2 items is available only in the PRO version.","kubio")},infobox:{text:(0,r.__)("Text customization options (font, color, etc) are only available in the PRO version.","kubio"),default:(0,r.__)("More customization options available in the PRO version.","kubio"),icon:(0,r.__)("More color options are available in the PRO version.","kubio"),button:(0,r.__)("More customization options available in the PRO version.","kubio"),menu:(0,r.__)("More menu design options are available in the PRO version.","kubio")},advanced:(0,r.__)("Advanced options are only available in the PRO version.","kubio"),footer:{msg:(0,r.__)("Footer text and customization options are available in the PRO version","kubio")}}},p=!0!==(null===(s=window.kubioUtilsData)||void 0===s?void 0:s.enable_try_online),d=e=>u().get(c,e,""),m=window.wp.url,b=e=>{let t=e.title||d(e.msgid?e.msgid:"pro.infobox.default");const o=e.include?e.include.join(", "):"";return t=t.replace("{{props}}",o),t=t.replace(/\[pro-link\]([\w]+)\[\/pro-link\]/,""),t},v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{source:t,content:o,...n}=e;return(0,m.addQueryArgs)(d("pro.pricing_link","_blank"),{utm_medium:"editor",utm_source:t,utm_content:o,upgrade_key:top.kubioAIUpgradeKey||"",...n})},g=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=window.open(v(t));null==o||null===(e=o.focus)||void 0===e||e.call(o)};let f=null;const _=function(){var e,t;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!f||f.closed){const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=d("pro.try.link");if(top.kubioUtilsData.last_imported_starter){const[e,o]=top.kubioUtilsData.try_starter_site.split("?");t=e.replace(/\/+$/,"")+`/${top.kubioUtilsData.last_imported_starter}?${o}`}const{source:o,content:n,...r}=e;return t=(0,m.addQueryArgs)(t,{utm_medium:"editor",utm_source:o,utm_content:n,...r}),t}(o);f=window.open(e,"_blank")}null===(e=f)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e)},k=o=>{let{urlArgs:n={},message:r=null}=o;const l=(0,e.useCallback)((e=>{e.preventDefault(),g(n)}),[n]),a=(0,e.useCallback)((e=>{e.preventDefault(),_(n)}),[n]);return(0,e.createElement)(t.BaseControl,{className:"kubio-feature-upgrade-to-pro"},(0,e.createElement)("div",{className:"upgrade-to-pro__content"},(0,e.createElement)("p",{className:"label-title"},r||d("pro.try.msg")),(0,e.createElement)("div",{className:"upgrade-to-pro__content-buttons"},(0,e.createElement)(t.Button,{className:"btn-upgrade",onMouseUp:l},d("pro.upgrade.label")),!p&&(0,e.createElement)(t.Button,{className:"btn-try",onMouseUp:a},d("pro.try.label")))))},h=window.wp.compose,w=(0,e.createContext)(d("pro.popup.option")),y=()=>(()=>{const[t,o]=(0,e.useState)({default:!1}),n=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";o({...t,[n]:e})};return[(0,e.useCallback)((o=>{const{id:r="default"}=o;return!(null==t||!t[r])&&(0,e.createElement)(O,l({onClose:()=>{n(!1,r)}},o))}),[t]),n]})(),P=(0,a.wpVersionCompare)("6.3.1","<"),E=e=>{var t,o;e.preventDefault(),e.stopPropagation(),null==e||null===(t=e.nativeEvent)||void 0===t||null===(o=t.stopImmediatePropagation)||void 0===o||o.call(t)},O=(0,e.forwardRef)((function(){var o;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onClose:r=u().noop,anchorRef:l,urlArgs:i={},className:s=""}=n,c=(0,h.useInstanceId)(O),p=null!==(o=null==l?void 0:l.current)&&void 0!==o?o:l,d=(0,e.useRef)(),m=(0,e.useCallback)((e=>{const t=null==e?void 0:e.target;d.current===t||d.current.contains(t)||r()}),[r]);(0,a.useOnClickOutside)(d,m);const b=(0,e.useCallback)((e=>{e.detail.modalEl.isSameNode(d.current)||r()}),[]);(0,e.useEffect)((()=>{if(d.current){(e=>{const t=new e.ownerDocument.defaultView.CustomEvent("kubio-pro-modal-showed",{detail:{modalEl:e}});e.ownerDocument.defaultView.dispatchEvent(t)})(d.current);const e=d.current.ownerDocument.defaultView;return e.addEventListener("kubio-pro-modal-showed",b),()=>e.removeEventListener("kubio-pro-modal-showed",b)}}),[d]);const v=(0,e.useMemo)((()=>{const e=p;if(!p)return;const t={};return P&&(t.ownerDocument=e.ownerDocument),{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e,...t}}),[p]);return(0,e.createElement)(e.Fragment,null,(0,e.createPortal)((0,e.createElement)("div",{className:"kubio-upgrade-to-pro-popup-slot"},(0,e.createElement)(t.Popover.Slot,{name:`kubio-upgrade-to-pro-popup-${c}`})),document.body),(0,e.createElement)(t.Popover,{position:"bottom center",className:`kubio-upgrade-to-pro-popup sidebar-popover-container ${s}`,anchor:p?v:void 0,shift:!0,flip:!0,placement:"bottom",__unstableSlotName:`kubio-upgrade-to-pro-popup-${c}`,focusOnMount:!1},(0,e.createElement)("div",{ref:d,onClick:E,onMouseDown:E},(0,e.createElement)(R,{urlArgs:i}))))}));function R(){let{urlArgs:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=(0,e.useContext)(w);return(0,e.createElement)(k,{urlArgs:t,message:o})}const C=o=>{let{showLabel:n=!0,label:r,content:l=""}=o;return(0,e.createElement)(t.BaseControl,null,(0,e.createElement)("div",{className:"h-control-notice"},n&&(0,e.createElement)("span",{className:"h-control-notice__label"},r),(0,e.createElement)("div",{className:"h-control-notice__content"},l)))},N=function(){let{displayModal:o=!0,urlArgs:n={},...l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=(0,e.useRef)(),[i,s]=y(),u=(0,e.useCallback)((e=>{o?(e.preventDefault(),e.stopPropagation(),s(!0)):g(n)}),[]),c=(0,e.useCallback)((()=>{_(n)}),[]);return(0,e.createElement)(t.BaseControl,{ref:a,className:"kubio-feature-available-in-pro"},(0,e.createElement)("div",{className:"h-control-notice"},(0,e.createElement)("span",{className:"h-control-notice__label"},(0,r.__)("PRO","kubio")),(0,e.createElement)("div",{className:"h-control-notice__content"},(0,e.createElement)("label",{className:"label-title"},b(l))),(0,e.createElement)(t.Flex,{justify:"flex-start",align:"flex-start",className:"h-control-notice__content"},(0,e.createElement)(t.Button,{isSmall:!0,variant:"primary",onClick:u},d("pro.upgrade.label"),o&&(0,e.createElement)(i,{urlArgs:n,anchorRef:a.current})),!o&&!p&&(0,e.createElement)(t.Button,{isSmall:!0,variant:"secondary",onClick:c},d("pro.try.label")))))},A={proItem:"kubio-pro-item",badgeClass:"kubio-pro-item__badge"},x="isProOnFree";function D(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return u().sortBy(e,[function(e){return!0===(null==e?void 0:e[x])}],[t])}function M(e){return u().set(e,x,!0),e}function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const o=u().cloneDeep(e);return u().each(o,((e,o)=>{u().isFunction(t)&&(t(e,o)||u().set(e,x,!0)),u().isArray(t)&&(t.includes(u().get(e,"value"))||u().set(e,x,!0))})),o}const I=e=>!0===e||(null==e?void 0:e[x]),T=e=>{const t=[];return I(e)&&t.push(A.proItem),t},B=t=>{let{item:o}=t;return I(o)?(0,e.createElement)("div",{className:A.badgeClass},(0,r.__)("PRO","kubio")):null},F=()=>!0;var U=o(4184),j=o.n(U);const z=(0,e.forwardRef)(((t,o)=>{const{tag:n="div",isProItem:r=!0,children:a,...i}=t;return r?(0,e.createElement)(L,l({tag:n,ref:o},i),a):(0,e.createElement)(n,l({},i,{ref:o}),a)})),L=(0,e.forwardRef)(((t,o)=>{const{tag:n="div",item:r=!0,onClick:a=u().noop,className:i,children:s,urlArgs:c,propPopoverClass:p="",...d}=t,[m,b]=y(),v=(0,e.useRef)(),g=o||v;let f=null;return f=(0,e.createElement)(e.Fragment,null,(0,e.createElement)(B,{item:r}),(0,e.createElement)(m,{urlArgs:c,anchorRef:g.current,className:p})),(0,e.createElement)(n,l({},d,{ref:g,className:j()(i,T(r)),onClick:e=>{if(I(r))return e.preventDefault(),e.stopPropagation(),void b(!0);a(e)}}),s,f)})),V=window.wp.blocks;(0,window.wp.hooks.addFilter)("kubio.beforeInsertBlock","kubio/pro/blocks",(function(e){const t=(0,V.getBlockType)(null==e?void 0:e.name);return e.isProOnFree=t.isPro,e.isProOnFree&&(e.disabled=!0,e.isDisabled=!0),e}))})(),(window.kubio=window.kubio||{}).pro=n})();