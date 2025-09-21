<template>

    <section class="text-black font-bold">
        <img src="/images/logo.png" class="w-16 -ml-2 -mt-2"/>
    </section>

    <section>

        <div class="hidden 2xl:block w-max">
            <div class="flex gap-8 text-black">
                <a data-aos="flip-down" href="#" class="hover:underline">About Me</a>
                <a data-aos="flip-down" href="#" class="hover:underline">Skills</a>
                <a data-aos="flip-down" href="#" class="hover:underline">Projects</a>
                <a data-aos="flip-down" class="bg-white text-black rounded-2xl px-4 py-2 -mt-2 cursor-pointer">Contact me</a>
            </div>
        </div>
        
        <!-- Toggle Right Side Bar -->
        <div class="block 2xl:hidden">

            <!-- Trigger button -->
            <button @click="open = true" class="w-max cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>

            <!-- Invisible click-catcher -->
            <transition name="slide">
                <div v-if="open" class="z-100 fixed inset-0" @click="closeModal">
                    <!-- Slide-in panel -->
                    <transition name="slide">
                        <div v-if="open" class="absolute top-0 right-0 w-80 h-full bg-black  shadow-lg p-6 overflow-y-auto" @click.stop>
                            <div class="flex justify-between items-center border-b pb-3">
                                <div></div>
                                <button @click="closeModal" class="text-gray-500 hover:text-black">✕</button>
                            </div>

                            <div class="w-full text-white flex flex-col gap-2 mt-4">
                                <a href="#" class="text-center w-full cursor-pointer hover:bg-gray-500 p-2">About Me</a>
                                <a href="#" class="text-center w-full cursor-pointer hover:bg-gray-500 p-2">Skills</a>
                                <a href="#" class="text-center w-full cursor-pointer hover:bg-gray-500 p-2">Projects</a>
                                <a href="#" class="text-center w-full cursor-pointer hover:bg-gray-500 p-2">Contact me</a>
                            </div>
                        </div>
                    </transition>
                </div>
            </transition>
        </div>
    </section>
</template>

<script setup>
    
    import { ref } from 'vue'

    const open = ref(false)

    defineProps({
        name : String
    })

    const closeModal = () => {
        open.value = false
    }

    
    
</script>