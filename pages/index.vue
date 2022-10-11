<template>
  <div class="cursor-aventure">
    <!-- Controles  -->
    <div id="controles">
        <!-- Controles Esquerdos (link para o mercado, missoes e info sobre os ataques)-->
        <div class="controles-esquerda">
            <!-- info do proximo ataque -->
            <div class="controles-esquerda-proximo-ataque proximo-ataque">
                <div class="controles-esquerda-proximo-ataque-label">
                    Proximo ataque em:
                </div>
                <div class="controles-esquerda-proximo-ataque-value">
                    {{ proximo_ataque_label }}
                </div>
            </div>
            <!-- link para o mercado e para as missoes -->
            <div class="controles-esquerda-links">
                <showMercado v-if="showMercado" @emit-close="showMercado = !showMercado"/>
                <!-- link para o mercado e para a rapoza -->
                <div @click="showMercado = !showMercado" class="controles-esquerda-links-mercado mercado-link pointer">
                </div>
                <!-- link missoes -->
                <div @click="showMissoes = !showMissoes" class="controles-esquerda-links-missao missao-link pointer">
                </div>
                <showMissoes v-if="showMissoes" @emit-close="showMissoes = !showMissoes"/>
            </div>
        </div>
        <!-- Controles Direitos (Info sobre a conta)-->
        <div class="controles-direita">
            <!-- visualizacao energia -->
            <div class="controles-direita-energia energia-link center pointer">
                <!-- visualizacao quantidade energia -->
                <div>100</div>
            </div>

            <!-- ferramentas (deixa pra depois por falta de material)-->
            <div class="controles-direita-ferramentas">
                <!-- item -->
                <div class="controles-direita-ferramentas-item">
                    <!-- label item -->
                    <div class="controles-direita-ferramentas-item-label">
                        Daily
                    </div>
                    <!-- value item -->
                    <div class="controles-direita-ferramentas-item-value">
                        {{ geracao.diario.toFixed(2) }}
                    </div>
                </div>
                <div class="controles-direita-ferramentas-item">
                    <!-- label item -->
                    <div class="controles-direita-ferramentas-item-label">
                        Monthly
                    </div>
                    <!-- value item -->
                    <div class="controles-direita-ferramentas-item-value">
                        {{ geracao.mensal.toFixed(1) }}
                    </div>
                </div>
                <div class="controles-direita-ferramentas-item">
                    <!-- label item -->
                    <div class="controles-direita-ferramentas-item-label">
                        Mined
                    </div>
                    <!-- value item -->
                    <div class="controles-direita-ferramentas-item-value">
                        {{ geracao.minerado.toFixed(1) }}
                    </div>
                </div>
                <button @click="showClaim()" class="controles-direita-ferramentas-button pointer">
                    claim
                </button>
            </div>
            <!-- Ilhas -->
            <div @click="" class="controles-direita-ilhas ilhas-link center pointer">
            </div>
            <!-- Marketplace -->
            <div @click="showMarketplace = !showMarketplace" class="controles-direita-marketplace marketplace-link center pointer">
            </div>
            <showMarketplace v-if="showMarketplace" @emit-close="showMarketplace = !showMarketplace"/>
        </div>
    </div>
    <!-- Game engine  -->
    <div id="game">
        <client-only>
            <Game/>
        </client-only>
    </div>
  </div>
</template>
<script>
    export default {
        asyncData() {
            return {
                showMissoes: false,
                showClaim: false,
                showIlhas: false,
                showMercado: false,
                showMarketplace:false,
                proximo_ataque: new Date('2022-12-01 12:00:00'),
                proximo_ataque_label:'00:00:00',
                geracao:{
                    diario: 0,
                    mensal: 0,
                    minerado: 0,
                }
            }
        },
        methods:{
        },
        beforeMount() {
            this.$nuxt.$on('acconts-change', (dados) => { 
                //let nonce = this.$Web3.toHash('hello world');
                this.$Web3.getSigner().signMessage(nonce).then(result=>{
                })
            });

            let moment_proximo_ataque = moment(this.proximo_ataque);
            setInterval(()=>{
              let diff = moment_proximo_ataque.diff( moment(new Date()) );
              this.proximo_ataque_label = Math.floor(moment.duration(diff).asHours()) + moment.utc( diff ).format(":mm:ss");
            },1800)
            
        },
    }
</script>
<style>
    .controles-direita-ferramentas-button{
        display: block;
        width: 84%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 12px;
        background-color: #6bc31b;
        outline: unset;
        border: unset;
        color: white;
        font-weight: bold;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 1s;
    }
    .controles-direita-ferramentas-button:hover{
        background-color: #1bc36e;
        transition: all 1s;
    }
    .controles-direita-ferramentas{
        background-color: #65ac2e;
        border-radius: 4px 4px 4px 4px;
        padding: 4px 0px 9px 0px;
        margin-bottom: 6px;
        margin-top: 4px;
        margin-right: 3px;
    }
    .controles-direita-ferramentas-item{}
    .controles-direita-ferramentas-item-label{
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 0.83rem;
        padding-top: 3px;
        margin-bottom: 3px;
    }
    .controles-direita-ferramentas-item-value{
        text-align: center;
        background-color: #3e9d52;
        color: white;
        font-weight: bold;
        font-size:0.7rem;
        border-radius: 2px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 3px;
        padding-bottom: 2px;
        width: 85%;
    }
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
    #game canvas,#game .canvas{
        width: 100%;
        height: 100vh;
    }
    .controles-esquerda-proximo-ataque{
        padding: 9px 57px 9px 10px;
    }
    .controles-esquerda-proximo-ataque-label{
        color:#eee;
        font-size: 0.6rem;
        font-weight: bold;
    }
    .controles-esquerda-proximo-ataque-value{
        color: #eee;
        font-size: 1.2rem;
        text-align: center;
        padding-top: 3px;
    }
    .controles-direita-ferramentas-button{

    }
</style>