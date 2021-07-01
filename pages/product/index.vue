<template>
    <div class="container">
        <div class="title">
            <p>
                제품소개 | Product
            </p>
            <hr/>
        </div>
        <div>
            <b-container class="product_container">
                <b-row class="product_row text-center" align-v="center">
                    <b-col class="ml-md-auto">
                        <div class="img_box">
                            <img class="product_img" src="~/assets/image/product_1.jpeg"/>
                        </div>
                        <div>
                            <br>
                            <p class="description">
                                Air-con Condenser Ass'y
                            </p>
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
                    <b-col class="ml-md-auto">
                        <div class="img_box">
                            <img class="product_img" src="~/assets/image/product_3.jpeg"/>
                        </div>
                        <div>
                            <br>
                            <p class="description">
                                전기자동차용 배터리패널
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
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
    font-size: 40px;
    font-weight: 500;
    padding-top: 40px;
    text-align: center;
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