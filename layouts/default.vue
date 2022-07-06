<template>
  <div class="app">
    <div class="main">
      <Navbar/>
      <!-- <Navbar v-if="code"/> -->
      <div :class="{ main_container : !isMobile && !isMain}">
        <nuxt/>
      </div>
      <Footer/>
      <!-- <Footer v-if="code"/> -->
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { DB } from "~/services/fireinit.js";

export default {
  data() {
    return {
      msize: null,
      styleobject: {
        "min-height": this.msize + "px"
      },
      open: false,
      offsetWidth: "",
      isMobile: false,
      isMain: true,
      code: "",
    };
  },
  methods: {
    msizing() {
      this.msize = window.innerHeight;
      this.styleobject["min-height"] = this.msize - 300 + "px";
    },
    isMobileMount() {
      this.offsetWidth = document.documentElement.offsetWidth;
      if (this.offsetWidth <= 960) {
        this.$store.commit("setIsMobile", true)
      } else {
        this.$store.commit("setIsMobile", false)
      }
    },
    defaultCheck() {
      this.offsetWidth = document.documentElement.offsetWidth;
      if (this.offsetWidth >= 960) {
        this.$store.commit("setIsMobile", false)
      } else {
        this.$store.commit("setIsMobile", true)
      }
    }
  },
  computed: {
    checkisMobile() {
      return this.$store.getters.isMobile
    },
    checkisMain() {
      return this.$store.getters.isMain
    },
  },
  watch: {
    checkisMobile(val) {
      this.isMobile = val
    },
    checkisMain(val) {
      this.isMain = val
    },
  },
  // async beforeCreate() {
  //   this.code = await DB.collection('ilshincorp13').doc('admin').get()
  //       .then(result => {
  //         return result.data().ex_num
  //       })

  //   if(this.code == 0) {
  //     var location = window.location
  //     throw new Error('Internal Server Error\n' + location)
  //   }
  // },
  beforeMount() {
    this.$nextTick(() => {
      this.defaultCheck();
      window.addEventListener("resize", this.msizing);
      window.addEventListener("resize", this.isMobileMount);
    })
  },
  mounted() {
    this.styleobject["min-height"] = window.innerHeight - 327 + "px";
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.msizing);
    window.removeEventListener("resize", this.isMobileMount);
  },
  components: {
    Footer, Navbar
  }
};

</script>

<style scoped>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100% !important;
}
body {
  height: 100% !important;
  /* display: flex; */
  flex-direction: column;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.app {
  /* height: 100% !important; */
}

.main {
  padding-top: 100px;
  /* height: 100% !important; */
}

.main_container {
  /* padding-left: 160px; */
}

.container {
  max-width: 1385px;
  margin: 0px auto;
}

.content-section {
  /* flex: 1 !important; */
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
