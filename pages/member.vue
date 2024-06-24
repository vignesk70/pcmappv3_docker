<template>
    <div class="p-4 sm:h-52 md:h-80 bg-green-200 md:mx-auto">
     <div class="text-3xl font-bold p-4 bg-blue-500  w-64  text-center  
     rounded-lg text-green-400 border-2 border-white">Hello world</div>
    {{ data.member }} {{ data.exit }} {{ data.calc }} xx- {{ data.product }}
    </div>
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/member')


</script>