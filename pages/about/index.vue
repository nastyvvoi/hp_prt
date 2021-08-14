<template>
    <div class="container">
        <div class="pc-size">
        <div class="title">
            <p>
                회사소개 | About Company
            </p>
            <hr/>
        </div>
        <div class="sub_title">
            <br>
            <p>
                 · 인사말
            </p>
            <br>
            <p>
                안녕하십니까
            </p>
            <p>
                (주)일신 홈페이지를 방문해주신 여러분을
            </p>
            <p>
                진심으로 환영합니다!
            </p>
        </div>
        <div class="about_detail">
            <p>
                저희 (주) 일신은 2013년 창업이래 품질 좋은 제품을 공급하려고 끊임없는 노력을 해왔습니다.
            </p>
            <p>
                개척정신 · 고객만족 · 기술중시의 경영 이념으로 고객, 구성원의 공동 번영을 추구하고 있으며
            </p>
            <p>
                보다 더 향상된 품질의 Condenser를 생산하기 위해 
            </p>
            <p>
                인화, 성실, 신념, 사훈 아래 전 직원이 일심동체가 되어
            </p>
            <p>
                고품질의 제품을 합리적인 가격으로 공급하려고 더욱 더 노력하고 있습니다.
            </p>
            <p>
                저희 제품을 이용해주시는 고객님들께 무한한 감사드리며 앞으로도 많은 관심과 질책, 성원 부탁드립니다.
            </p>
        </div>
        <div class="rep">
            <br>
            <p style="vertical-align:middle">
                <span style="font-size:20px">대표이사</span>&emsp; <span style="font-size:26px">배  종  호</span>
            </p>
        </div>
        </div>
        <nuxt-child/>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
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
}

.sub_title {
    font-size: 26px;
    font-weight: 500;
}

.about_detail {
    font-size: 18px;
}

.rep {
    text-align: right;
    padding-right: 300px;
}

.hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid #5c5c5c;
}
</style>
