<template>
  <div>
    <Modal @close="$emit('emit-close')">
        <h3 slot="header">Mochila</h3>
        <div class="painel-lista" slot="body">
          <div class="items">
            <div class="item movendo-cursor" v-for="(item, index) in listItems" @click="adicionarNoMapa(index)">
              <div class="content">
                <img :src="item.entity.icon" alt="" title="">
              </div>
            </div>
          </div>
          <h4 v-if="listItems.length < 1" class="center">
              Sem items na Carteira!
          </h4>
        </div>
    </Modal>
  </div>
</template>
<script>
    export default {
        name:"mochila",
        props:["listItems"],
        data() {
            return {
                showModal: false,
             }
        },
        methods:{
          adicionarNoMapa(index){
            this.$emit('emit-adicionar',index);
            this.$emit('emit-close')
          }
        },
        mounted() {}
    }
</script>
<style>
.painel-lista{
  padding: 2px 13px;
}
.items{
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 0px;
  padding-bottom: 32px;
}
.items .item{
  border: none;
  border-radius: 16px;
  padding: 3px;
  margin: 4px;
  background-color: rgb(84, 92, 143);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  height: min-content;
}
.items .item .content{
  border: 0;
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  min-width: 83px;
  text-align: center;
}
.items .item .content img{
  height: 79px;
  object-fit: cover;
  object-position: 0px 0px;
  image-rendering: pixelated;
  transform: translate3d(0px, 0px, 0px);
  border: 0;
  font-size: 100%;
  font: inherit;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
</style>