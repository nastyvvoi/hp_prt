<template>
    <!-- Image and text -->
    <div>
      <b-navbar 
        id="forclp"
        toggleable="lg"
        sticky
      >
        <!-- <b-navbar-toggle target="nav_collapse" @click.native="changeback"></b-navbar-toggle> -->
        <b-collapse is-nav id="nav_collapse">
          <!-- <b-navbar-brand class="navbrand" to="/">
            <img src="~/assets/photo/1111_.png" class alt="BV">
          </b-navbar-brand> -->
          <b-navbar-nav class="navContent ml-auto">
            <!-- <b-nav-item to="/" class="mainlink">MAIN</b-nav-item> -->
            <b-nav-item to="/about">회사소개</b-nav-item>
            <b-nav-item to="/product">제품소개</b-nav-item>
            <b-nav-item to="/notice">공지사항</b-nav-item>
            <b-nav-item style="padding-right:11px;" to="/location">오시는길</b-nav-item>
            <v-spacer style="width:100px;"></v-spacer>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>

export default {
  data() {
    return {
      isie: true,
      scrolled: null,
      toggle: null,
      user: "",
      windowWidth: null
    };
  },
  methods: {
    signOut() {
      Firebase.auth()
        .signOut()
        .then(() => {
          window.location.reload();
        });
    },
    onresize() {
      if (window.innerWidth > 1000) {
        this.open = false;
      }
    }
  },

  computed: {

  },
  beforeUpdate() {},

  beforeMount() {
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
  },

  beforeDestroy() {

  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}

.userinfo {
  text-align: center;
}

.userinfo a {
  display: inline;

  font-weight: bold;
  color: rgb(235, 13, 13) !important;
  font-size: 0.5rem;
  padding-left: 0.5rem !important;
  text-align: center;
}

.userinfo span {
  padding-top: 11px;
  color: #2ebd7f;
  font-size: large;
  font-weight: bold;
}

.ff {
  position: fixed;
  width: 100%;
  z-index: 201;
  margin: 0;
  min-width: fit-content;
}

.center {
  display: inline-block;
  vertical-align: unset;
}

.mainnav {
  vertical-align: baseline !important;
  margin: 0;
  background-color: white;
  transition: 0.5s;
  color: black;
}

.b-navbar-brand {
  height: 50px;
}

.mainnavt {
  margin: 0;
  border-bottom: 1.1px solid #444444;
  background: rgba(255, 255, 255, 0.1);
  transition: 0.5s;
}

.isPopUp {
  top: 4.4%;
}

.nav-item {
  box-sizing: border-box;
  padding-left: 11px;
}

.nav-item:hover {
  font-weight: 1000;
}

img {
  height: 5vh;
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

.username {
  font: 550 21px "Fjalla One", sans-serif;
  padding: 10px;
  padding-bottom: 0;
  z-index: -1;
}

@media (max-width: 768px) {
  .username {
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