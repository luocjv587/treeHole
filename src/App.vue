<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    <router-view/>-->
    <div id="header" class="full-rotate"><h1>这个网站将会自毁</h1>
      <h3>(在 {{countDownSecond}} 秒之后)</h3></div>
    <div id="message" class="note full-rotate border border-primary">
      <div><p>Hi,</p>
        <p>我是一个网站。我很快就会离开，这没关系。</p>
        <p>你可以使用下面的表格给我发消息。 如果我24小时没有收到消息，我就会永久自毁，所有东西都会从我的数据库中删除。</p>
        <p>不过没关系。</p>
        <p>在那之前，让我知道你是如何做的。其他人将能够读到你写的东西，但你的名字或身份不会被附加到任何东西上，所以请随意说出你的想法。</p>
        <p>这是一个艰难的几个月。</p>
        <p>With love,</p>
        <p>ThisWebsiteWillSelfdestruct (dot) com</p>
        <p>P.S. 我相信一个没有入侵性广告和在线跟踪的互联网。</p>
      </div>
    </div>
    <div id="message-controls" class="note full-rotate border center">
      <button>阅读一份消息</button>
      <button>💖</button>
      <button>感到沮丧?</button> <!----></div>
    <div id="letter" class="note full-rotate border">
      <form><textarea id="letter-textarea" rows="" placeholder="" class="textarea"></textarea>
        <div class="flex">
          <button type="submit" class="right">发送</button>
        </div>
      </form>
    </div>
    <div id="music player"></div>
    <div id="share" class="note full-rotate border center"><p>我已经呆了 {{existsTimeArr.year}} 年, {{existsTimeArr.month}} 月, {{existsTimeArr.day}} 日, {{existsTimeArr.hour}} 小时, {{existsTimeArr.minute}} 分钟,
      和 {{existsTimeArr.second}} 秒.</p>
      <p>请考虑把我分享给朋友们，这样我就可以在这里多呆一会儿。</p>
      <a
        href="mailto:?subject=This Website Will Selfdestruct&amp;body=Check out ThisWebsiteWillSelfdestruct.com.  If nobody sends a message, it will go away."
        class="paper-btn share-btn email">
        Email
      </a></div>
    <div id="footer" class="note full-rotate border center"><p>A site by <a href="https://twitter.com/femmeandroid">@FemmeAndroid</a>
      · <a href="https://ko-fi.com/femmeandroid">Buy me a coffee on Ko-fi</a> · <a
        href="https://www.patreon.com/FemmeAndroid">Support me on Patreon</a> · <a>Report letter</a></p>
      <p><a href="/privacy">Privacy Policy</a> · <a href="/tos">Terms of Service</a></p></div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        countDownSecond: 80000,
        startTime: "2020-07-14",
        existsTimeArr:{
          year:0,
          month:0,
          day:0,
          hour:0,
          minute:0,
          second:0,
        },
      }
    },
    created() {
      this.countDown();
      this.existTime();
    },

    methods: {
      //获取毁灭倒计时
      countDown() {
        let interval = setInterval(() => {
          if (this.countDownSecond <= 0) {
            clearInterval(interval);
          }
          this.countDownSecond -= 1;
        }, 1000);
      },
      //获取存在时间
      existTime() {
        setInterval(() => {
          let startTime = this.startTime
          let s1 = new Date(startTime.replace(/-/g, "/")),
            s2 = new Date(),
            runTime = parseInt((s2.getTime() - s1.getTime()) / 1000);
          let year = Math.floor(runTime / 86400 / 365);
          runTime = runTime % (86400 * 365);
          let month = Math.floor(runTime / 86400 / 30);
          runTime = runTime % (86400 * 30);
          let day = Math.floor(runTime / 86400);
          runTime = runTime % 86400;
          let hour = Math.floor(runTime / 3600);
          runTime = runTime % 3600;
          let minute = Math.floor(runTime / 60);
          runTime = runTime % 60;
          let second = runTime;

          this.existsTimeArr.year = year;
          this.existsTimeArr.month = month;
          this.existsTimeArr.day = day;
          this.existsTimeArr.hour = hour;
          this.existsTimeArr.minute = minute;
          this.existsTimeArr.second = second;
        }, 1000);
      }
    },
  }
</script>

<style src="./assets/css/main.css"></style>


