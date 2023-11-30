<template>
    <div class="manzil">
        <div class="manzil_content">
            <ul class="manzil_list">
            <li>
                <img src="../assets/ban.png" alt="">
            </li>
            <li>
                <n-icon size="20">
                    <LocationOnRound />
                </n-icon>
                <div class="text">Россия, г. Москва, ул. Никольская, д. 15</div>
            </li>
            <li>
                <n-icon size="20">
                <Clock16Regular />
                </n-icon>
                <div class="text">Пн-Пт с 09:00-19:00, Сб-Вс - выходной</div>
            </li>
            <li>
                <n-icon size="20">
                   <EmailOutlined />
                </n-icon>
                <div class="text">sales@tele-optics.ru</div>
            </li>
        </ul>
        <ul class="manzil_list katalogg">
            <li>Каталог</li>
            <li>Бинокли</li>
            <li>Монокуляры</li>
            <li>Лупы</li>
            <li>Микроскопы</li>
            <li>Зрительные трубы</li>
            <li>Дальномеры</li>
            <li>Тепловизоры</li>
            <li>Приборы ночноговидения</li>
        </ul>
        <div class="katalog">
            <n-dropdown trigger="click" :options="options" @select="handleSelect">
                <div class="text">
                    <span>Полезная информация</span>
                    <n-icon size="20">
                       <KeyboardArrowDownTwotone />
                    </n-icon>
                </div>
            </n-dropdown>
        </div>
         <ul class="manzil_list information">
            <li>Полезная информация</li>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>Возврат</li>
            <li>Производители</li>
            <li>Гарантия</li>
            <li>Статьи</li>
            <li>Способы оплаты:</li>
            <li>
                <n-icon size="20">
                <CcVisa />
                </n-icon>
                <n-icon size="20">
                <Wallet20Filled />
                </n-icon>
                <n-icon size="20">
                <CcMastercard />
                </n-icon>
                <n-icon size="20">
                <CcPaypal />
                </n-icon>
            </li>
        </ul>
        <div class="information1">
            <n-dropdown trigger="click" :options="information" @select="handleSelect">
                <div class="text">
                    <span>Полезная информация</span>
                    <n-icon size="20">
                       <KeyboardArrowDownTwotone />
                    </n-icon>
                </div>
            </n-dropdown>
        </div>
        <ul class="manzil_list contact">
            <li>Контакты</li>
            <li>+7 495 215 0744</li>
            <li>
                <n-icon size="20">
                <Vk />
                </n-icon>
                <n-icon size="20" color="rgb(6, 70, 247)">
                   <TelegramPlane />
                </n-icon>
                <n-icon size="20" color="rgb(150, 112, 180)">
                  <PhoneInTalkSharp />
                </n-icon>
                <n-icon size="20" color="rgb(68, 243, 97)">
                  <WhatsappOutlined />
                </n-icon>
            </li>
            <li>О нас</li>
            <li>Оптовые продажи</li>
            <li>Личный кабинет</li>
            <li>
                <n-button type="tertiary">
                    Подписаться на новости
                </n-button>
            </li>
            <li>
                <n-button type="warning" dashed>
                    Скачать прайс-лист
                </n-button>
            </li>
        </ul>
        <div class="kontakt">
            <ul class="manzil_list">
                <li>Контакты</li>
                <li>+7 495 215 0744</li>
                <li>
                    <n-icon size="20">
                    <Vk />
                    </n-icon>
                    <n-icon size="20" color="rgb(6, 70, 247)">
                    <TelegramPlane />
                    </n-icon>
                    <n-icon size="20" color="rgb(150, 112, 180)">
                    <PhoneInTalkSharp />
                    </n-icon>
                    <n-icon size="20" color="rgb(68, 243, 97)">
                    <WhatsappOutlined />
                    </n-icon>
                </li>
            </ul>
            <ul class="manzil_list">
                <li>О нас</li>
                <li>Оптовые продажи</li>
                <li>Личный кабинет</li>
            </ul>
        </div>
        <div class="oplata">
            <li>Способы оплаты:</li>
            <li>
                <n-icon size="20">
                <Wallet24Filled />
                </n-icon>
                <n-icon size="20">
                <CcVisa />
                </n-icon>
                <n-icon size="20">
                <Wallet20Filled />
                </n-icon>
                <n-icon size="20">
                <CcMastercard />
                </n-icon>
                <img src="../assets/F1.png" alt="">
                <img src="../assets/F2.png" alt="">
                <img src="../assets/F3.png" alt="">
            </li>
        </div>
        <ul class="buttonlar">
            <li>
                <n-button type="tertiary">
                    Подписаться на новости
                </n-button>
            </li>
            <li>
                <n-button type="warning" dashed>
                    Скачать прайс-лист
                </n-button>
            </li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import {LocationOnRound, EmailOutlined,WhatsappOutlined,PhoneInTalkSharp,KeyboardArrowDownTwotone} from "@vicons/material";
