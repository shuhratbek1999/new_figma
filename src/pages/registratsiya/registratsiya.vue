<template>
    <div class="registratsiya">
        <div class="reg_content">
            <div class="reg_title">Регистрация</div>
            <div class="reg_about">
                Зарегистрируйтесь, чтобы использовать все возможности личного кабинета: отслеживание заказов, настройку подписки, связи с соц. сетями и другие. 
            </div>
            <div class="reg_info">
                <div class="name_phone">
                    <n-input size="medium" placeholder="Ваше имя" />
                    <n-input size="medium" v-model:value="data.phone" placeholder="+998 (___) ___-__-__" />
                </div>
                <div class="email">
                    <n-input size="medium" placeholder="Ваш email" />
                </div>
                <div class="email">
                    <n-input
                    type="password"
                    show-password-on="mousedown"
                    placeholder="Пароль"
                    :maxlength="8"
                    size="medium"
                    />
                    <template>
                    <n-icon :size="16" :component="GlassesOutline" />
                    </template>
                </div>
                <div class="email">
                    <n-input
                    type="password"
                    show-password-on="mousedown"
                    placeholder="Подтвердите пароль"
                    :maxlength="8"
                    size="medium"
                    />
                    <template>
                    <n-icon :size="16" :component="GlassesOutline" />
                    </template>
                </div>
                <div class="register_btn">
                    <n-button type="info">
                        Регистрация
                    </n-button>
                </div>
                <div class="check">
                     <n-checkbox v-model:checked="value">
                       Я соглашаюсь c обработкой персональных данных на условиях 
                       <span>Политики конфиденциальности.</span>
                    </n-checkbox>
                </div>
            </div>
            <div class="zaregister">
                Зарегистрироваться через соцсети
            </div>
            <div class="google">
                <div class="vkontakt">
                    <n-icon size="20">
                        <LogoVk />
                    </n-icon>
                    Вконтакте
                </div>
                <div class="google_reg">
                    <n-icon size="20">
                        <LogoGoogle />
                    </n-icon>
                   Google
                </div>
            </div>
            <div class="login">
                Вы уже зарегистрированы? <span>Войти</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import {LogoGoogle,LogoVk} from "@vicons/ionicons5"
import { GlassesOutline, Glasses } from "@vicons/ionicons5";
import {ref} from "vue"
const data = ref({
    phone: "+998 ( )"
})
</script>

<style scoped>
.registratsiya{
    width: 60%;
    min-height: 100vh;
    box-shadow: 0px 0px 4px grey;
    margin: 10px auto;
}
.reg_content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
.reg_content .reg_title{
    font-size: 24px;
    font-weight: 600;
}
.reg_content .reg_about{
    font-size: 14px;
    font-family: sans-serif;
    text-align: center;
}
/* .reg_info{
    /* border: 1px solid red; */
/* } */
.reg_info div{
    margin: 7px 0px;
}
.reg_info div .n-input{
    background-color: #F7F8FB;
}
.reg_info .name_phone{
    display: flex;
    justify-content: space-between;
}
.reg_info .name_phone .n-input{
    width: 48%;
}
.reg_info .register_btn .n-button{
    width: 100%;
}
.check{
    width: 70%;
    font-size: 16px;
}
.check span{
    color: #208EE2;
}
.google{
    display: flex;
    justify-content: center;
    margin: 20px 0px;
}
.google div{
    border: 1px solid grey;
    border-radius: 5px;
    padding: 12px 28px;
    display: flex;
    justify-content: space-evenly;
    margin: 0px 10px;
    cursor: pointer;
}
.google div .n-icon{
    margin-right: 10px;
}
.google .vkontakt .n-icon{
    color: blue;
}
.google .google_reg .n-icon{
    color: rgb(245, 169, 139);
}
.login{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    font-size: 16px;
    background-color: #F7F8FB;
}
.login span{
    color: #0867D6;
    font-weight: 600;
    margin-left: 10px;
}
</style>