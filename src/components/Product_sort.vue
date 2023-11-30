<template>
    <div class="product_sort">
        <div class="product_top">
             <div class="model">
                <n-select 
                v-model:value="value" 
                :options="options" 
                label-field="label"
                value-field="value"
                filterable
                clearable
                />
             </div>
             <div class="view">
                <div class="view_input">
                    <span>
                        Показать
                    </span>
                    <n-select 
                    v-model:value="number" 
                    :options="numbers"
                    label-field="label"
                    value-field="value"
                    filterable
                    clearable 
                    @update:value="Numbersss"
                    />
                </div>
                <div class="view_icon">
                    <n-icon @click="MenuIcon">
                        <MenuTwotone />
                    </n-icon>
                    <n-icon @click="MenuRow">
                        <Grid />
                    </n-icon>
                    <n-icon @click="Footer">
                        <GridDots20Filled />
                    </n-icon>
                </div>
             </div>
        </div>
        <div class="product_content">
              <div class="item_list" @click="ProductAbout(item.id)" v-for="(item,index) in ArrayMassivProducts" :key="index">
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
                        {{item.price}} ₽
                    </div>
                    <n-icon class="savat" size="20">
                    <ShoppingCartOutlined />
                    </n-icon>
                </div>
                <div v-if="!Menu" class="heart">
                    <n-icon size="30">
                    <HeartOutline />
                    </n-icon>
                </div>
                <div v-if="!Menu" class="balanc">
                    <n-icon size="30">
                    <BalanceScaleRight />
                    </n-icon>
                </div>
                <div v-if="!Menu" class="light">
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
        </div>
    </div>
</template>

<script setup>
import {ref, reactive,defineProps, onMounted, computed, watch, watchEffect} from "vue";
import {useRouter} from "vue-router"
import {HeartOutline, ReturnUpForwardOutline} from "@vicons/ionicons5";
import {BalanceScaleRight,HeartRegular} from "@vicons/fa";
import {MenuTwotone,ShoppingCartOutlined, CheckCircleOutlineRound} from "@vicons/material"
import {Grid,Lightning} from "@vicons/carbon"
import {GridDots20Filled} from "@vicons/fluent"
const value = ref("По популярности");
const number = ref("6");
const Menu = ref(false);
const router = useRouter();
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
import {filterStore} from "../stores/filter";
const FilterStores = filterStore();
const categoriya = ref([
    {id: 1, img: img1, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"5190", brend: "discovery"},
    {id: 2, img: img2, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"12190", brend: "svbony"},
    {id: 3, img: img3, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"8100", brend: "levenhuk"},
    {id: 4, img: img4, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"15290", brend: "celestron"},
    {id: 5, img: img5, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10,price:"20000", brend: "meade"},
    {id: 6, img: img6, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "discovery"},
    {id: 7, img: img7, name: "Бинокль БПЦ2 10х40 (обрезин., рубин)", count: 10, price:"10190", brend: "svbony"},
    {id: 8, img: img8, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "levenhuk"},
    {id: 9, img: img9, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "levenhuk"},
    {id: 10, img: img10, name: "Бинокль Veber БПЦ zoom 8-32х50", count: 10, price:"10190", brend: "celestron"},
])
const options = reactive([
    {label: "По популярности", value: 'По популярности'},
    {label: "Discovery", value: 'Discovery'}
])
const numbers = reactive([
    {label: "6", value: "6"},
    {label: "12", value: "12"},
    {label: "24", value:  "24"},
    {label: "30", value: "30"},
    {label: "36", value: "36"},
    {label: "42", value: "42"}
])
const Numbersss = (value) => {
    // console.log(value)
    switch(value){
        case "6":
            if(categoriya.value.length < value){
                // categoriya.value.splice(0, categoriya)
                return categoriya.value;
            }
            else{
              categoriya.value.splice(0, value)
            }
        break;
        case "12":
            if(categoriya.value.length < value){
                console.log(categoriya.value.length, "12")
                return categoriya.value;
            }
            else{
             Array2 = categoriya.value.slice(0, 12)
            }
        break;
        case "18":
            if(categoriya.value.length < value){
                return categoriya.value;
            }
            else{
                categoriya.value.splice(18)
            }
        break;
        case "24":
            if(categoriya.value.length < value){
                // console.log(categoriya.value.length, "18")
                return categoriya.value;
            }
            else{
                categoriya.value.splice(24)
            }
        break;
        case "30":
            if(categoriya.value.length < value){
                return categoriya.value;
            }
            else{
                categoriya.value.splice(30)
            }
        break;
        case "36":
            if(categoriya.value.length < value){
                return categoriya.value;
            }
            else{
                categoriya.value.splice(36)
            }
        break;
        default:
        return categoriya.value;
    }
}
const MenuIcon = () =>{
    let list = document.querySelectorAll('.item_list'),
    content = document.querySelector('.product_content');
    // console.log("hellooo");
    list.forEach(item => {
        item.classList.remove("uzun_list")
        content.classList.remove("uzun")
        content.classList.add("menu_list")
        item.classList.add("items_menu")
    })
}
let aslida = ref(false);
const MenuRow = () =>{
    let list = document.querySelectorAll('.item_list'),
    content = document.querySelector('.product_content');
    list.forEach(item => {
        item.classList.remove("uzun_list")
         item.classList.remove("items_menu")
         item.classList.remove("asli_list")
        content.classList.remove("uzun")
        content.classList.remove("menu_list")
    })
}
let fine = ref(false)
const Footer = () => {
    let list = document.querySelectorAll('.item_list'),
    content = document.querySelector('.product_content');
    list.forEach(item => {
        item.classList.remove("items_menu")
        item.classList.remove("asli_list")
        content.classList.add("uzun")
        item.classList.add("uzun_list")
    })
    fine.value = !fine.value;
}
const ProductAbout = (id) => {
    //  console.log(id,"id")
     FilterStores.$state.ids = id;
     router.push("/binokl_about")
}
const props = defineProps(["number1", "number2"]);
// onMounted(() => {
//     console.log(FilterStores.priceCount, FilterStores.priceCount2, "ssssssssssssss");
//     })

