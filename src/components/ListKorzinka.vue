<template>
    <div class="korzinka_list">
        <ul class="korzinka">
           <li class="eye">
                <n-icon size="25">
                <RemoveRedEyeOutlined />
                </n-icon>
                Промотренные
                <div class="number">0</div>
            </li>
            <li class="balance">
                <n-icon size="25">
                    <BalanceScaleRight />
                </n-icon>
                Сравнение
                <div class="number">0</div>
            </li>
            <li class="shop" @click="Korzinka">
                <n-icon size="25">
                    <ShoppingCartOutlined />
                </n-icon>
                Корзина
                <div class="number">{{LengthCard}}</div>
            </li>
            <li class="heart" @click="Sevimlilar">
                <n-icon size="25">
                    <HeartRegular />
                </n-icon>
                Избранное
                <div class="number">0</div>
            </li>
            <li class="person">
                <n-icon size="25">
                    <Person16Regular />
                </n-icon>
                Профиль
            </li>
        </ul>
        <Card @tozala="handleTozala" v-if="cards" />
        <Sevimli @tozala="sevimliTozalash" v-if="SevimliBool" />
    </div>
</template>

<script setup>
import Card from "./Card.vue";
import Sevimli from "./Sevimli.vue";
import {RemoveRedEyeOutlined,ShoppingCartOutlined} from "@vicons/material";
import {BalanceScaleRight,HeartRegular} from "@vicons/fa";
import {Person16Regular} from "@vicons/fluent";
import {ref,computed} from "vue"
import {Products} from '../stores/product';
let ProductPinia = Products();
const SevimliBool = ref(false);
const cards = ref(false);
const Sevimlilar = () => {
    SevimliBool.value = !SevimliBool.value
}
const Korzinka = () => {
    cards.value = !cards.value;
}
const handleTozala = (data) => {
     cards.value = data.bool;
}
const sevimliTozalash = (data) => {
    SevimliBool.value = data.bool
}
const LengthCard = computed(() => {
    return ProductPinia.cardLength;
})
</script>

<style scoped>
.korzinka_list{
    display: none;
}
@media(max-width: 360px){
.korzinka_list{
    width: 100%;
    height: 70px;
    /* border: 1px solid red; */
    position: fixed;
    bottom: 0;
    box-shadow: 0px 2px 10px black;
    background-color: white;
    display: inline-block;
}
.korzinka_list ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
     /* border: 1px solid red; */
     padding: 15px 0px;
}
.korzinka_list ul li{
    text-align: center;
    cursor: pointer;
    /* border: 1px solid red; */
}
ul .eye, .heart, .balance, .shop{
    position: relative;
}
.korzinka_list ul ul .eye .number, .balance .number, .heart .number, .shop .number{
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
    right: 10px;
}
}
@media(max-width: 412px){
.korzinka_list{
    width: 100%;
    height: 70px;
    /* border: 1px solid red; */
    position: fixed;
    bottom: 0;
    box-shadow: 0px 2px 10px black;
    background-color: white;
    display: inline-block;
}
.korzinka_list ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
     /* border: 1px solid red; */
     padding: 15px 0px;
}
.korzinka_list ul li{
    text-align: center;
    cursor: pointer;
    font-size: 0.7rem;
    /* border: 1px solid red; */
}
ul .eye, .heart, .balance, .shop{
    position: relative;
}
.korzinka_list ul ul .eye .number, .balance .number, .heart .number, .shop .number{
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
    right: 10px;
}
}
</style>