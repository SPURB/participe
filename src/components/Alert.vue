<template>
   <div id="alert" v-if="show" @click="close">
    <div class="content-alert" :class="`border-${type}`">
        <i :class="`${icon} icon`">
            <span>chat</span>
        </i>
        <div :class="`alert-${type}`" data-cy="alert_component">        
            {{message}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "alert-component",
    data: () => ({
        show: false,
        type: 'error',
        message: '',
        icon: ''
    }),
    created () {
        this.$root.$on('Notification::show', payload => {
        this.show = true
        this.type = payload.type
        this.message = payload.message
        this.icon = payload.icon
        this.border = payload.border
        setTimeout(() => { this.close() }, payload.timeout || 10000) })
    },
    methods: {
        close () {
            this.message = ''
            this.type = 'error'
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
#alert {
    background-color: rgba(0, 0, 0, 0.747);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: auto;
    z-index: 3;

    .content-alert {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
        width: 350px;
        height: 150px;
    }
}
.alert-accept {
    color: rgb(8, 214, 8);
}
.alert-error, .icon-incorreto {
    color: red;
}

.border-error {
    border: 2px solid red;
}

</style>
