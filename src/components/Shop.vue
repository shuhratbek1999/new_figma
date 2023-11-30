<template>
    <div class="shop xit">
        <slot name="top">
          <div class="categori_item">
            <slot name="prodaj">
                <div class="item_1">
                    Хиты продаж
                </div>
            </slot>
            <div class="item_2">
                Смотреть весь каталог
            </div>
          </div>
        </slot>
        <slot name="carousel">
            <div v-if="SearchProduct.length != 0" class="categori_item">
                <n-carousel class="carousel"  :slides-per-view="counts" autoplay>
                    <div class="item_list" v-for="(item,index) in SearchProduct" :key="index">
                        <div class="img"><img width="130" :src="item.img" alt=""></div>
                        <div class="name">{{item.name}}</div>
                        <div class="rate">
                            <n-rate size="15" />
                            <div class="number">
                                4.67 (12)
                            </div>
                        </div>
                        <div class="foter">
                            <div class="price">
                                {{item.price}}
                            </div>
                            <n-icon class="savat" size="20">
                            <ShoppingCartOutlined />
                            </n-icon>
                        </div>
                        <div class="heart">
                            <n-icon size="30">
                            <HeartOutline />
                            </n-icon>
                        </div>
                        <div class="balanc">
                            <n-icon size="30">
                            <BalanceScaleRight />
                            </n-icon>
                        </div>
                        <div class="light">
                            <n-icon size="30">
                            <Lightning />
                            </n-icon>
                        </div>
                        <div class="mavjud">
                            <n-icon size="20">
                            <CheckCircleOutlineRound />
                            </n-icon>
                            В наличии
                        </div>
                    </div>
                </n-carousel>
           </div>
           <div v-else class="categori_pustok">
                 Product topilmadi
           </div>
        </slot>
    </div>
</template>

