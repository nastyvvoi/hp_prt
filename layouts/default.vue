<template>
  <div class="app">
    <div class="main">
      <Navbar/>
      <nuxt/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export default {
  data() {
    return {
      msize: null,
      styleobject: {
        "min-height": this.msize + "px"
      },
      open: false,
      offsetWidth: ""
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
        this.open = false;
      }
    },
    isMobile() {
      this.offsetWidth = document.documentElement.offsetWidth;
      if (this.offsetWidth >= 960) {
        this.open = true;
      }
    }
  },
  mounted() {
    this.styleobject["min-height"] = window.innerHeight - 327 + "px";
  },

  beforeMount() {
    this.isMobile();
    window.addEventListener("resize", this.msizing);
    window.addEventListener("resize", this.isMobileMount);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.msizing);
    window.removeEventListener("resize", this.isMobileMount);
  },
  components: {
    Footer,
  }
};

</script>

<style>
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
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
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
