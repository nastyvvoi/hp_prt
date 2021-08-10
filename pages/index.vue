<template>
    <div class="container">
        <div class="main_area">
            <div class="left_area">
                <div class="outer_box" @click="onClickOuterBox('/about/company')">
                    <div class="inner_box">
                        <div class="inner_box_text box_title_area">
                            <p>회사소개</p>
                        </div>
                        <div class="box_content_area">
                            <div class="inner_box_text" style="margin-left:10px">
                                <p>공조기용 Condenser Ass'y</p>
                                <p style="padding-top:24px">(A/C 냉장고)를 생산하는</p>
                                <p style="padding-top:48px">전문업체입니다.</p>
                            </div>
                            <div class="inner_box_content_img_area about_img">
                                <img class="inner_box_content_img" src="~assets/image/main_intro.jpeg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="outer_box" @click="onClickOuterBox('/product')">
                    <div class="inner_box">
                        <div class="inner_box_text box_title_area">
                            <p>제품소개</p>
                        </div>
                        <div class="box_content_area">
                             <div class="inner_box_content_img_area product_img">
                                <img class="inner_box_content_img" src="~assets/image/main_product.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="outer_box" @click="onClickOuterBox('/location')">
                    <div class="inner_box">
                        <div class="inner_box_text box_title_area">
                            <p>문의</p>
                        </div>
                        <div class="box_content_area">
                            <div class="inner_box_text phone_num" style="margin-left:10px">
                                <p><span class="material-icons-outlined phone_num_icon">phone_in_talk</span>055-585-0686</p>
                            </div>
                            <div class="inner_box_text op_time" style="margin-left:10px">
                                <p>평일 : 08:30 ~ 17:30 </p>
                                <p style="padding-top:24px">점심 : 12:30 ~ 13:30</p>
                            </div>
                            <div class="location_btn_area" style="margin-left:10px">
                                <button class="location_btn">
                                    오시는 길<span class="material-icons-outlined" style="color:#bdbdbd;vertical-align:middle">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center_area">
                <v-carousel class="center_carousel">
                    <v-carousel-item class="carousel_items" v-for="(item, index) in carouselData" :key='index'>
                        <img :src='item.path'>
                        <div :class="item.class">
                            <p>{{item.text_1}}</p>
                            <p>{{item.text_2}}</p>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="right_area">
                <div class="outer_box" @click="onClickOuterBox('/about/history')">
                    <div class="inner_box">
                        <div class="inner_box_text box_title_area">
                            <p>회사연혁</p>
                        </div>
                        <div class="box_content_area">
                            <div class="inner_box_text" style="margin-left:10px">
                                <p>열정으로 한계에 도전하고</p>
                                <p style="padding-top:24px">신뢰할 수 있는 기업이 되겠습니다.</p>
                            </div>
                            <div class="inner_box_content_img_area history_img">
                                <img class="inner_box_content_img" src="~assets/image/main_history.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="outer_box" @click="onClickOuterBox('/notice')">
                    <div class="inner_box">
                        <div class="inner_box_text box_title_area">
                            <p>공지사항</p>
                        </div>
                        <div class="box_content_area">
                        </div>
                    </div>
                </div>
                <div class="outer_box" @click="onClickOuterBox('/location')">
                    <div class="inner_box">
                        <div class="inner_box_text box_title_area">
                            <p>공장</p>
                        </div>
                        <div class="box_content_area">
                            <div class="inner_box_content_img_area factory_img_area">
                                <img class="inner_box_content_img" src="~assets/image/bg_main.jpeg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import carousel1 from '~/assets/image/main_carousel1.jpeg'
import carousel2 from '~/assets/image/main_carousel2.png'

