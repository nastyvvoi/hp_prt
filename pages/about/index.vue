<template>
    <b-container class="about_container">
        <b-row class="about_row text-center" align-v="center">
            <b-col class="ml-md-auto">
                <div class="img_box">
                    <img class="round_img" src="~/assets/image/no_image.png"/>
                </div>
                <p>
                    회사소개 | Company
                </p>
            </b-col>
            <b-col class="ml-md-auto">
                <div class="img_box">
                    <img class="round_img" src="~/assets/image/no_image.png"/>
                </div>
                <p>
                    제품소개 | Product
                </p>
            </b-col>
            <!-- <b-col class="ml-md-auto">
                <div class="img_box">
                    <img class="round_img" src="~/assets/image/no_image.png"/>
                </div>
                <p>
                    3 of 3
                </p>
            </b-col> -->
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
    </b-container>
</template>

<script>

</script>

<style scoped>

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
