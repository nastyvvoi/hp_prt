<template>
    <div class="container">
        <div class="title">
            <p>
                오시는 길 | Location
            </p>
            <hr/>
        </div>
        <div class="rough_map">
            <br>
            <img src="~assets/image/rough_map.jpeg"/>
        </div>
        <div class="address">
            <br>
            <p>
                ◎ 주소 및 연락처
            </p>
        </div>
        <div class="address_detail">
            <p>
                (본사/2공장) 경남 함안군 법수면 장백로 528-8. (주)일신 / Tel: 055-585-0686 / Fax: 055-585-0803
            </p>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1공장) 경남 함안군 법수면 장백로 528-58
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
           items: [
        {
          name: "롯데월드",
          icon: "fa fa-warehouse",
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.3430765791868!2d127.09756590452133!3d37.510727927133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5a7250efe81%3A0x433df2c1fec03b98!2z66Gv642w7JuU65Oc!5e0!3m2!1sko!2skr!4v1624700735616!5m2!1sko!2skr",
          english: "",
          address: "서울특별시 송파구 잠실동 올림픽로 240",
          phone: "02-***-****",
          fax: "02-***-****"
        }
      ],
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

.container {
    width: 100%;
    margin: auto;
}

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

.address {
    font-size: 26px;
    font-weight: 500;
}

.address_detail {
    font-size: 18px;
    margin-bottom: 50px;
}
</style>