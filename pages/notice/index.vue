<template>
    <div class="container">
        <div style="padding-left:140px">
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
                <div class="board_area">
                    <table class="board_content">
                        <thead>
                            <tr>
                                <th scope="cols">번호</th>
                                <th scope="cols">제목</th>
                                <th scope="cols">작성일</th>
                                <th scope="cols">작성자</th>
                                <!-- <th scope="cols">조회</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">3</th>
                                <td class="title"><span>샘플 데이터--- 게시글 제목 -------------</span></td>
                                <td class="date">test</td>
                                <td class="writer">test</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td class="title"><span>샘플 데이터</span></td>
                                <td class="date">test</td>
                                <td class="writer">test</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td class="title"><span>샘플 데이터</span></td>
                                <td class="date">test</td>
                                <td class="writer">test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <nuxt-child/>
        </div>
    </div>
</template>

<script>
export default {

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
}

table.board_content {
  border-collapse: collapse;
  text-align: center;
  line-height: 1.5;
  /* border: 1px solid #ccc; */
  margin: 20px 10px;
}
table.board_content thead {
  border-bottom: 1px solid #ccc;
  border-top: 2px solid #5c5c5c;
  background: #f2f2f2;
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

</style>

