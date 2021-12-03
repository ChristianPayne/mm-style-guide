<script>
  import mmLogo from './assets/modelmatch_logo_150ppi.png';
  
  import Core from './lib/core';
  import Components from './lib/components'
  import Maps from './lib/maps.svelte';

  let pages = {
    ...Core,
    ...Components,
    Maps: Maps,
  };

  let _page = pages[Object.keys(pages)[0]]
  let _pageName = Object.keys(pages)[0]

  let darkMode = false;

  function setPage (pageName) {
    _page = pages[pageName];
    _pageName = pageName;
  }

  function toggleDarkMode () {
    darkMode = !darkMode;
  }
</script>

<main class="{darkMode ? "dark": ""}">
  <div class="flex min-h-screen bg-mm-background dark:bg-mm-background-dark text-mm-text dark:text-mm-text-dark transition-colors duration-500">

    <nav class="bg-mm-background-trim dark:bg-mm-background-trim-dark shadow-2xl p-1 sm:p-4 justify-items-center items-center
    w-64">
      <div class="md:flex font-medium items-center mb-4 text-center justify-items-center">
        <img src={mmLogo} class="w-12 md:mr-2">
        <span>Model Match Style Guide</span>
      </div>
      <button class="mr-5 mb-2 w-full {darkMode ? "bg-mm-purple" : ""}" on:click={()=>{toggleDarkMode();}}>Dark Mode
      </button>
      <div class="flex flex-col">
        {#each Object.keys(pages) as page }
          <button class="mr-5 mb-2 w-full {_pageName === page ? "bg-mm-blue text-mm-background" : ""}" on:click="{()=>{setPage(page)}}">{page}</button>
        {/each}
      </div>
    </nav>

    <div class="flex-1">
      <svelte:component this={_page} />
    </div>
  </div>
</main>

<style>
  button {
    @apply rounded-md px-4 py-2 ring-mm-blue hover:ring-1 hover:shadow-md text-center;
  }
</style>