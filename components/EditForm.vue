<template>
    <div class="entity_wrapper">
        <table class="board_content">
            <thead>
                <tr>
                    <th>제목</th>
                    <td>
                        <input class="edit_title_area" type="text" v-model="title" placeholder="제목을 입력하세요."/>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        내용
                    </th>
                    <td>
                        <textarea class="textarea" rows="20" style="width:100%" v-model="content" placeholder="내용을 입력하세요."/>
                    </td>
                </tr>
                <tr>
                    <th>
                        업로드<br>이미지
                    </th>
                    <td>
                        <div class="image-wrapper" v-for="image in images" :key="image.id">
                        <img class="image-preview-edit" :src="image.url" :ref="image.url">
                        <div class="btn-delete">
                            <span draggable="false" @click="deleteImage(image)"><i class="material-icons">delete_forever</i></span>
                        </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>
                        파일첨부
                    </th>
                    <td>
                        <input type="file" @change="uploadFiles" multiple/>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="onClickSaveData" class="button-board-list">등록</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: '',
            images: [],
            deleteImgList: [],
        }
    },
    methods: {
        onClickSaveData() {
            this.$router.push('/notice')
            this.$store.commit('setSecondRoute', '게시판')
        },
        uploadFiles(e) {
            var fileList = e.target.files
            var _this = this
            Array.from(fileList).forEach(item => {
                if (!item.type.match(/image\//))
                return
                var reader = new FileReader()
                reader.onload = function(e) {
                    var image = {
                        id: item.name + Date.now(),
                        url: e.target.result,
                        file: item
                    }
                    _this.images.push(image)
                }
                reader.readAsDataURL(item)
            })
        },
        deleteImage(data) {
            this.deleteImgList = []
            this.images = this.images.filter(item => {
                if(item.id == data.id) this.deleteImgList.push(data.id)
                return item.id != data.id
            })
        },
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
}

table.board_content tr {
  border-bottom: 1px solid #ccc;
}

table.board_content th {
  width: 120px;
  padding: 10px;
  padding-left: 20px;
  font-weight: bold;
  vertical-align: top;
  background: #f2f2f2;
}

table.board_content td {
  width: 980px;
  padding: 10px;
  padding-left: 20px;
  font-weight: bold;
  vertical-align: top;
}

.edit_title_area {
    width: 100%;
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
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #d5d5d5;
    margin-top: 25px;
}

.button-board-list:hover {
    background:linear-gradient(to bottom, #d5d5d5 5%, #f6f6f6 100%);
	background-color:#d5d5d5;
}

.image-area {
  display: inline-block;
  margin: 5px;
  vertical-align: top;
}

.image-preview {
  width: 250px;
  height: auto;
}

.image-wrapper {
  display: inline-block;
  vertical-align: top;
  margin: 5px;
  width: 250px;
  height: auto;
  position: relative;
}

.image-preview-edit {
  width:inherit;
  height:inherit;
}

.btn-delete {
  position: absolute;
  text-align:center;
  right: 10px;
  top: 10px;
  background:#555;
  width:44px;
  height:44px;
  border-radius:50%;
  opacity:0;
}

.btn-delete span {
  font-size: 30px;
  color:#ffffff;
  user-select:none;
}

.image-wrapper:hover .image-preview-edit{
  opacity:0.4;
}

.image-wrapper:hover .btn-delete {
  opacity:1;
  /* transform:scale(1); */
}

input[type="text"], textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  font-size: 14px;
  padding: 4px;
}
</style>