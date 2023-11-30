<template>
    <div class="binoklAbout">
        <div class="containers">
            <div class="binokl_list" v-for="(item, index) in Products" :key="index">
                <div class="binokl_img">
                     <img :src="item.img" :alt="item.name">
                     <div class="carusel"></div>
                </div>
                <div class="binokl_about">
                    <div class="binokl_item binokl_name">{{item.name}}</div>
                    <div class="binokl_item rate">
                        <div class="rate1">
                            <n-rate size="15" />
                            <div class="number">
                                4.67 (12)
                            </div>
                        </div>
                        <div class="rate1">Артикул: 133215</div>
                    </div>
                    <div class="binokl_item checking">
                        <img src="../assets/check.png" alt="">
                        В наличии 34 шт.
                    </div>
                    <div class="binokl_item property">
                         <div class="property_item">
                             <div class="item">Характеристики</div>
                             <div class="item">
                                <div class="item_left">Производитель</div>
                                <div class="item_left">Россия</div>
                             </div>
                             <div class="item">
                                <div class="item_left">Диаметр объектива, мм</div>
                                <div class="item_left">{{item.diametr}}</div>
                             </div>
                             <div class="item">
                                <div class="item_left">Назначение</div>
                                <div class="item_left">{{item.maqsad}}</div>
                             </div>
                             <div class="item">
                                <a href="#">Все характеристики</a>
                             </div>
                         </div>
                         <div class="dastavka">
                             <div class="dastavka_item">
                                <img src="../assets/group.png" alt="Group">
                                Условия доставки
                             </div>
                             <div class="dastavka_item">
                                <img src="../assets/cards.png" alt="">
                                Способы оплаты
                             </div>
                         </div>
                    </div>
                    <div class="binokl_item product_item">
                         <div class="product_shop">
                             <div class="product_price">
                                 <div v-if="AllPrice != 0" class="price">{{AllPrice}} ₽</div>
                                 <div v-else class="price">{{item.price}} ₽</div>
                                 <span class="skidka">Получить скидку</span>
                             </div>
                             <div class="product_qoshish">
                                 <div class="btn_add">
                                     <div @click="Ayirish(item.price)" class="minus">-</div>
                                     <div class="soni">{{count}}</div>
                                     <div @click="Qoshish(item.price)" class="plus">+</div>
                                 </div>
                                 <div class="korzinka">
                                    <n-icon class="savat" size="20">
                                      <ShoppingCartOutlined />
                                    </n-icon>
                                      В корзину
                                 </div>
                                 <div class="kupit">
                                    Купить в 1 клик
                                 </div>
                             </div>
                         </div>
                         <div class="product_view">
                             <div class="balanc">
                                <n-icon size="20">
                                <BalanceScaleRight />
                                </n-icon>
                                Сравнить
                            </div>
                            <div class="light">
                                <n-icon size="20">
                                <HeartRegular />
                                </n-icon>
                                В избранное
                            </div>
                         </div>
                    </div>
                    <div class="buttons">
                        <div class="button">Заказать быстру доставку</div>
                        <div class="button">Задать вопрос</div>
                        <div class="button">Оставить отзыв</div>
                        <div class="button">Новинки</div>
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import img1 from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/image179.png";
import img4 from "../assets/image180.png";
import img5 from "../assets/image182.png";
import img6 from "../assets/image183.png";
import img7 from "../assets/image184.png";
import img8 from "../assets/image207.png";
import img9 from "../assets/img.jpg";
import img10 from "../assets/img(2).png";
import {ShoppingCartOutlined} from "@vicons/material"
import {BalanceScaleRight,HeartRegular} from "@vicons/fa";
import {Lightning} from "@vicons/carbon";
import {filterStore} from "../stores/filter";
const FilterStore = filterStore();
const Products = ref(null);
let count = ref(1);
let AllPrice = ref(0);
const categoriya = ref([
    {id: 1, img: img1, maqsad: "baliq uchun", diametr: "15", name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"5190", brend: "discovery"},
    {id: 2, img: img2, maqsad: "baliq uchun", diametr: "10", name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"12190", brend: "svbony"},
    {id: 3, img: img3, maqsad: "baliq uchun", diametr: "25", name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"8100", brend: "levenhuk"},
    {id: 4, img: img4, maqsad: "baliq uchun", diametr: "11", name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"15290", brend: "celestron"},
    {id: 5, img: img5, maqsad: "baliq uchun", diametr: "13", name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10,price:"20000", brend: "meade"},
    {id: 6, img: img6, maqsad: "baliq uchun", diametr: "26", name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "discovery"},
    {id: 7, img: img7, maqsad: "baliq uchun", diametr: "35", name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"10190", brend: "svbony"},
    {id: 8, img: img8, maqsad: "baliq uchun", diametr: "55", name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "levenhuk"},
    {id: 9, img: img9, maqsad: "baliq uchun", diametr: "5", name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "levenhuk"},
    {id: 10, img: img10, maqsad: "baliq uchun", diametr: "9", name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "celestron"},
])
const ProductId = () => {
    // console.log(FilterStore.ids, "idsss");
   Products.value = categoriya.value.filter(item => item.id == FilterStore.ids)
}
const Qoshish = (price) => {
    count.value++;
    AllPrice.value = (count.value * price)
}
const Ayirish = (price) => {
    if(count.value != 1){
        count.value--;
        AllPrice.value = (count.value * price)
    }
}
onMounted(() => {
    ProductId()
})
</script>

