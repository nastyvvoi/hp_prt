<template>
    <div>
      <b-navbar class="navbar fixed-top" toggleable="lg" variant="info">
        <b-navbar-brand to="/" @click="navClick">
          <img src="~/assets/image/Logo.jpeg" class alt="BV" style="height:80px;width:253px">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto menu_group">
            <b-nav-item to="/about" @click="navClick">회사소개</b-nav-item>
            <b-nav-item to="/product" @click="navClick">제품소개</b-nav-item>
            <b-nav-item to="/notice" @click="navClick">공지사항</b-nav-item>
            <b-nav-item to="/location" @click="navClick">오시는길</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="banner_area">
        <div v-if="isMain">
          <img class="img_banner" src="~/assets/image/bg_main.jpeg"/>
          <div class="text_banner">
            <p>{{currentPage}}</p>
            <p style="font-size:26px; color:white">{{since}}</p>
          </div>
        </div>
        <div v-else>
          <img class="img_bg" src="~/assets/image/default_bg.png"/>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      currentPage: "축적된 노하우로 최상의 제품을 공급합니다",
      since: "since 2013",
      isMain: true,
      isie: true,
      scrolled: null,
      toggle: null,
      user: "",
      windowWidth: null
    };
  },
  methods: {
    navClick() {
      var pathName = this.$route.path
      // console.log(pathName)
      if(pathName == "/"){
        this.currentPage = "축적된 노하우로 최상의 제품을 공급합니다"
        this.since = "since 2013"
        this.isMain = true
      }
      else {
        this.currentPage = ""
        this.since = ""
        this.isMain = false
      }
    },
    onresize() {
      if (window.innerWidth > 1000) {
        this.open = false;
      }
    },
    browserCheck() {
      navigator.sayswho = (function() {
        var ua = navigator.userAgent,
          tem,
          M =
            ua.match(
              /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
            ) || [];
        if (/trident/i.test(M[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
          return "IE " + (tem[1] || "");
        }
        if (M[1] === "Chrome") {
          tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
          if (tem != null)
            return tem
              .slice(1)
              .join(" ")
              .replace("OPR", "Opera");
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
          return M.join(" ");
      })();

      // if (!(navigator.sayswho.includes('Chrome') || navigator.sayswho.includes('Safari') || navigator.sayswho.includes(
      //     'Opera') || navigator.sayswho.includes('Firefox'))) {
      if (navigator.sayswho.includes("IE")) {
        this.isie = true;
      } else {
        this.isie = false;
      }
      // console.log(navigator.sayswho); // outputs: `Chrome 62`
      }
  },

  computed: {

  },
  beforeUpdate() {},
  created() {
    this.navClick()
  },
  beforeMount() {
    // this.navClick()
    // this.browserCheck()
  },
  beforeUpdate() {
    // this.navClick()
  },
  beforeDestroy() {

  }
};
</script>
<style scoped>

.bg-info {
  background-color: #fff !important;
  height: 100px;
}

.banner_area {
  position: relative;
  /* background-color: black; */
  width: 100%;
}

.img_banner {
  height: 700px;
  min-width: 1320px;
  opacity: 0.8;
  display: block; 
  margin: 0px auto;
}

.text_banner {
  color: white;
  font-size: 40px;
  text-align: right;
	position: absolute;
	top: 40px;
  right: 10%;
  transform: translate( -10%, -10% );
}
.img_bg {
  height: 290px;
  min-width: 1720px;
  /* clip: rect( 220px, 0px, 0px, 20px ); */
}

a {
  text-decoration: none;
  color:black;
}

.b-navbar-brand {
  height: 50px;
}

.nav-item {
  box-sizing: border-box;
  padding: 5px;
}

.nav-item:hover {
  font-weight: 1000;
  /* text-decoration:underline; */
}

img {
  height: 5vh;
}

.menu_group {
  padding-right: 100px;
}

.nav-link::before {
  transition: 300ms;
  height: 3px;
  content: "";
  position: absolute;
  background-color: #031D44;
  width: 0%;
  bottom: 28px;
}


.nav-link:hover::before {
  bottom: 28px;
  width: 60px;
}


.navbar-inverse .navbar-collapse {
  background-color: white;
  color: black;
}

.nav-link {
  text-align: center;
  padding-top: 15px;
  padding-left: 10px;
}

@media (min-width: 992px) {
  .mainlink {
    display: none;
  }
}


/* .useChrome{ display: none;

} */

.nav {
  max-width: 100%;
  padding: 0 !important;
  margin: 0;
}
#forclp {
  width: 100vw;
}
</style>