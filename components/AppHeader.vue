<template>
  <header class="bg-gray-900 text-white shadow-lg">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎬</span>
          <span class="text-xl font-bold tracking-tight">AniSearch</span>
        </div>
        <div class="flex items-center gap-6">
          <NuxtLink
            to="/"
            class="text-gray-300 hover:text-white transition-colors font-medium"
            active-class="text-white"
          >
            Search
          </NuxtLink>
          <NuxtLink
            to="/watchlist"
            class="text-gray-300 hover:text-white transition-colors font-medium"
            active-class="text-white"
          >
            Watchlist (3)
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>
