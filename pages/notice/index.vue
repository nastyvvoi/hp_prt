<template>
    <div class="container">
        <div class="title">
            <p>
                공지사항 | Notice
            </p>
            <hr/>
        </div>
        <div class="content_area">
            <!-- <select name="제목">
                <option value="1">제목</option>
                <option value="2">내용</option>
            </select> -->
            <div class="board_area"
              @create="onCreate"
              @update="onUpdate"
              @delete="onDelete">
                <table class="board_content">
                    <thead>
                        <tr>
                            <th scope="cols">번호</th>
                            <th scope="cols" class="title">제목</th>
                            <th scope="cols" class="date">작성일</th>
                            <th scope="cols" class="writer">작성자</th>
                            <!-- <th scope="cols">조회</th> -->
                        </tr>
                    </thead>
                    <tbody v-if="this.totalDataCount">
                        <tr v-for="(item, index) in this.pagingData" :key="index">
                            <th scope="row">{{item.num}}</th>
                            <td class="title"><span @click="onClickNotice">{{item.title}}</span></td>
                            <td class="date">{{item.date}}</td>
                            <td class="writer">{{item.writer}}</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <!-- <th scope="row"></th>
                            <td class="title">공지사항이 없습니다.</td>
                            <td class="date"></td>
                            <td class="writer"></td> -->
                            <td colspan="4">공지사항이 없습니다.</td>
                        </tr>
                    </tbody>
                </table>
                <!-- <pagination
                  :rowCount="rowCount"
                  :totalDataCount="totalDataCount"
                  :pageCount="pageCount"
                  @get-current-page="getCurrentPage"
                /> -->
                <div class="pagination">
                  <a v-if="isPrev" @click="goPrev">&lt;</a>
                  <a v-for="p in pages" :key="p" :class="[p == currentPage ? 'active' : '']" @click="onClickPage(p)">{{p}}</a>
                  <a v-if="this.totalDataCount" @click="goNext">&gt;</a>
                </div>
            </div>
        </div>
        <nuxt-child/>
    </div>
</template>

<script>
import pagination from '~/components/Pagination.vue';

