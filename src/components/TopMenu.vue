<template>
    <div class="top_menu">
         <div class="menu_item">
            <n-icon size="20">
            <LocationOnRound />
            </n-icon>
            Москва
         </div>
         <div class="menu_item">
            <div class="menu_list" @click="kontakt">О компани</div>
            <div class="menu_list">Доставка</div>
            <div class="menu_list">Оплата</div>
            <div class="menu_list">Акции</div>
            <div class="menu_list">Распродажа</div>
            <div class="menu_list">Еще</div>
         </div>
         <div class="menu_item">
             <div class="menu_icon">
                <n-icon size="20" color="rgb(6, 70, 247)">
                   <TelegramPlane />
                </n-icon>
             </div>
             <div class="menu_icon">
                <n-icon size="20" color="rgb(150, 112, 180)">
                  <PhoneInTalkSharp />
                </n-icon>
             </div>
             <div class="menu_icon">
                <n-icon size="20" color="rgb(68, 243, 97)">
                  <WhatsappOutlined />
                </n-icon>
             </div>
             <div class="menu_icon phone">
                +7 495 215 0744
             </div>
         </div>
         <div class="menu_item">
            <n-icon size="20">
               <EmailOutlined />
            </n-icon>
            sales@tele-optics.ru
         </div>
         <div class="menu_item">
            <n-icon size="20"> 
                <PersonOutlineFilled />
            </n-icon>
            <span>Вход</span> / <span @click="Register">Регистрация</span>
         </div>
    </div>
</template>
<script setup>
import {LocationOnRound, PhoneInTalkSharp,WhatsappOutlined,EmailOutlined,PersonOutlineFilled} from "@vicons/material";
import {TelegramPlane} from "@vicons/fa";
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const kontakt = () => {
    router.push("/kontakt")
}
const Register = () => {
    router.push("/registratsiya")
}
</script>
<style scoped>
.top_menu{
    width: 85%;
    height: 30px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.top_menu .menu_item{
    display: flex;
    /* height: 30px; */
    align-items: center;
    cursor: pointer;
    /* border: 2px solid red; */
}
.top_menu .menu_item span{
    margin: 0px 5px;
}
.top_menu .menu_item .menu_list{
    padding: 0px 5px;
    font-size: 14px;
    cursor: pointer;
    /* color: rgb(68, 243, 97); */
}
.top_menu .menu_item .phone{
    font-weight: 700;
    font-size: 16px;
}
.top_menu .menu_item .menu_icon{
    padding: 0px 2px;
}
.top_menu .menu_item .n-icon{
    margin-right: 5px;
}

</style>