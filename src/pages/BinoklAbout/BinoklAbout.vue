<template>
    <div class="binokl_about">
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
        <div class="binokl_abouts">
            <BinoklsAbout />
        </div>
        <div class="harakter">
            <Harakteristika />
        </div>
        <div class="rekomendet">
            <Shop>
                <template v-slot:prodaj>
                        <div class="rekomendet_title">
                            Рекомендуем
                        </div>
                </template>
            </Shop>
        </div>
        <div class="rekomendet">
            <Shop>
                <template v-slot:prodaj>
                        <div class="rekomendet_title">
                            Похожие товары
                        </div>
                </template>
            </Shop>
        </div>
         <div class="rekomendet">
            <Shop>
                <template v-slot:prodaj>
                        <div class="rekomendet_title">
                            С этим товаром покупают
                        </div>
                </template>
            </Shop>
        </div>
        <div class="brend">
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
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import TopMenu from "../../components/TopMenu.vue";
import Adres from "../../components/Adres.vue";
import Harakteristika from "../../components/Harakteristika.vue";
import BinoklsAbout from "../../components/binoklAbouts.vue";
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
// let counts = ref(4)
// const Mount = () =>{
//     let shopping = document.querySelector('.carrrrr');
//     if(shopping.clientWidth == 360){
//         counts.value = 2
//     }
//     else{
//         counts.value = 4
//     }
//     console.log(shopping.clientWidth)
// }
// onMounted(() => {
//     Mount();
// })
</script>

<style scoped>
.binokl_abouts{
    width: 100%;
    margin-top: 10px;
}
.binokl_about{
    width: 100%;
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
.harakter{
    height: 650px;
}
.shop .categori_item{
    width: 100% !important;
    display: flex;
    border: 1px solid red !important;
}
.shop{
    background-color: white;
}
.shop .item_list{
    border: 1px solid black;
}
.rekomendet_title{
    margin-top: 40px;
    font-weight: 700;
    font-size: 28px;
}
.brend{
    width: 100%;
    height: 280px;
    background-color: #F7F8F9;
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
.rekomendet_title{
    width: 100%;
    margin-top: 5px;
    font-size: 14px;
    /* border: 2px solid red; */
}
.brend{
    display: none;
}
/* .rekomendet{
    border: 1px solid red;
} */
.harakter{
    max-height: 450px;
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
.rekomendet_title{
    width: 100%;
    margin-top: 5px;
    font-size: 14px;
    /* border: 2px solid red; */
}
.brend{
    display: none;
}
/* .rekomendet{
    border: 1px solid red;
} */
.harakter{
    height: 550px;
}
.rekomendet{
    /* border: 1px solid red; */
    max-height: 450px;
}
}
</style>