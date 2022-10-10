<template>
    <div class="infoEntity">
        <div class="infoEntityTitle"> {{ entity.nome }}</div>
        <div class="infoEntityImg">
            <div class="infoEntityProdutivity">
                <template v-for="star in (entity.produtividade*5)">
                    <span  data-icon=""></span>
                </template>
            </div>
            <img :src="entity.icon" alt="" title=""> 
        </div>
        <div class="infoEntityDesc"> {{ entity.descrisao }} </div>
        <div class="infoEntityDesc"> 
            <button data-icon="1" class="btn"> Guardar </button>
            <button data-icon="I" class="btn"> Usar </button>
        </div>
    </div>
</template>
<script>
    export default {
        name:"info",
        props:["entity"],
        data() {
            return {}
        },
        mounted() {}
    }
</script>
<style>
    .infoEntity{
        position: absolute;
        min-width: 138px;
        right: 0;
        bottom: 0;
        background-color: rgb(84 92 143);
        border-radius: 4px 4px 4px 4px;
        padding: 4px 0px 9px 0px;
        margin-bottom: 6px;
        margin-top: 4px;
        color: #fff;
        margin: 0px 12px 5px 0px;
    }
    .infoEntityTitle{
        font-weight: 700;
		padding: 7px 10px 5px 9px;
		font-weight: bold;
		font-size: 0.8rem;
    }
    .infoEntityImg{
        margin: 5px;
        padding: 5px;
        border-radius: 6px;
        background-color: rgb(84 92 143);
    }
    .infoEntityImg img{
        height: 79px;
        object-fit: cover;
        object-position: 0px 0px;
        image-rendering: pixelated;
        transform: translate3d(0px, 0px, 0px);
        border: 0;
        font-size: 100%;
        font: inherit;
        margin-left: auto;
        margin-right: auto;
        display: block;
        vertical-align: baseline;
    }
    .infoEntityDesc{
        font-weight: 700;
		padding: 7px 10px 5px 9px;
		font-size: 0.6rem;
        word-break: break-word;
    }
</style>