<template>
    <div class="vertical_menu">
        <div class="vertical_banner">
            <img class="bg_img_area" src="~assets/image/temp_bg.png"/>
            <div class="bg_img_text">
                <p style="margin-bottom:0">{{currentPage.name}}</p>
            </div>
        </div>
        <div>
            <ul>
                <li v-for="item in itemList">
                    <nuxt-link class="child-link-area" :to="currentPage.route + item.route">{{item.name}}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            // currentPage: { name: "회사소개", route: '/about'},
            // itemList: [
            //     { name: '인사말', route: '/company'},
            //     { name: '연혁', route: '/history'},
            //     { name: '조직도', route: '/organization'},
            // ]
        }
    },
    props: [ 'currentPage', 'itemList']
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

.child-link-area {

}

a:hover { 
    text-decoration:none;
}
</style>
