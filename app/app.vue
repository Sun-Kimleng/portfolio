<template>
  <NuxtLayout>

      <NuxtPage />

      <transition name="fade">
          <div v-if="!isLoaded" class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <!-- Spinner -->
            <div class="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
            
            <!-- Text -->
            <p class="mt-6 text-gray-600 font-medium animate-pulse">
              Loading content...
            </p>
          </div>
      </transition>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
    // Wait until all assets (CSS, fonts, images) are ready
    isLoaded.value = true
  
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>