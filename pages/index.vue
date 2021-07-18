<template>
    <div class="container">
        <div class="main_area">
            <div class="left_area">
            </div>
            <div class="center_area">
                <v-carousel class="center_carousel">
                    <v-carousel-item v-for="i in 3" :key="i">
                        <img src="~assets/image/main_carousel1.jpeg">
                        <!-- <v-sheet>
                            <v-row>
                            <div class="text-h2">
                                Slide {{ i + 1 }}
                            </div>
                            </v-row>
                        </v-sheet> -->
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="right_area">
            </div>
        </div>
        <!-- <b-container class="about_container">
            <b-row class="about_row text-center" align-v="center">
                <b-col class="ml-md-auto">
                    <div class="img_box">
                        <img class="round_img" src="~/assets/image/company_thumb.png"/>
                    </div>
                    <div>
                        <p>
                            회사소개 | Company
                        </p>
                        <p>
                          (주)일신은 Condenser 생산 전문업체입니다.
                        </p>
                    </div>
                </b-col>
                <b-col class="ml-md-auto">
                    <div class="img_box">
                        <img class="round_img" src="~/assets/image/product_thumb.jpg"/>
                    </div>
                    <p>
                        제품소개 | Product
                    </p>
                </b-col>
            </b-row>
            <b-row class="about_row text-center" align-v="center">
                <b-col class="ml-md-auto">
                    <div class="img_box">
                        <img class="round_img" src="~/assets/image/no_image.png"/>
                    </div>
                    <p>
                        공지사항 | Notice
                    </p>
                </b-col>
                <b-col class="ml-md-auto">
                    <div class="img_box">
                        <img class="round_img" src="~/assets/image/no_image.png"/>
                    </div>
                    <p>
                        오시는길 | Location
                    </p>
                </b-col>
            </b-row>
        </b-container> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            model: 0,
        }
    }
}
</script>

<style>
.main_area {
    width: 1280px;
    /* display: inline-block; */
}

.left_area {
    width: 260px;
    height: 800px;
    background-color: blue;
    display: inline-block;
}

.center_area {
    width: 600px;
    /* height: 800px; */
    background-color: red;
    display: inline-block;
}

.right_area {
    width: 260px;
    height: 800px;
    background-color: blue;
    display: inline-block;
}

.center_carousel {
    height: 800px !important;
}

.v-window__prev, .v-window__next {
    width: 36px !important;
    height: 36px !important;
}

..v-window__prev {
    float: left !important;
}
.v-window__next {
    /* float: right !important;
    display: inline-block !important; */
    left: calc(50% + 230px) !important;
    /* margin-left: 500px !important; */
}

.v-responsive__content {
    height: 0px !important;
}

.v-carousel__item {
    height: 800px !important;
}

.about_row {
    heigh: 350px;
    align: center;
}

.img_box {
    height: 150px;
    width: 150px;
    border-radius: 70%;
    overflow: hidden;
    display: inline-block;
}
</style>