// const filterPrice = (item) => {
//     let allProduct = categoriya.value.map((items) => items)
// }
// const categoriya2 = computed(() => {
//     })
const filterByPrice = (categoriya, priceCount) => {
        return categoriya.value.filter(product => product.price >= priceCount)
}
const searchButton = (categoriya, text) => {
    return categoriya.value.filter(product => product.name.toLowerCase().includes(text.toLowerCase()))
}
const brendFilter = (categoriya, brends) => {
    let brend = brends.join(",")
   return categoriya.value.filter(item => item.brend.toLowerCase().includes(brend.toLowerCase()))
}
const FilterBrend = computed(() => {
    return brendFilter(categoriya, FilterStores.brends)
})
const filteredProducts = computed(()=>{
    return filterByPrice(categoriya, FilterStores.priceCount)
})
const searchProducts = computed(() => {
    return searchButton(categoriya, FilterStores.searchPro)
})
const ArrayMassivProducts = ref([])
watchEffect(() => {
    if(FilterStores.priceCount){
        ArrayMassivProducts.value = filteredProducts.value
    }
})
watchEffect(() => {
    if(FilterStores.brends){
        ArrayMassivProducts.value = FilterBrend.value
    }
})
watchEffect(() => {
    if(FilterStores.searchPro){
        ArrayMassivProducts.value = [...searchProducts.value]
    }
    else{
        ArrayMassivProducts.value = categoriya.value
    }
})
onMounted(() => {
    ArrayMassivProducts.value = categoriya.value
})
// watch(FilterStores.priceCount, () => {
//      console.log("salomm dunytooo")
// })
// watch(number, (value) =>{
//     console.log(categoriya.value.filter(product => product.name), "sssss")
//    return filteredProducts.value.filter(product => product.name.toLowerCase().indexOf(value) !== -1)
// })
</script>

<style scoped>
.product_sort{
    width: 100%;
}
.product_sort .product_top{
    width: 100%;
    display: flex;
    height: 50px;
    align-items: center;
    background-color: #F7F8FB;
}
.model{
    width: 30%;
}
/* .model .n-select{
    height: 50px !important;
    /* background-color: red; */
