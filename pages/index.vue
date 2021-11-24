<template>

  <div class="cursor-aventure">
    <!-- Controles  -->
    <div id="controles">
        <!-- Controles Esquerdos (link para o mercado, missoes e info sobre os ataques)-->
        <div class="controles-esquerda">
            <!-- info do proximo ataque -->
            <div class="controles-esquerda-proximo-ataque proximo-ataque"></div>
            <!-- link para o mercado e para as missoes -->
            <div class="controles-esquerda-links">
                <!-- link para o mercado e para a rapoza -->
                <div class="controles-esquerda-links-mercado mercado-link pointer">
                </div>
                <!-- link mercado -->
                <div class="controles-esquerda-links-missao missao-link pointer">
                </div>
            </div>
        </div>
        <!-- Controles Direitos (Info sobre a conta)-->
        <div class="controles-direita">
            <!-- visualizacao energia -->
            <div class="controles-direita-energia energia-link center pointer">
                <!-- visualizacao qauntidade energia -->
                <div>100</div>
            </div>
            <!-- visualizacao material -->
            <div class="controles-direita-material material-link center pointer">
                <!-- visualizacao quantidade de material -->
                <div>100</div>
            </div>
            <!-- ferramentas (deixa pra depois por falta de material)-->
            <div class="controles-direita-ferramentas">
                <!-- item -->
                <div>
                    <!-- imagem item -->
                    <div>
                    </div>
                    <!-- quantidade item -->
                    <div>
                    </div>
                </div>
            </div>
            <!-- Ilhas -->
            <div class="controles-direita-ilhas ilhas-link center pointer">
            </div>
            <!-- Marketplace -->
            <div class="controles-direita-marketplace marketplace-link center pointer">
            </div>
        </div>
    </div>
    <!-- Game engine  -->
    <div id="game">
        <Game/>
    </div>
  </div>
</template>
<style>
    #controles{
        z-index: 2;
    }
    .controles-esquerda,.controles-direita{
        position: absolute;
        padding-top: 9px;
    }
    .controles-esquerda{
        left: 0px;
        padding-left:7px;
    }
    .controles-esquerda-proximo-ataque{
        width: 178px;
        height: 65px;
    }
    
    .controles-esquerda-links{
        bottom: 0;
        position: fixed;
        padding: 4px 2px;
    }
    .controles-esquerda-links-missao,.controles-esquerda-links-mercado{
        width: 116px;
        height: 38px;
        margin-right: 6px;
        display: inline-block;
    }
    .controles-esquerda-links-missao{
        width: 107px;
    }
    .controles-direita{
        right: 0px;
        padding-right:7px;
    }
    .controles-direita-energia{
        width: 143px;
        height: 54px;
        display: block;
        padding: 18px 50px 13px 21px;
        text-align: center;
        color: white;
        font-weight: bold;
        margin-bottom: 7px;
    }
    .controles-direita-material{
        width: 143px;
        height: 54px;
        display: block;
        padding: 18px 50px 13px 21px;
        text-align: center;
        color: white;
        font-weight: bold;
        margin-bottom: 7px;
    }
    .controles-direita-ilhas{
        width: 100px;
        height: 102px;
        margin-bottom: 7px;
    }
    .controles-direita-marketplace{
        width: 134px;
        height: 48px;
        display: block;
        padding: 20px 50px 13px 21px;
        text-align: center;
        color: white;
        font-weight: bold;
    }
    #game{
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        overflow: hidden;
        display: block;
        z-index: 0;
        background-color: #d7faf5;
    }
    #game canvas{
        width: 100%;
        height: 100vh;
    }
</style>
<script>
    export default {
        asyncData() {
            return { }
        },
        beforeMount() {
            this.$nuxt.$on('acconts-change', (dados) => { 
                console.log("Hello!",dados)
                console.log(this.$Web3.ethers.utils);
                console.log(this.$Web3.ethers.utils.arrayify)
                
                let nonce = this.$Web3.toHash('hello world');
                console.log("NONCE: ",nonce);
                this.$Web3.getSigner().signMessage(nonce).then(result=>
                    console.log("signMessage: ",result))

            });
        }
    }
</script>
