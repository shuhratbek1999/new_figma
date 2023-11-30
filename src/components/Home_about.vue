<template>
    <div class="about_home">
        <div class="content">
         <div class="about_title">
            Магазин оптических приборов Tele-Optics.Ru
        </div>
        <div class="about_des">
            Наша компания существует на рынке оптических приборов более 5 лет. За это время мы сделали умнее и 
            счастливие огромное количество людей. Как показало время, нельзя постоянно быть одинаковыми и 
            удовлетворять запросы самых требовательных покупателей. Теперь мы предстаем перед Вами в новом облике, 
            с новыми подходами, новым внешним видом, новейшим функционалом, который сделает Ваше время, проведенное
             у нас, не только приятным, но и полезным!
        </div>
        <div class="list_title">
            Наша компания ставит перед собой только реальные цели:
        </div>
        <ul class="list">
            <li>улучшение соотношения цена-качество путем предоставления скидок постоянным клиентам;</li>
            <li>многообразие возможностей доставки и оплаты Ваших покупок;</li>
            <li>увеличение количества дополнительных услуг;</li>
            <li>сотрудничество с самыми известными производителями оптических приборов и развивающих игрушек</li>
            <li>грамотные консультации по всему представленному ассортименту;</li>
            <li>обеспечения безупречного качества поставляемых товаров</li>
        </ul>
        </div>
    </div>
</template>

<style scoped>
.about_home{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content{
    width: 86%;
    /* border: 1px solid red; */
}
.content .about_title{
    font-weight: 600;
    font-size: 30px;
    font-family: sans-serif;
    margin: 10px 0px;
}
.content .about_des{
    font-family: sans-serif;
}
.content .list_title{
    font-weight: 600;
    font-size: 18px;
    font-family: sans-serif;
    margin: 15px 0px;
}
.content .list{
    margin-left: 15px;
}
.content .list li{
    margin: 10px 0px;
     font-family: Arial, Helvetica, sans-serif;
}
@media(max-width: 360px){
.about_home{
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content{
    width: 86%;
    /* border: 1px solid red; */
}
.content .about_title{
    font-weight: 600;
    font-size: 18px;
    font-family: sans-serif;
    margin: 10px 0px;
}
.content .about_des{
    font-family: sans-serif;
}
.content .list_title{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif;
    margin: 15px 0px;
}
.content .list{
    margin-left: 15px;
}
.content .list li{
    margin: 10px 0px;
    font-family: Arial, Helvetica, sans-serif;
}
}

@media(max-width: 412px){
.about_home{
    width: 100%;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
}
.content{
    width: 86%;
}
.content .about_title{
    font-weight: 600;
    font-size: 18px;
    font-family: sans-serif;
    margin: 10px 0px;
}
.content .about_des{
    font-family: sans-serif;
}
.content .list_title{
    font-weight: 600;
    font-size: 16px;
    font-family: sans-serif;
    margin: 15px 0px;
}
.content .list{
    margin-left: 15px;
}
.content .list li{
    margin: 10px 0px;
    font-family: Arial, Helvetica, sans-serif;
}
}
</style>