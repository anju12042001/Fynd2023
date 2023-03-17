<script setup>
defineProps({
    msg: {
        type: String,
        required: true,
    },
});
</script>

<template>
<div class="container">
    <h1>hello everyone {{ msg }}</h1>
    <h2>
        You've successfully login to your project
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>+
        <a href="https://vuejs.org/" target="_blacnk" rel="noopener">Vue 3</a>.
    </h2>
</div>
</template>

<style>

.container{
    text-align: center;
}