<script setup>
import {ShoppingCartOutlined, CheckCircleOutlineRound} from "@vicons/material";
import {HeartOutline} from "@vicons/ionicons5";
import {BalanceScaleRight,HeartRegular} from "@vicons/fa";
import {Lightning} from "@vicons/carbon";
import {ref, onMounted,computed} from "vue";
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
import {SevimliProduct} from "../stores/Sevimli";
const sevimliPinia = SevimliProduct();
const counts = ref(4);
const categoriya = ref([
    {id: 1, img: img1, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"10 190 ₽"},
    {id: 1, img: img2, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10 190 ₽"},
    {id: 1, img: img3, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"10 190 ₽"},
    {id: 1, img: img4, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"10 190 ₽"},
    {id: 1, img: img5, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10,price:"10 190 ₽"},
    {id: 1, img: img6, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10 190 ₽"},
    {id: 1, img: img7, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"10 190 ₽"},
    {id: 1, img: img8, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10 190 ₽"},
    {id: 1, img: img9, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10 190 ₽"},
    {id: 1, img: img10, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10 190 ₽"},
])
const Mount = () =>{
    let shopping = document.querySelector('.xit');
        // console.log(shopping.clientWidth, "salommmmm")
    if(shopping.clientWidth <= 360 || shopping.clientWidth <= 412){
        counts.value = 2
    }
    else{
        counts.value = 4
    }
}
const SearchProduct = computed(() => {
    if(sevimliPinia.searchProductName.length > 0){
       return categoriya.value.filter(item => {
          return item.name.toLowerCase().includes(sevimliPinia.searchProductName.toLowerCase())
       })
     }
     else{
        return categoriya.value
     }
})
onMounted(() => {
    Mount();
})
</script>

<style scoped>
.shop{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #F7F8FB;
}
.categori_item{
    width: 85%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.categori_item .carousel{
    height: 500px;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
}
.item_list{
    padding: 10px;
    background-color: white;
    width: 250px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    border: 1px solid rgb(241, 239, 239);
    margin: 0px 8px;
}
.item_list:first-child{
    margin-left: 0px;
}
.item_list .img{
    height: 230px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.foter{
    margin: 10px 0px;
}
.foter .price{
    font-weight: 600;
    font-size: 22px;
}
.foter .savat{
    /* border: 1px solid red; */
    width: 40px;
    height: 30px;
    line-height: 35px;
    background-color: #0696E7;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
.item_list .rate, .foter{
    width: 100%;
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
}
.item_list .rate{
    margin: 15px 0px;
}
.item_list .name{
    font-size: 16px;
    width: 250px;
    font-family: sans-serif;
    /* border: 1px solid red; */
    text-align: left;
}
.heart, .balanc, .light, .mavjud{
    position: absolute;
    cursor: pointer;
}
.mavjud{
    display: flex;
    align-items: center;
    left: 10px;
    top: 10px;
}
.mavjud .n-icon{
    color: green;
    margin-right: 5px;
}
.heart{
    top: 50px;
    right: 30px;
}
.balanc{
    top: 90px;
    right: 30px;
}
.light{
    top: 130px;
    right: 30px;
}
.item_1, .item_2{
    text-align: left;
    width: 50%;
    /* border: 2px solid red; */
    margin: 40px 0px;
    font-weight: 600;
}
.item_1{
    font-weight: 600;
    font-size: 32px;
    font-family: sans-serif;
}
.item_2{
    font-family: sans-serif;
    text-align: right !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
}

@media(max-width: 360px){
.shop{
    width: 98%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #F7F8FB;
    /* border: 1px solid red; */
}
.categori_item{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* margin: 30px 0px; */
}
.categori_item .carousel{
    height: 350px;
    width: 100%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
}
.item_list{
    background-color: white;
    width: 45%;
    height: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
     /* border: 1px solid red; */
    /* padding: 25px 25px; */
}
.item_list .img{
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.item_list .img img{
    width: 80px !important;
}
.foter{
    margin: 10px 0px;
}
.foter .price{
    font-weight: 600;
    font-size: 14px;
}
.foter .savat{
    /* border: 1px solid red; */
    width: 40px;
    height: 30px;
    line-height: 35px;
    background-color: #0696E7;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
.item_list .rate, .foter{
    width: 100%;
    display: flex;
    /* // border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
}
.item_list .rate{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    /* border: 1px solid red; */
}
.item_list .rate .number{
    font-size: 10px;
}
.item_list .rate .n-rate{
    font-size: 10px !important;
}
.item_list .name{
    font-size: 12px;
    width: 150px;
    font-family: sans-serif;
    /* border: 1px solid red; */
    text-align: left;
}
.heart, .balanc, .light, .mavjud{
    position: absolute;
    cursor: pointer;
}
.mavjud{
    display: flex;
    align-items: center;
    left: 10px;
    top: 10px;
    font-size: 12px;
}
.mavjud .n-icon{
    color: green;
    margin-right: 5px;
    font-size: 15px !important;
}
.heart .n-icon,  .balanc .n-icon, .light .n-icon{
    font-size: 20px !important;
}
.heart{
    top: 30px;
    right: 10px;
}
.balanc{
    top: 60px;
    right: 10px;
}
.light{
    top: 90px;
    right: 10px;
}
.item_1, .item_2{
    text-align: left;
    width: 100%;
    /* border: 2px solid red; */
    margin: 10px 0px;
}
.item_1{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif; 
}
.item_2{
    font-size: 10px;
    font-family: sans-serif;
    text-align: left !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
}
}

@media(max-width: 412px){
.shop{
    width: 99%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #F7F8FB;
    /* border: 1px solid red; */
}
.categori_item{
    width: 99%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* border: 2px solid red; */
    /* margin: 30px 0px; */
}
.categori_item .carousel{
    height: 300px;
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
}
.carousel .item_list{
    /* border: 2px solid red; */
    background-color: white;
    width: 96%;
    height: 260px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    margin: 5px;
     cursor: pointer;
}
.item_list .img{
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.item_list .img img{
    width: 80px !important;
}
.foter{
    margin: 5px 0px;
}
.foter .price{
    font-weight: 600;
    font-size: 14px;
}
.foter .savat{
    /* border: 1px solid red; */
    /* padding: 5px 0px; */
    background-color: #0696E7;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
.item_list .rate, .foter{
    width: 100%;
    display: flex;
    /* // border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
}
.item_list .rate{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    /* border: 1px solid red; */
}
.item_list .rate .number{
    font-size: 10px;
}
.item_list .rate .n-rate{
    font-size: 10px !important;
}
.item_list .name{
    font-size: 12px;
    width: 100%;
    font-family: sans-serif;
    /* border: 1px solid red; */
    text-align: left;
}
.heart, .balanc, .light, .mavjud{
    position: absolute;
    cursor: pointer;
}
.mavjud{
    display: flex;
    align-items: center;
    left: 10px;
    top: 10px;
    font-size: 12px;
}
.mavjud .n-icon{
    color: green;
    margin-right: 5px;
    font-size: 15px !important;
}
.heart .n-icon,  .balanc .n-icon, .light .n-icon{
    font-size: 20px !important;
}
.heart{
    top: 30px;
    right: 20px;
}
.balanc{
    top: 60px;
    right: 20px;
}
.light{
    top: 90px;
    right: 20px;
}
.item_1, .item_2{
    text-align: left;
    width: 100%;
    /* border: 2px solid red; */
    margin: 10px 0px;
}
.item_1{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif; 
}
.item_2{
    font-size: 10px;
    font-family: sans-serif;
    text-align: left !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
}
}
</style>