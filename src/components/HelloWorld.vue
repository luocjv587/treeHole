<template>
  <div>
    <div id="header" class="full-rotate"><h1>这个网站将会</h1><br/>
      <h1>自毁</h1>
      <h3>(在 {{countDownSecond}} 秒之后)</h3></div>
    <div id="message" class="note full-rotate border border-primary">
      <div v-if="letterInfo===''">
        <p>Hi,</p>
        <p>我是一个网站。我很快就会离开，这没关系。</p>
        <p>你可以使用下面的表格给我发消息。 如果我24小时没有收到消息，我就会永久自毁，所有东西都会从我的数据库中删除。</p>
        <p>不过没关系。</p>
        <p>在那之前，让我知道你是如何做的。其他人将能够读到你写的东西，但你的名字或身份不会被附加到任何东西上，所以请随意说出你的想法。</p>
        <p>这是一个艰难的几个月。</p>
        <p>With love,</p>
        <p>treeHole(dot)site</p>
        <p>P.S. 我相信一个没有入侵性广告和在线跟踪的互联网。</p>
      </div>
      <div style="white-space: pre-wrap;" v-else><p>{{this.letterInfo}}</p></div>
    </div>
    <div v-if="openFeelingDown" id="feeling-down" class="note full-rotate border"><p>一切都好吗？</p>
      <p>如果你或你认识的人正在挣扎，你并不孤单。这里有许多支持服务可以提供帮助。 </p>
      <p>如果您在美国，请考虑联系<a href="https://www.nami.org/help">国家安全局
        精神疾病联盟帮助热线</a>。</p>
      <p>如果您在英国，<a href="https://www.themix.org.uk/get-support">The Mix</a>在这里。
        来帮助您解决您所面临的任何挑战。请在网上、社交媒体上或通过他们的免费和
        保密帮助热线：</p>
      <p>如果您在欧洲其他国家读到这篇文章，<a href="https://mhe-sme.org/library/youth-helplines/">欧洲心理健康</a>已编制了贵国的帮助热线和其他资源清单。</p>
      <p>更多的资源，请访问这个<a href="http://www.tumblr.com/docs/en/counseling_prevention_resources">心理咨询 预防资源</a>页面，以获取可能提供帮助的服务列表。
      </p>
    </div>


    <div id="message-controls" class="note full-rotate border center">
      <button @click="getLetter">阅读一份消息</button>
      <button @click="like">💖</button>
      <button v-if="!openFeelingDown" @click="openFeelingDown=true">感到沮丧?</button>
    </div>
    <div id="letter" class="note full-rotate border" v-if="openSend">
      <form><textarea id="letter-textarea" rows="" placeholder="" class="textarea" v-model="sendLetterInfo"></textarea>
        <div class="flex">
          <button type="button" class="right" @click="sendLetter">发送</button>
        </div>
      </form>
    </div>
    <div id="music player"></div>
    <div id="share" class="note full-rotate border center"><p>我已经呆了 {{existsTimeArr.year}} 年, {{existsTimeArr.month}} 月,
      {{existsTimeArr.day}} 日, {{existsTimeArr.hour}} 小时, {{existsTimeArr.minute}} 分钟,
      和 {{existsTimeArr.second}} 秒.</p>
      <p>请考虑把我分享给朋友们，这样我就可以在这里多呆一会儿。</p>
      <!--      <a-->
      <!--        href="mailto:?subject=This Website Will Selfdestruct&amp;body=Check out ThisWebsiteWillSelfdestruct.com.  If nobody sends a message, it will go away."-->
      <!--        class="paper-btn share-btn email">-->
      <!--        Email-->
      <!--      </a>-->
    </div>
    <div id="footer" class="note full-rotate border center"><p>A site by <a href="">@Luo</a>
    </p>
      <p><a href="privacy">隐私政策</a></p></div>

    <div id="source" class="note full-rotate border center">
      <p><a href="https://www.thiswebsitewillselfdestruct.com/">创意来源</a></p></div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'HelloWorld',
    data() {
      return {
        backUrl: process.env.VUE_APP_BACK_URL,
        countDownSecond: 80000,
        startTime: "2020-07-14",
        existsTimeArr: {
          year: 0,
          month: 0,
          day: 0,
          hour: 0,
          minute: 0,
          second: 0,
        },
        openFeelingDown: false,
        letterInfo: "",
        sendLetterInfo: "Hi, \n",
        openSend: true,
        currentLetterId: 1,
      }
    },
    created() {
      console.log(9, process.env);
      this.countDown();
      this.existTime();
      this.getSeconds();
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
      },
      feelingDown() {
        this.openFeelingDown = true
      },
      //获取倒计时
      async getSeconds() {
        let result = await axios.get(this.backUrl + '/getSecond')
        this.countDownSecond = result.data.data.seconds
      },
      //获取一封信
      async getLetter() {
        let result = await axios.get(this.backUrl + '/getLetter')
        console.log(result.data.data.letter_info)
        this.letterInfo = result.data.data.letter_info
        this.currentLetterId = result.data.data.id
        window.scrollTo(0, 0)
      },
      //发送一封信
      async sendLetter() {
        await axios.post(this.backUrl + '/createLetter', {
          letter_info: this.sendLetterInfo,
        })
        this.openSend = false

      },
      //喜爱
      async like() {
        let result = await axios.post(this.backUrl + '/likeLetter', {
          letter_id: this.currentLetterId
        })
      }
    },
  }
</script>

