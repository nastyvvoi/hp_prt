<template>
    <div class="container">
        <div style="padding-left:140px">
            <div class="title">
                <p>
                    공지사항 | Notice
                </p>
                <hr/>
            </div>
            <div class="board_area">
                <news-form/>
            </div>
        </div>
    </div>
</template>

<script>
import newsForm from '~/components/NewsForm.vue';
import NewsForm from '../../../components/NewsForm.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        newsForm,
    }
}
        NewsForm
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
</style>

