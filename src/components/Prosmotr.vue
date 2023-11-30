<template>
    <div class="prosmotr">
        <div class="prosmotr_content">
            <ul class="list">
                <li>
                    <n-icon size="20">
                        <Eye />
                    </n-icon>
                    <div class="prosmotr_title">
                        Промотренные
                    </div>
                    <div class="prosmotr_count"></div>
                </li>
                <li>
                    <n-icon size="20">
                        <BalanceScaleRight />
                    </n-icon>
                    <div class="prosmotr_title">
                        Сравнение товаров
                    </div>
                    <div class="prosmotr_count"></div>
                </li>
                <li>
                    <n-icon size="20">
                        <HeartRegular />
                    </n-icon>
                    <div class="prosmotr_title">
                        Избранное
                    </div>
                    <div class="prosmotr_count"></div>
                </li>
                <li>
                    <n-icon size="20">
                        <ShoppingCartOutlined />
                    </n-icon>
                    <div class="prosmotr_title">
                        Корзина
                    </div>
                    <div class="prosmotr_count"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import {BalanceScaleRight,HeartRegular,Eye} from "@vicons/fa";
import {ShoppingCartOutlined} from "@vicons/material";
</script>

<style scoped>
.prosmotr{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #535E69;
}
.prosmotr_content{
    width: 86%;
}
.prosmotr_content .list{
    display: flex;
    list-style: none;
}
.prosmotr_content .list li{
    width: 240px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    color: white;
    border-right: 1px solid white;
}
.prosmotr_content .list li .n-icon{
    color: white;
}
.prosmotr_content .list li .prosmotr_count{
    width: 25px;
    height: 25px;
    border-radius: 45%;
    background-color: gainsboro;
}
</style>