<template>
    <div class="entity_wrapper">
        <table class="board_content">
            <thead>
                <tr>
                    <th colspan="2" scope="cols">{{entityData.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2" class="newsform_content_area">
                        {{entityData.content}}
                    </td>
                </tr>
                <tr>
                    <td class="attached_file">
                        <span>첨부파일</span>
                    </td>
                    <td  class="newsform_attach_area">
                        <a class="file_link" v-for="file in files" :href="file.url" download>{{file.name}}</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="onClickBoardList" class="button-board-list">목록</button>
    </div>
</template>

<script>
import { firestorage } from "~/services/fireinit.js";

export default {
    data() {
        return {
            files: [],
        }
    },
    props: ['entityData'],
    watch: {
        async entityData(val) {
            await this.getDownloadUrls()
        }
    },
    created() {
        this.files = []
    },
    methods: {
        onClickBoardList() {
            this.$router.push('/notice')
            this.$store.commit('setSecondRoute', '게시판')
        },
        async getDownloadUrls() {
            var _this = this
            
            firestorage.ref("attached/").constructor.prototype.getAttachedFileUrls = function(fileArr) { 
                var ref = this;
                return Promise.all(fileArr.map(async function(file) {
                    var url = await ref.child(file).getDownloadURL().then(result => {
                        return result
                    })
                    return { name: file, url: url }
                }))
            }

            await firestorage.ref("attached/").getAttachedFileUrls(this.entityData.fileList)
                .then(function(result) {
                    _this.files = result
                    _this.$forceUpdate()
                }).catch(function(error) {
                    console.log(error)
                })
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
  /* padding-left: 30px; */
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

table.board_content td.attached_file {
    width: 110px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    vertical-align: top;
}

.file_link {
    color: #1266FF;
    display:block;
}

.file_link:hover {
    color: #5F00FF;
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