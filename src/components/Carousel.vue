<template>
    <div class="carousel carrrrr">
        <n-carousel v-if="SearchProduct.length != 0" class="categori_item"  :slides-per-view="counts" autoplay>
            <div class="item_list" v-for="(item,index) in SearchProduct" :key="index">
                <div @click="ProductAbout(item.id)" class="img">
                    <slot name="rasm">
                        <img width="130" :src="item.img" alt="">
                    </slot>
                </div>
                <div class="name">{{item.name}}</div>
                <div class="rate">
                    <n-rate size="15" />
                    <div class="number">
                        4.67 (12)
                    </div>
                </div>
                <div class="foter">
                    <slot name="price">
                        <div class="price">
                          {{item.price}} ₽
                        </div>
                    </slot>
                    <n-icon @click="Savatcha(item)" class="savat" size="20">
                    <ShoppingCartOutlined />
                    </n-icon>
                </div>
                <div class="heart"  @click="Sevimli(item, index)">
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
        <div v-else class="categori_pustoks">
                 Product topilmadi
        </div>
    </div>
</template>

<script setup>
import {ShoppingCartOutlined, CheckCircleOutlineRound} from "@vicons/material";
import {HeartOutline} from "@vicons/ionicons5";
import {Heart12Filled} from "@vicons/fluent";
import {BalanceScaleRight,HeartRegular} from "@vicons/fa";
import {Lightning} from "@vicons/carbon";
import {ref, onMounted, computed} from "vue";
import {SevimliProduct} from "../stores/Sevimli";
const sevimliPinia = SevimliProduct();
import {useRouter} from "vue-router"
const router = useRouter()
import {filterStore} from "../stores/filter";
const FilterStores = filterStore();
import {Products} from "../stores/product";
const productPinia = Products();
const selectedIndex = ref(null)
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
const counts = ref(4);
const categoriya = ref([
    {id: 1, img: img1, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 1, price:"10190"},
    {id: 2, img: img2, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 1, price:"12100"},
    {id: 3, img: img3, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 1, price:"13500"},
    {id: 4, img: img4, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 1, price:"15000"},
    {id: 5, img: img5, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 1,price:"14000"},
    {id: 6, img: img6, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 1, price:"18000"},
    {id: 7, img: img7, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 1, price:"17000"},
    {id: 8, img: img8, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 1, price:"11000"},
    {id: 9, img: img9, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 1, price:"19000"},
    {id: 10, img: img10, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 1, price:"20000"},
])
const Mount = () =>{
    let shopping = document.querySelector('.carrrrr');
    if(shopping.clientWidth <= 360 || shopping.clientWidth <= 412){
        counts.value = 2
    }
    else{
        counts.value = 4
    }
}
const Savatcha = (item) => {
    productPinia.setProduct(item)
}
const Sevimli = (item,index) => {
    let heart = document.querySelectorAll('.heart')
    heart[index+1].classList.toggle('yurak')
    console.log(heart[[index+1]])
    selectedIndex.value = index;
    sevimliPinia.setSevimli(item)
}
const SearchProduct = computed(() => {
     if(sevimliPinia.searchProductName.length > 0){
       return categoriya.value.filter(item => item.name.toLowerCase().includes(sevimliPinia.searchProductName.toLowerCase()))
     }
     else{
        return categoriya.value
     }
})
const ProductAbout = (id) => {
    //  console.log(id,"id")
     FilterStores.$state.ids = id;
     router.push("/binokl_about")
}
onMounted(() => {
    Mount();
})
</script>

<style scoped>
.categori_pustoks{
  width: 94%;
  height: 150px;
  /* border: 1px solid grey; */
  text-align: center;
  line-height: 150px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgb(143, 142, 142);
  font-size: 18px;
  font-family: sans-serif;
  margin-left: 10px;
}
.yurak{
    color: red;
}
.carousel{
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F7F8FB;
}
.categori_item{
    width: 85%;
    height: 500px;
}
.categori_item .item_list{
    padding: 10px;
    width: 270px;
    height: 350px;
    background-color: white;
    margin: 0px 15px;
    border-radius: 5px;
    /* border: 1px solid red; */
}
.item_list .img{
    width: 100%;
    text-align: center;
    height: 170px;
    line-height: 230px;
}
.item_list .name{
    /* border: 1px solid red; */
    height: 50px;
}
.item_list .rate, .foter{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0px;
    /* border: 1px solid red; */
}
.foter{
    height: 60px;
    /* border: 1px solid red; */
    /* margin: 5px 0px; */
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
.heart, .balanc, .light, .mavjud{
    position: absolute;
    cursor: pointer;
}
.mavjud{
    display: flex;
    align-items: center;
    left: 20px;
    top: 10px;
}
.mavjud .n-icon{
    color: green;
    margin-right: 5px;
}
.heart{
    top: 50px;
    right: 20px;
}
.balanc{
    top: 90px;
    right: 20px;
}
.light{
    top: 130px;
    right: 20px;
}
@media(max-width: 360px){
.carousel{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #F7F8FB;
    /* border: 1px solid red; */
}
.categori_item{
    width: 96%;
    height: 300px;
}
.categori_item .item_list{
     background-color: white;
    width: 140px;
    height: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
}
.item_list .img{
    height: 180px;
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
    left: 20px;
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
}
@media(max-width: 412px){
.carousel{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #F7F8FB;
    /* border: 1px solid red; */
}
.categori_item{
    width: 100%;
    height: 400px;
    /* border: 1px solid red; */
}
.categori_item .item_list{
    background-color: white;
    width: 93%;
    height: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
}
.item_list .img{
    height: 180px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.item_list .img img{
    width: 90px !important;
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
    /* padding: 5px; */
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
    left: 20px;
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
}
</style>