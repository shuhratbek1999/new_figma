<template>
    <div class="das">
        <ul class="dastavka">
         <li>
            <div class="text">
                 Быстрая доставка
            </div>
            <n-icon size="40">
                <Delivery />
            </n-icon>
         </li>
         <li>
            <div class="text">
                Весь товар сертифицирован
            </div>
            <n-icon size="40">
                <Certificate24Regular />
            </n-icon>
         </li>
         <li>
            <div class="text">
               3 года гарантии
            </div>
            <n-icon size="40">
                <Medal />
            </n-icon>
         </li>
         <li>
            <div class="text">
                10 летна рынке
            </div>
            <n-icon size="40">
                <ThumbsUpOutline />
            </n-icon>
         </li>
    </ul>
    </div>
</template>

<script setup>
import {Delivery} from "@vicons/carbon";
import {Certificate24Regular} from "@vicons/fluent";
import {Medal} from "@vicons/fa";
import {ThumbsUpOutline} from "@vicons/ionicons5";
</script>

<style scoped>
.das{
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
}
.dastavka{
    width: 85%;
    display: flex;
    margin: 0 auto;
    list-style: none;
}
.dastavka li .n-icon{
    color: #0696E7;
}
.dastavka li{
    width: 320px;
    height: 100px;
    display: flex;
    font-family: sans-serif;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F5F9;
    margin: 0px 15px;
    /* border: 1px solid red; */
}
.dastavka li:first-child{
    margin-left: 0px;
}
.dastavka li:last-child{
    margin-right: 0px;
}
@media(max-width: 360px){
.das{
    width: 100%;
    min-height: 550px;
    display: flex;
    align-items: center;
}
.dastavka{
    width: 86%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    list-style: none;
}
.dastavka li .n-icon{
    color: #0696E7;
}
.dastavka li{
    width: 320px;
    height: 100px;
    display: flex;
    font-family: sans-serif;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F5F9;
    margin: 10px 0px;
    border-radius: 5px;
}
}

@media(max-width: 412px){
.das{
    width: 100%;
    min-height: 550px;
    display: flex;
    align-items: center;
}
.dastavka{
    width: 86%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    list-style: none;
}
.dastavka li .n-icon{
    color: #0696E7;
}
.dastavka li{
    width: 100%;
    height: 100px;
    display: flex;
    font-family: sans-serif;
    justify-content: space-around;
    align-items: center;
    background-color: #F2F5F9;
    margin: 10px 0px;
    border-radius: 5px;
}
}
</style>