/* } */ 
.view{
    width: 70%;
    display: flex;
    justify-content: flex-end;
    /* border: 1px solid red; */
}
.view_input{
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
    /* width: 50%; */
}
.view_input .n-select{
    width: 60px !important;
    margin-left: 10px;
}
.view_icon{
    margin: 0px 25px;
    /* width: 50%; */
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
}
.view_icon .n-icon{
    font-size: 20px;
    margin: 0px 2px;
    cursor: pointer;
}
.product_content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.asli_content{
     display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.asli_content .asli_list{
    box-shadow: 0px 0px 2px grey;
    width: 250px;
    height: 390px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    position: relative;
    margin: 10px 0px;
    cursor: pointer;
    /* padding: 25px 25px; */
}
.product_content .item_list{
    box-shadow: 0px 0px 2px grey;
    width: 250px;
     cursor: pointer;
    height: 390px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    position: relative;
    margin: 10px 0px;
    /* padding: 25px 25px; */
}
.menu_list{
    flex-direction: column;
    align-items: center;
}
.uzun{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.uzun .uzun_list{
    box-shadow: 0px 0px 2px grey;
    width: 180px;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    position: relative;
    margin: 10px 0px;
     cursor: pointer;
}
.uzun_name{
    font-size: 12px !important;
    width: 180px !important;
}
.uzun .uzun_list .img img{
    width: 80px !important;
}
.uzun .uzun_list .heart, .uzun .uzun_list .light, .uzun .uzun_list .balanc{
    right: 10px !important;
}
.uzun .uzun_list .heart{
    top: 25px !important;
}
.uzun .uzun_list .light{
    top: 60px !important;
}
.uzun .uzun_list .balanc{
    top: 95px !important;
}
.menu_list .items_menu{
    box-shadow: 0px 0px 2px grey;
    width: 750px;
    height: 220px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    position: relative;
     cursor: pointer;
    margin: 8px 0px;
}
.menu_list .items_menu .name{
    width: 800px !important;
}
.item_list .img{
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
.foter{
    margin: 5px 0px;
}

.foter .price{
    font-weight: 600;
    font-size: 22px;
}
.foter .savat{
    /* border: 1px solid red; */
    /* padding: 8px; */
    background-color: #0696E7;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
.product_content .item_list .rate, .foter{
    width: 100%;
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
}
.menu_list .items_menu .foter{
    display: flex;
    flex-direction: column;
}
.menu_list .items_menu .foter .savat{
    margin: 15px 0px;
}
.menu_list .items_menu .rate{
    display: flex !important;
    flex-direction: column !important;
    margin: 10px 0px !important;
} 
.menu_list .items_menu .rate .number{
    margin: 10px 0px;
}
.item_list .rate{
    margin: 5px 0px;
}
.uzun .uzun_list .name{
    font-size: 13px;
    width: 180px;
    font-family: sans-serif;
}
.item_list .name{
    font-size: 14px;
    width: 250px;
    font-family: sans-serif;
    /* border: 1px solid red; */
    text-align: left;
    /* padding: 0px 10px; */
    /* text-indent: 20px; */
}
.heart, .balanc, .light, .mavjud{
    position: absolute;
    cursor: pointer;
}
.menu_list .items_menu .heart,.menu_list .items_menu .balanc,.menu_list .items_menu .light,.menu_list .items_menu .mavjud{
    display: none !important;
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
@media(max-width: 360px){
.product_sort{
    width: 350px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    /* background-color: #F7F8FB; */
}
.product_content{
    width: 350px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* margin: 30px 0px; */
}
.product_content .item_list{
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
    margin: 5px;
     cursor: pointer;
    /* // border: 1px solid red; */
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
.menu_list .foter{
    margin: 80px 0px;
}
.item_list .foter{
    margin: 5px 0px;
}
.foter .price{
    font-weight: 600;
    font-size: 10px;
}
.foter .savat{
    /* border: 1px solid red; */
    /* padding: 2px; */
    background-color: #0696E7;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 15px !important;
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
    width: 46%;
    /* border: 2px solid red; */
    margin: 40px 0px;
}
.item_1{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif;
}
.item_2{
    font-size: 12px;
    font-family: sans-serif;
    text-align: right !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
}
.view{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0px;
    /* border: 1px solid red; */
}
.view_input{
    display: none;
}
.model{
    width: 50%;
    margin: 0px 5px;
    /* border: 1px solid red; */
}
.product_sort .product_top{
    width: 100%;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #F7F8FB;
}
.view_icon{
    margin: 0px 5px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.menu_list .items_menu{
    box-shadow: 0px 0px 2px grey;
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    position: relative;
    margin: 8px 0px;
     cursor: pointer;
}
.menu_list .items_menu .foter{
    display: flex;
    flex-direction: column;
}
.menu_list .items_menu .name{
    /* color: red; */
    font-size: 10px;
}
.menu_list .items_menu .foter .savat{
    margin: 15px 0px;
}
.menu_list .items_menu .rate{
    display: flex !important;
    flex-direction: column !important;
    margin: 10px 0px !important;
} 
.menu_list .items_menu .rate .number{
    margin: 10px 0px;
    font-size: 10px;
}
.uzun{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.uzun .uzun_list{
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
    margin: 5px;
     cursor: pointer;
}
.uzun_name{
    font-size: 10px !important;
    width: 180px !important;
}
.uzun .uzun_list .img img{
    width: 80px !important;
}
.uzun .uzun_list .heart, .uzun .uzun_list .light, .uzun .uzun_list .balanc{
    right: 10px !important;
}
.uzun .uzun_list .heart{
    top: 25px !important;
}
.uzun .uzun_list .light{
    top: 60px !important;
}
.uzun .uzun_list .name{
    font-size: 10px;
    width: 140px;
    font-family: sans-serif;
}
.uzun .uzun_list .balanc{
    top: 95px !important;
}
}

@media(max-width: 412px){
.product_sort{
    width: 99%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid red; */
    /* background-color: #F7F8FB; */
}
.product_content{
    width: 99%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* margin: 30px 0px; */
}
.product_content .item_list{
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
    margin: 5px;
     cursor: pointer;
    /* // border: 1px solid red; */
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
    width: 60% !important;
}
.menu_list .foter{
    margin: 80px 0px;
}
.item_list .foter{
    margin: 5px 0px;
}
.foter .price{
    font-weight: 600;
    font-size: 10px;
}
.foter .savat{
    width: 25px;
    height: 20px;
    line-height: 20px;
    background-color: #0696E7;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    text-align: center;
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
    width: 46%;
    /* border: 2px solid red; */
    margin: 40px 0px;
}
.item_1{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif;
}
.item_2{
    font-size: 12px;
    font-family: sans-serif;
    text-align: right !important;
}
.item_list .count{
    color: #79797C;
    font-size: 14px;
}
.view{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0px;
    /* border: 1px solid red; */
}
.view_input{
    display: none;
}
.model{
    width: 50%;
    margin: 0px 5px;
    /* border: 1px solid red; */
}
.product_sort .product_top{
    width: 100%;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #F7F8FB;
}
.view_icon{
    margin: 0px 5px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.menu_list .items_menu{
    box-shadow: 0px 0px 2px grey;
    width: 90%;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    position: relative;
    margin: 8px 0px;
     cursor: pointer;
}
.menu_list .items_menu .foter{
    display: flex;
    flex-direction: column;
}
.menu_list .items_menu .name{
    /* color: red; */
    font-size: 10px;
}
.menu_list .items_menu .foter .savat{
    margin: 15px 0px;
}
.menu_list .items_menu .rate{
    display: flex !important;
    flex-direction: column !important;
    margin: 10px 0px !important;
} 
.menu_list .items_menu .rate .number{
    margin: 10px 0px;
    font-size: 10px;
}
.uzun{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.uzun .uzun_list{
    background-color: white;
    width: 40%;
    height: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    border-radius: 5px;
    padding: 0px 10px;
    margin: 5px;
     cursor: pointer;
}
.uzun_name{
    font-size: 10px !important;
    width: 100% !important;
}
.uzun .uzun_list .img img{
    width: 60% !important;
}
.uzun .uzun_list .heart, .uzun .uzun_list .light, .uzun .uzun_list .balanc{
    right: 10px !important;
}
.uzun .uzun_list .heart{
    top: 25px !important;
}
.uzun .uzun_list .light{
    top: 60px !important;
}
.uzun .uzun_list .name{
    font-size: 10px;
    width: 140px;
    font-family: sans-serif;
}
.uzun .uzun_list .balanc{
    top: 95px !important;
}
}
</style>
