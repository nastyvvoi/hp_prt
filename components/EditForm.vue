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
                        파일올리기
                    </th>
                    <td>
                        <input type="file" ref="fileInput" @change="uploadFiles" multiple/>
                    </td>
                </tr>
                <tr>
                    <th>
                        첨부파일
                    </th>
                    <td>
                        <div class="inputWrap" v-for="item in fileList" :key="item.name">
                            <input type="search" placeholder="" :value="item.name" readonly/>
                            <button class="btnClear" @click="deleteItem(item)">x</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <button v-if="isNew" @click="onClickCreate" class="button-board-list">등록</button>
        <button v-if="isNew" @click="onClickCancel" class="button-board-list">취소</button>
        <button v-if="!isNew" @click="onClickUpdate" class="button-board-list">수정</button>
        <button v-if="!isNew" @click="onClickDelete" class="button-board-list">삭제</button>
        <button v-if="!isNew" @click="onClickBack" class="button-board-list">목록</button>
    </div>
</template>

<script>
import { DB } from "~/services/fireinit.js";
import { firestorage } from "~/services/fireinit.js";

export default {
    data() {
        return {
            title: '',
            content: '',
            params: '',
            isNew: false,
            entityData: {},
            currentKey: 0,
            currentDocumentId: '',
            isAdmin: '',
            isUpdated: false,
            fileList: [],
            deleteFileList: [],
        }
    },
    // props: ['entityData'],
    async created() {
        this.params = this.$route.params.id
        this.currentDocumentId = ''
        this.deleteFileList = []
        if(this.params == 'new')
            this.isNew = true
        else 
            this.isNew = false
        
        if(!this.isNew) {
            await DB.collection('ilshincorp13').doc('noticeBoard').collection('notice').where("key_num", "==", Number(this.params)).get()
            .then(result => {
                result.forEach(doc => {
                    this.entityData = doc.data()
                    this.currentDocumentId = doc.id
                })
            })
            this.title = this.entityData.title
            this.content = this.entityData.content
            if(this.entityData.fileList.length > 0)
                this.fileList = this.entityData.fileList.map(el => {return {name:el}})
        }
        await DB.collection('ilshincorp13').doc('noticeBoard').collection('notice').orderBy("key_num", "desc").limit(1).get()
        .then(result => {
            result.forEach(doc => {
                var data = doc.data()
                this.currentKey = data.key_num
            })
        })
        await DB.collection('ilshincorp13').doc('admin').get()
        .then(result => {
            this.isAdmin = result.data().key_val
        })
    },
    computed: {
        selectFileList() {
            if(!this.fileList) return false
            if(this.fileList.length == 0) return false
            return true
        }
    },
    watch: {
        selectFileList(val) {
            if(!val) this.$refs.fileInput.value = ""
        }
    },
    methods: {
        async onClickCreate() {
            var isAdmin = prompt("관리자 비밀번호를 입력하세요.")
            if(isAdmin != this.isAdmin) return alert("비밀번호가 틀렸습니다. 확인 후 다시 시도해주세요.") 
            var con_test = confirm("공지사항을 등록하시겠습니까?")
            if(con_test == true){
                var fileList = this.fileList.map(el => {
                    return el.name
                })
                if(!this.onClickFileUpload(this.fileList))
                    return alert("공지사항 등록에 실패했습니다.  IT관리자에게 문의하세요. ERROR CODE: A001")
                var newData = {
                    title: this.title,
                    content: this.content,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    key_num: Number(this.currentKey) + 1,
                    writer: "관리자",
                    fileList: fileList,
                }
                await DB.collection("ilshincorp13").doc("noticeBoard").collection("notice")
                .add(newData)
                .then(res => {
                    alert('공지사항이 등록되었습니다.')
                })
                .catch(err => {
                    alert('공지사항 등록에 실패하였습니다. IT관리자에게 문의하세요. ERROR CODE: A002')
                })
                this.$router.push('/notice/edit')
                this.$store.commit('setSecondRoute', '게시판')
            }
        },
        onClickCancel() {
            var con_test = confirm("글 작성을 취소하시겠습니까? 작성중인 모든 데이터는 삭제됩니다.");
            if(con_test == true){
                this.$router.push('/notice/edit')
                this.$store.commit('setSecondRoute', '게시판')
            }
        },
        async onClickUpdate() {
            var isAdmin = prompt("관리자 비밀번호를 입력하세요.")
            if(isAdmin != this.isAdmin) return alert("비밀번호가 틀렸습니다. 확인 후 다시 시도해주세요.") 
            var con_test = confirm("공지사항을 수정하시겠습니까?");
            if(con_test == true){
                var fileList = this.fileList.map(el => {
                    return el.name
                })
                if(!this.updateAttachedFile())
                    return alert("공지사항 수정에 실패했습니다.  IT관리자에게 문의하세요. ERROR CODE: B001")
                var updateData = {
                    title: this.title,
                    content: this.content,
                    createdAt: this.entityData.createdAt,
                    updatedAt: new Date(),
                    key_num: Number(this.entityData.key_num),
                    writer: this.entityData.writer,
                    fileList: fileList,
                }
                await DB.collection("ilshincorp13").doc("noticeBoard").collection("notice").doc(this.currentDocumentId)
                .update(updateData)
                .then(res => {
                    alert('공지사항이 수정되었습니다.')
                })
                .catch(err => {
                    alert('공지사항 수정에 실패하였습니다. IT관리자에게 문의하세요. ERROR CODE: B002')
                })
                this.$router.push('/notice/edit')
                this.$store.commit('setSecondRoute', '게시판')
            }
        },
        async onClickDelete() {
            var isAdmin = prompt("관리자 비밀번호를 입력하세요.")
            if(isAdmin != this.isAdmin) return alert("비밀번호가 틀렸습니다. 확인 후 다시 시도해주세요.") 
            var con_test = confirm("공지사항을 삭제하시겠습니까? 모든 데이터는 삭제됩니다.");
            if(con_test == true){
                if(!this.deleteAttachedFile(this.fileList))
                    return alert("공지사항 삭제에 실패하였습니다. IT관리자에게 문의하세요. ERROCODE: D001")
                await DB.collection("ilshincorp13").doc("noticeBoard").collection("notice").doc(this.currentDocumentId)
                .delete()
                .then(res => {
                    alert('공지사항이 삭제되었습니다.')
                })
                .catch(err => {
                    alert('공지사항 삭제에 실패하였습니다. IT관리자에게 문의하세요. ERROCODE: D002')
                })
                this.$router.push('/notice/edit')
                this.$store.commit('setSecondRoute', '게시판')
            }
        },
        onClickBack() {
            var con_test = confirm("공지사항 수정을 취소하시겠습니까? 수정중인 데이터는 저장되지 않습니다.");
            if(con_test == true){
                this.$router.push('/notice/edit')
                this.$store.commit('setSecondRoute', '게시판')
            }
        },
        uploadFiles(e) {
            if(e == "") return
            var fileList = e.target.files
            var _this = this
            Array.from(fileList).forEach(item => {
                var reader = new FileReader()
                reader.onload = function(e) {
                    var data = {
                        id: item.name + Date.now(),
                        name: item.name,
                        url: e.target.result,
                        file: item
                    }
                    _this.fileList.push(data)
                }
                reader.readAsDataURL(item)
            })
        },
        deleteItem(data) {
            this.fileList = this.fileList.filter(item => {
                if(item.name == data.name) this.deleteFileList.push(data)
                return item.name != data.name
            })
        },
        upload(file) {
            this.fileName = file.name
            this.uploading = true
            this.uploadTask = firestorage.ref(file.name).put(file)
        },
        async onClickFileUpload(fileArr) {
            firestorage.ref().constructor.prototype.putFiles = function(fileArr) { 
                var ref = this;
                return Promise.all(fileArr.map(function(file) {
                    return ref.child(file.name).put(file);
                }))
            }

            await firestorage.ref("attached/").putFiles(fileArr)
                .then(function(metadatas) {
                    return true
                }).catch(function(error) {
                    return false
                })
        },
        async updateAttachedFile() {
            var uploadFiles = this.fileList
            uploadFiles = uploadFiles.filter(el => {
                return el.id != null
            })
            var deleteFiles = this.deleteFileList
            deleteFiles = deleteFiles.filter(el => {
                return !el.id
            })
            await this.onClickFileUpload(uploadFiles)
            await this.deleteAttachedFile(deleteFiles)
        },
        async deleteAttachedFile(fileArr) {
            firestorage.ref("attached/").constructor.prototype.deleteFiles = function(fileArr) { 
                var ref = this;
                return Promise.all(fileArr.map(function(file) {
                    var url = ref.child(file.name).delete()
                }))
            }

            await firestorage.ref("attached/").deleteFiles(fileArr)
                .then(function(result) {
                    return true
                }).catch(function(error) {
                    return false
                })
        },
        async getImageUrl() {
            var _this = this
            
            firestorage.ref("attached/").constructor.prototype.getImageUrls = function(fileArr) { 
                var ref = this;
                return Promise.all(fileArr.map(async function(file) {
                    var url = await ref.child(file.name).getDownloadURL().then(result => {
                        var xhr = new XMLHttpRequest();
                        xhr.responseType = 'blob';
                            xhr.onload = function(event) {
                            var blob = xhr.response;
                        }
                        xhr.open('GET', result);
                        xhr.send();
                        return result
                    })
                    return { name: file.name, url: url }
                }))
            }

            await firestorage.ref("attached/").getImageUrls(this.attachedImages)
                .then(function(result) {
                    _this.attachedImages = result
                    _this.$forceUpdate()
                }).catch(function(error) {
                    console.log(error)
                })
        },
        // async onClickFileDownload() {
        //     var fileRef = firestorage.ref("attached/" + "robots.txt")
        //     fileRef.getDownloadURL()
        //     .then(url => {
        //         const xhr = new XMLHttpRequest();
        //         xhr.responseType = 'blob';
        //         xhr.onload = function () {
        //             const blob = xhr.response;
        //             const link = document.createElement('a');
        //             link.href = URL.createObjectURL(blob);
        //             link.download = fileRef.name.split('.')[0]
        //             link.click();
        //             URL.revokeObjectURL(link.href);
        //         }
        //         xhr.open('GET', url);
        //         xhr.send();
        //     })
        //     .catch(error => {
        //     // Handle any errors
        //     console.log(error);
        //     })
        // }
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
  width:36px;
  height:36px;
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

input::-ms-clear,
input::-ms-reveal{
	display:none;width:0;height:0;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
	display:none;
}

.inputWrap {
    position: relative;
    height: 30px;
    width: 240px;
    display: block;
    padding-left: 6px;
 }
  
.inputWrap input {
    padding-right: 30px;
    height: inherit;
    outline: none;
}

.inputWrap .btnClear {
    position: absolute;
    top: 3px;
    right: 0;
    width: 24px;
    height: 24px;
    color: #fff;
    background-color: #a6a6a6;
    border-radius: 50%;
    border: none;
    outline: none;
}
</style>