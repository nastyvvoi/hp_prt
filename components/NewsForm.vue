<template>
    <div class="entity_wrapper">
        <table class="board_content">
            <thead>
                <tr>
                    <th scope="cols">{{entityData.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="newsform_content_area">
                        {{entityData.content}}
                    </td>
                </tr>
                <tr>
                    <td  class="newsform_attach_area">
                        aaa
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="onClickBoardList" class="button-board-list">목록</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['entityData'],
    methods: {
        onClickBoardList() {
            this.$router.push('/notice')
            this.$store.commit('setSecondRoute', '게시판')
        }
    }
}

</script>

<style scoped>
.entity_wrapper {
    min-height: 500px;
}
table.board_content {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  /* border: 1px solid #ccc; */
  margin: auto;
}
table.board_content thead {
  border-bottom: 1px solid #ccc;
  border-top: 2px solid #5c5c5c;
  background: #f2f2f2;
}
table.board_content thead th {
  width: 1080px;
  padding: 10px;
  padding-left: 30px;
  font-weight: bold;
  vertical-align: top;
}

table.board_content td.newsform_content_area {
  width: 1080px;
  height: 300px;
  padding: 10px;
  vertical-align: top;
  text-align: left;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
}

table.board_content td.newsform_attach_area {
  width: 1080px;
  padding: 10px;
  vertical-align: top;
  text-align: left;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
}

.button-board-list {
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
	padding: 7px;
	text-decoration:none;
	text-shadow:0px 1px 0px #d5d5d5;
    margin-top: 25px;
}

.button-board-list:hover {
    background:linear-gradient(to bottom, #d5d5d5 5%, #f6f6f6 100%);
	background-color:#d5d5d5;
}
</style>