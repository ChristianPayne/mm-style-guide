<script>
  import Test from './lib/test.svelte';
  import mmLogo from './assets/modelmatch_logo_150ppi.png';
  import Maps from './lib/maps.svelte';

  import Core from './lib/core';
  import Components from './lib/components'

  let pages = {
    ...Core,
    ...Components,
    Maps: Maps,
  };

  let _page = pages[Object.keys(pages)[0]]
  let _pageName = Object.keys(pages)[0]

  let darkMode = true;

  function setPage (pageName) {
    _page = pages[pageName];
    _pageName = pageName;
  }

  function toggleDarkMode () {
    darkMode = !darkMode;
  }
</script>

<main class="{darkMode ? "dark": ""}">
  <div class="min-h-screen bg-mm-background dark:bg-mm-background-dark text-mm-text dark:text-mm-text-dark flex">
    <nav class="bg-mm-background-trim dark:bg-mm-background-trim-dark shadow-2xl p-1 sm:p-4 justify-items-center items-center min-w-1/3
    max-w-1/3 sm:min-w-1/4 sm:max-w-1/4">
      <div class="col-span-1fr md:flex font-medium items-center mb-4 cursor-pointer text-center justify-items-center">
        <img src={mmLogo} class="w-12 md:mr-2">
        <span class="text-xl">Model Match Style Guide</span>
      </div>
      <button class="mr-5 mb-2 w-full {darkMode ? "bg-mm-purple" : ""}" on:click={()=>{toggleDarkMode();}}>Dark Mode
        <!-- {darkMode ?
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg> 
          : 
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        } -->
      </button>
      <div class="flex flex-col">
        {#each Object.keys(pages) as page }
          <button class="mr-5 mb-2 w-full {_pageName === page ? "bg-mm-blue text-mm-background" : ""}" on:click="{()=>{setPage(page)}}">{page}</button>
        {/each}
      </div>
    </nav>

    <svelte:component class="" this={_page} />
  </div>
</main>

<style>
  button {
    @apply rounded-md px-4 py-2 ring-mm-blue hover:ring-1 hover:shadow-md text-center;
  }
</style>