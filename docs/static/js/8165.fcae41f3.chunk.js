"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8165],{28165:(e,o,t)=>{t.r(o),t.d(o,{default:()=>w,getTabUtilityClass:()=>h,tabClasses:()=>m});var i=t(7552),l=t(93878),a=t(70799),r=t(48054),n=t(15622),s=t(51148),c=t(84893),p=t(4785),d=t(33761),b=t(85693);function h(e){return(0,b.Ay)("MuiTab",e)}const m=(0,d.A)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]);var u=t(69500);const x=(0,s.Ay)(r.A,{name:"MuiTab",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.label&&t.icon&&o.labelIcon,o[`textColor${(0,n.A)(t.textColor)}`],t.fullWidth&&o.fullWidth,t.wrapped&&o.wrapped,{[`& .${m.iconWrapper}`]:o.iconWrapper},{[`& .${m.icon}`]:o.icon}]}})((0,c.A)((({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:e})=>e.label&&("top"===e.iconPosition||"bottom"===e.iconPosition),style:{flexDirection:"column"}},{props:({ownerState:e})=>e.label&&"top"!==e.iconPosition&&"bottom"!==e.iconPosition,style:{flexDirection:"row"}},{props:({ownerState:e})=>e.icon&&e.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:e,iconPosition:o})=>e.icon&&e.label&&"top"===o,style:{[`& > .${m.icon}`]:{marginBottom:6}}},{props:({ownerState:e,iconPosition:o})=>e.icon&&e.label&&"bottom"===o,style:{[`& > .${m.icon}`]:{marginTop:6}}},{props:({ownerState:e,iconPosition:o})=>e.icon&&e.label&&"start"===o,style:{[`& > .${m.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:e,iconPosition:o})=>e.icon&&e.label&&"end"===o,style:{[`& > .${m.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${m.selected}`]:{opacity:1},[`&.${m.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${m.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${m.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${m.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${m.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:e})=>e.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:e})=>e.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]})))),w=i.forwardRef((function(e,o){const t=(0,p.b)({props:e,name:"MuiTab"}),{className:r,disabled:s=!1,disableFocusRipple:c=!1,fullWidth:d,icon:b,iconPosition:m="top",indicator:w,label:y,onChange:f,onClick:g,onFocus:C,selected:S,selectionFollowsFocus:v,textColor:W="inherit",value:$,wrapped:A=!1,...P}=t,T={...t,disabled:s,disableFocusRipple:c,selected:S,icon:!!b,iconPosition:m,label:!!y,fullWidth:d,textColor:W,wrapped:A},k=(e=>{const{classes:o,textColor:t,fullWidth:i,wrapped:l,icon:r,label:s,selected:c,disabled:p}=e,d={root:["root",r&&s&&"labelIcon",`textColor${(0,n.A)(t)}`,i&&"fullWidth",l&&"wrapped",c&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return(0,a.A)(d,h,o)})(T),F=b&&y&&i.isValidElement(b)?i.cloneElement(b,{className:(0,l.A)(k.icon,b.props.className)}):b;return(0,u.jsxs)(x,{focusRipple:!c,className:(0,l.A)(k.root,r),ref:o,role:"tab","aria-selected":S,disabled:s,onClick:e=>{!S&&f&&f(e,$),g&&g(e)},onFocus:e=>{v&&!S&&f&&f(e,$),C&&C(e)},ownerState:T,tabIndex:S?0:-1,...P,children:["top"===m||"start"===m?(0,u.jsxs)(i.Fragment,{children:[F,y]}):(0,u.jsxs)(i.Fragment,{children:[y,F]}),w]})}))}}]);
//# sourceMappingURL=8165.fcae41f3.chunk.js.map