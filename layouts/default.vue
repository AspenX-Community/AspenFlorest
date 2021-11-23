<template>
  <div>
    <!--<nav>
        <button id="btnConectarWallet" class="btn" @click="contractConnect">Connet Wallet</button>
    </nav>-->
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<style>
    #btnConectarWallet{
        float: right;
    }
</style>
<script>
    export default {
        data() {
            return {
                acconts:null
             }
        },
        methods:{
            async contractConnect() {
                
                if ( await this.isEthereumSupported() ) {

                    this.$nuxt.$emit('acconts-change', this.acconts);

                }
            },
            /*
             *  Verifica se o browser suporta Web3
             *  retornando true e false, e preenchedos as carteiras 
             */
            async isEthereumSupported() {
                // MetaMask
                if (window.ethereum) {
                    this.$Web3.setProvider(window.ethereum);
                // Dapp para browsers Legados...
                } else if (window.web3) {
                    this.$Web3.setProvider(web3.currentProvider);
                // Nao suporta 
                } else {
                    window.open('https://metamask.io/', '_blank');
                    return false;
                }

                try {

                    this.acconts = await this.$Web3.getProvider().send("eth_requestAccounts")
                    
                    // le o endereco da carteira do assinante
                    //this.acconts = await this.$Web3.getSigner().getAddress();
                    
                    return true;

                } catch(error) {
                    console.log(error);
                    return false;
                }
            }
        },
        mounted() {}
    }
</script>