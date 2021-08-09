<template>
    <div class="container">
        <div style="padding-left:140px">
        <div class="title">
            <p>
                MFC 공정
            </p>
            <hr/>
        </div>
        <div class="subtitle">
            <p>
                | MFC 공정
            </p>
            <hr/>
        </div>
        <div>
            <b-container class="product_container">
                <b-row class="product_row text-center" align-v="center">
                    <b-col class="ml-md-auto">
                        <div class="product_outer_box">
                            <div class="step_title_area">
                                <p>◎ STEP 01. FIN 성형</p>
                            </div>
                            <div class="step_description_text">
                                <p>FIN MILL을 사용하여 FIN 원소재를</p>
                                <p>FIN FORMING 및 각모델의 길이와 산수에 맞게</p>
                                <p>절단하여 FIN/TUBE 가조립기로 이송하는 공정</p>
                            </div>
                            <div class="img_box">
                                <img class="product_img" src="~/assets/image/product_1.jpeg"/>
                            </div>
                            <div>
                                <br>
                                <p class="description">
                                    Air-con Condenser Ass'y
                                </p>
                            </div>
                        </div>
                    </b-col>
                    <b-col class="ml-md-auto">
                        <div class="img_box">
                            <img class="product_img" src="~/assets/image/product_2.jpeg"/>
                        </div>
                        <div>
                            <br>
                            <p class="description">
                                냉장고용 Condenser
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    width: 100%;
    margin: auto;
}

.title {
    font-size: 28px;
    font-weight: 500;
    padding-top: 40px;
    /* text-align: center; */
}

.subtitle {
    font-size: 24px;
    font-weight: 500;
    padding-top: 40px;
    color: #221DB5;
}

.hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid #5c5c5c;
}

.product_row {
    heigh: 350px;
    align: center;
}

.product_outer_box {
    background-color: aqua;
}

.step_title_area {

}

.step_description_area {

}

.img_box {
    height: 300px;
    width: 300px;
    border: 3px solid #9c9c9c;
    overflow: hidden;
    display: inline-block;
    margin: auto;
    line-height: 300px;
}

.img_box img {
    width: 100%;
    height: auto;
    vertical-align:middle;
}

.description {
    font-size: 22px;
}
</style>