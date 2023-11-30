<template>
    <div class="adres">
         <div class="content">
            <div class="adres_left">
             <div class="adres_title">Вам нужна консультация?</div>
             <div class="adres_text">
                Задайте их по телефону +7 (000) 000-000-00
                или оставьте свои координаты и наш менеджер 
                перезвонит вам через 10 минут
             </div>
             <div class="forma">
                <div class="forma_name">
                    <n-input placeholder="Ваше имя" />
                    <n-input placeholder="Ваш телефон" />
                </div>
                <div class="email">
                    <n-input placeholder="Ваш email" />
                </div>
                <div class="textarea">
                    <n-input type="textarea" />
                </div>
                <div class="buttons">
                    <n-button type="info">
                        Оставить заявку
                    </n-button>
                    <div class="buttons_text">
                        Нажимая «Оставить заявку», я соглашаюсь c обработкой персональных данных на 
                        условиях Политики конфиденциальности.
                    </div>
                </div>
             </div>
         </div>
         <div class="adres_right">
              
         </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const coords = ref([
      54.82896654088406,
      39.831893822753904,
    ])
// const onClick = (e)=> {
//       coords.value = e.get('coords');
//     }
</script>
<style scoped>
.adres{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.adres .content{
    width: 86%;
    display: flex;
}
.adres .adres_left{
    width: 50%;
}
.adres .adres_left .adres_title{
    font-size: 28px;
    margin: 10px 0px;
    font-weight: bold;
    font-family: sans-serif;
}
.adres .adres_left .adres_text{
    font-family: sans-serif;
    margin-bottom: 20px;
}
.adres_left .forma{
    width: 100%;
}
.adres_left .forma .forma_name{
    margin: 10px 0px;
    /* width: 90%; */
    display: flex;
    justify-content: space-between;
}
.adres_left .forma .email, .textarea{
    margin: 10px 0px;
}
 .adres_left .forma .buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 .buttons_text{
    width: 350px;
 }
.adres_left .forma .forma_name .n-input{
    width: 45% !important;
}
.adres .adres_right{
    width: calc(100% - 50%);
}

@media(max-width: 360px){
.adres{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.adres .content{
    width: 90%;
    display: flex;
    flex-direction: column;
}
.adres .adres_left{
    width: 100%;
    /* border: 1px solid red; */
}
.adres .adres_left .adres_title{
    font-size: 20px;
    margin: 10px 0px;
    font-weight: bold;
    font-family: sans-serif;
}
.adres .adres_left .adres_text{
    font-family: sans-serif;
    margin-bottom: 20px;
}
.adres_left .forma{
    width: 100%;
}
.adres_left .forma .forma_name{
    margin: 10px 0px;
    /* width: 90%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.adres_left .forma .email, .textarea{
    margin: 10px 0px;
}
 .adres_left .forma .buttons{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
 }
 .adres_left .forma .buttons .n-button{
    width: 90% !important;
 }
 .buttons_text{
    padding: 10px 0px;
    width: 100%;
    font-size: 12px;
 }
.adres_left .forma .forma_name .n-input{
    width: 100% !important;
    margin: 5px 0px;
}
.adres .adres_right{
    width: 100%;
}
}
@media(max-width: 412px){
.adres{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
.adres .content{
    width: 90%;
    display: flex;
    flex-direction: column;
}
.adres .adres_left{
    width: 100%;
    /* border: 1px solid red; */
}
.adres .adres_left .adres_title{
    font-size: 20px;
    margin: 10px 0px;
    font-weight: bold;
    font-family: sans-serif;
}
.adres .adres_left .adres_text{
    font-family: sans-serif;
    margin-bottom: 20px;
}
.adres_left .forma{
    width: 100%;
}
.adres_left .forma .forma_name{
    margin: 10px 0px;
    /* width: 90%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.adres_left .forma .email, .textarea{
    margin: 10px 0px;
}
 .adres_left .forma .buttons{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
 }
 .adres_left .forma .buttons .n-button{
    width: 90% !important;
 }
 .buttons_text{
    padding: 10px 0px;
    width: 100%;
    font-size: 12px;
 }
.adres_left .forma .forma_name .n-input{
    width: 100% !important;
    margin: 5px 0px;
}
.adres .adres_right{
    width: 100%;
}
}
</style>