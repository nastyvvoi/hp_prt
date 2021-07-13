<template>
    <div class="vertical_menu">
        <div class="vertical_banner">
            <img class="bg_img_area" src="~assets/image/temp_bg.png"/>
            <div class="bg_img_text">
                <p style="margin-bottom:0">{{currentPage}}</p>
            </div>
        </div>
        <div>
            <ul>
                <li v-for="item in itemList">
                    <a href="#">{{item}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            currentPage: "회사소개",
            itemList: ["연혁", "조직도", "인사말"]
        }
    }
}

</script>

<style>
.vertical_menu {
    width: 160px;
    background-color: white;
    border-right: 2px solid #f6f6f6;
    position : absolute;
    height: 100vh !important;
    overflow: hidden;
}

.vertical_banner {
    width: 160px;
	/* border: 1px solid #000000; */
	position: relative;
}

.bg_img_area {
    width: 100%;
	vertical-align: middle;
}

.bg_img_text {
    width: 120px;
    font-size: 26px;
    padding: 5px 10px;
	text-align: center;
	position: absolute;
    /* margin-bottom: 0 !important; */
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
}

ul {
    list-style: none;
}

a { 
    text-decoration:none;
}

a:hover { 
    text-decoration:none;
}
</style>
