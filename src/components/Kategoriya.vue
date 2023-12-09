<template>
    <div class="categoria">
            <slot name="katalog">
                <div class="categori_item">
                    <div class="item_1">
                        Популярные категории
                    </div>
                    <div class="item_2">
                        Перейти в каталог
                    </div>
                </div>
            </slot>
        <div class="categori_item">
            <div class="item_list" v-for="(item,index) in categoriya" :key="index">
                  <div class="img"><img :src="item.img" alt=""></div>
                  <div class="title">{{item.name}}</div>
                  <div class="count">{{item.count}}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import img1 from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/image179.png";
import img4 from "../assets/image180.png";
import img5 from "../assets/image182.png";
import img6 from "../assets/image183.png";
import img7 from "../assets/image184.png";
import img8 from "../assets/image207.png";
import img9 from "../assets/img.jpg";
import img10 from "../assets/img(2).png";
import {useRouter} from "vue-router";
const router = useRouter();
const categoriya = ref([
    {id: 1, img: img1, name: "Бинокли", count: "35 товаров"},
    {id: 1, img: img2, name: "Телескопы", count: "35 товаров"},
    {id: 1, img: img3, name: "Дальномеры", count: "35 товаров"},
    {id: 1, img: img4, name: "Зрительные трубы", count: "35 товаров"},
    {id: 1, img: img5, name: "Прицелы", count: "35 товаров"},
    {id: 1, img: img6, name: "Лупы", count: "35 товаров"},
    {id: 1, img: img7, name: "Монокуляры", count: "35 товаров"},
    {id: 1, img: img8, name: "Микроскопы", count: "35 товаров"},
    {id: 1, img: img9, name: "Тепловизоры", count: "35 товаров"},
    {id: 1, img: img10, name: "Цифровые камеры", count: "35 товаров"},
])
onMounted(() => {
    if(router.currentRoute.value.path === "/optika"){
         let list = document.querySelectorAll(".item_list");
        //  console.log(list)
         list.forEach(item => {
            item.classList.add("optiks")
         })
        //  list.classList.add("optiks")
    }
    // console.log(router.currentRoute.value.path, "router")
})
</script>

<style scoped>
.categoria{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
}
.optiks{
    background-color: white;
    border: none !important;
    margin: 5px;
    border-radius: 5px;
}
.categori_item{
    width: 85%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* border: 1px solid red; */
}
.item_list{
    border: 1px solid rgb(192, 189, 189);
    width: 219px;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    margin: 5px;
    /* padding: 25px 25px; */
}
.item_1, .item_2{
    text-align: left;
    width: 46%;
    /* border: 2px solid red; */
    margin: 40px 0px;
}
.item_1{
    font-weight: 600;
    font-size: 32px;
    font-family: sans-serif;
}
.item_2{
    font-family: sans-serif;
    text-align: right !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
}
@media(max-width: 360px){
.optiks{
    background-color: white;
    border: none !important;
    margin: 1px;
    border-radius: 5px;
}
.categoria{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.categori_item{
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* border: 1px solid red; */
}
.item_list{
    border: 1px solid rgb(192, 189, 189);
    width: 150px;
    height: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    margin: 4px;
    /* padding: 25px 25px; */
}
.item_1, .item_2{
    text-align: left;
    width: 46%;
    /* border: 2px solid red; */
    margin: 40px 0px;
}
.item_1{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif;
}
.item_2{
    font-family: sans-serif;
    text-align: right !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
    /* color: red; */
}
}

@media(max-width: 412px){
.optiks{
    background-color: white;
    border: none !important;
    margin: 1px;
    border-radius: 5px;
}
.categoria{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.categori_item{
    /* border: 1px solid red; */
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* border: 1px solid red; */
}
.item_list{
    border: 1px solid rgb(192, 189, 189);
    width: 45%;
    height: 160px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    margin: 4px;
    /* padding: 25px 25px; */
}
.item_1, .item_2{
    text-align: left;
    width: 46%;
    /* border: 2px solid red; */
    margin: 40px 0px;
}
.item_1{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif;
}
.item_2{
    font-family: sans-serif;
    text-align: right !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
    /* color: red; */
}
.item_list .img img{
    width: 60px;
}
}
</style>