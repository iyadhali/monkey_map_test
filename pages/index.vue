<template>
  <div class=" relative h-screen overflow-hidden">

    <OpenLayersMap  class="w-full  h-full overflow-hidden shadow" />
  </div>
</template>


<script lang="ts" setup>
const isLoading = ref(true)





onMounted(async () => {
  await delay()
  isLoading.value = false
  console.log('the component is now mounted.')
})




definePageMeta({
    layout: 'dashboard'
})

</script>