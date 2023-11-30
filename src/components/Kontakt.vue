<template>
<div class="kontakts">
        <div class="containers">
             <div class="contact_info">
                <div class="contact_title">Контакты</div>
                <div class="contact_titles">ООО "Бинокль"</div>
                <div class="contact_adress">
                    <n-icon size="20">
                     <LocationOnRound />
                    </n-icon>
                    <div class="contact_adress_info">
                        <div class="contact_adress_info_item">Юридический адрес:</div>
                        <div class="contact_adress_info_item">134670 г. Москва, ул. Никольская, д. 15, к. 1,  ком. 2</div>
                    </div>
                </div>
                <div class="contact_adress">
                    <n-icon size="20">
                     <LocationOnRound />
                    </n-icon>
                    <div class="contact_adress_info">
                        <div class="contact_adress_info_item">Фактический адрес:</div>
                        <div class="contact_adress_info_item">134670 г. Москва, ул. Никольская, д. 15, к. 1,  ком. 2</div>
                    </div>
                </div>
                <div class="contact_adress">
                    <n-icon size="20">
                     <WatchLaterOutlined />
                    </n-icon>
                    <div class="contact_adress_info">
                        <div class="contact_adress_info_item">Режим работы:</div>
                        <div class="contact_adress_info_item">Пн-Пт 09:00-19:00,<br/> Сб-Вс - выходной</div>
                    </div>
                </div>
                <div class="phone_numbers">
                    <div class="phone_title">Звоните. Звонки по России бесплатны: </div>
                    <div class="phone">
                         <n-icon size="20">
                          <Phone />
                        </n-icon>
                         Телефоны:
                         <ul class="phone_list">
                            <li>8-800-000-00-00</li>
                            <li>+7 495 215 0744</li>
                            <li>+7 495 215 0744</li>
                         </ul>
                    </div>
                    <div class="phone">
                         <n-icon size="20">
                            <EmailOutlined />
                        </n-icon>
                         Пишите:
                         <ul class="phone_list">
                            <li>info-binocleman@mail.ru</li>
                         </ul>
                    </div>
                </div>
                <div class="rekvizit">
                    <div class="rekvizit_list">
                        <div class="rekvizit_title">Реквизиты</div>
                        <div class="rekvizit_info">
                            <div class="rekvizit_item">
                                ИНН <br/>
                                745204911887
                            </div>
                            <div class="rekvizit_item">
                                ОГРНИП <br/>
                                315745600021272
                            </div>
                        </div>
                    </div>
                    <div class="rekvizit_list">
                        <div class="rekvizit_title">Мы в соц. сетях</div>
                        <div class="rekvizit_icons">
                            <div class="rekvizit_icon">
                                <n-icon size="30" color="rgb(6, 70, 247)">
                                  <TelegramPlane />
                                </n-icon>
                            </div>
                            <div class="rekvizit_icon">
                                <n-icon size="30" color="rgb(150, 112, 180)">
                                  <PhoneInTalkSharp />
                                </n-icon>
                            </div>
                            <div class="rekvizit_icon">
                                <n-icon size="30" color="rgb(68, 243, 97)">
                                  <WhatsappOutlined />
                                </n-icon>
                            </div>
                            <div class="rekvizit_icon">
                                 <n-icon size="30" color="rgb(6, 70, 247)">
                                  <Vk />
                                </n-icon>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div class="contact_input">
                <div class="contact_info_content">
                    <div class="contact_info_content_title">Ответим на все ваши вопросы</div>
                    <n-input placeholder="Ваше имя" />
                    <n-input placeholder="Ваш телефон" />
                    <n-input placeholder="Ваш email" />
                    <n-input type="textarea" placeholder="Ваш вопрос" />
                    <div class="buttons">
                        <div class="tasdiqlash button">
                            <n-button>
                                Отправить
                            </n-button>
                        </div>
                        <div class="tasdiqlash tas">
                            Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на условиях Политики конфиденциальности.
                        </div>
                    </div>
                </div>
             </div>
        </div>
</div>
</template>