export default {
  data() {
    return {
      rowCount: 10,
      totalDataCount: 0,
      currentPage: 1,
      dataList: [],
      pagingData: [],
      totalPage: 0,
      startPage: 0,
      endPage: 0,
      pageCount: 10,
      // isPrev: false,
      // isNext: false,
    }
  },
  components: {
    pagination
  },
  computed: {
    pages() {
      var arr = new Array(this.endPage - this.startPage + 1).fill(this.startPage).map((n, i) => n + i)
      return arr
    },
    isPrev() {
      if(this.currentPage - this.pageCount > 0) return true
      return false
    },
    // isNext() {
    //   if(this.currentPage + this.pageCount > this.totalPage) return false
    //   return true
    // }
  },
  watch: {
    totalDataCount() {
      this.currentPage = 1
      this.totalPage = parseInt(this.totalDataCount / this.rowCount)
      if(this.totalDataCount % this.rowCount > 0)
        this.totalPage++;
      this.setPageIndex()
    },
    rowCount() {
      this.startPage = 1
      this.currentPage = 1
      this.totalPage = parseInt(this.totalDataCount / this.rowCount)
      if(this.totalDataCount % this.rowCount > 0)
        this.totalPage++;
      this.endPage = this.startPage + this.pageCount - 1
      if(this.endPage > this.totalPage)
        this.endPage = this.totalPage
    },
    currentPage(val) {
      if(val != 1)
        this.currentPage = val
      else
        this.currentPage = 1
    }
  },
  created() {
    this.rowCount = 10
    // this.totalDataCount = 161
    // for(var i = 0; i < this.totalDataCount; i++){
    //   var dataSet = {
    //     num: i,
    //     title: "글 제목 test test" + i,
    //     content: "글 내용 ~~~" + i,
    //     date: this.$moment(new Date()).format('YYYY-MM-DD'),
    //     writer: "관리자"
    //   }
    //   this.dataList.unshift(dataSet)
    // }
    this.paging()
    this.setPageIndex()
  },
  methods: {
    setPageIndex(){
      this.startPage = ((this.currentPage - 1) / this.pageCount) * this.pageCount + 1
      this.endPage = this.startPage + this.pageCount - 1
      if(this.endPage > this.totalPage)
        this.endPage = this.totalPage
    },
    onClickPage(pageNum) {
      this.currentPage = pageNum
      this.paging()
    },
    goPrev() {
      // 한 페이지씩 이동
      // if(this.currentPage != this.startPage)
      //   this.currentPage -= 1
      // if(this.startPage == this.currentPage && this.startPage > 1){
      //   this.currentPage -= 1
      //   this.startPage -= this.pageCount
      //   this.setPageIndex()
      // }
      this.currentPage = this.startPage - this.pageCount 
      if(this.currentPage < 1)
        this.currentPage = 1
      this.setPageIndex()
      this.paging()
    },
    goNext() {
      // 한 페이지씩 이동
      // if(this.endPage != this.currentPage)
      //   this.currentPage += 1
      // if(this.endPage == this.currentPage && this.endPage < this.totalPage){
      //   this.currentPage += 1
      //   this.startPage += this.pageCount
      //   this.setPageIndex()
      // }
      if(this.currentPage + this.pageCount < this.totalPage){
        this.currentPage = this.pageCount + this.startPage
        this.setPageIndex()
      } else if((this.currentPage + this.pageCount >= this.totalPage) && (this.endPage < this.totalPage)){
        this.currentPage = this.endPage + 1
        this.setPageIndex()
      }
      this.paging()
    },
    paging() {
      const start = (this.currentPage - 1) * this.rowCount
      const end = start + Number(this.rowCount)
      this.pagingData = this.dataList.slice(start, end)
      this.pagingData.sort((a, b) => {
        return a.num > b.num ? -1 : a.num < b.num ? 1 : 0
      })
    },
    onClickNotice() {
      this.$router.push('/notice/board')
      this.$store.commit('setSecondRoute', '게시판')
    },
    getCurrentPage(val){
      console.log("getCurrentPage", val)
      this.currentPage = val
    },
    onCreate() {
      console.log("onCreate")
    },
    onUpdate() {
      console.log("onUpdate")
    },
    onDelete() {
      console.log("onDelete")
    }
  }
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

.board_area {
    padding-top : 20px;
    min-height: 500px;
    text-align: center;
}

table.board_content {
  border-collapse: collapse;
  text-align: center;
  line-height: 1.5;
  /* border: 1px solid #ccc; */
  margin: auto;
}
table.board_content thead {
  border-bottom: 1px solid #ccc;
  border-top: 2px solid #5c5c5c;
  background: #f2f2f2;
}

table.board_content thead th.title{
  width: 650px;
  padding: 10px;
  vertical-align: top;
  text-align: left;
  font-size: 16px;
}
table.board_content thead th.date{
  width: 200px;
  padding: 10px;
  vertical-align: top;
  font-size: 16px;
}
table.board_content thead th.writer{
  width: 120px;
  padding: 10px;
  vertical-align: top;
  font-size: 16px;
}

table.board_content thead th {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
}
table.board_content tbody th {
  width: 100px;
  padding: 10px;
  font-weight: bold;
  /* vertical-align: top; */
  border-bottom: 1px solid #ccc;
}
table.board_content td {
  padding: 10px;
  vertical-align: top;
}

table.board_content tr {
  border-bottom: 1px solid #ccc;
}

table.board_content td.title {
  width: 650px;
  padding: 10px;
  vertical-align: top;
  text-align: left;
  font-size: 16px;
}

table.board_content td.title span:hover {
    cursor: pointer;
    text-decoration: underline;
}

table.board_content td.date {
  width: 200px;
  padding: 10px;
  vertical-align: top;
  font-size: 16px;
}

table.board_content td.writer {
  width: 120px;
  padding: 10px;
  vertical-align: top;
  font-size: 16px;
}


.pagination {
  display: inline-block !important;
  margin-top: 20px;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  margin: 0 4px;
}

.pagination a.active {
  background-color: #153d73;
  color: white !important;
  border: 1px solid #153d73;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>

