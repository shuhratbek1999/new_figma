<template>
    <div class="sliders">
        <div class="sliders_left">
           <n-carousel autoplay>
            <img
            class="carousel-img"
            src="../assets/Баннер.png"
            >
            <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
            >
            <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
            >
            <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            >
        </n-carousel>
        </div>
        <div class="sliders_right">
            <n-carousel autoplay>
            <img
            class="carousel-img"
            src="../assets/1.png"
            >
            <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
            >
            <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
            >
            <img
            class="carousel-img"
            src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            >
        </n-carousel>
        </div>
    </div>
</template>

<style scoped>
.sliders{
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin: 0px 20px; */
    /* border: 2px solid red; */
}
.sliders .sliders_left{
    width: 59%;
    margin-right: 30px;
    border-radius: 10px;
    /* border: 2px solid red; */
}
.sliders .sliders_right{
    margin-left: 30px;
    width: calc(90% - 70%);
    /* border: 2px solid red; */
}
.sliders_left .carousel-img{
    border-radius: 10px;
    height: 400px;
    object-fit: cover;
    width: 100%;
}
.sliders_right .carousel-img{
    height: 400px;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
}
@media(max-width: 360px){
.sliders{
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    /* position: relative; */
}
.sliders .sliders_left{
    /* margin: 0 auto; */
    width: 90%;
    margin-right: 0px;
    border-radius: 10px;
    /* border: 2px solid red; */
}
.sliders .sliders_right{
    display: none;
}
.sliders_left .carousel-img{
    border-radius: 10px;
    height: 200px;
    object-fit: cover;
    width: 100%;
}
.sliders_right .carousel-img{
    height: 400px;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
}
}
@media(max-width: 412px){
.sliders{
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 2px solid red; */
    /* position: relative; */
}
.sliders .sliders_left{
    /* margin: 0 auto; */
    width: 90%;
    margin-right: 0px;
    border-radius: 10px;
    /* border: 2px solid red; */
}
.sliders .sliders_right{
    display: none;
}
.sliders_left .carousel-img{
    border-radius: 10px;
    height: 200px;
    object-fit: cover;
    width: 100%;
}
.sliders_right .carousel-img{
    height: 400px;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
}
}
</style>