<style scoped>
.binoklAbout{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.binoklAbout .containers{
    width: 85%;
    display: grid;
}
.item1{
    border: 1px solid red;
}
.binokl_list{
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
}
.binokl_list .binokl_img{
    width: 400px;
    height: 450px;
    border: 1px solid #E0E1E3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
.binokl_list .binokl_img img{
    width: 200px;
}
.binokl_about .binokl_name{
    font-size: 28px;
    font-weight: bold;
}
.binokl_about .rate{
    display: flex;
    justify-content: space-between;
}
.binokl_about .rate .rate1{
    /* width: 170px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.binokl_about .rate .rate1 .n-rate{
    margin-right: 10px;
}
.binokl_about .checking{
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: green;
    font-weight: 400;
    margin: 10px 0px;
}
.binokl_about .property{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.binokl_about .property .property_item .item{
    display: flex;
    justify-content: space-between;
}
.property_item .item a{
    text-decoration: underline;
}
.binokl_about .property .property_item .item .item_left{
    width: 200px;
}
.binokl_about .property .property_item .item:first-child{
    font-weight: bold;
    font-size: 18px;
}
.property .dastavka{
    border: 1px solid rgb(228, 222, 222);
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
.property .dastavka .dastavka_item{
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
}
.dastavka_item img{
    margin: 10px 10px 10px 0px;
}
.product_item{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgb(224, 221, 221);
    margin: 15px 0px;
    border-radius: 5px;
}
.product_item .product_shop{
    display: flex;
    width: 70%;
    flex-direction: column;
    padding: 10px 15px;
}
.product_shop .product_price{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.product_price .price{
    display: inline-block;
    font-size: 25px;
    font-weight: bold;
}
.product_price .skidka{
    text-decoration: underline;
    color: #EC2A1D;
    font-weight: 500;
    cursor: pointer;
}
.product_shop .product_qoshish{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    cursor: pointer;
}
.product_qoshish .btn_add{
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D7D9DC;
    border-radius: 5px;
}
.product_qoshish .korzinka{
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0696E7;
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    border-radius: 5px;
    margin: 0px 10px;
}
.product_qoshish .korzinka .n-icon{
    margin-right: 5px;
}
.product_qoshish .kupit{
    width: 150px;
    border-radius: 5px;
    background-color: #D7D9DC;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0696E7;
}
.btn_add .minus{
    font-size: 40px;
}
.btn_add .soni{
    font-size: 20px;
    margin: 0px 8px;
}
.plus{
    font-size: 25px;
}
.product_item .product_view{
    width: calc(100% - 70%);
    border-left: 1px solid rgb(212, 208, 208);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.product_item .product_view .balanc, .light{
    display: flex;
    width: 120px;
    justify-content: flex-start;
    margin: 5px 0px;
}
.product_item .product_view .balanc .n-icon, .light .n-icon{
    margin-right: 10px;
}
.binokl_about .buttons{
    display: flex;
    justify-content: space-between;
}
.binokl_about .buttons .button{
    border: 1px solid #0696E7;
    padding: 14px 18px 14px 18px;
    border-radius: 5px;
    margin: 10px;
    color: #208EE2;
    font-size: 15px;
    cursor: pointer;
}
.binokl_about .buttons .button:first-child{
    margin-left: 0px !important;
}
.binokl_about .buttons .button:last-child{
    margin-right: 0px !important;
}

@media(max-width: 360px){
.binoklAbout{
    width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid red; */
}
.binoklAbout .containers{
    width: 85%;
    display: grid;
}
.binokl_about{
    width: 340px;
    padding: 0px 5px;
    /* border: 2px solid blue; */
}
.item1{
    border: 1px solid red;
}
.binokl_list{
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.binokl_list .binokl_img{
    width: 330px;
    height: 300px;
    border: 1px solid #E0E1E3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
.binokl_list .binokl_img img{
    width: 200px;
}
.binokl_about .binokl_name{
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
}
.binokl_about .rate{
    width: 340px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.binokl_about .rate .rate1{
    /* width: 170px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.binokl_about .rate .rate1 .n-rate{
    margin-right: 10px;
}
.binokl_about .checking{
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: green;
    font-weight: 400;
    margin: 10px 0px;
}
.binokl_about .property{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.binokl_about .property .property_item .item{
    width: 340px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
}
.property_item .item a{
    text-decoration: underline;
}
.binokl_about .property .property_item .item .item_left{
    width: 200px;
}
.binokl_about .property .property_item .item:first-child{
    font-weight: bold;
    font-size: 18px;
}
.property .dastavka{
    display: none;
}
.property .dastavka .dastavka_item{
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
}
.dastavka_item img{
    margin: 10px 10px 10px 0px;
}
.product_item{
    width: 340px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(224, 221, 221);
    margin: 0px;
    border-radius: 5px;
    /* border: 1px solid red; */
}
.product_item .product_shop{
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* border: 1px solid black; */
}
.product_shop .product_price{
    /* width: 340px; */
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.product_price .price{
    /* width: 340px; */
    display: inline-block;
    font-size: 25px;
    font-weight: bold;
}
.product_price .skidka{
    text-decoration: underline;
    color: #EC2A1D;
    font-weight: 500;
    cursor: pointer;
}
.product_shop .product_qoshish{
    /* width: 340px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5px;
    cursor: pointer;
    /* border: 1px solid red; */
}
.product_qoshish .btn_add{
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D7D9DC;
    border-radius: 5px;
    margin-bottom: 15px;
}
.product_qoshish .korzinka{
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0696E7;
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    border-radius: 5px;
    margin: 0px;
}
.product_qoshish .korzinka .n-icon{
    margin-right: 5px;
}
.product_qoshish .kupit{
    width: 305px;
    height: 50px;
    border-radius: 5px;
    background-color: #D7D9DC;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0696E7;
}
.btn_add .minus{
    font-size: 40px;
}
.btn_add .soni{
    font-size: 20px;
    margin: 0px 8px;
}
.plus{
    font-size: 25px;
}
.product_item .product_view{
    width: 340px;
    border-left: 1px solid rgb(212, 208, 208);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid red; */
    border-top: 1px solid rgb(231, 228, 228);
}
.product_item .product_view .balanc, .light{
    display: flex;
    width: 120px;
    justify-content: flex-start;
    margin: 5px 0px;
}
.product_item .product_view .balanc .n-icon, .light .n-icon{
    margin-right: 10px;
}
.binokl_about .buttons{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px;
    /* border: 2px solid red; */
}
.binokl_about .buttons .button{
    width: 300px;
    border: 1px solid #0696E7;
    padding: 14px 18px 14px 18px;
    border-radius: 5px;
    margin: 8px 0px;
    color: #208EE2;
    font-size: 15px;
    cursor: pointer;
}
/* .binokl_about .buttons .button:first-child{
    margin-left: 0px !important;
}
.binokl_about .buttons .button:last-child{
    margin-right: 0px !important;
} */
/* .binokl_about .binokl_item{
    padding: 0px 15px !important;
} */
}
@media(max-width: 412px){
.binoklAbout{
    width: 99%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border: 1px solid red; */
}
.binoklAbout .containers{
    width: 100%;
    display: grid;
    overflow: hidden;
}
.binokl_about{
    width: 99%;
    /* padding: 0px 10px; */
    /* border: 2px solid blue; */
}
.item1{
    border: 1px solid red;
}
.binokl_list{
    width: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
}
.binokl_list .binokl_img{
    width: 90%;
    height: 250px;
    border: 1px solid #E0E1E3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    /* border: 1px solid red; */
}
.binokl_list .binokl_img img{
    width: 200px;
    /* border: 1px solid red; */
}
.binokl_about .binokl_name{
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
}
.binokl_about .rate{
    width: 98%;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
}
.binokl_about .rate .rate1{
    /* width: 170px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.binokl_about .rate .rate1 .n-rate{
    margin-right: 10px;
}
.binokl_about .checking{
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: green;
    font-weight: 400;
    margin: 10px 0px;
}
.binokl_about .property{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    /* border: 1px solid red; */
}
.binokl_about .property .property_item .item{
    width: 98%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
}
.property_item .item a{
    text-decoration: underline;
}
.binokl_about .property .property_item .item .item_left{
    width: 98%;
}
.binokl_about .property .property_item .item:first-child{
    font-weight: bold;
    font-size: 18px;
}
.property .dastavka{
    display: none;
}
.property .dastavka .dastavka_item{
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
}
.dastavka_item img{
    margin: 10px 10px 10px 0px;
}
.product_item{
    width: 90%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(224, 221, 221);
    margin: 10px auto;
    border-radius: 5px;
    padding: 0px;
    /* border: 1px solid red; */
}
.product_item .product_shop{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* border: 1px solid black; */
}
.product_shop .product_price{
    /* width: 340px; */
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.product_price .price{
    /* width: 340px; */
    display: inline-block;
    font-size: 25px;
    font-weight: bold;
}
.product_price .skidka{
    text-decoration: underline;
    color: #EC2A1D;
    font-weight: 500;
    cursor: pointer;
}
.product_shop .product_qoshish{
    /* width: 340px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5px;
    cursor: pointer;
    /* border: 1px solid red; */
}
.product_qoshish .btn_add{
    width: 30%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D7D9DC;
    border-radius: 5px;
    margin-bottom: 15px;
}
.product_qoshish .korzinka{
    width: 55%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0696E7;
    color: white;
    cursor: pointer;
    font-family: sans-serif;
    border-radius: 5px;
    margin: 0px;
}
.product_qoshish .korzinka .n-icon{
    margin-right: 5px;
}
.product_qoshish .kupit{
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: #D7D9DC;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0696E7;
}
.btn_add .minus{
    font-size: 40px;
}
.btn_add .soni{
    font-size: 20px;
    margin: 0px 8px;
}
.plus{
    font-size: 25px;
}
.product_item .product_view{
    width: 98%;
    border-left: 1px solid rgb(212, 208, 208);
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid red; */
    border-top: 1px solid rgb(231, 228, 228);
}
.product_item .product_view .balanc, .light{
    display: flex;
    width: 120px;
    justify-content: flex-start;
    margin: 5px 0px;
}
.product_item .product_view .balanc .n-icon, .light .n-icon{
    margin-right: 10px;
}
.binokl_about .buttons{
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px auto;
    /* border: 2px solid red; */
}
.binokl_about .buttons .button{
    width: 91%;
    border: 1px solid #0696E7;
    padding: 14px 18px 14px 18px;
    border-radius: 5px;
    margin: 8px 0px;
    color: #208EE2;
    font-size: 15px;
    cursor: pointer;
    /* margin: 0 auto; */
}
/* .binokl_about .buttons .button:first-child{
    margin-left: 0px !important;
}
.binokl_about .buttons .button:last-child{
    margin-right: 0px !important;
} */
.binokl_about .binokl_item{
    padding: 0px 12px !important;
}
}
</style>