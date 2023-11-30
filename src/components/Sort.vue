<template>
    <div class="sort">
        <div class="sort_top">
             <ul class="sort_list">
                <li class="list_item" @click="Tanlangan">Рекомендуемые</li>
                <li class="list_item" @click="Tanlangan">Новинки</li>
                <li class="list_item" @click="Tanlangan">Самые просматриваемые</li>
                <li class="list_item" @click="Tanlangan">Скидки</li>
             </ul>
            <div class="sort_right">Смотреть весь каталог</div>
        </div>
        <div class="sort_foter">
            <carousel v-if="tanlangan" />
            <carousel v-if="yangi" />
            <carousel v-if="korilgan" />
            <carousel v-if="skidka"/>
        </div>
    </div>
</template>
<script setup>
import Carousel from "./Carousel.vue";
import {ref} from "vue";
const tanlangan = ref(true);
const yangi = ref(false);
const korilgan = ref(false);
const skidka = ref(false);
const Tanlangan = (e) => {
    let list = document.querySelectorAll('.list_item');
    if(!e.target.classList.contains("active")){
        list.forEach(item => {
            if(item === e.target){
                item.classList.add("active")
            }else{
                item.classList.remove("active")
            }
        })
    }
    else{
        e.target.classList.remove("active")
    }
}
const Shopping = (value) => {
    switch(value){
        case "Рекомендуемые":
            tanlangan.value = !tanlangan.value; break;
        case "Новинки":
            yangi.value = !yangi.value; break;
        case "Самые просматриваемые":
            korilgan.value = !korilgan.value; break;
        default:
           skidka.value = !skidka.value; 
    }
}

</script>
<style scoped>
.active{
    color: #0867D6;
    border-bottom: 2px solid blue;
}
.sort{
    width: 100%;
    /* border: 1px solid red; */
    background-color: #F7F8FB;
    /* margin: 20px 0px; */
}
.sort_top{
    width: 85%;
    /* height */
    display: flex;
    justify-content: space-around;
    /* border: 1px solid red; */
    margin: 0 auto;
    padding: 30px 0px;
}
.sort_top .sort_list{
    list-style: none;
    display: flex;
    width: 100%;
}
.sort_list li{
    padding: 0px 10px;
    font-size: 20px;
    font-family: sans-serif;
    cursor: pointer;
}
.sort_right{
    width: 200px;
    text-align: right;
    font-family: sans-serif;
}
.sort_top .tabs{
    width: 95%;
    display: flex;
    align-items: center;
    border: 1px solid red;
}
@media(max-width: 360px){
.active{
    color: #0867D6;
    border-bottom: 2px solid blue;
}
.sort{
    width: 100%;
    /* border: 1px solid red; */
    background-color: #F7F8FB;
    /* margin: 20px 0px; */
}
.sort_top{
    width: 100%;
    /* height */
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 20px 0px;
}
.sort_top .sort_list{
    overflow-x: scroll;
    list-style: none;
    display: flex;
     /* overflow-x: hidden; */
    width: 350px;
}
.sort_list li{
    /* width: 250px; */
    /* border: 1px solid red; */
    padding: 0px 20px;
    font-size: 12px;
    font-family: sans-serif;
    cursor: pointer;
}
.sort_right{
    display: none;
}
.sort_top .tabs{
    width: 95%;
    display: flex;
    align-items: center;
    border: 1px solid red;
}
}

@media(max-width: 412px){
.active{
    color: #0867D6;
    border-bottom: 2px solid blue;
}
.sort{
    width: 100%;
    /* min-width: 400px;
    max-width: 100%; */
    /* border: 1px solid red; */
    background-color: #F7F8FB;
    /* margin: 20px 0px; */
}
.sort_top{
    width: 100%;
    /* height */
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 20px 0px;
}
.sort_top .sort_list{
    overflow-x: scroll;
    list-style: none;
    display: inline-flex;
     /* overflow-x: hidden; */
    width: 100%;
}
.sort_list li{
    /* width: 50px !important; */
    /* border: 1px solid red; */
    padding: 0px 30px;
    font-size: 12px;
    font-family: sans-serif;
    cursor: pointer;
}
.sort_right{
    display: none;
}
.sort_top .tabs{
    width: 95%;
    display: flex;
    align-items: center;
    border: 1px solid red;
}
}
</style>