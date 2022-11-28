<template>
    <div class="main-layout-container">
        <Header/>

        <div class="main-content">
            
        </div>

        <Footer/>
    </div>
</template>
<script>
import Header from './header.vue';
import Footer from './footer.vue'
export default {
    name: 'main-layout',
    components: {Header, Footer}
}
</script>