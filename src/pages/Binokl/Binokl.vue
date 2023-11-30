<template>
    <div class="binokl">
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
        <div class="binokl_content">
            <div class="binokl_filtr">
                <Filtr @priceInput="priceInput" />
            </div>
            <div class="binokl_item">
                <div class="brend">
                    <Brend>
                       <template v-slot:brend_foter>
                        <ul class="brend_foter">
                            <li><img src="../../assets/6.png" alt=""></li>
                            <li><img src="../../assets/3.png" alt=""></li>
                            <li><img src="../../assets/4.png" alt=""></li>
                            <li><img src="../../assets/5.png" alt=""></li>
                            <li><img src="../../assets/6.png" alt=""></li>
                        </ul>
                        </template>
                        <template v-slot:brend_top>
                            <div class="brend_top">

                            </div>
                        </template>
                    </Brend>
                </div>
                <div class="products_sort">
                    <ProductSort :number1="number1" :number2="number2" />
                </div>
            </div>
        </div>
        <!-- <div class="filters_binokl" @click="Filters">
            <span>hello world</span>
        </div> -->
          <div class="binokl_about">
            <About />
          </div>
          <div class="binokl_prosmotr">
            <Prosmotr />
          </div>
          <div class="manzil">
            <Manzil />
          </div>
          <div class="binokl_foter">
              <Foter />
          </div>
          <div class="korzinka_lists">
            <KorzinkaList />
        </div>
    </div>
</template>

<script setup>
import {defineProps} from "vue";
import KorzinkaList from "../../components/ListKorzinka.vue";
import Brend from "../../components/Brend.vue";
import TopMenu from "../../components/TopMenu.vue";
import Filtr from "../../components/Filtr.vue";
import Menu from "../../components/Menu.vue";
import Search from "../../components/Search.vue";
import List from "../../components/List.vue";
import Carousel from "../../components/Slider.vue";
import Categoriya from "../../components/Kategoriya.vue";
import Shop from "../../components/Shop.vue";
import About from "../../components/Home_about.vue"
// import Brend from "../../components/Brend.vue";
import Sort from "../../components/Sort.vue";
import Dastavka from "../../components/dastavka.vue";
import Product from "../../components/Product.vue";
import HomeAbout from "../../components/Home_about.vue";
import Prosmotr from "../../components/Prosmotr.vue";
import Manzil from "../../components/manzil.vue";
import Foter from "../../components/Foter.vue";
import ProductSort from "../../components/Product_sort.vue";
import {onMounted, ref, toRefs} from "vue"
// const ProductPrice = ref(null)
const Hello = ref('')
let number1 = ref(null),
number2 = ref(null);
// const Hello = ref('')
const priceInput = (item, item2) => {
    number1.value = Number(item.value);
    number2.value = Number(item.value2);
}
// const Filters = () => {
//     let filter_binokl = document.querySelector('.filters_binokl');
//     let filter_content = document.createElement('div');
//     filter_content.classList.add('filter_content')
//     // filter_binokl.classList.toggle('filter_content')
//     // filter_content.innerText = "salom"
//     filter_binokl.appendChild(filter_content)
//     // console.log(filter_content)
// }

</script>

<style scoped>
.filter_content{
    width: 100px;
    height: 100px;
    /* border: 1px solid red; */
    background-color: black;
}
.binokl{
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
.binokl_content{
    display: flex;
}
.binokl_content .binokl_filtr{
    width: 30%;
    /* border: 1px solid red; */
}
.binokl_content .binokl_item{
    width: calc(100% - 37%);
    /* border: 1px solid red; */
}
.binokl_content .binokl_item .brend{
    /* border: 1px solid red; */
    height: 200px;
    width: 100%;
}
.brend_foter{
    width: 100%;
    height: 150px;
    display: flex;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #F7F8FB;
}
.brend_foter li{
    margin: 0px 8px;
    /* background-color: white; */
}
.brend_foter li img{
    width: 130px;
}
@media(max-width: 360px){
    .filter_content{
    width: 100px;
    height: 100px;
    /* border: 1px solid red; */
    background-color: black;
}
   .home_top{
       display: none;
   }
   .home_top2{
       /* border: 1px solid red; */
     display: flex;
     /* position: fixed; */
     /* top: 10px; */
   }
   .binokl_content{
    display: flex;
    flex-direction: column;
   }
   .search{
    display: none;
   }
   .list{
    display: none;
   }
   .binokl_prosmotr{
     display: none;
   }
.binokl{
    width: 100%;
}
.binokl_content{
    display: flex;
}
.binokl_content .binokl_filtr{
    width: 30%;
    /* border: 1px solid red; */
}
.binokl_content .binokl_item{
    width: calc(100% - 37%);
    /* border: 1px solid red; */
}
.binokl_content .binokl_item .brend{
    /* border: 1px solid red; */
    height: 200px;
    width: 100%;
}
.brend_foter{
    /* border: 1px solid red; */
    width: 350px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    border-radius: 5px;
    background-color: #F7F8FB;
    overflow-x: scroll;
    list-style: none;
}
.brend_foter li{
    margin: 0px 8px;
    /* background-color: white; */
}
.brend_foter li img{
    width: 155px;
}
}

@media(max-width: 412px){
.filter_content{
    width: 100%;
    height: 100px;
    /* border: 1px solid red; */
    background-color: black;
}
   .home_top{
       display: none;
   }
   .home_top2{
       /* border: 1px solid red; */
     display: flex;
     /* position: fixed; */
     /* top: 10px; */
   }
   .binokl_content{
    display: flex;
    flex-direction: column;
    /* max-height: 500px; */
   }
   .search{
    display: none;
   }
   .list{
    display: none;
   }
   .binokl_prosmotr{
     display: none;
   }
.binokl{
    width: 100%;
}
.binokl_content .binokl_filtr{
    width: 100%;
    max-height: 400px;
    min-height: 100px;
    /* border: 1px solid red; */
}
.binokl_content .binokl_item{
    width: 100%;
    /* border: 1px solid red; */
}
.binokl_content .binokl_item .brend{
    /* border: 1px solid red; */
    height: 200px;
    width: 100%;
}
.binokl_content .binokl_item .products_sort{
    /* border: 1px solid red; */
    min-height: 1300px;
    max-height: 1800px;
    margin-top: 60px;
}
.brend_foter{
    width: 90%;
    height: 160px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    background-color: #F7F8FB;
    overflow: hidden;
    list-style: none;
}
.brend_foter li{
    /* border: 1px solid red; */
    margin: 8px;
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: white; */
}
.brend_foter li img{
    width: 70%;
}
}
</style>