<script setup>
// Footer Oscar Family
const currentYear = new Date().getFullYear()

const isDev = import.meta.env.DEV === true

// Helper function to format build date
const formatBuildDate = (dateString) => {
  try {
    // Parse UTC timestamp (e.g., "2025-11-29T17:56:43")
    const utcDate = new Date(dateString + 'Z') // Ensure UTC interpretation

    // Get user's timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    // Format in user's timezone
    const formatter = new Intl.DateTimeFormat('sv-SE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: userTimeZone
    })

    return formatter.format(utcDate).replace(' ', ' ')
  } catch (error) {
    // Fallback if parsing fails
    return dateString
  }
}

const buildDate = isDev
  ? new Date().toLocaleString('sv-SE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).replace(' ', ' ')
  : (import.meta.env.VITE_BUILD_DATE ? formatBuildDate(import.meta.env.VITE_BUILD_DATE) : '')
</script>
<template>
    <footer class="bg-[#000] text-[#E0E0E0] py-10">
        <div class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0 flex items-center space-x-2">
                <i class="fa-solid fa-music text-xl text-[#f2c35a]"></i>
                <span class="font-semibold text-[#f2c35a]">Oscar Entertainment © 2025</span>
            </div>
            <div class="flex flex-wrap gap-4 items-center">
                <router-link to="/" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-house"></i></router-link>
                <router-link to="/studio" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-headphones"></i></router-link>
                <a href="https://www.facebook.com/oscarstudiohanoi" target="_blank" class="hover:text-[#f2c35a] transition"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/@oscarstudiohanoi" target="_blank" class="hover:text-[#f2c35a] transition"><i class="fa-brands fa-youtube"></i></a>
                <a href="https://www.tiktok.com/@oscarstudio.vn" target="_blank" class="hover:text-[#f2c35a] transition"><i class="fa-brands fa-tiktok"></i></a>
                <a href="mailto:contact@oscarfamily.vn" class="hover:text-[#f2c35a] transition"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://studio.oscarfamily.vn/contact" target="_blank" class="flex items-center text-[#f2c35a] py-2 font-bold shadow"><i class="fa-solid fa-headset"></i></a>
            </div>
        </div>
        <div class="text-center text-xs text-gray-500 mt-6">
            All Oscar Website system powered by <a href="https://akivn.net" target="_blank" class="text-[#0099cc] hover:underline">AkiNet</a>
            <div class="mt-2">
                <span class="text-xs text-gray-600">
                    {{ isDev ? 'Dev' : 'Build' }} {{ buildDate }}
                </span>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer i {
    transition: color 0.2s;
}
</style>
