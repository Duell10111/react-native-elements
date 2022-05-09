"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>C});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=A(e,["components","mdxType","originalType","parentName"]),u=p(n),C=r,y=u["".concat(i,".").concat(C)]||u[C]||s[C]||a;return n?o.createElement(y,c(c({ref:t},l),{},{components:n})):o.createElement(y,c({ref:t},l))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var A={};for(var i in t)hasOwnProperty.call(t,i)&&(A[i]=t[i]);A.originalType=e,A.mdxType="string"==typeof e?e:r,c[1]=A;for(var p=2;p<a;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>C,frontMatter:()=>A,metadata:()=>p,toc:()=>s});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),c=["components"],A={},i=void 0,p={unversionedId:"component_usage/SocialIcon",id:"version-4.0.0-rc.2/component_usage/SocialIcon",title:"SocialIcon",description:"",source:"@site/versioned_docs/version-4.0.0-rc.2/component_usage/SocialIcon.mdx",sourceDirName:"component_usage",slug:"/component_usage/SocialIcon",permalink:"/docs/4.0.0-rc.2/component_usage/SocialIcon",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/component_usage/SocialIcon.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{}},l={},s=[],u={toc:s};function C(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20IconData%20%3D%20%7B%0Atype%3A%20SocialMediaType%3B%0AiconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%7B%0A%20%20type%3A%20'facebook'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitter'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google-plus-official'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'pinterest'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'linkedin'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'youtube'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vimeo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'tumblr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'instagram'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'quora'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'flickr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'foursquare'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'wordpress'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stumbleupon'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github-alt'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitch'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'medium'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'soundcloud'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stack-overflow'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'gitlab'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'angellist'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'codepen'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'weibo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vk'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'facebook-messenger'%2C%0A%20%20iconType%3A%20'material-community'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'whatsapp'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20socialProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}C.isMDXComponent=!0}}]);