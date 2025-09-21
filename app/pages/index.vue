<template v-if="isLoaded">
    <main ref="scrollArea" id="scroll-area" class="font-fira overflow-x-hidden bg-gray-50 text-gray-800">
        <section class="px-8 2xl:px-20 h-max bg-cover" style="background-image: url('/images/headerBackground.jpg')"">
            <header class="text-xl py-8 text-white w-full flex justify-between">
                <LayoutHeader 
                    :name="'Sun Kimleng'"
                />
            </header>
            <!-- WELCOME SECTION LARGE -->
            <section class="hidden 2xl:flex text-xl text-white w-full justify-around z-10">
                <div data-aos="zoom-in" class="text-black text-4xl max-h-[600px] w-max flex flex-col justify-center">
                    <div class="h-max w-max">
                        <p class="h-full">Hi, I am</p>
                        <p class="text-6xl font-bold -mt-4">Sun Kimleng</p>
                        <p class="text-2xl mt-2 typing" >A WEB DEVELOPER FROM CAMBODIA.</p>
                    </div>
                </div>
                <div >
                    <img
                        data-aos="fade-right"
                        src="/images/kimleng2.png"
                        alt="myself"
                        class=" max-w-[600px] rounded"
                        loading="lazy"
                    />
                </div>
            </section>
            <!-- END OF WELCOME SECTION LARGE -->

            <!-- WELCOME SECTION SMALL-->
            <section class="flex 2xl:hidden z-100 text-xl text-white w-full flex-col justify-center py-4">
                <img
                    data-aos="fade-right"
                    src="/images/kimleng2.png"
                    alt="myself"
                    class="w-[300px] lg:w-[450px] rounded mx-auto"
                    loading="lazy"
                />
                <div data-aos="zoom-in" class="text-black text-4xl max-h-[600px] w-max mx-auto flex flex-col justify-center">
                    <div class="h-max w-full py-8 flex flex-col gap-4">
                        <p class="h-full w-max mx-auto">Hi, I am</p>
                        <p class="text-4xl font-bold w-max mx-auto">Sun Kimleng</p>
                        <p class="text-xl mt-2 typing w-max mx-auto" >A WEB DEVELOPER FROM CAMBODIA.</p>
                    </div>
                </div>
            </section>
            <!-- END OF WELCOME SECTION SMALL-->
        </section>

        <!-- INTRODUCTION SECTION -->
        <section class="p-8 lg:p-20 w-full text-white h-max bg-[#222831] text-xl">
            <div>
                <h1 data-aos="fade-right" class="text-4xl">ABOUT ME</h1>
                <p data-aos="fade-left" class="text-base mt-4">
                    I am a web developer with well‑developed coding skills and a strong ability to work under pressure while handling complex tasks. I’m highly adaptable, able to stay focused for long periods, and always ready to support my teammates. With solid research and critical‑thinking skills, I enjoy solving problems and finding efficient solutions. My experience includes building responsive static and dynamic websites, designing clean user interfaces, and developing REST API endpoints. I have hands‑on knowledge of both frontend and backend development, with practical experience using Vue.js, Nuxt, Tailwind CSS, Flask, Express.js, and Python. I’m passionate about continuous learning, exploring new technologies, and applying them to create scalable, maintainable systems. Currently, I am seeking a web development role where I can contribute my skills, grow professionally, and build impactful digital experiences.
                </p>
                <p class="mt-20 italic text-sm">"Words will be just words until you bring them to life"</p>
            </div>
        </section>
        <!-- END OF INTRODUCTION SECTION -->

        <!-- SKILL SECTIONS -->
        <section class="px-8 md:px-32 2xl:px-120 py-8 2xl:py-20 bg-[#dabf4c]">
            <h1 data-aos="flip-up" class="text-xl xl:text-4xl text-black font-bold w-max mx-auto border-4 p-5">SKILLS</h1>
            <div class="mt-12">
                <h1 data-aos="zoom-out" class="text-xl md:text-2xl text-black font-bold w-max mx-auto">EXPERIENCE & PRESENT USE</h1>
                <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-8 justify-item-center">
                    <div data-aos="zoom-in" v-for="(item, i) in usingList" class="w-full flex flex-col relative ">
                        <img :src="item.logo" class="w-16 mx-auto"/>
                        <div class="w-max mx-auto mt-2">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="mt-12">
                <h1 data-aos="zoom-out" class="text-xl md:text-2xl text-black font-bold w-max mx-auto">LEARNING</h1>
                <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-8 justify-item-center">
                    <div data-aos="zoom-in" v-for="(item, i) in learningList" class="w-full flex flex-col relative ">
                        <img :src="item.logo" class="w-16 mx-auto"/>
                        <div class="w-max mx-auto mt-2">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF SKILL SECTIONS -->

        <!-- PROJECT SECTIONS -->
        <section class="px-8 py-8 2xl:py-20 bg-[#dabf4c]">
            <h1 data-aos="flip-down" class="text-xl xl:text-4xl text-black font-bold w-max mx-auto border-4 p-5 mb-4">COLLABORATIVE PROJECTS</h1>

            <!-- GONOKA WEBSITE -->
            <section data-aos="zoom-out" class="grid grid-cols-1 gap-12 lg:p-10 mt-8">
                <!-- Project Card -->
                <div class="bg-[#222831] text-black rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <!-- Images (left) -->
                    <div class="grid grid-cols-2 gap-3 p-4">
                        <!-- Main image -->
                        <img
                        src="/images/projects/gonoka/photo-1.jpg"
                        alt="Main project image"
                        class="col-span-2 h-80 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka/photo-1.jpg`)"
                        />
                        <!-- Subs -->
                        <img
                        src="/images/projects/gonoka/photo-2.jpg"
                        alt="Sub image 1"
                        class="h-40 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka/photo-2.jpg`)"
                        />
                        <img
                        src="/images/projects/gonoka/photo-3.jpg"
                        alt="Sub image 2"
                        class="h-40 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka/photo-3.jpg`)"
                        />
                    </div>

                    <!-- Details (right) -->
                    <div class="group flex flex-col justify-center p-8 space-y-4 transition duration-500">
                        <h2 class="text-3xl font-bold text-white w-full">Gonoka Website</h2>
                        <p class="text-gray-500 leading-relaxed">
                        Gonoka is an ebook distribution & social media platform that encourage you to be the very best version of you by mean of reading.
                        </p>
                        <h3 class="text-xl font-semibold mb-2 text-gray-500">My Contribution:</h3>
                        <ul class="list-disc list-inside text-gray-500 space-y-1">
                            <li>implemented the frontend using Vue.Js, Flask, Tailwind CSS and other technologies.</li>
                            <li>Designed and implemented RESTful APIs using Flask, ensuring clean architecture, modular services, and maintainable code.</li>
                            <li>Developed well‑documented endpoints with consistent response structures</li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- END OF GONOKA WEBSITE -->

            <!-- GONOKA APP -->
            <section data-aos="zoom-out" class="grid grid-cols-1 gap-12 lg:p-10 mt-8">
                <!-- Project Card -->
                <div class="bg-[#222831] text-black rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <!-- Details (right) -->
                    <div class="group flex flex-col justify-center p-8 space-y-4 transition duration-500">
                        <h2 class="text-3xl font-bold text-white">Gonoka App</h2>
                        <p class="text-gray-500 leading-relaxed">
                        More than just an eBook platform — it’s a place where stories meet community. With Gonoka, you don’t just read; you connect, share, and grow. It combines the joy of discovering books with the power of social interaction, encouraging you to become the best version of yourself through the habit of reading.
                        </p>
                        <h3 class="text-xl font-semibold mb-2 text-gray-500">My Contribution:</h3>
                        <ul class="list-disc list-inside text-gray-500 space-y-1">
                            <li>Built and documented backend services in Flask and worked directly with mobile developers to align API responses with UI/UX requirements.</li>
                            <li>Delivered secure, scalable REST APIs in Flask, providing clear contracts and testing support so the mobile team could integrate features smoothly.</li>
                            <li>Developed well‑documented endpoints with consistent response structures</li>
                        </ul>
                    </div>
                        <!-- Images (left) -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 w-full">
                        <!-- Main image -->
                        <img
                        src="/images/projects/gonoka-app/photo-1.png"
                        alt="Main project image"
                        class="h-200 lg:h-140 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka-app/photo-1.png`)"
                        />
                        <!-- Subs -->
                        <img
                        src="/images/projects/gonoka-app/photo-2.png"
                        alt="Sub image 1"
                        class="hidden lg:block h-140 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka-app/photo-2.png`)"
                        />
                    </div>
                </div>
            </section>
            <!-- END OF GONOKA APP -->

            <!-- ENOTE -->
            <section data-aos="zoom-out" class="grid grid-cols-1 gap-12 lg:p-10 mt-8">
                <!-- Project Card -->
                <div class="bg-[#222831] text-black rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <!-- Images (left) -->
                    <div class="grid grid-cols-2 gap-3 p-4">
                        <!-- Main image -->
                        <img
                        src="/images/projects/gonoka-professional/photo-1.png"
                        alt="Main project image"
                        class="col-span-2 h-80 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka-professional/photo-1.png`)"
                        />
                        <!-- Subs -->
                        <img
                        src="/images/projects/gonoka-professional/photo-2.png"
                        alt="Sub image 1"
                        class="h-40 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka-professional/photo-2.png`)"
                        />
                        <img
                        src="/images/projects/gonoka-professional/photo-3.png"
                        alt="Sub image 2"
                        class="h-40 object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                        @click="openLightbox(`/images/projects/gonoka-professional/photo-3.png`)"
                        />
                    </div>

                    <!-- Details (right) -->
                    <div class="group flex flex-col justify-center p-8 space-y-4 transition duration-500">
                        <h2 class="text-3xl font-bold text-white w-full">Gonoka Professional (Web & App)</h2>
                        <p class="text-gray-500 leading-relaxed">
                        A digital publishing platform available on both web and mobile. It empowers authors to publish and manage their books online, while also providing a reporting system that allows them to post news, updates, and announcements directly to readers. The platform bridges the gap between writers and their audience, offering a seamless experience across website and app.
                        </p>
                        <h3 class="text-xl font-semibold mb-2 text-gray-500">My Contribution:</h3>
                        <ul class="list-disc list-inside text-gray-500 space-y-1">
                            <li>Developed frontend features with Vue.js and Tailwind CSS, ensuring responsive and accessible UI.</li>
                            <li>Implemented REST APIs with Flask, integrating PostgreSQL and collaborating with mobile developers for smooth cross‑platform functionality</li>
                            <li>Developed well-documented endpoints with consistent response structures</li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- END OF ENOTE -->

            <div class="text-black mt-8">“In addition to the projects showcased here, I have contributed to many more professional applications and systems. However, due to copyright restrictions and client permissions, I am unable to share screenshots or detailed visuals of those works. What I can highlight is the range of technologies I used, the problems I solved, and the impact I delivered.”</div>
            
        </section>
        <!-- END OF PROJECT SECTIONS -->

        <!-- SKILL SECTIONS -->
        <section class="px-8 md:px-32 2xl:px-120 py-8 2xl:py-20 bg-[#dabf4c]">
            <h1 data-aos="flip-up" class="text-xl xl:text-4xl text-black font-bold w-max mx-auto border-4 p-5">Contact Me</h1>
            <div class="mt-12">
                <article class="flex flex-col items-center space-y-4 py-10">
                    <h2 class="text-2xl font-bold">Connect with Me</h2>
                    <div class="flex space-x-6 text-2xl">
                        <!-- Telegram -->
                        <a href="https://t.me/lengleng4444" target="_blank" class="hover:text-blue-500">
                        <i class="fab fa-telegram"></i>
                        </a>
                        <!-- GitHub -->
                        <a href="https://github.com/Sun-Kimleng" target="_blank" class="hover:text-gray-800">
                        <i class="fab fa-github"></i>
                        </a>
                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/leng-leng" target="_blank" class="hover:text-blue-700">
                        <i class="fab fa-linkedin"></i>
                        </a>
                        <!-- Gmail -->
                        <a href="mailto:sunkimleng123@gmail.com" class="hover:text-red-500">
                        <i class="fas fa-envelope"></i>
                        </a>
                        <!-- Instagram -->
                        <a href="https://instagram.com/leng_lenggggg" target="_blank" class="hover:text-pink-500">
                        <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </article>
            </div>
        </section>
        <!-- END OF SKILL SECTIONS -->

        <!-- CV DOWNLOAD SECTIONS -->
        <section class="bg-[#dabf4c] w-full pb-20">
            <button
                data-aos="flip-up"
                @click="downloadCV"
                class="flex cursor-pointer w-max mx-auto items-center gap-2 px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition"
            >
                <i class="fas fa-download"></i>
                Download My CV
            </button>
        </section>
        <!-- END OF CV DOWNLOAD SECTIONS -->

        <!-- FULLSCREEN LIGHT BOX -->
        <div
            v-if="lightboxOpen"
            class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            @click.self="closeLightbox"
            @keyup.esc="closeLightbox"
            tabindex="0"
            ref="lightbox"
        >
            <img
                :src="activeSrc"
                alt="Fullscreen"
                class="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300"
            />
            <!-- Close button -->
            <button
                class="absolute top-6 right-6 text-white/80 hover:text-white text-2xl"
                @click="closeLightbox"
                aria-label="Close"
            >
                ×
            </button>
        </div>

        <!-- FOOTER -->
        <footer class="bg-black p-8 2xl:p-16 w-full text-white text-sm">
            <div @click="scrollToTop" data-aos="zoom-in" class="hover:underline w-max mx-auto cursor-pointer">Back to the top</div>
            <div data-aos="zoom-in" class="w-max mx-auto mt-4"><b>@2025 Sun Kimleng</b> All Rights Reserved.</div>
        </footer>
        <!-- END OF FOOTER -->
    </main>
