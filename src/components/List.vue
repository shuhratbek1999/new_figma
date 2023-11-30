<template>
    <div class="list">
        <ul>
            <li @click="Optika">Телескопы</li>
            <li @click="Binokl">Бинокли</li>
            <li>Лупы</li>
            <li>Микроскопы</li>
            <li>Зрительные трубы</li>
            <li>Монокуляры</li>
            <li>Прицелы</li>
            <li>Дальномеры</li>
            <li>Тепловизоры</li>
            <li>Еще</li>
        </ul>
    </div>
</template>
<script setup>
import {ref} from "vue"
import {useRouter} from "vue-router"
const router = useRouter()

const Binokl = () => {
    router.push('/binokl')
}
const Optika = () => {
    router.push('/optika')
}
</script>

<style scoped>
.list{
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.list ul{
    width: 85%;
    display: flex;
    justify-content: space-between;
    list-style: none;
}
.list ul li{
    padding: 0px 12px;
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s ease-out;
}
.list ul li:first-child{
    padding-left: 0px !important;
}
.list ul li:last-child{
    padding-right: 0px !important;
}
.list ul li:hover{
    /* color: red; */
    border-bottom: 2px solid blue;
}
</style>