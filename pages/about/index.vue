<template>
    <div class="container">
        <!-- <VerticalMenu/> -->
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
        </div>
        <div class="about_detail">
            <p>
                저희 (주) 일신은 2013년 창업이래 품질 좋은 제품을 공급하려고 끊임없는 노력을 해왔습니다.
            </p>
            <p>
                개척정신 - 고객만족 - 기술중시의 경영 이념으로 고객, 구성원의 공동 번영을 추구하고 있으며
            </p>
            <p>
                보다 더 향상된 품질의 Condenser를 생산하기 위해 인화, 성실, 신념, 사훈 아래 전 직원이 일심동체가 되어
            </p>
            <p>
                고품질의 제품을 합리적인 가격으로 공급하려고 더욱 더 노력하고 있습니다.
            </p>
            <p>
                저희 제품을 이용해주시는 고객분들에게 무한한 감사드리며 앞으로도 많은 관심과 질책, 성원 당부드립니다.
            </p>
        </div>
        <div class="history">
            <br>
            <p>
             · 회사 연혁
            </p>
        </div>
        <div class="history_detail">
            <p>
                2013.07 - 일신산업 설립
            </p>
            <p>
                2013.08 - 희성정밀 LG Aircon Condenser Ass'y 양산 납품(LG 2차 밴드 등록)
            </p>
            <p>
                2015.03 - 동양알루미늄(주) LG Aircon Condenser Ass'y 양산 납품
            </p>
            <p>
                2015.12 - (주)일신(1공장) 준공
            </p>
            <p>
                2016.01 - 자가공장(1공장)으로 이전
            </p>
            <p>
                2017.03 - LG 냉장고용 Condenser Ass'y 개발 착수 (스타리온 하나)
            </p>
            <p>
                2019.03 - LG 냉장고용 Condenser Ass'y 양산 납품 (스타리온 하나)
            </p>
            <p>
                2019.04 - 냉장고 콘덴서 라인 정설(1케파 12,000대 정설)
            </p>
            <p>
                2021.02 - 라인 정설(4,000대)
            </p>
            <p>
                2021.03 - (주)일신 본사(2공장) 확장 이전
            </p>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 핀밀러 Ass'y 1대, 조립기 1대 추가 도입
            </p>
            <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 브레이징로 8존 신규 1대 도입
            </p>
            <p>
                2021.05 - 기업부설연구소 설립
            </p>
        </div>
    </div>
</template>

<script>
import VerticalMenu from '../../components/VerticalMenu.vue';

export default {
  components: { VerticalMenu },

}

</script>

<style scoped>
.container {
    width: 100%;
    /* margin: auto; */
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

.history {
    font-size: 26px;
    font-weight: 500;
}

.history_detail {
    font-size: 18px;
    margin-bottom: 50px;
}

.hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid #5c5c5c;
}
</style>
