<template>
    <div class="container">
        <div class="title">
            <p>
                회사소개 | About Company
            </p>
            <hr/>
        </div>
        <div class="sub_title">
            <br>
            <p>
                 · 조직도
            </p>
        </div>
        <div class="organization">
            <img class="organization_img" src="~/assets/image/organization.jpeg"/>
        </div>
    </div>
</template>

<script>

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

.organization_img {
    max-width: 980px;
    width: 100%;
    height: auto;
}

.hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid #5c5c5c;
}
</style>
