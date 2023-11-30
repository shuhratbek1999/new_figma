<template>
    <div class="searchs">
        <div class="search">
            <div class="logo"><img src="../assets/ban.png" alt="">
            </div>
            <div class="input">
                <n-input 
                placeholder="search..."
                v-model:value="search"
                :onUpdate:value="productSearch"
                >
                <template #suffix>
                    <n-icon :component="SearchOutline" />
                </template>
                </n-input>
            </div>
            <ul>
                <li class="eye">
                    <n-icon size="25">
                    <RemoveRedEyeOutlined />
                    </n-icon>
                    <div class="number">0</div>
                </li>
                <li class="balance">
                    <n-icon size="25">
                        <BalanceScaleRight />
                    </n-icon>
                    <div class="number">0</div>
                </li>
                <li class="heart" @click="Sevimlilar">
                    <n-icon size="25">
                        <HeartRegular />
                    </n-icon>
                    <div class="number">0</div>
                </li>
                <li class="shop" @click="Korzinka">
                    <n-icon size="25">
                        <ShoppingCartOutlined />
                    </n-icon>
                    <div class="number">{{LengthCard}}</div>
                </li>
            </ul>
            <Card @tozala="handleTozala" v-if="cards" />
            <Sevimli @tozala="sevimliTozalash" v-if="SevimliBool" />
        </div>
    </div>
</template>

<script setup>
import Card from "./Card.vue";
import Sevimli from "./Sevimli.vue";
import {RemoveRedEyeOutlined,ShoppingCartOutlined} from "@vicons/material";
import {BalanceScaleRight,HeartRegular} from "@vicons/fa";
import {SearchOutline} from "@vicons/ionicons5";
import {filterStore} from '../stores/filter';
import {computed,ref,onMounted} from "vue"
import {NBadge} from "naive-ui";
const value = ref(0);
const search = ref(null);
const SevimliBool = ref(false);
const cards = ref(false);
let searchInput = filterStore();
import {Products} from '../stores/product';
let ProductPinia = Products();
// const tozalash = ref("")
const productSearch = () => {
    // console.log(search.value, "search_value")
   searchInput.$state.searchPro = search.value;
}
const handleTozala = (data) => {
     cards.value = data.bool;
}
const sevimliTozalash = (data) => {
    SevimliBool.value = data.bool
}
const Korzinka = () => {
    cards.value = !cards.value;
}
const Sevimlilar = () => {
    SevimliBool.value = !SevimliBool.value
}
const LengthCard = computed(() => {
    return ProductPinia.cardLength;
})
</script>
<style scoped>
.searchs{
    width: 100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
}
.searchs .search{
    width: 85%;
    height: 60px;
    display: flex;
    align-items: center;
}
/* .searchs{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
}
.search{
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
} */
.search ul{
    display: flex;
    width: 230px;
    justify-content: space-between;
    list-style: none;
     /* border: 2px solid red; */
}
.search ul li{
    padding: 0px 10px;
    cursor: pointer;
}
/* .search ul li:first-child{
    padding-left: 0px;
} */
.search .input{
    margin: 0px 20px;
}
.search .input .n-input{
    width: 730px;
    height: 40px;
    /* border: 2px solid red; */
}
.search ul .eye, .heart, .balance, .shop{
    position: relative;
}
.search ul .eye .number, .balance .number, .heart .number, .shop .number{
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    /* border: 1px solid bl; */
    border-radius: 50%;
    font-size: 10px;
    background-color: rgb(190, 187, 187);
    color: white;
    position: absolute;
    top: -5px;
    right: 1px;
}
</style>