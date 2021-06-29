<template>
  <!-- FOOTER -->
  <footer class="footer">
    <div class="info">
      <div class="logo_area">
        <img src="~assets/image/Logo.jpeg" style="height:80px;width:253px"/>
      </div>
      <div class="info_area">
        <p class="info_text">
          <span class="info_row">
            <strong class="strong_text">
              (주) 일신
            </strong>
            <strong class="strong_text">
              대표
            </strong>
              박덕자
            <strong class="strong_text">
              사업자 등록번호
            </strong>
              111-11-11111
          </span>
          <br>
          <span class="info_row">
            <strong class="strong_text">
              주소
            </strong>
              *************
            <strong class="strong_text">
              E-mail
            </strong>
              ****@*****.com
          </span>
          <br>
          <span class="info_row">
            <strong class="strong_text">
              대표전화
            </strong>
              111-111-1111
            <strong class="strong_text">
              FAX
            </strong>
              111-111-1111
          </span>
          <br>
          <br>
          <span class="info_row">
            <strong class="strong_text">
              COPYRIGHTⓒ {{this.getFullYear}} ***********. 
            </strong>
              All Rights Reserved.
          </span>
        </p>
        <!-- <div class="footer-phone row justify-content-center">
          <div class="col-md-6">
            <span>전화 문의: 9시-18시</span>
          </div>
        </div> -->
      </div>
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

.footer {
  /* flex-shrink: 0; */
  height: 190px;
  background-color: #f6f6f6;
  color: #777777;
  position: relative;
}

.info {
  padding-top: 30px;
  padding-left:150px;
}

.logo_area {
  /* padding-left: 100px; */
  height: 100px;
  width: 150px;
  float: left;
}

.info_area {
  padding-left: 200px;
  float: left;
}

.info_text {
  color: #777777;
}

.info_row {
  display: inline-block;
  height: 30px;
}

.strong_text {
  font-weight: 700;
  color: #5c5c5c;
  margin-left: 30px;
  margin-right: 15px;
}

.talk_banner_div {
  margin: 0px !important;
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
}
</style>
