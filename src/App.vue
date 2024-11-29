<!-- <script setup lang="ts"></script> -->

<template>
  <nav class="p-4 bg-gray-100">
    <RouterLink to="/" class="px-4">Home</RouterLink>
    <RouterLink to="/test" class="px-4">Test Page</RouterLink>
    <RouterLink to="/random-page" class="px-4">404 Page Test</RouterLink>
  </nav>

  <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
  <nav>
    <!-- <RouterLink to="/">Go to Home</RouterLink> -->
    <!-- <RouterLink to="/test">test page</RouterLink> -->
    <!-- <RouterLink to="/about">Go to About</RouterLink> -->
  </nav>
  <main>
    <RouterView />
  </main>

  <!-- PUT FOOTER -->
</template>