export default {
    data () {
        return {
            model: 0,
            carouselData: [
                { 
                    path: carousel1, 
                    text_1: '축적된 노하우,', 
                    text_2: '완벽한 품질을 추구하는 기업!',
                    class: 'carousel_text carousel_text_white'
                }, {
                    path: carousel2, 
                    text_1: '주식회사 일신', 
                    text_2: '홈페이지 방문을 환영합니다!',
                    class: 'carousel_text carousel_text_black'
                },{ 
                    path: carousel1, 
                    text_1: '축적된 노하우,', 
                    text_2: '완벽한 품질을 추구하는 기업!',
                    class: 'carousel_text carousel_text_white'
                }, {
                    path: carousel2, 
                    text_1: '주식회사 일신', 
                    text_2: '홈페이지 방문을 환영합니다!',
                    class: 'carousel_text carousel_text_black'
                }
            ]
        }
    },
    methods: {
        onClickOuterBox(path) {
            var pathName = path
            if(pathName == "/"){
                this.$store.commit("setIsMain", true)
                this.$store.commit('setCurrentPage', { name: '', route: '/'})
                this.$store.commit('setItemList', [])
            }
            else {
                this.$store.commit("setIsMain", false)
            }
            if(pathName.includes('about')){
                this.$store.commit('setCurrentPage', { name: '회사소개', route: '/about'})
                this.$store.commit('setItemList', [
                { name: '인사말', route: '/company'},
                { name: '연혁', route: '/history'},
                { name: '조직도', route: '/organization'},
                ])
                if(pathName.includes('history')){
                    this.$store.commit('setSecondRoute', '연혁')
                } else if (pathName.includes('organization')) {
                    this.$store.commit('setSecondRoute', '조직도')
                } else {
                    this.$store.commit('setSecondRoute', '인사말')
                }
            } else if (pathName.includes('product')) {
                this.$store.commit('setCurrentPage', { name: '제품소개', route: '/product'})
                this.$store.commit('setItemList', [
                { name: 'MFC 공정', route: ''},
                ])
                this.$store.commit('setSecondRoute', 'MFC 공정')
            } else if (pathName.includes('notice')) {
                this.$store.commit('setCurrentPage', { name: '공지사항', route: '/notice'})
                this.$store.commit('setItemList', [
                { name: '게시판', route: ''},
                ])
                this.$store.commit('setSecondRoute', '게시판')
            } else if (pathName.includes('location')) {
                this.$store.commit('setCurrentPage', { name: '오시는길', route: '/location'})
                this.$store.commit('setItemList', [
                { name: '오시는길', route: ''},
                ])
                this.$store.commit('setSecondRoute', '오시는길')
            }
            this.$router.push(pathName)
        }
    }
}
</script>

<style>
.main_area {
    width: 1280px;
    display: inline-block;
    text-align: center;
}

.center_area {
    width: 600px;
    height: 806px;
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
}

.center_carousel {
    width: 600px;
    height: 806px !important;
}

.carousel_items {
    width: 600px;
    height: 806px;
    position: relative;
}

.carousel_items img{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
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
    height: 806px !important;
}

.carousel_text {
    position:absolute;
	top:60px;
	left:60px;
    z-index: 2;
    text-align: left;
}

.carousel_text_white p {
    color: #fff;
    font-size: 24px;
    margin-bottom: 0px;
}

.carousel_text_black p {
    color: #000;
    font-size: 24px;
    margin-bottom: 0px;
}

.v-carousel__controls {
    display: none !important;
}

.left_area, .right_area {
    width: 264px;
    height: 806px;
    display: inline-block;
}

.outer_box {
    width: 264px;
    height: 264px;
    margin-bottom: 10px;
    border: 2px solid #9c9c9c;
    cursor: pointer;
}

.inner_box {
    width: 240px;
    height: 240px;
    margin: 10px;
}

.box_title_area {
    width: 230px;
    height: 40px;
    font-size: 26px;
    margin-left: 10px;
}

.inner_box_text p {
    position: absolute;
}

.phone_num {
    top: 30px;
    width: 240px;
    height: 40px;
    position: absolute;
}
.phone_num_icon {
    width: 40px;
    height: 40px;
    font-size: 40px;
    vertical-align:middle;
}
.phone_num p{
    font-size: 24px;
    font-weight: 1000;
}
.op_time {
    top: 80px;
    width: 240px;
    height: 48px;
    padding-left: 30px;
    position: absolute;
}
.location_btn_area {
    top: 150px;
    width: 240px;
    height: 30px;
    position: absolute;
    margin-left: 0px !important;
}
.location_btn {
    display: inline-block;
    width: 230px;
    height: 40px;
    border: 2px solid #a6a6a6;
    background-color: #eaeaea;
}
.box_content_area {
    width: 240px;
    height: 200px;
    position: relative;
}

.inner_box_content_img_area {
    position: relative;
}

.about_img {
    width: 240px;
    height: 110px;
    top: 90px;
}

.product_img {
    width: 240px;
    height: 200px;
}

.history_img {
    width: 240px;
    height: 130px;
    top: 70px;
}

.factory_img_area {
    width: 240px;
    height: 140px;
    top: 30px;
}

.inner_box_content_img {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
}

</style>
