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
                <select name="제목">
                    <option value="1">제목</option>
                    <option value="2">내용</option>
                </select>
            </div>
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
</style>

