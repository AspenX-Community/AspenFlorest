<template>
  <div ref="renderer" class="canvas" v-bind:class="{ 'movendo-cursor': movendo.status, 'removendo-cursor': removendo.status }">
    <div class="controlles">
      <div class="controlle resize-link"  @click="ativarMovendo"></div>
      <div class="controlle remover-link" @click="ativarRemovendo"></div>
      <div class="controlle mochila-link" @click="ativarMochila">
        <div class="controlle-mochila-notificacao">
          {{ items.length  }}
        </div>
      </div>
    </div>
    <mochila v-if="showModal" :listItems="items" @emit-adicionar="colocarNoJogo" @emit-close="showModal = !showModal"></mochila>
  </div>
</template>
<script>

    export default {
        data() {
            return {
                acconts:null,
                items:[],
                movendo:{
                  status:false,
                  listener:[]
                },
                removendo:{
                  status:false,
                  listener:[]
                },
                showModal: false
             }
        },
        methods:{
           colocarNoJogo(indexItem){

             
             this.removendo.status = false;
             this.movendo.status = true;
             this.items[indexItem].figure.visible = true;

            console.log(this.items[indexItem]);
            
            setTimeout(()=>{

              let index = this.$Game.onSelecionar((objeto,prioridade)=>{

                if(objeto.entity.movivel)return;


                this.items[indexItem].figure.position.x = objeto.figure.position.x;
                this.items[indexItem].figure.position.y = objeto.figure.position.y;

                if(prioridade < 1){
                  this.$Game.onSelecionarRemover(index);
                  this.removendo.status = false;
                  this.movendo.status = false;

                  this.items.splice( indexItem, 1 );
                  console.log(this.items);
                  this.movendo.status = false;
                  this.movendo.listener.forEach(indice=>{
                    this.$Game.onSelecionarRemover(indice);
                  })
                }

              });

              this.movendo.listener.push(index);


            }, 400);

             // Removendo todos os indices
            this.removendo.listener.forEach(indice=>{
              this.$Game.onSelecionarRemover(indice);
            })

           },
           ativarMochila(){
             this.showModal = true;
             this.movendo.status = false;
             this.removendo.status = false;
             this.movendo.listener.forEach(indice=>{
                this.$Game.onSelecionarRemover(indice);
              });
              this.removendo.listener.forEach(indice=>{
                this.$Game.onSelecionarRemover(indice);
              })
           },
           ativarMovendo(){
            this.removendo.status = false;
            this.movendo.status = !this.movendo.status;

            if(this.movendo.status){
              let objeto_selecionado = false;            
              let index = this.$Game.onSelecionar((objeto,prioridade)=>{
                if( prioridade > 0 && !objeto_selecionado)return;

                if( !objeto.entity.movivel && !objeto_selecionado)return;

                if( !objeto_selecionado )return objeto_selecionado = objeto;

                objeto_selecionado.figure.position.x = objeto.figure.position.x;
                objeto_selecionado.figure.position.y = objeto.figure.position.y;
                if(prioridade < 1){
                  this.$Game.onSelecionarRemover(index);
                  this.removendo.status = false;
                  this.movendo.status = false; 
                }
              })
              this.movendo.listener.push(index);
             // Removendo todos os indices
            }else{
              this.movendo.status = false;
              this.movendo.listener.forEach(indice=>{
                this.$Game.onSelecionarRemover(indice);
              })
            }
            this.removendo.listener.forEach(indice=>{
              this.$Game.onSelecionarRemover(indice);
            })
            //this.$Game.onSelecionarRemover(index);

           },
           ativarRemovendo(){
             this.movendo.status = false;
             this.removendo.status = !this.removendo.status;

             if(this.removendo.status){
              let index = this.$Game.onSelecionar((objeto,prioridade)=>{
                if( prioridade > 0 )return;
                if( !objeto.entity.movivel)return;
                
                objeto.figure.visible = false;

                this.items.push(objeto);

                /* Codigo para a mochila */

              })
              this.removendo.listener.push(index);
             // Removendo todos os indices
            }else{
              this.removendo.status = false;
              this.removendo.listener.forEach(indice=>{
                this.$Game.onSelecionarRemover(indice);
              })
            }
            this.movendo.listener.forEach(indice=>{
              this.$Game.onSelecionarRemover(indice);
            })
           }
        },
        mounted() {
            
            var gameRender = this.$refs['renderer'];
            var load = require;
            this.$Game.build(gameRender, window.innerWidth, window.innerHeight);

            window.addEventListener('resize', () => { 
              
              this.$Game.resize( window.innerWidth, window.innerHeight);
              
            });
           
        }
    }
</script>
<style>
.controlles{
    position: fixed;
    bottom: 0;
    z-index: 6;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 18vw;
    height: auto;
    min-height: 17px;
    max-height: 72px;
    margin-left: calc( 50vw - 9vw);
    background-color: transparent;
   
}
.controlles .controlle{
    display: inline-block;
    width: 30%;
    background-color: transparent;
    min-height:40px;
    cursor: pointer;
    background-size: contain;
    height: 100%;
    transition: 1s all;
}
.controlle.remover-link{
  min-height:37px;
}
.controlles .controlle:hover{
  transform: scale(1.3); 
  transition: 1s all;
}
.controlle-mochila-notificacao{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    display: inline-block;
    margin-left: 10px;
    padding-top: 2.5px;
    padding-left: 1.3px;
    padding-right: 1px;
    background-color: #1b7dc3;
    color: white;
    text-align: center;
    font-size: 0.86em;
    vertical-align: middle;
}
</style>