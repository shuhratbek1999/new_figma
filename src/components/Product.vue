<template>
    <div class="product">
        <div class="product_title">
            Наши товары
        </div>
        <div class="product_list">
            <div class="product_item" v-for="(item,index) in products" :key="index">
                   <div class="item_left">
                       <img :src="item.img" alt="">
                   </div>
                   <ul class="item_right">
                       <li>{{item.name}}</li>
                       <li>{{item.title1}}</li>
                       <li>{{item.title2}}</li>
                       <li>{{item.title3}}</li>
                       <li>{{item.title4}}</li>
                       <li>{{item.title5}}</li>
                       <li>{{item.title6}}</li>
                       <li>{{item.title7}}</li>
                       <li>
                         <n-button>
                            Показать все
                         </n-button>
                       </li>
                   </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import icon from "../assets/icon.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
const products = ref([
    {
        id: 1, img: icon, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon1, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon2, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon3, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon4, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon5, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon6, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon7, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
    {
        id: 1, img: icon8, name: "Бинокли", title1: "Армейско-полевой", title2: "Астрономический", title3: "Для города",
        title4: "Для детей", title5: "Для охоты и рыбалки", title6: "Любительский", title7: "Для профессионалов"
    },
])
</script>

<style scoped>
.product{
    width: 100%;
    background-color: #F7F8FB;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 40px; */
}
.product .product_list{
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* margin: 0 auto; */
    /* border: 1px solid red; */

}
.product .product_list .product_item{
    width: 340px;
    height: 300px;
    display: flex;
    padding: 20px;
    margin: 6px 0px;
    background-color: white;
    border-radius: 5px;
}
/* .product .product_list .product_item:first-child{
    margin-left: 0px !important;
}
.product .product_list .product_item:last-child{
    margin-right: 0px !important;
} */
.product_title{
    margin: 0 auto;
    width: 85%;
    font-size: 22px;
    font-weight: bold;
    padding: 30px 0px 0px 30px;
}
.product .product_list .product_item .item_left{
    margin-right: 20px;
}
.product .product_list .product_item .item_right{
    list-style: none;
}
.product .product_list .product_item .item_right li:first-child{
    font-weight: 700;
    margin-bottom: 10px;
}
.product .product_list .product_item .item_right li:last-child{
    margin-top: 15px;
}
@media(max-width: 360px){
 .product{
    width: 100%;
    background-color: #F7F8FB;
    /* padding: 40px; */
}
.product .product_list{
    width: 94%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
}
.product .product_list .product_item{
    width: 320px;
    height: 250px;
    display: flex;
    padding: 20px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
}
.product_title{
    margin: 0 auto;
    width: 86%;
    font-size: 22px;
    font-weight: bold;
    padding: 30px 0px 0px 30px;
}
.product .product_list .product_item .item_left{
    margin-right: 20px;
}
.product .product_list .product_item .item_right{
    list-style: none;
}
.product .product_list .product_item .item_right li:first-child{
    font-weight: 700;
    margin-bottom: 10px;
}
.product .product_list .product_item .item_right li:last-child{
    margin-top: 15px;
}   
}

@media(max-width: 412px){
 .product{
    width: 100%;
    background-color: #F7F8FB;
    /* padding: 40px; */
}
.product .product_list{
    width: 94%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
}
.product .product_list .product_item{
    width: 95%;
    min-height: 250px;
    display: flex;
    padding: 20px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
}
.product_title{
    margin: 0 auto;
    width: 86%;
    font-size: 22px;
    font-weight: bold;
    padding: 30px 0px 0px 30px;
}
.product .product_list .product_item .item_left{
    margin-right: 20px;
}
.product .product_list .product_item .item_right{
    list-style: none;
}
.product .product_list .product_item .item_right li:first-child{
    font-weight: 700;
    margin-bottom: 10px;
}
.product .product_list .product_item .item_right li:last-child{
    margin-top: 15px;
}   
}
</style>