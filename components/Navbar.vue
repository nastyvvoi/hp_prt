<template>
    <div>
      <b-navbar class="navbar fixed-top" toggleable="lg" variant="info">
        <b-navbar-brand to="/" @click="navClick">
          <img src="~/assets/image/Logo.jpeg" class alt="BV" style="height:80px;width:253px">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto menu_group">
            <b-nav-item to="/about/company" @click="navClick">회사소개</b-nav-item>
            <b-nav-item to="/product" @click="navClick">제품소개</b-nav-item>
            <b-nav-item to="/notice" @click="navClick">공지사항</b-nav-item>
            <b-nav-item to="/location" @click="navClick">오시는길</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div v-if="!isMain" class="route_nav_area">
        <div class="route_nav">
          <p>
            <span class="material-icons-outlined" style="color:#4375DB;vertical-align:middle;padding-right:10px">home</span>
            <!-- <span class="route_text">Home</span> -->
            <a class="route_text" href="/" @click="navClick">home</a>
            <!-- <nuxt-link class="route_text" to="/" @click="navClick">home</nuxt-link> -->
            <span class="material-icons-outlined" style="color:#bdbdbd;vertical-align:middle">chevron_right</span>
            <!-- <span class="route_text">{{currentPage.name}}</span> -->
            <nuxt-link class="route_text" :to="currentPage.route" @click="navClick">{{currentPage.name}}</nuxt-link>
            <span class="material-icons-outlined" style="color:#bdbdbd;vertical-align:middle">chevron_right</span>
            <span class="route_text">{{secondRoute}}</span>
          </p>
        </div>
      </div>
      <!-- <div class="banner_area">
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
      </div> -->
      <vertical-menu v-if="!isMain" :currentPage="currentPage" :itemList="itemList" class="vertical_menu"/>
    </div>
</template>

<script>
import VerticalMenu from '~/components/VerticalMenu.vue';

export default {
  data() {
    return {
      currentPage: {},
      itemList: [],
      since: "since 2013",
      isMain: true,
      isie: true,
      scrolled: null,
      toggle: null,
      user: "",
      windowWidth: null,
      secondRoute: "",
    };
  },
  methods: {
    navClick() {
      var pathName = this.$route.path
      if(pathName == "/"){
        this.$store.commit("setIsMain", true)
        this.$store.commit('setCurrentPage', { name: '', route: '/'})
        this.$store.commit('setItemList', [])
      }
      else {
        this.$store.commit("setIsMain", false)
      }
      if(pathName.includes('about')){
        this.$store.commit('setCurrentPage', { name: '회사소개', route: '/about'})
        this.$store.commit('setItemList', [
          { name: '인사말', route: '/company'},
          { name: '연혁', route: '/history'},
          { name: '조직도', route: '/organization'},
        ])
        if(pathName.includes('history')){
          this.$store.commit('setSecondRoute', '연혁')
        } else if (pathName.includes('organization')) {
          this.$store.commit('setSecondRoute', '조직도')
        } else {
          this.$store.commit('setSecondRoute', '인사말')
        }
      } else if (pathName.includes('product')) {
        this.$store.commit('setCurrentPage', { name: '제품소개', route: '/product'})
        this.$store.commit('setItemList', [
          { name: 'MFC 공정', route: ''},
        ])
        this.$store.commit('setSecondRoute', 'MFC 공정')
      } else if (pathName.includes('notice')) {
        this.$store.commit('setCurrentPage', { name: '공지사항', route: '/notice'})
        this.$store.commit('setItemList', [
          { name: '게시판', route: ''},
        ])
        this.$store.commit('setSecondRoute', '게시판')
      } else if (pathName.includes('location')) {
        this.$store.commit('setCurrentPage', { name: '오시는길', route: '/location'})
        this.$store.commit('setItemList', [
          { name: '오시는길', route: ''},
        ])
        this.$store.commit('setSecondRoute', '오시는길')
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
  components: {
    VerticalMenu
  },
  computed: {
    checkisMain() {
      return this.$store.getters.isMain
    },
    checkCurrentPage() {
      return this.$store.state.currentPage
    },
    checkSecondRoute() {
      return this.$store.state.secondRoute
    }
  },
  watch: {
    checkisMain(val) {
      console.log("val", val)
      this.isMain = val
    },
    checkCurrentPage(val) {
      this.currentPage = val
    },
    checkSecondRoute(val) {
      this.secondRoute = val
    }
  },
  beforeUpdate() {},
  created() {
    this.$nextTick(() => {
      this.navClick()
      this.isMain = this.$store.state.isMain
      this.secondRoute = this.$store.state.secondRoute
    })
  },
  beforeMount() {
    // this.$nextTick(() => {
    //   this.navClick()
    // })
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

.route_nav_area {
  height: 60px;
  border-top: 1px solid #9c9c9c;
  background-color: #eeeeee;
}

.route_nav {
  text-align: right;
  line-height:60px;
  vertical-align: middle;
  margin-right: 200px;
}

.route_text {
  color: #5c5c5c;
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