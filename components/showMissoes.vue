<template>
     <div>
        <Modal @close="$emit('emit-close')">
            <h3 slot="header">Missoes</h3>
            <div class="painel-lista" slot="body">
                Conteudo
            </div>
        </Modal>
  </div>
</template>
<script>
    export default {
        name:"showMissoes",
        props:["missoes"],
        data() {
            return {
                showModal: false,
             }
        },
        methods:{
          /*adicionarNoMapa(index){
            this.$emit('emit-close')
          }*/
        },
        mounted() {}
    }
</script>