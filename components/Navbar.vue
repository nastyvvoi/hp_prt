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
        <img class="img_banner" src="~/assets/image/bg_main.jpeg"/>
        <div class="text_banner">
          <p>{{currentPage}}</p>
          <p style="font-size:26px">주식회사 **</p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      currentPage: "메인페이지",
      isie: true,
      scrolled: null,
      toggle: null,
      user: "",
      windowWidth: null
    };
  },
  methods: {
    navClick() {
      var pathName = $nuxt.$route.name
      if(pathName == "about")
        this.currentPage = "회사소개"
      else if(pathName == "product")
        this.currentPage = "제품소개"
      else if(pathName == "notice")
        this.currentPage = "공지사항"
      else if(pathName == "location")
        this.currentPage = "오시는길"
      else
        this.currentPage = "메인페이지"
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
    
  },
  beforeMount() {
    this.navClick()
    // this.browserCheck()
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
  height: 500px;
  width: 1280px;
  opacity: 0.8;
  display: block; 
  margin: 0px auto;
}

.text_banner {
  color: white;
  font-size: 40px;
  text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
  transform: translate( -50%, -50% );
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
/* .normal {
    position: fixed;
    display: block;
    width: 70%;
    height: 160px;
    line-height: 160px;
    color: aliceblue;
    padding: 0;
    top: 70px;
    z-index: 11;
    border-radius: 0;
    border-width: 7px;
    border-style: solid;
    color: #fff;

    font-size: 1.7rem;

    padding: 0;

    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    background-color: #ff5252 !important;

    border-color: rgba(255, 20, 20, 0.12) !important;
  }

  .normal i {
    color: aliceblue;
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