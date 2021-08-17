<template>
    <div class="wrapper_container">
        <div class="title">
            <p>
                공지사항 | Notice
            </p>
            <hr/>
        </div>
        <div class="board_area">
            <news-form :entityData="entityData"/>
        </div>
    </div>
</template>

<script>
import newsForm from '~/components/NewsForm.vue';
import { DB } from "~/services/fireinit.js";
import { firestorage } from "~/services/fireinit.js";

export default {
    data() {
        return {
            param: null,
            entityData: {},
        }
    },
    components: {
        newsForm,
    },
    async created() {
        var params = this.$route.params
        console.log(params.id)
        await DB.collection('ilshincorp13').doc('noticeBoard').collection('notice').where("key_num", "==", Number(params.id)).get()
            .then(result => {
                result.forEach(doc => {
                    this.entityData = doc.data()
                })
            });
            console.log("@@@@", this.entityData)
    }
}
</script>

<style scoped>

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

