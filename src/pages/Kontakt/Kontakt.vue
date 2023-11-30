<template>
    <div class="kontakt">
        <div class="home_top">
            <!-- salom -->
            <TopMenu />
        </div>
        <div class="home_top2">
            <!-- salom -->
            <Menu />
        </div>
        <div class="search">
            <Search />
        </div>
        <div class="list">
            <List />
        </div>
        <div class="kontakt_content">
            <Kontakt />
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
    </div>
</template>

<script setup>
import TopMenu from "../../components/TopMenu.vue";
import Kontakt from "../../components/Kontakt.vue";
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
</script>

<style scoped>
.kontakt{
    width: 100%;
}
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
.kontakt_content{
    height: 600px;
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
.kontakt_content{
    height: 1300px;
}
}
</style>