// import {LocationOnRound, PhoneInTalkSharp,WhatsappOutlined,EmailOutlined,PersonOutlineFilled} from "@vicons/material";
import {CcVisa,CcMastercard,CcPaypal,Vk,TelegramPlane} from "@vicons/fa";
import {Clock16Regular,Wallet20Filled, Wallet24Filled} from "@vicons/fluent";
import {ref} from "vue";
const options = ref([
    {label: "Бинокли", key: "Бинокли"},
    {label: "Монокуляры", key: "Монокуляры"},
    {label: "Лупы", key: "Лупы"},
    {label: "Микроскопы", key: "Микроскопы"},
    {label: "Зрительные трубы", key: "Зрительные трубы"},
    {label: "Дальномеры", key: "Дальномеры"},
    {label: "Тепловизоры", key: "Тепловизоры"},
    {label: "Приборы ночноговидения", key: "Приборы ночноговидения"}
])
const information = ref([
    {label: "Доставка", key: "Доставка"},
    {label: "Оплата", key: "Оплата"},
    {label: "Возврат", key: "Возврат"},
    {label: "Производители", key: "Производители"},
    {label: "Гарантия", key: "Гарантия"},
    {label: "Статьи", key: "Статьи"},
    {label: "Способы оплаты:", key: "Способы оплаты:"}
])
const handleSelect = (e) => {
     console.log(e)
}
</script>

<style scoped>
.manzil{
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F8FB;
}
.information1, .buttonlar, .oplata, .kontakt{
    display: none;
}
.manzil .katalog{
    display: none;
}
.manzil .manzil_content{
    display: flex;
    /* flex-direction: column; */
    /* border: 1px solid red; */
    width: 86%;
}
.manzil_list{
    width: 25%;
    /* border: 1px solid red; */
    /* display: flex; */
    /* width: 86%; */
}
.manzil_list li{
    display: flex;
    transition: all 0.8s ease-in-out;
    margin: 5px 0px;
    cursor: pointer;
}
.manzil_list li:hover{
    color: blue;
}
.manzil_list li:first-child{
    font-weight: 700;
    margin-bottom: 10px;
}
.manzil_list li .text{
    width: 140px;
    margin-left: 10px;
}
.manzil_list li .n-icon{
    margin: 0px 5px;
}
@media(max-width: 360px){
.oplata{
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 10px 0px;
}
.oplata li{
    display: flex;
    justify-content: space-between;
}
.oplata li .n-icon{
    padding: 0px 10px;
}
.manzil .katalogg{
    display: none;
}
.manzil .katalog{
    display: block;
}
.contact{
    display: none;
}
.buttonlar{
    display: flex;
    flex-direction: column;
    list-style: none;
}
.buttonlar .n-button{
    width: 96%;
    margin: 5px 0px;
}
.manzil{
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F8FB;
}
.kontakt{
    display: flex;
}
.information1{
    display: block;
}
.information1 .text, .katalog .text{
    width: 100%;
    /* border: 1px solid red;  */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 7px 0px;
}
.information{
    display: none;
}
.manzil .manzil_content{
    display: flex;
     flex-direction: column;
    /* border: 1px solid red; */
    width: 86%;
}
.manzil_list{
    width: 100%;
    /* border: 1px solid red; */
    /* display: flex; */
    /* width: 86%; */
}
.manzil_list li{
    display: flex;
    transition: all 0.8s ease-in-out;
    margin: 5px 0px;
    cursor: pointer;
}
.manzil_list li:hover{
    color: blue;
}
.manzil_list li:first-child{
    font-weight: 700;
    margin-bottom: 10px;
}
.manzil_list li .text{
    width: 300px;
    margin-left: 10px;
}
.manzil_list li .n-icon{
    margin: 0px 5px;
}
}

@media(max-width: 412px){
.oplata{
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 10px 0px;
}
.oplata li{
    display: flex;
    justify-content: space-between;
}
.oplata li .n-icon{
    padding: 0px 10px;
}
.manzil .katalogg{
    display: none;
}
.manzil .katalog{
    display: block;
}
.contact{
    display: none;
}
.buttonlar{
    display: flex;
    flex-direction: column;
    list-style: none;
}
.buttonlar .n-button{
    width: 96%;
    margin: 5px 0px;
}
.manzil{
    min-width: 100%;
    max-width: 410px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    background-color: #F7F8FB;
}
.kontakt{
    display: flex;
}
.information1{
    display: block;
}
.information1 .text, .katalog .text{
    width: 100%;
    /* border: 1px solid red;  */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 7px 0px;
}
.information{
    display: none;
}
.manzil .manzil_content{
    display: flex;
     flex-direction: column;
    /* border: 1px solid red; */
    width: 86%;
}
.manzil_list{
    width: 100%;
    /* border: 1px solid red; */
    /* display: flex; */
    /* width: 86%; */
}
.manzil_list li{
    display: flex;
    transition: all 0.8s ease-in-out;
    margin: 5px 0px;
    cursor: pointer;
}
.manzil_list li:hover{
    color: blue;
}
.manzil_list li:first-child{
    font-weight: 700;
    margin-bottom: 10px;
}
.manzil_list li .text{
    width: 90%;
    margin-left: 10px;
}
.manzil_list li .n-icon{
    margin: 0px 5px;
}
}
</style>