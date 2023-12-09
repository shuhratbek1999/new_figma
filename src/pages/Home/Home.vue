<template>
    <div class="home container" @click="HomeSearch">
        <div class="home_top">
            <!-- salom -->
            <TopMenu />
        </div>
        <div class="home_top2">
            <!-- salom -->
            <Menu />
        </div>
        <div class="search">
            <Search :search="CardClose" />
        </div>
        <div class="list">
            <List />
        </div>
        <div class="carousel">
            <Carousel />
        </div>
        <div class="categoriya">
            <Categoriya />
        </div>
        <div class="shopping">
            <Shop />
        </div>
        <div class="brend">
            <Brend />
        </div>
        <div class="sorts">
            <Sort />
        </div>
        <div class="Dastavka">
            <Dastavka />
        </div>
        <div class="products">
            <product />
        </div>
        <div class="about">
            <HomeAbout />
        </div>
        <div class="korish">
            <Prosmotr />
        </div>
        <div class="manzils">
            <Manzil />
        </div>
        <div class="foter">
            <Foter />
        </div>
        <div class="korzinka_lists">
            <KorzinkaList />
        </div>
    </div>
</template>

<script setup>
import TopMenu from "../../components/TopMenu.vue";
import KorzinkaList from "../../components/ListKorzinka.vue";
import Menu from "../../components/Menu.vue";
import Search from "../../components/Search.vue";
import List from "../../components/List.vue";
import Carousel from "../../components/Slider.vue";
import Categoriya from "../../components/Kategoriya.vue";
import Shop from "../../components/Shop.vue";
import Brend from "../../components/Brend.vue";
import Sort from "../../components/Sort.vue";
import Dastavka from "../../components/dastavka.vue";
import Product from "../../components/Product.vue";
import HomeAbout from "../../components/Home_about.vue";
import Prosmotr from "../../components/Prosmotr.vue";
import Manzil from "../../components/manzil.vue";
import Foter from "../../components/Foter.vue";
import {ref} from "vue"
const cardFalse = ref(null)
let CardClose = ref("")
const HomeSearch = (event) => {
    CardClose.value = event.target;
}
// const tozalash = (data) => {
//     cardFalse.value = data.bool
// }
</script>

<style scoped>
.home{
    width: 100%;
    height: 100vh;
}
.home_top{
    width: 100%;
    background-color: #F7F8F9;
    display: flex;
    justify-content: center;
}
.home_top2{
    display: none;
}
.carousel{
    width: 100%;
    /* margin-top: 50px; */
}
.categoriya{
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin: 0 auto; */
    /* border: 2px solid red; */
}
.shopping{
    width: 100%;
}
@media(max-width: 360px){
   .home_top{
       display: none;
   }
   .home_top2{
       /* border: 1px solid red; */
     display: flex;
     /* position: fixed; */
     /* top: 10px; */
   }
   .search{
    display: none;
   }
   .list{
    display: none;
   }
   .korish{
     display: none;
   }
}

@media(max-width: 412px){
   .home_top{
       display: none;
   }
   .home_top2{
       /* border: 1px solid red; */
     display: flex;
     /* position: fixed; */
     /* top: 10px; */
   }
   .search{
    display: none;
   }
   .list{
    display: none;
   }
   .korish{
     display: none;
   }
}
</style>
