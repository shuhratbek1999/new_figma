<template>
    <div class="brend">
        <slot name="brend_top">
            <div class="brend_top">
                <div class="top_item">Бренды</div>
                <div class="top_item all">Все бренды</div>
            </div>
        </slot>
        <slot name="brend_foter">
          <ul class="brend_foter">
             <li><img src="../assets/6.png" alt=""></li>
             <li><img src="../assets/3.png" alt=""></li>
             <li><img src="../assets/4.png" alt=""></li>
             <li><img src="../assets/5.png" alt=""></li>
             <li><img src="../assets/6.png" alt=""></li>
          </ul>
        </slot>
    </div>
</template>

<style scoped>
.brend{
    width: 100%;
    height: 280px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    /* margin: 0px !important; */
}
.brend .brend_top{
    width: 85%;
    display: flex;
    margin: 0px 0px 10px 0px;
}
.top_item{
    width: 50%;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
}
.all{
    font-weight: 500 !important;
    font-size: 16px !important;
    text-align: right !important;
}
.brend .brend_foter{ 
    width: 85%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
}
.brend_foter li{
    width: 150x;
    height: 100px;
    /* padding: 0px 30px; */
    /* border: 1px solid red; */
}

@media(max-width: 360px){
.brend{
    width: 350px !important;
    height: 300px !important;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    /* margin: 0px !important; */
}
.brend .brend_top{
    width: 340px;
    display: flex;
    margin: 0px 0px 10px 0px;
}
.top_item{
    width: 50%;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
}
.all{
    font-weight: 500 !important;
    font-size: 16px !important;
    text-align: right !important;
}
.brend .brend_foter{ 
    width: 340px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
    overflow-y: hidden;
}
.brend_foter li{
    width: 50x !important;
    height: 100px;
    padding: 0px;
    margin: 5px;
    /* border: 1px solid red; */
}
.brend_foter li img{
    border-radius: 10px;
    width: 150px;
}
}

@media(max-width: 412px){
.brend{
    width: 100% !important;
    height: 300px !important;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    /* margin: 0px !important; */
}
.brend .brend_top{
    width: 99%;
    display: flex;
    margin: 0px 0px 10px 0px;
    /* border: 1px solid red; */
}
.top_item{
    padding: 0px 20px;
    width: 50%;
    text-align: left;
    font-weight: 600;
    font-size: 20px;
}
.all{
    font-weight: 500 !important;
    font-size: 16px !important;
    text-align: right !important;
}
.brend .brend_foter{ 
    width: 99%;
    height: 220px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    overflow-y: hidden;
    /* border: 1px solid red; */
}
.brend_foter li{
    /* border: 1px solid red; */
    width: 45% !important;
    max-height: 300px;
    padding: 0px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
.brend_foter li img{
    border-radius: 10px;
    width: 150px;
}
}
</style>