webpackJsonp([1],{La40:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=r("VU/8")({name:"App"},s,!1,function(e){r("o0tU")},null,null).exports,i=r("/ocq"),o=r("Xxa5"),v=r.n(o),c=r("exGp"),_=r.n(c),l=r("mtWM"),p=r.n(l),u={name:"HelloWorld",data:function(){return{backUrl:"http://treehole.site:9501",countDownSecond:8e4,startTime:"2020-07-14",existsTimeArr:{year:0,month:0,day:0,hour:0,minute:0,second:0},openFeelingDown:!1,letterInfo:"",sendLetterInfo:"Hi, \n",openSend:!0,currentLetterId:1}},created:function(){console.log(9,Object({NODE_ENV:"production",VUE_APP_BACK_URL:"http://treehole.site:9501"})),this.countDown(),this.existTime(),this.getSeconds()},methods:{countDown:function(){var e=this,t=setInterval(function(){e.countDownSecond<=0&&clearInterval(t),e.countDownSecond-=1},1e3)},existTime:function(){var e=this;setInterval(function(){var t=e.startTime,r=new Date(t.replace(/-/g,"/")),n=new Date,s=parseInt((n.getTime()-r.getTime())/1e3),a=Math.floor(s/86400/365);s%=31536e3;var i=Math.floor(s/86400/30);s%=2592e3;var o=Math.floor(s/86400);s%=86400;var v=Math.floor(s/3600);s%=3600;var c=Math.floor(s/60),_=s%=60;e.existsTimeArr.year=a,e.existsTimeArr.month=i,e.existsTimeArr.day=o,e.existsTimeArr.hour=v,e.existsTimeArr.minute=c,e.existsTimeArr.second=_},1e3)},feelingDown:function(){this.openFeelingDown=!0},getSeconds:function(){var e=this;return _()(v.a.mark(function t(){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(e.backUrl+"/getSecond");case 2:r=t.sent,e.countDownSecond=r.data.data.seconds;case 4:case"end":return t.stop()}},t,e)}))()},getLetter:function(){var e=this;return _()(v.a.mark(function t(){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(e.backUrl+"/getLetter");case 2:r=t.sent,console.log(r.data.data.letter_info),e.letterInfo=r.data.data.letter_info,e.currentLetterId=r.data.data.id;case 6:case"end":return t.stop()}},t,e)}))()},sendLetter:function(){var e=this;return _()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post(e.backUrl+"/createLetter",{letter_info:e.sendLetterInfo});case 2:e.openSend=!1;case 3:case"end":return t.stop()}},t,e)}))()},like:function(){var e=this;return _()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post(e.backUrl+"/likeLetter",{letter_id:e.currentLetterId});case 2:t.sent;case 3:case"end":return t.stop()}},t,e)}))()}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"full-rotate",attrs:{id:"header"}},[r("h1",[e._v("这个网站将会")]),r("br"),e._v(" "),r("h1",[e._v("自毁")]),e._v(" "),r("h3",[e._v("(在 "+e._s(e.countDownSecond)+" 秒之后)")])]),e._v(" "),r("div",{staticClass:"note full-rotate border border-primary",attrs:{id:"message"}},[""===e.letterInfo?r("div",[r("p",[e._v("Hi,")]),e._v(" "),r("p",[e._v("我是一个网站。我很快就会离开，这没关系。")]),e._v(" "),r("p",[e._v("你可以使用下面的表格给我发消息。 如果我24小时没有收到消息，我就会永久自毁，所有东西都会从我的数据库中删除。")]),e._v(" "),r("p",[e._v("不过没关系。")]),e._v(" "),r("p",[e._v("在那之前，让我知道你是如何做的。其他人将能够读到你写的东西，但你的名字或身份不会被附加到任何东西上，所以请随意说出你的想法。")]),e._v(" "),r("p",[e._v("这是一个艰难的几个月。")]),e._v(" "),r("p",[e._v("With love,")]),e._v(" "),r("p",[e._v("treeHole(dot)site")]),e._v(" "),r("p",[e._v("P.S. 我相信一个没有入侵性广告和在线跟踪的互联网。")])]):r("div",{staticStyle:{"white-space":"pre-wrap"}},[r("p",[e._v(e._s(this.letterInfo))])])]),e._v(" "),e.openFeelingDown?r("div",{staticClass:"note full-rotate border",attrs:{id:"feeling-down"}},[r("p",[e._v("一切都好吗？")]),e._v(" "),r("p",[e._v("如果你或你认识的人正在挣扎，你并不孤单。这里有许多支持服务可以提供帮助。 ")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]):e._e(),e._v(" "),r("div",{staticClass:"note full-rotate border center",attrs:{id:"message-controls"}},[r("button",{on:{click:e.getLetter}},[e._v("阅读一份消息")]),e._v(" "),r("button",{on:{click:e.like}},[e._v("💖")]),e._v(" "),e.openFeelingDown?e._e():r("button",{on:{click:function(t){e.openFeelingDown=!0}}},[e._v("感到沮丧?")])]),e._v(" "),e.openSend?r("div",{staticClass:"note full-rotate border",attrs:{id:"letter"}},[r("form",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.sendLetterInfo,expression:"sendLetterInfo"}],staticClass:"textarea",attrs:{id:"letter-textarea",rows:"",placeholder:""},domProps:{value:e.sendLetterInfo},on:{input:function(t){t.target.composing||(e.sendLetterInfo=t.target.value)}}}),e._v(" "),r("div",{staticClass:"flex"},[r("button",{staticClass:"right",attrs:{type:"submit"},on:{click:e.sendLetter}},[e._v("发送")])])])]):e._e(),e._v(" "),r("div",{attrs:{id:"music player"}}),e._v(" "),r("div",{staticClass:"note full-rotate border center",attrs:{id:"share"}},[r("p",[e._v("我已经呆了 "+e._s(e.existsTimeArr.year)+" 年, "+e._s(e.existsTimeArr.month)+" 月,\n    "+e._s(e.existsTimeArr.day)+" 日, "+e._s(e.existsTimeArr.hour)+" 小时, "+e._s(e.existsTimeArr.minute)+" 分钟,\n    和 "+e._s(e.existsTimeArr.second)+" 秒.")]),e._v(" "),r("p",[e._v("请考虑把我分享给朋友们，这样我就可以在这里多呆一会儿。")])]),e._v(" "),e._m(4)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("如果您在美国，请考虑联系"),t("a",{attrs:{href:"https://www.nami.org/help"}},[this._v("国家安全局\n      精神疾病联盟帮助热线")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("如果您在英国，"),t("a",{attrs:{href:"https://www.themix.org.uk/get-support"}},[this._v("The Mix")]),this._v("在这里。\n      来帮助您解决您所面临的任何挑战。请在网上、社交媒体上或通过他们的免费和\n      保密帮助热线：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("如果您在欧洲其他国家读到这篇文章，"),t("a",{attrs:{href:"https://mhe-sme.org/library/youth-helplines/"}},[this._v("欧洲心理健康")]),this._v("已编制了贵国的帮助热线和其他资源清单。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("更多的资源，请访问这个"),t("a",{attrs:{href:"http://www.tumblr.com/docs/en/counseling_prevention_resources"}},[this._v("心理咨询 预防资源")]),this._v("页面，以获取可能提供帮助的服务列表。\n    ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"note full-rotate border center",attrs:{id:"footer"}},[t("p",[this._v("A site by "),t("a",{attrs:{href:""}},[this._v("@Luo")])]),this._v(" "),t("p",[t("a",{attrs:{href:"privacy"}},[this._v("隐私政策")])])])}]},h=r("VU/8")(u,d,!1,null,null,null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"note full-rotate border border-primary",attrs:{id:"message"}},[r("p",[r("a",{attrs:{href:"/"}},[e._v("主页")])]),e._v(" "),r("h1",[e._v("隐私政策")]),e._v(" "),r("p",[e._v("本政策适用于本网站收集或提交给本网站的所有信息treehole.site。")]),e._v(" "),r("p",[e._v("未经您的同意，我们不会将您的个人信息透露给外界。")]),e._v(" "),r("p",[e._v("treehole.site只保存您的留言内容，而不保存PII。我们也会收集用于报告、管理和点赞的信息。为了控制垃圾邮件，IP地址的保存时间不会超过30天。")]),e._v(" "),r("p",[e._v("广告和跟踪")]),e._v(" "),r("p",[e._v("我们在网站上没有任何广告，也不使用任何第三方分析数据。")]),e._v(" "),r("p",[e._v("安全性")]),e._v(" "),r("p",[e._v("我们实施了各种安全措施来帮助保证您的信息安全。例如，与应用程序和网站的所有通信都需要HTTPS。密码使用行业标准的方法进行哈希，而不是存储。")]),e._v(" "),r("p",[e._v("数据访问、更改和删除")]),e._v(" "),r("p",[e._v("treehole.site上没有账号。如果你有信息想删除，请在留言中报告。被删除的信息可能会在短时间内进行备份，以方便灾难恢复。")]),e._v(" "),r("p",[e._v("本网站自毁网可能会在任何时候、以任何理由删除您的信息，如技术需要、法律问题、防止滥用、删除闲置账户、数据丢失或其他原因。")]),e._v(" "),r("p",[e._v("国外合规信息")]),e._v(" "),r("p",[e._v("信息可能会在您所在的国家之外处理、存储和使用。各个司法管辖区的数据隐私法各不相同，根据处理、存储或使用您的数据的地点，可能会有不同的法律适用。")]),e._v(" "),r("p",[e._v("使用treehole.site并提供您的信息，即表示您授权我们在欧盟以外的地区收集、使用和存储您的信息。")]),e._v(" "),r("p",[e._v("我们从来不会在我们的网站上收集或维护那些我们实际知道的13岁以下的人的信息，我们网站的任何部分都不会吸引13岁以下的人。")]),e._v(" "),r("p",[e._v("本政策")]),e._v(" "),r("p",[e._v("使用treehole.site，即表示您同意我们的隐私政策。")]),e._v(" "),r("p",[e._v("如果您对本隐私政策有疑问，请发电子邮件至 547605677@qq.com。")]),e._v(" "),r("p",[e._v("如果我们决定改变我们的隐私政策，我们将在本页公布这些变化，以及变化的摘要。")]),e._v(" "),r("p",[e._v("更新")]),e._v(" "),r("p",[e._v("2020年7月8日 - 澄清我们没有广告或使用分析数据。")])])])}]};var m=r("VU/8")({name:"Privacy"},f,!1,function(e){r("La40")},"data-v-6ebc344a",null).exports;n.a.use(i.a);var w=new i.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:h},{path:"/privacy",name:"隐私政策",component:m}]});n.a.config.productionTip=!1,n.a.prototype.$axios=p.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:w,components:{App:a},template:"<App/>"})},o0tU:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b1116c18220d448c39b3.js.map