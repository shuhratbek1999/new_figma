<template>
    <div class="optika">
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
        <div class="categoriya">
            <Categoriya>
                <template v-slot:katalog>
                    <div class="categori_item">
                        <div class="item_1">
                            Каталог оптики
                        </div>
                     </div>
                </template>
            </Categoriya>
        </div>
        <div class="shopping">
            <Shop />
        </div>
        <div class="brends">
            <Brend>
               <template v-slot:brend_top>
                    <div class="brend_top">
                        <div class="top_item">Популярные категории</div>
                        <div class="top_item all">Показать все</div>
                    </div>
                </template>
                <template v-slot:brend_foter>
                     <ul class="brend_foter">
                        <li>
                            <img src="../../assets/image180.png" alt="">
                            <div class="text">Бинокли</div>
                        </li>
                        <li>
                            <img src="../../assets/image182.png" alt="">
                            <div class="text">Микроскопы</div>
                        </li>
                        <li>
                            <img src="../../assets/image183.png" alt="">
                            <div class="text">Телескопы</div>
                        </li>
                        <li>
                            <img src="../../assets/image184.png" alt="">
                            <div class="text">Лупы</div>
                        </li>
                    </ul>
                </template>
            </Brend>
        </div>
        <div class="adress">
            <Adres />
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
import KorzinkaList from "../../components/ListKorzinka.vue";
import TopMenu from "../../components/TopMenu.vue";
import Prosmotr from "../../components/Prosmotr.vue";
import Categoriya from "../../components/Kategoriya.vue";
import Search from "../../components/Search.vue";
import Menu from "../../components/Menu.vue";
import List from "../../components/List.vue";
import Brend from "../../components/Brend.vue";
import Shop from "../../components/Shop.vue";
import Adres from "../../components/Adres.vue";
import Manzil from "../../components/manzil.vue";
import Foter from "../../components/Foter.vue";
</script>

<style scoped>
.home{
    width: 100%;
    height: 100vh;
}
.brends{
    background-color: #F7F8FB;
}
.brend_top{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0px 0px 15px 0px;
}
.brend_top .all{
    text-align: right;
    font-weight: 300 !important;
    font-size: 16px !important;
}
.brend_top .top_item{
    width: 42%;
    font-weight: bold;
    font-size: 22px;
    font-family: sans-serif;
    /* border: 1px solid red; */
}
.brend_foter{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
}
.brend_foter li{
    width: 20%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid red; */
    margin: 0px 8px; 
    border-radius: 5px;
}
.brend_foter li img{
    width: 80px;
}
.brend_foter li:first-child img{
    height: 80px;
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
    /* border: 1px solid red; */
    background-color: #F7F8FB;
    /* margin: 0 auto; */
}
.item_1{
    /* border: 2px solid red; */
    width: 82%;
    font-size: 30px;
    font-family: sans-serif;
    font-weight: bold;
}
.categori_item{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0px;
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
   .item_1{
    width: 90%;
    /* border: 1px solid red; */
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
   .categori_item{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5px;
}
.brends{
    background-color: #F7F8FB;
    padding: 10px;
}
.brend_top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0px;
    /* border: 1px solid red; */
}
.brend_top .all{
    text-align: left;
    font-weight: 300 !important;
    font-size: 16px !important;
}
.brend_top .top_item{
    width: 100%;
    font-weight: bold;
    font-size: 22px;
    font-family: sans-serif;
}
.brend_foter{
    border: 1px solid red;
    display: flex;
    height: 300px;
    /* flex-direction: column; */
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
}
.brend_foter li{
    width: 45%;
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid red; */
    margin: 8px; 
    border-radius: 5px;
}
.brend_foter li img{
    width: 50px !important;
}
.brend_foter li:first-child img{
    height: 60px;
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
   .item_1{
    width: 90%;
    /* border: 1px solid red; */
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
   .categori_item{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0px 5px;
}
.brends{
    background-color: #F7F8FB;
    padding: 10px;
    /* border: 1px solid red; */
    height: 400px;
}
.brend_top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0px;
    /* border: 1px solid yellow; */
}
.brend_top .all{
    text-align: left;
    font-weight: 300 !important;
    font-size: 16px !important;
}
.brend_top .top_item{
    width: 100%;
    font-weight: bold;
    font-size: 22px;
    font-family: sans-serif;
    /* border: 1px solid red; */
}
.brend_foter{
    display: flex;
    height: 230px;
    /* flex-direction: column; */
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    /* border: 1px solid black; */
}
.brend_foter li{
    width: 45%;
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: 1px solid red; */
    margin: 8px; 
    border-radius: 5px;
}
.brend_foter li img{
    width: 50px !important;
}
.brend_foter li:first-child img{
    height: 60px;
}
}
</style>