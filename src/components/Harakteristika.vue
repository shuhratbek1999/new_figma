<template>
    <div class="harakteristika">
         <div class="harakter_list">
             <div class="list_item opisaniya" :class="{active: tabs == 2}" @click="Opisaniya">Описание</div>
             <div class="list_item harakter" :class="{active: tabs == 1}" @click="Opisaniya">Характеристики</div>
             <div class="list_item komplet" :class="{active: tabs == 3}" @click="Opisaniya">Комплектация</div>
             <div class="list_item otvet" :class="{active: tabs == 4}" @click="Opisaniya">Отзывы</div>
         </div>
         <div class="harakter_info">
             <div v-if="tabs == 1" class="info_item">
                <h4>Технические характеристики</h4>
                <div class="information" v-for="(item, index) in Information" :key="index">
                 <div class="info_name">{{item.name}}</div>
                 <div class="info">{{item.about}}</div>
                </div>
             </div>
             <div v-else-if="tabs == 2" class="info_item">
                <h4>Описание</h4>
                <div class="information" v-for="(item, index) in Opisaniyalar" :key="index">
                 <div class="info_name">{{item.name}}</div>
                 <div class="info">{{item.about}}</div>
                </div>
             </div>
             <div v-else-if="tabs == 3" class="info_item">hello</div>
             <div v-else class="info_item">good</div>
         </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const Information = ref([
    {id: 1, name: "Диаметр объектива, мм", about: "50"},
    {id: 2, name: "Тип призмы", about: "porro"},
    {id: 1, name: "Просветляющее покрытие линз", about: "Многослойное"},
    {id: 1, name: "Увеличение, крат", about: "3 года"},
    {id: 1, name: "Минимальная дистанция фокусировки, м", about: "9"},
    {id: 1, name: "Диаметр выходного зрачка, мм", about: "3"},
    {id: 1, name: "Поле зрения, м/1000 м", about: "3.2"},
    {id: 1, name: "Поле зрения, градусы", about: "56"},
    {id: 1, name: "Покрытие корпуса", about: "алюминиевый сплав"},
    {id: 1, name: "Материал корпуса", about: "искусственная кожа"}
])
const Opisaniyalar = ref([
    {id: 1, name: "Диаметр объектива, мм", about: "80"},
    {id: 2, name: "Тип призмы", about: "morro"},
    {id: 1, name: "Просветляющее покрытие линз", about: "гослойное"},
    {id: 1, name: "Увеличение, крат", about: "2 года"},
    {id: 1, name: "Минимальная дистанция фокусировки, м", about: "9"},
    {id: 1, name: "Диаметр выходного зрачка, мм", about: "3"},
    {id: 1, name: "Поле зрения, м/1000 м", about: "3.2"},
    {id: 1, name: "Поле зрения, градусы", about: "56"},
    {id: 1, name: "Покрытие корпуса", about: "алюминиевый сплав"},
    {id: 1, name: "Материал корпуса", about: "искусственная кожа"}
])
let tabs = ref(1);
const Opisaniya = (e) => {
    let harakter = e.target.classList.contains('harakter'),
    opisaniya = e.target.classList.contains('opisaniya'),
    komplet = e.target.classList.contains('komplet'),
    otvet = e.target.classList.contains('otvet')
    if(harakter){
        tabs.value = 1;
    }
    else if(opisaniya){
        tabs.value = 2;
    }
    else if(komplet){
        tabs.value = 3;
    }
    else{
        tabs.value = 4;
    }
}
</script>

<style scoped>
.active{
    color: #0867D6 !important;
    border-bottom: 2px solid blue;
}
.harakteristika{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.harakteristika .harakter_list, .harakter_info{
    width: 85%;
    height: 400px;
    margin-top: 20px;
}
.harakteristika .harakter_list{
    display: flex;
    align-items: center;
    height: 70px;
    background-color: #F7F8FB;
}
.harakter_list .list_item{
    color: #15191C;
    cursor: pointer;
    font-weight: 500;
    padding: 0px 15px;
    font-size:18px;
    height: 50%;
}
/* .harakter_info{
    width: 750px;
    height: 400px;
} */
.harakter_info .information .info_name, .harakter_info .information .info{
    width: 50%;
    /* border: 1px solid red; */
    padding: 10px;
}
.harakter_info .info_item{
    display: flex;
    flex-direction: column;
    width: 750px;
}
.info_item .information{
    display: flex;
}
.info_item h4{
    margin: 15px 0px;
    font-size: 24px;
    font-weight: 700;
}
.harakter_info .info_item .information:nth-child(2n + 2){
    background-color: #F7F8FB;
}
.n-tabs .n-tabs-wrapper{
    background-color: black !important;
}

@media(max-width: 360px){
.harakteristika{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.harakteristika .harakter_list, .harakter_info{
    width: 100%;
    height: 400px;
    margin-top: 20px;
}
.harakteristika .harakter_list{
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #F7F8FB;
    overflow-x: scroll;
}
.harakter_list .list_item{
    color: #15191C;
    cursor: pointer;
    font-weight: 500;
    padding: 0px 15px;
    font-size: 12px;
}
.harakter_info{
     width: 95% !important;
     margin: 0 auto;
}
/* .harakter_info .information{
    border: 1px solid red;
} */
.harakter_info .information .info_name, .harakter_info .information .info{
    width: 50%;
    /* border: 1px solid red; */
    padding: 10px;
    font-size: 10px;
}
.harakter_info .info_item{
    display: flex;
    flex-direction: column;
    width: 340px;
}
.info_item .information{
    display: flex;
}
.info_item h4{
    margin: 15px 0px;
    font-size: 14px;
    font-weight: 700;
}
.harakter_info .info_item .information:nth-child(2n + 2){
    background-color: #F7F8FB;
}
.n-tabs .n-tabs-wrapper{
    background-color: black !important;
}
}

@media(max-width: 412px){
.harakteristika{
    width: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.harakteristika .harakter_list, .harakter_info{
    width: 100%;
    height: 400px;
    margin-top: 20px;
}
.harakteristika .harakter_list{
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #F7F8FB;
    overflow-x: scroll;
}
.harakter_list .list_item{
    color: #15191C;
    cursor: pointer;
    font-weight: 500;
    padding: 0px 15px;
    font-size: 12px;
}
.harakter_info{
     width: 95% !important;
     margin: 0 auto;
}
/* .harakter_info .information{
    border: 1px solid red;
} */
.harakter_info .information .info_name, .harakter_info .information .info{
    width: 50%;
    /* border: 1px solid red; */
    padding: 10px;
    font-size: 10px;
}
.harakter_info .info_item{
    display: flex;
    flex-direction: column;
    width: 99%;
}
.info_item .information{
    display: flex;
}
.info_item h4{
    margin: 15px 0px;
    font-size: 14px;
    font-weight: 700;
}
.harakter_info .info_item .information:nth-child(2n + 2){
    background-color: #F7F8FB;
}
.n-tabs .n-tabs-wrapper{
    background-color: black !important;
}
}
</style>