<script setup>
 import {LocationOnRound,WatchLaterOutlined,EmailOutlined,PhoneInTalkSharp,WhatsappOutlined} from "@vicons/material"
 import {Phone} from "@vicons/tabler"
 import {TelegramPlane,Vk} from "@vicons/fa";

</script>

<style scoped>
.kontakts{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.containers{
    width: 85%;
    height: 300px;
    /* border: 1px solid red; */
    display: flex;
}
.containers .contact_info, .contact_input{
    width: 50%;
    /* border: 1px solid black; */
}
.contact_info .contact_title{
    font-weight: 700;
    font-size: 28px;
    font-family: sans-serif;
} 
.contact_info .contact_titles{
    font-weight: 700;
    font-size: 24px;
    font-family: sans-serif;
}
.contact_info .contact_adress{
    display: flex;
    /* border: 1px solid red; */
}
.contact_info .contact_adress .n-icon{
    margin-right: 10px;
}
.contact_info .phone_numbers{
    width: 90%;
    padding: 15px;
    box-shadow: 2px 2px 5px 1px rgb(223, 221, 221),
    -2px -2px 5px 1px rgb(218, 214, 214);
    margin: 15px 0px;
}
.contact_info .phone_numbers .phone .phone_list{
    display: flex;
    justify-content: space-around;
    list-style: none;
}
.contact_info .phone_numbers .phone .phone_list li{
    font-weight: 600;
    padding: 0px 10px;
}
.contact_info .phone_numbers .phone .n-icon{
    margin-right: 8px;
}
.phone_numbers .phone_title{
    font-weight: bold;
}
.rekvizit{
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
}
.rekvizit .rekvizit_list{
    width: 48%;
}
.rekvizit .rekvizit_list .rekvizit_title{
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
}
.rekvizit .rekvizit_list .rekvizit_info, .rekvizit_icons{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.rekvizit .rekvizit_list .rekvizit_icons .rekvizit_icon{
    box-shadow: 2px 2px 5px 1px rgb(223, 221, 221),
    -2px -2px 5px 1px rgb(218, 214, 214);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact_input{
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-end;
}
.contact_info_content{
    padding: 30px;
    width: 400px;
    border-radius: 5px;
    background-color: #F2F5F9;
    /* border: 1px solid red; */
}
.contact_info_content .n-input{
    margin: 10px 0px;
}
.contact_info_content .buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.buttons .tas{
    width: 60%;
    /* border: 1px solid red; */
    font-size: 11px;
}
.buttons .button{
    width: 40%;
}
.buttons .button .n-button{
    width: 90%;
    height: 40px;
    background-color: #0696E7;
    color: white;
}
.contact_info_content_title{
    font-size: 24px;
    font-weight: 700;
    font-family: sans-serif;
}

@media(max-width: 412px){
.kontakts{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.containers{
    width: 85%;
    height: 700px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
}
.containers .contact_info, .contact_input{
    width: 100%;
    /* border: 1px solid black; */
}
.contact_info .contact_title{
    font-weight: 700;
    font-size: 28px;
    font-family: sans-serif;
} 
.contact_info .contact_titles{
    font-weight: 700;
    font-size: 24px;
    font-family: sans-serif;
}
.contact_info .contact_adress{
    display: flex;
    /* border: 1px solid red; */
}
.contact_info .contact_adress .n-icon{
    margin-right: 10px;
}
.contact_info .phone_numbers{
    width: 90%;
    padding: 15px;
    box-shadow: 2px 2px 5px 1px rgb(223, 221, 221),
    -2px -2px 5px 1px rgb(218, 214, 214);
    margin: 15px 0px;
    /* border: 1px solid red; */
    height: 240px;
}
.contact_info .phone_numbers .phone .phone_list{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    margin-left: 20px;
}
.contact_info .phone_numbers .phone .phone_list li{
    font-weight: 600;
    padding: 0px 10px;
}
.contact_info .phone_numbers .phone .n-icon{
    margin-right: 8px;
}
.phone_numbers .phone_title{
    font-weight: bold;
    width: 70%;
    /* border: 1px solid red; */
    margin-bottom: 10px;
}
.rekvizit{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 10px 0px;
}
.rekvizit .rekvizit_list{
    width: 90%;
    /* border: 1px solid red; */
    margin: 15px 0px;
}
.rekvizit .rekvizit_list .rekvizit_title{
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
}
.rekvizit .rekvizit_list .rekvizit_info, .rekvizit_icons{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.rekvizit .rekvizit_list .rekvizit_icons .rekvizit_icon{
    box-shadow: 2px 2px 5px 1px rgb(223, 221, 221),
    -2px -2px 5px 1px rgb(218, 214, 214);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact_input{
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-end;
}
.contact_info_content{
    padding: 30px;
    width: 400px;
    border-radius: 5px;
    background-color: #F2F5F9;
    /* border: 1px solid red; */
}
.contact_info_content .n-input{
    margin: 10px 0px;
}
.contact_info_content .buttons{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.buttons .tas{
    width: 100%;
    /* border: 1px solid red; */
    font-size: 11px;
    margin: 10px 0px;
}
.buttons .button{
    width: 100%;
}
.buttons .button .n-button{
    width: 90%;
    height: 40px;
    background-color: #0696E7;
    color: white;
}
.contact_info_content_title{
    font-size: 24px;
    font-weight: 700;
    font-family: sans-serif;
}
}
@media(max-width: 360px){
.kontakts{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.containers{
    width: 85%;
    height: 700px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
}
.containers .contact_info, .contact_input{
    width: 100%;
    /* border: 1px solid black; */
}
.contact_info .contact_title{
    font-weight: 700;
    font-size: 28px;
    font-family: sans-serif;
} 
.contact_info .contact_titles{
    font-weight: 700;
    font-size: 24px;
    font-family: sans-serif;
}
.contact_info .contact_adress{
    display: flex;
    /* border: 1px solid red; */
}
.contact_info .contact_adress .n-icon{
    margin-right: 10px;
}
.contact_info .phone_numbers{
    width: 90%;
    padding: 15px;
    box-shadow: 2px 2px 5px 1px rgb(223, 221, 221),
    -2px -2px 5px 1px rgb(218, 214, 214);
    margin: 15px 0px;
    /* border: 1px solid red; */
    height: 250px;
}
.contact_info .phone_numbers .phone .phone_list{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    margin-left: 20px;
}
.contact_info .phone_numbers .phone .phone_list li{
    font-weight: 600;
    padding: 0px 10px;
}
.contact_info .phone_numbers .phone .n-icon{
    margin-right: 8px;
}
.phone_numbers .phone_title{
    font-weight: bold;
    width: 70%;
    /* border: 1px solid red; */
    margin-bottom: 10px;
}
.rekvizit{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 10px 0px;
}
.rekvizit .rekvizit_list{
    width: 90%;
    /* border: 1px solid red; */
}
.rekvizit .rekvizit_list .rekvizit_title{
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
}
.rekvizit .rekvizit_list .rekvizit_info, .rekvizit_icons{
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.rekvizit .rekvizit_list .rekvizit_icons .rekvizit_icon{
    box-shadow: 2px 2px 5px 1px rgb(223, 221, 221),
    -2px -2px 5px 1px rgb(218, 214, 214);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact_input{
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-end;
}
.contact_info_content{
    padding: 30px;
    width: 400px;
    border-radius: 5px;
    background-color: #F2F5F9;
    /* border: 1px solid red; */
}
.contact_info_content .n-input{
    margin: 10px 0px;
}
.contact_info_content .buttons{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.buttons .tas{
    width: 100%;
    /* border: 1px solid red; */
    font-size: 11px;
    margin: 10px 0px;
}
.buttons .button{
    width: 100%;
}
.buttons .button .n-button{
    width: 90%;
    height: 40px;
    background-color: #0696E7;
    color: white;
}
.contact_info_content_title{
    font-size: 24px;
    font-weight: 700;
    font-family: sans-serif;
}
}
</style>