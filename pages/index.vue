<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-6">Anime Search</h1>

    <div class="mb-8">
      <div class="flex gap-3">
        <input
          type="text"
          value="Attack on Titan"
          placeholder="Search for anime..."
          class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
        />
        <button
          class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Attack on Titan -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div class="relative">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg" alt="Attack on Titan" class="w-full h-56 object-cover" />
          <div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">★ 85%</div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-1">Attack on Titan</h3>
          <p class="text-sm text-gray-500 mb-2">TV · 25 eps · FINISHED</p>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">Several hundred years ago, humans were nearly exterminated by titans.</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Action</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Drama</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Fantasy</span>
          </div>
        </div>
      </div>

      <!-- Fullmetal Alchemist: Brotherhood -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div class="relative">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-KJTQz9AIm6Wk.jpg" alt="Fullmetal Alchemist: Brotherhood" class="w-full h-56 object-cover" />
          <div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">★ 90%</div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-1">Fullmetal Alchemist: Brotherhood</h3>
          <p class="text-sm text-gray-500 mb-2">TV · 64 eps · FINISHED</p>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">Edward and Alphonse Elric search for the Philosopher's Stone to restore their bodies.</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Action</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Adventure</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Drama</span>
          </div>
        </div>
      </div>

      <!-- Demon Slayer -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div class="relative">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101922-PEn1CTc93blC.jpg" alt="Demon Slayer: Kimetsu no Yaiba" class="w-full h-56 object-cover" />
          <div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">★ 83%</div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-1">Demon Slayer: Kimetsu no Yaiba</h3>
          <p class="text-sm text-gray-500 mb-2">TV · 26 eps · RELEASING</p>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Action</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Adventure</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Fantasy</span>
          </div>
        </div>
      </div>

      <!-- Your Name -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div class="relative">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21519-fPhvy69vnQqS.jpg" alt="Your Name." class="w-full h-56 object-cover" />
          <div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">★ 86%</div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-1">Your Name.</h3>
          <p class="text-sm text-gray-500 mb-2">MOVIE · 1 eps · FINISHED</p>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">Mitsuha and Taki discover they are swapping bodies and set out to meet each other.</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Drama</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Romance</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Supernatural</span>
          </div>
        </div>
      </div>

      <!-- Jujutsu Kaisen -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div class="relative">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113415-bbBWj4pEFseh.jpg" alt="JUJUTSU KAISEN" class="w-full h-56 object-cover" />
          <div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">★ 85%</div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-1">JUJUTSU KAISEN</h3>
          <p class="text-sm text-gray-500 mb-2">TV · 24 eps · RELEASING</p>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">Yuji Itadori joins a secret organization of Jujutsu Sorcerers to kill a powerful Curse.</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Action</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Drama</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Supernatural</span>
          </div>
        </div>
      </div>

      <!-- Spirited Away -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div class="relative">
          <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx199-pUFYPHhItLBO.jpg" alt="Spirited Away" class="w-full h-56 object-cover" />
          <div class="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-500">★ 87%</div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-1">Spirited Away</h3>
          <p class="text-sm text-gray-500 mb-2">MOVIE · 1 eps · FINISHED</p>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">Chihiro wanders into a magical world of spirits and must find a way to free herself and her parents.</p>
          <div class="flex flex-wrap gap-1.5">
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Adventure</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Drama</span>
            <span class="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">Fantasy</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
