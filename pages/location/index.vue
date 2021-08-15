<template>
    <div class="wrapper_container">
      <div class="title">
          <p>
              오시는 길 | Location
          </p>
          <hr/>
      </div>
      <br>
      <div class="rough_map">
          <br>
          <img src="~assets/image/rough_map.jpeg"/>
      </div>
      <br>
      <hr class="hr_thick"/>
      <div class="address_wrapper">
        <b-row>
          <b-col class="ml-md-auto outer_wrapper" md="6">
            <div class="address_area">
              <hr class="thick_red"/>
              <p style="font-size:22px">
                본사(2공장) / 1공장
              </p>
              <p class="info_detail" style="margin:0px">
                본 &nbsp;사(2공장): 경남 함안군 법수면 장백로 528-8
              </p>
              <p class="info_detail">
                1공장: 경남 함안군 법수면 장백로 528-58
              </p>
            </div>
            <div class="divider"></div>
          </b-col>
          
          <b-col class="ml-md-auto outer_wrapper">
            <div class="tel_area">
              <hr class="thick_red"/>
              <p style="font-size:22px">
                전화번호
              </p>
              <p class="info_detail" style="margin:0px">
                TEL: 055-585-0686 / FAX: 055-585-0803
              </p>
              <p class="info_detail">
                E-mail: ilshincorp13@naver.com
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        scrollToTop: true,
        offSetWidth: ''
      }
    },
    mounted() {
      this.offSetWidth = document.documentElement.offsetWidth;
      window.addEventListener('resize', this.getWidth, {passive: true} )
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getWidth)
    },
    methods: {
      getWidth() {
        this.offSetWidth = document.documentElement.offsetWidth
      }
    }
  }
</script>
<style scoped>

.title {
    font-size: 40px;
    font-weight: 500;
    padding-top: 40px;
}

.hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid #5c5c5c;
}

.rough_map {
  max-width: 960px;
  width: 100%;
  height: auto;
  border: 2px solid #cccccc;
  margin: auto;
}

.rough_map img {
  max-width: 960px;
  width: 100%;
  height: auto;
}

.hr_thick {
  border-top: 2px solid #4b4b4b;
  opacity: 1;
}

.address_wrapper {
    position: relative;
    /* height:200px; */
    padding:10px;
    /* background: blue; */
    text-align: left;
}

.divider{
    position:absolute;
    left:100%;
    top:10%;
    bottom:10%;
    border-left:1px solid #cccccc;
}

.address_area {
    /* width:45%; */
    /* height:200px; */
    float:left;
    background:white;
    margin: 10px;
    padding:20px;
    text-align: left;
}

.tel_area {
    /* width:45%; */
    /* height:200px; */
    float:left;
    /* background: white; */
    margin: 10px;
    padding:20px;
}

.thick_red {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 40px;
  border-top: 3px solid red;
  background: red;
  opacity: 1;
}

.info_detail {
  color: #5c5c5c;
}

/* .address {
    font-size: 26px;
    font-weight: 500;
}

.address_detail {
    font-size: 18px;
    margin-bottom: 50px;
} */
</style>