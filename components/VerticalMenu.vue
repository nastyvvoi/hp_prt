<template>
    <div class="vertical_menu">
        <div class="vertical_banner">
            <img class="bg_img_area" src="~assets/image/temp_bg.png"/>
            <div class="bg_img_text">
                <!-- <p style="margin-bottom:0">{{currentPage.name}}</p> -->
                <nuxt-link class="parent-link-area" :to="currentPage.route">{{currentPage.name}}</nuxt-link>
            </div>
        </div>
        <div>
            <ul>
                <li class="child-link-area" v-for="item in itemList">
                    <nuxt-link :to="currentPage.route + item.route">
                        <button class="button-link-area">{{item.name}}</button>
                    </nuxt-link>
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
    margin: 0px;
    padding: 0px;
}

a { 
    text-decoration:none;
}
.parent-link-area {
    margin-bottom:0
}

.child-link-area {
    height: 50px;
    text-align: center;
}


.button-link-area {
    height: 50px;
    width: 158px;
    background:linear-gradient(to bottom, #f6f6f6 5%, #d5d5d5 100%);
	background-color:#f6f6f6;
    border: solid 1px #a6a6a6;
	display:inline-block;
	cursor:pointer;
	color:black;
	font-family:Arial;
	font-size:17px;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #d5d5d5;
}

.button-link-area:hover {
    background:linear-gradient(to bottom, #d5d5d5 5%, #f6f6f6 100%);
	background-color:#d5d5d5;
}

.button-link-area:active {
    position:relative;
	top:1px;
}

a:hover { 
    text-decoration:none;
}
</style>
