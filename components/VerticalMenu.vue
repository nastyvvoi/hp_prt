<template>
    <div class="vertical_menu">
        <div class="vertical_banner">
            <div class="vertical_banner_inner_box" @click="onClickVerticalNav(currentPage.route)">
                <nuxt-link class="parent-link-area" :to="currentPage.route">{{currentPage.name}}</nuxt-link>
                <!-- <img class="bg_img_area" src="~assets/image/temp_bg.png"/>
                <div class="bg_img_text">
                    <nuxt-link class="parent-link-area" :to="currentPage.route">{{currentPage.name}}</nuxt-link>
                </div> -->
            </div>
        </div>
        <div>
            <ul>
                <li class="child-link-area" v-for="item in this.$store.state.itemList">
                    <nuxt-link :to="currentPage.route + item.route">
                        <button  @click="onClickVerticalNav(item.route)" class="button-link-area">{{item.name}}</button>
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
    props: [ 'currentPage', 'itemList'],
    methods: {
        onClickVerticalNav(path) {
            var pathName = path
            if(pathName == '') {
                pathName = this.$route.path
            }
            if(pathName.includes('history')){
                this.$store.commit('setSecondRoute', '연혁')
            } else if (pathName.includes('organization')) {
                this.$store.commit('setSecondRoute', '조직도')
            } else if (pathName.includes('product')) {
                this.$store.commit('setSecondRoute', 'MFC 공정')
            } else if (pathName.includes('notice')) {
                this.$store.commit('setSecondRoute', '게시판')
            } else if (pathName.includes('location')) {
                this.$store.commit('setSecondRoute', '오시는길')
            } else {
                this.$store.commit('setSecondRoute', '인사말')
            }
            
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
    height: 160px;
	/* border: 1px solid #000000; */
	position: relative;
}

.vertical_banner_inner_box {
    width: 156px;
    height: 156px;
    margin: 2px;
    border-radius: 5%;
    border: 2px solid #a6a6a6;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
}


/* .bg_img_area {
    width: 100%;
	vertical-align: middle;
}

.bg_img_text {
    width: 120px;
    font-size: 26px;
    padding: 5px 10px;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
} */

ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
}

a { 
    text-decoration:none;
}

.parent-link-area {
    margin-bottom:0;
    line-height: 160px;
    font-size: 24px;
    color: #7a7a7a;
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
