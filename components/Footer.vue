<template>
  <!-- FOOTER -->
  <footer class="footer">
    <div class="info">
      <div class="logo_area">
        <img src="~assets/image/Logo_bg_trans.png" style="height:80px;width:253px"/>
      </div>
      <div class="info_area">
        <p>
          <span class="info_text_span">(주)일신</span>
          <span class="info_text_span left_border_span">대표이사 배종호</span>
          <span class="info_text_span left_border_span">TEL : 055-585-0686</span>
          <span class="info_text_span left_border_span">FAX : 055-585-0803</span>
        </p>
        <p>
          <span class="info_text_span">사업자등록번호 : 859-88-00133</span>
          <span class="info_text_span left_border_span">Email : ilshincorp13@naver.com</span>
        </p>
        <p>
          <span class="info_text_span">소재지 : 본사(2공장) : 경남 함안군 법수면 장백로 528-8 (주)일신</span>
          <br>
          <span class="info_text_span" style="padding-left:101px">(1공장) : 경남 함안군 법수면 장백로 528-58</span>
        </p>
        <p>
          <span class="info_text_span">COPYRIGHTⓒ {{this.getFullYear}} ilshin Corp. All Rights Reserved.</span>
        </p>
        
        <!-- <p class="info_text">
          <span class="info_row">
            <strong class="strong_text">(주) 일신</strong>
            <strong class="strong_text">대표</strong>배종호
            <strong class="strong_text">사업자 등록번호</strong>859-88-00133
          </span>
          <br>
          <span class="info_row">
            <strong class="strong_text">
              주소
            </strong>
              경남 함안군 법수면 장백로 528-8
            <strong class="strong_text">
              E-mail
            </strong>
              ilshincorp13@naver.com
          </span>
          <br>
          <span class="info_row">
            <strong class="strong_text">
              대표전화
            </strong>
              055-585-0686
            <strong class="strong_text">
              FAX
            </strong>
              055-585-0803
          </span>
          <br>
          <br>
          <span class="info_row">
            <strong class="strong_text">
              COPYRIGHTⓒ {{this.getFullYear}} ilshin Corp. 
            </strong>
              All Rights Reserved.
          </span>
        </p> -->
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
  height: 220px;
  background-color: #f6f6f6;
  color: #777777;
  position: relative;
}

.info {
  padding-top: 30px;
  padding-left:100px;
}

.logo_area {
  /* padding-left: 100px; */
  height: 100px;
  width: 150px;
  float: left;
}

.info_area {
  padding-left: 120px;
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

.info_text_span {
  padding-left: 15px;
  padding-right: 15px;
}

.left_border_span {
  border-left: 2px solid #777777;
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
