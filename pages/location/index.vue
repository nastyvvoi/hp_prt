<template> 
<div class="w-100">
       <section class="loactionBanner">
      <h2>오시는 길</h2>
      <div class="title">
      </div>
    </section>
      <div class="back_area" style="height:100%">
      <v-tabs v-if="offSetWidth!==''&& offSetWidth>800" grow color="black" dark icons-and-text>
        <v-tabs-slider color="#2ebd7f"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item.name" ripple style="cursor:pointer;">
          <span>
            <i active :class="item.icon"></i>
            {{item.name}}
          </span>
        </v-tab>
        <v-tab-item v-for="item in items" :key="item.name">
          <div class="mapContentWrapper">
            <div class="col-lg-8 paddingzero">
              <div class="map">
                <iframe class="map" :src="item.src" frameborder="0"></iframe>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact">
                <h2>{{item.name}}</h2>
                <p>{{item.english}}</p>
                <hr class="featurette-divider">
                <div class="divider"/>
                <i class="fa fa-map"> Address</i>
                <p>{{item.address}}</p>
                <i class="fa fa-phone"> Phone</i>
                <p>{{item.phone}}</p>
                <i class="fa fa-envelope"> E-mail</i>
                <p>support@email.com</p>
                <i class="fa fa-fax"> Fax</i>
                <p>{{item.fax}}</p>
                <i class="fa fa-comment"> Kakao Talk</i>
                <p>주식회사 **</p>
              </div>
            </div>
          </div>
        </v-tab-item>
      </v-tabs>
       <v-expansion-panel v-if="offSetWidth!==''&& offSetWidth<800" dark>
        <v-expansion-panel-content v-for="item in items" :key="item.name">
          <template v-slot:header>
            <div>
              <span>
                <i active :class="item.icon"></i>
                {{item.name}}
              </span>
            </div>
          </template>
            <div class="mapContentWrapper">
            <div class="col-lg-8 paddingzero">
              <div class="map">
                <iframe class="map" :src="item.src" frameborder="0"></iframe>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact">
                <h2>{{item.name}}</h2>
                <p>{{item.english}}</p>
                <hr class="featurette-divider">
                <div class="divider"/>
                <i class="fa fa-map"> Address</i>
                <p>{{item.address}}</p>
                <i class="fa fa-phone"> Phone</i>
                <p>{{item.phone}}</p>
                <i class="fa fa-envelope"> E-mail</i>
                <p>support@thegarage.kr</p>
                <i class="fa fa-fax"> Fax</i>
                <p>{{item.fax}}</p>
                <i class="fa fa-comment"> Kakao Talk</i>
                <p>@GARAGE</p>
              </div>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
    <!-- </section> -->

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
          english: "SEONJEONGNEUNG",
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
.v-tabs__slider {
  height: 4px;
}

.v-tabs__div {
  width: auto;
  font-size: 20px;
}
.back_area {
  background-color: #2ebd7f;
}
.mapContentWrapper {
  display: flex;
}
@media (max-width: 992px) {
  .mapContentWrapper {
    display: block;
  }
}
.loactionBanner {
  width: 100%;
  height: 250px;
  /* background: url("~/assets/photo/membership.jpg") no-repeat fixed; */
  background-size: cover;

  background-position: center;

  text-align: center;
  position: relative;
  z-index: 1;
}
.loactionBanner:after {
  content: "";
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  z-index: -1;
}

.loactionBanner h2 {

  letter-spacing: 0.7REM;
  color: #fff;
  font-family: 'Fjalla One', sans-serif;
  font-SIZE: 50px;
  text-transform: uppercase;

  padding-top:120px;

}

.loactionBanner h2:after {
  content: "";
  position: absolute;
  background: #2ebd7f;
  height: 5px;
  width: 15%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;
}

@media (max-width: 514px) { 
  .loactionBanner h2:after {
    display: none
  }
  .loactionBanner h2 {
    letter-spacing: 0.7REM;
    color: #fff;
    font-family: 'Fjalla One', sans-serif;
    font-SIZE: 50px;
    text-transform: uppercase;
    padding-top: 100px;
  }
}

</style>