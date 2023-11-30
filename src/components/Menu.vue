<template>
    <div class="menu">
        <div class="menu_item">
            <div class="menu_list">
                <n-icon size="20" class="gamburger" @click="active = true">
                <MenuOutlined />
                </n-icon>
                 <n-drawer class="drawer" v-model:show="active" :width="200" :placement="placement">
                    <n-drawer-content title="Menu">
                       <ul class="menus">
                        <li @click="Teleskop">Телескопы</li>
                        <li @click="Binokl">Бинокли</li>
                        <li @click="Lupa">Лупы</li>
                        <li>Микроскопы</li>
                        <li>Зрительные трубы</li>
                        <li>Монокуляры</li>
                        <li>Прицелы</li>
                        <li>Дальномеры</li>
                        <li>Тепловизоры</li>
                       </ul>
                    </n-drawer-content>
                </n-drawer>
                <img src="../assets/ban.png" alt="">
             </div>
              <div class="menu_list">
                <n-icon class="phone" size="20">
                <Phone />
                </n-icon>
                <n-icon @click="Searchs" class="phone" size="20">
                <Search28Regular />
                </n-icon>
             </div>
        </div>
        <div class="search_input" :class="{'search_card': inputSearch}">
            <n-input 
             placeholder="qidiruv" 
             clearable 
             v-model:value="search" 
             :onUpdate:value="productSearch"
             />
        </div>
    </div>
</template>

<script setup>
import {MenuOutlined} from "@vicons/material";
import {ref} from "vue";
import {Phone} from "@vicons/carbon";
import {Search28Regular} from "@vicons/fluent";
import {useRouter} from "vue-router";
import {SevimliProduct} from '../stores/Sevimli';
let searchInput = SevimliProduct();
const active = ref(false);
const placement = ref("left");
const inputSearch = ref(false);
const search = ref(null);
const router = useRouter();
const Searchs = (e) => {
    inputSearch.value = !inputSearch.value
}
const Teleskop = () => {
     router.push("/optika")
}
const Binokl = () => {
     router.push("/binokl")
}
const Lupa = () => {
     router.push("/")
}
const productSearch = () => {
    searchInput.searchProductName = search.value
}
</script>

<style scoped>
@media(max-width: 360px){
.menu{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top: 20px; */
    box-shadow: 0px 0px 5px black;
    margin: 0px 0px 20px 0px;
    background-color: rgb(245, 242, 242);
}
/* .menu{
    position: fixed;
} */
.menu_item{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; 
    z-index: 10;
    background-color: rgb(245, 242, 242);
    padding: 0px 5px;
}
.menus{
    list-style: none;
}
.drawer{
    background-color: grey !important;
}
.menus li{
    font-family: sans-serif;
    padding: 5px 0px;
}
.menu_item .menu_list{
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
.menu_item .menu_list .phone{
    font-size: 25px !important;
    margin: 0px 5px;
}
.menu_item .menu_list .gamburger{
    font-size: 30px !important;
    margin-right: 12px;
}
}
@media(max-width: 412px){
.search_input{
    width: 100%;
    height: 100px;
    /* border: 1px solid red; */
    display: none;
    position: fixed;
    background-color: aliceblue;
    top: 60px;
    z-index: 1000;
}
.search_input .n-input{
    width: 90%;
}
.menu{
    min-width: 100%;
    max-width: 410px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top: 20px; */
    box-shadow: 0px 0px 5px black;
    margin: 0px 0px 20px 0px;
    background-color: rgb(245, 242, 242);
    position: relative;
}
/* .menu{
    position: fixed;
} */
.menu_item{
    /* border: 1px solid red; */
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;
    background-color: rgb(245, 242, 242);
    padding: 0px 20px;
}
.menus{
    list-style: none;
}
.drawer{
    background-color: grey !important;
}
.menus li{
    font-family: sans-serif;
    padding: 5px 0px;
    /* border: 1px solid red; */
}
.menu_item .menu_list{
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu_item .menu_list .phone{
    font-size: 25px !important;
    margin: 0px 5px;
}
.menu_item .menu_list .gamburger{
    font-size: 30px !important;
    margin-right: 12px;
}
}
</style>