</template>

<script setup>
    import { useTemplateRef, ref, onBeforeUnmount } from 'vue'

    const scrollArea    = useTemplateRef("scrollArea")
    
    const usingList     = ref([
        {
            name        : 'HTML'
            , logo      : '/images/language-icons/html.png' 
        },
        {
            name        : 'CSS'
            , logo      : '/images/language-icons/css.png' 
        },
        {
            name        : 'Javascript'
            , logo      : '/images/language-icons/js.png' 
        },
        {
            name        : 'Vue.js'
            , logo      : '/images/language-icons/vue.png' 
        },
        {
            name        : 'Python'
            , logo      : '/images/language-icons/python.png' 
        },
        {
            name        : 'Tailwind'
            , logo      : '/images/language-icons/tailwind.png' 
        },
        {
            name        : 'Git'
            , logo      : '/images/language-icons/git.png' 
        },
        {
            name        : 'Flask'
            , logo      : '/images/language-icons/flask.png' 
        },
        {
            name        : 'Express.js'
            , logo      : '/images/language-icons/express.png' 
        },
        {
            name        : 'Rest API'
            , logo      : '/images/language-icons/rest.png' 
        },
        {
            name        : 'Node.js'
            , logo      : '/images/language-icons/node.png' 
        },
        {
            name        : 'PostgreSQL'
            , logo      : '/images/language-icons/postgreSQL.png' 
        },
        {
            name        : 'Ubuntu'
            , logo      : '/images/language-icons/ubuntu.png' 
        },
        {
            name        : 'Nuxt.js'
            , logo      : '/images/language-icons/nuxt.png' 
        }
    ])

    

    const learningList     = ref([
        {
            name        : 'Java'
            , logo      : '/images/language-icons/java.png' 
        },
        {
            name        : 'Spring Boot'
            , logo      : '/images/language-icons/spring_boot.png' 
        },
        {
            name        : 'Docker'
            , logo      : '/images/language-icons/docker.png' 
        },
    ])

    const scrollToTop = () => {
        if (scrollArea.value) {
            window.scrollTo({ top: 0, behavior: 'smooth'})
        }
    }

    const lightboxOpen  = ref(false)
    const activeSrc     = ref('')
    const lightbox      = ref(null)

    function openLightbox(src) {
        activeSrc.value     = src
        lightboxOpen.value  = true

        requestAnimationFrame(() => {
            lightbox.value?.focus()
        })
    }

    function closeLightbox() {
        lightboxOpen.value  = false
        activeSrc.value     = ''
    }

    // optional: close on Ctrl+W safety or global Esc
    function handleKey(e) {   
        if (e.key === 'Escape') closeLightbox()
    }

    onMounted(() => window.addEventListener('keydown', handleKey))
    onBeforeUnmount(() => window.removeEventListener('keydown', handleKey))

    const downloadCV = async () => {
        const res   = await fetch('/pdfs/SunKimleng-WebDeveloper-CV.pdf')
        const blob  = await res.blob()
        const url   = URL.createObjectURL(blob)
        const a     = document.createElement('a')
        a.href      = url
        a.download  = 'SunKimleng-WebDeveloper-CV.pdf'
        document.body.appendChild(a)
        a.click()
        a.remove()
        URL.revokeObjectURL(url)
    }

    onMounted(() => {
        scrollToTop()

        
    })
    
</script>