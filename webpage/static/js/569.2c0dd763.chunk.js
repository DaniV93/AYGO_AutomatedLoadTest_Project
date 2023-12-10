"use strict";(self.webpackChunkdistributed_load_testing_on_aws_ui=self.webpackChunkdistributed_load_testing_on_aws_ui||[]).push([[569],{22569:(t,e,n)=>{n.r(e),n.d(e,{amplify_authenticator:()=>y});var a,r=n(86289),i=n(48434),o=n(97442),s=n(64827),u=n(91418),c=n(42573),h=(n(16569),n(33972)),l=n(46093),f=n(26075),d=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{u(a.next(t))}catch(e){i(e)}}function s(t){try{u(a.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}u((a=a.apply(t,e||[])).next())}))},g=function(t,e){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(s){i=[6,s],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},p=((a={})[s.A.SignIn]="sign-in",a[s.A.ConfirmSignIn]="confirm-sign-in",a[s.A.SignUp]="sign-up",a[s.A.ConfirmSignUp]="confirm-sign-up",a[s.A.ForgotPassword]="forgot-password",a[s.A.ResetPassword]="require-new-password",a[s.A.VerifyContact]="verify-contact",a[s.A.TOTPSetup]="totp-setup",a[s.A.Loading]="loading",a),m=new i.k("Authenticator"),y=function(){function t(t){var e=this;(0,r.r)(this,t),this.initialAuthState=s.A.SignIn,this.handleAuthStateChange=function(){},this.hideToast=!1,this.authState=s.A.Loading,this.toastMessage="",this.handleExternalAuthEvent=function(t){var n=t.payload;switch(n.event){case"cognitoHostedUI":case"signIn":(0,f.c)(n.data,l.d);break;case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return(0,l.d)(e.initialAuthState)}},this.handleToastEvent=function(t){var n=t.payload;if(n.event===h.T)n.message&&(e.toastMessage=n.message)}}return t.prototype.componentWillLoad=function(){return d(this,void 0,void 0,(function(){var t=this;return g(this,(function(e){switch(e.label){case 0:return(0,l.o)((function(e,n){t.onAuthStateChange(e,n),t.toastMessage=""})),this.hideToast||o.Xb.listen(h.U,this.handleToastEvent),o.Xb.listen(h.A,this.handleExternalAuthEvent),(0,u.Ib)("amplify-authenticator"),[4,this.checkUser()];case 1:return e.sent(),[2]}}))}))},t.prototype.checkUser=function(){return d(this,void 0,void 0,(function(){var t=this;return g(this,(function(e){if(!c.g||"function"!==typeof c.g.currentAuthenticatedUser)throw new Error(h.N);return[2,c.g.currentAuthenticatedUser().then((function(t){(0,l.d)(s.A.SignedIn,t)})).catch((function(){(0,l.d)(t.initialAuthState)}))]}))}))},t.prototype.onAuthStateChange=function(t,e){return d(this,void 0,void 0,(function(){return g(this,(function(n){return void 0===t?[2,m.error("nextAuthState cannot be undefined")]:(m.info("Inside onAuthStateChange Method current authState:",this.authState),t===s.A.SignedOut?this.authState=this.initialAuthState:this.authState=t,this.authData=e,this.authData&&m.log("Auth Data was set:",this.authData),this.authState===t&&(this.handleAuthStateChange(this.authState,this.authData),m.info("authState has been updated to "+this.authState)),[2])}))}))},t.prototype.getAuthComponent=function(t){switch(t){case s.A.SignIn:return(0,r.h)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias});case s.A.ConfirmSignIn:return(0,r.h)("amplify-confirm-sign-in",{user:this.authData});case s.A.SignUp:return(0,r.h)("amplify-sign-up",{usernameAlias:this.usernameAlias});case s.A.ConfirmSignUp:return(0,r.h)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias});case s.A.ForgotPassword:return(0,r.h)("amplify-forgot-password",{usernameAlias:this.usernameAlias});case s.A.ResetPassword:return(0,r.h)("amplify-require-new-password",{user:this.authData});case s.A.VerifyContact:return(0,r.h)("amplify-verify-contact",{user:this.authData});case s.A.TOTPSetup:return(0,r.h)("amplify-totp-setup",{user:this.authData});case s.A.Loading:return(0,r.h)("div",null,"Loading...");default:throw new Error("Unhandled auth state: "+t)}},t.prototype.getSlotWithAuthComponent=function(t){var e=this.getAuthComponent(t),n=p[t],a=null===this.el.querySelector('[slot="'+n+'"]');return(0,r.h)("slot",{name:n},a&&e)},t.prototype.disconnectedCallback=function(){return o.Xb.remove(h.A,this.handleExternalAuthEvent),this.hideToast||o.Xb.remove(h.U,this.handleToastEvent),l.o},t.prototype.render=function(){var t=this;return(0,r.h)(r.H,null,!this.hideToast&&this.toastMessage&&(0,r.h)("amplify-toast",{message:this.toastMessage,handleClose:function(){t.toastMessage=""},"data-test":"authenticator-error"}),this.authState===s.A.SignedIn?[(0,r.h)("slot",{name:"greetings"}),(0,r.h)("slot",null)]:(0,r.h)("div",{class:"auth-container"},this.getSlotWithAuthComponent(this.authState)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),t}();y.style=":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}"},26075:(t,e,n)=>{n.d(e,{c:()=>g,h:()=>p});var a=n(48434),r=n(52611),i=n(64827),o=n(42573),s=n(91418),u=n(16569),c=n(33972),h=n(46093),l=function(t,e,n,a){return new(n||(n=Promise))((function(r,i){function o(t){try{u(a.next(t))}catch(e){i(e)}}function s(t){try{u(a.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}u((a=a.apply(t,e||[])).next())}))},f=function(t,e){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(s){i=[6,s],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},d=new a.k("auth-helpers");function g(t,e){return l(this,void 0,void 0,(function(){var n,a,s;return f(this,(function(u){switch(u.label){case 0:if(!o.g||"function"!==typeof o.g.verifiedContact)throw new Error(c.N);if(!m(t))return e(i.A.SignedIn,t),[2];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,o.g.verifiedContact(t)];case 2:return n=u.sent(),!(0,r.xb)(n.verified)||(0,r.xb)(n.unverified)?e(i.A.SignedIn,t):(a=Object.assign(t,n),e(i.A.VerifyContact,a)),[3,4];case 3:return s=u.sent(),(0,h.a)(s),[3,4];case 4:return[2]}}))}))}var p=function(t,e,n,a){return l(void 0,void 0,void 0,(function(){var r,s;return f(this,(function(l){switch(l.label){case 0:if(!o.g||"function"!==typeof o.g.signIn)throw new Error(c.N);l.label=1;case 1:return l.trys.push([1,9,,10]),[4,o.g.signIn(t,e)];case 2:return r=l.sent(),d.debug(r),r.challengeName!==i.C.SMSMFA&&r.challengeName!==i.C.SoftwareTokenMFA?[3,3]:(d.debug("confirm user with "+r.challengeName),n(i.A.ConfirmSignIn,r),[3,8]);case 3:return r.challengeName!==i.C.NewPasswordRequired?[3,4]:(d.debug("require new password",r.challengeParam),n(i.A.ResetPassword,r),[3,8]);case 4:return r.challengeName!==i.C.MFASetup?[3,5]:(d.debug("TOTP setup",r.challengeParam),n(i.A.TOTPSetup,r),[3,8]);case 5:return r.challengeName===i.C.CustomChallenge&&r.challengeParam&&"true"===r.challengeParam.trigger?(d.debug("custom challenge",r.challengeParam),n(i.A.CustomConfirmSignIn,r),[3,8]):[3,6];case 6:return[4,g(r,n)];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:return"UserNotConfirmedException"===(s=l.sent()).code?(d.debug("the user is not confirmed"),n(i.A.ConfirmSignUp,{username:t})):"PasswordResetRequiredException"===s.code?(d.debug("the user requires a new password"),n(i.A.ForgotPassword,{username:t})):"InvalidParameterException"===s.code&&""===e?(d.debug("Password cannot be empty"),s.message=u.T.EMPTY_PASSWORD):s.message===u.T.EMPTY_USERNAME&&(a===i.U.email&&(s.message=u.T.EMPTY_EMAIL),a===i.U.phone_number&&(s.message=u.T.EMPTY_PHONE)),(0,h.a)(s),[3,10];case 10:return[2]}}))}))},m=function(t){return t instanceof s.ws}}}]);