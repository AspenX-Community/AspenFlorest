<template>
  <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="$emit('close')">
                    Fechar
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>
<script>
    export default {
        name:"modal",
        data() {
            return {}
        },
        methods:{},
        mounted() {}
    }
</script>
<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border-radius: 4px 4px 0px 0px;
  width: 300px;
  margin: 0px auto;
  background-color: #202540;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
    border-radius: 4px 4px 0px 0px;
    background-color: #333a64;
    padding: 7px 10px 5px 9px;
    font-weight: bold;
    font-size: 0.7rem;
}
.modal-footer {
    background-color: #333a64;
    padding: 6px 9px 7px 7px;
    font-weight: bold;
    font-size: 0.7rem;
}
.modal-header h3 {
  margin-top: 0;
  color: white;
}

.modal-body {
  margin: 20px 0;
  color: white;
}

.modal-default-button {
    display: block;
    background-color: #202540;
    outline: unset;
    border: unset;
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.8rem;
    cursor: pointer;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>