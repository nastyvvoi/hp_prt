<template>
  <div class="pagination">
    <a @click="goStart">&laquo;</a>
    <a @click="goPrev">&lt;</a>
    <a v-for="p in pages" :key="p" :class="[p == currentPage ? 'active' : '']" @click="onClickPage(p)">{{p}}</a>
    <a @click="goNext">&gt;</a>
    <a @click="goEnd">&raquo;</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPage: 0,
      startPage: 0,
      endPage: 0,
      currentPage: 1
    }
  },
  props: {
    rowCount: { default: 0 },
    pageCount: { default: 0 },
    totalDataCount: { default: 0},
    routeParamOption: { default: false }
  },
  computed: {
    pages() {
      return new Array(this.endPage - this.startPage + 1).fill(this.startPage).map((n, i) => n + i)
    }
  },
  watch: {
    totalDataCount() {
      console.log("totalDataCount")
      this.currentPage = 1
      this.totalPage = parseInt(this.totalDataCount / this.rowCount)
      if(this.totalDataCount % this.rowCount > 0)
        this.totalPage++;
      this.setPageIndex()
    },
    rowCount() {
      this.startPage = 1
      this.currentPage = 1
      console.log("rowCount")
      this.totalPage = parseInt(this.totalDataCount / this.rowCount)
      if(this.totalDataCount % this.rowCount > 0)
        this.totalPage++;
      this.endPage = this.startPage + this.pageCount - 1
      if(this.endPage > this.totalPage)
        this.endPage = this.totalPage
    },
    currentPage(val) {
      if(val != 1)
        this.$emit('get-current-page', this.currentPage)
      else
        this.$emit('get-current-page', 1)
      if(!this.routeParamOption) return
      if(val != 1)
        this.$router.push({query:{page:this.currentPage}})
      else
        this.$router.push({query:{}})
    }
  },
  created() {
    this.setPageIndex()
  },
  methods: {
    setPageIndex(){
      console.log("setPageIndex")
      this.startPage = ((this.currentPage - 1) / this.pageCount) * this.pageCount + 1
      this.endPage = this.startPage + this.pageCount - 1
      if(this.endPage > this.totalPage)
        this.endPage = this.totalPage
    },
    onClickPage(pageNum) {
      this.currentPage = pageNum
    },
    goStart() {
      this.currentPage = 1
      this.setPageIndex()
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
    },
    goEnd() {
      this.currentPage = this.totalPage
      this.startPage = parseInt(this.totalPage / this.pageCount) * this.pageCount + 1
      this.endPage = this.totalPage
      // this.setPageIndex()
    },
  }
}
</script>

<style>
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
