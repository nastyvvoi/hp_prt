<template>
  <!-- FOOTER -->
  <footer class="footer">
    <v-card flat title height class="black lighten-1 text-xs-center">
    </v-card>
    <v-divider></v-divider>
    <div class="info">
      <p>
        주식회사 *** 사업자 등록번호: ***-**-*****
        <br>
        주소 : *************
        <br>
        대표전화: ***-***-**** FAX: ***-***-****
        <br>
        COPYRIGHTⓒ {{this.getFullYear}} ***********. All Rights Reserved.
      </p>
      <div class="footer-phone row justify-content-center">
        <div class="col-md-6">
          <span>전화 문의: 9시-18시</span>
        </div>
      </div>
      <p></p>
    </div>
  </footer>
</template>
<script>
// import { DB } from "~/services/fireinit.js";
// import { FF } from "~/services/fireinit.js";
export default {
  data() {
    return {
      dialog: false,
      Email: "",
      width: ""
    };
  },
  computed: {
    getFullYear() {
      return new Date().getFullYear();
    }
  },
  mounted() {
    this.mobileWidth();
    this.width = document.documentElement.offsetWidth;
  },
  destroyed() {
    window.removeEventListener("resize", this.mobileWidthSetter);
  },
  methods: {
    mobileWidth() {
      window.addEventListener("resize", this.mobileWidthSetter);
    },
    mobileWidthSetter() {
      this.width = document.documentElement.offsetWidth;
    }
  }
};
</script>
<style scoped>
hr {
  margin: 0;
}

.talk_banner_div {
  margin: 0px !important;
}

.newsletter {
  height: 38px;
  margin-top: 0px;
  margin-bottom: 30px;
}

.talk_expose_whiteon {
  width: 1200px !important;
}

.toInfo {
  text-decoration: none;
  color: #eee;
  /* font-size: 1.2rem; */
}

.footer-phone {
  display: flex;
  position: relative;
}
.buttonWrapper {
  padding: 1%;
  margin: 1%;
}

@media (max-width: 350px) {
  .buttonWrapper {
    padding: 1%;
    margin: 2%;
    display: block;
  }
  .talk_banner_div {
    margin-top: 10% !important;
  }
  .newsletter {
    height: 38px;
    margin-top: 10%;
    margin-bottom: 30px;
  }
}
</style>
