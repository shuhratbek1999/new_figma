<template>
    <div class="footer">
        <div class="foter_content">
            <div class="foter_item">
                © 2022 Бинокль.Все права защищены.
            </div>
            <div class="foter_item">
                <div class="item_1">Политика конфиденциальности</div>
                <div class="item_1">Условия соглашения</div>
            </div>
            <div class="foter_item">Карта сайта</div>
        </div>
    </div>
</template>

<style scoped>
.footer{
    width: 100%;
    height: 60px;
    background-color: #F2F5F9;
    display: flex;
    justify-content: center;
}
.footer .foter_content{
    width: 86%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.foter_content .foter_item{
    /* width: 33%; */
    /* border: 1px solid red; */
    display: flex;
    font-family: sans-serif;
}
.foter_content .foter_item .item_1{
    margin: 0px 12px;
}
@media(max-width: 360px){
.footer{
    width: 100%;
    height: 100px;
    background-color: #F2F5F9;
    display: flex;
    justify-content: center;
}
.footer .foter_content{
    width: 86%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}
.foter_content .foter_item{
    /* width: 33%; */
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
}
.foter_content .foter_item .item_1{
    margin: 0px;
}
}

@media(max-width: 412px){
.footer{
    width: 100%;
    height: 100px;
    background-color: #F2F5F9;
    display: flex;
    justify-content: center;
}
.footer .foter_content{
    width: 86%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}
.foter_content .foter_item{
    /* width: 33%; */
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
}
.foter_content .foter_item .item_1{
    margin: 0px;
}
}
</style>