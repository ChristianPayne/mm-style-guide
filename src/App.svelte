<script>
  import Test from './lib/test.svelte';
  import mmLogo from './assets/modelmatch_logo.svg'
  import Buttons from './lib/buttons.svelte';
  import Modals from './lib/modals.svelte';
  import Snackbars from './lib/snackbars.svelte';
  import Toggles from './lib/toggles.svelte';
  import Inputs from './lib/inputs.svelte';
  import Text from './lib/text.svelte';
  import Colors from './lib/colors.svelte';
  import Maps from './lib/maps.svelte';

  let pages = {
    // Test: Test,
    Modals: Modals,
    Colors: Colors,
    Buttons: Buttons,
    Text: Text,
    Toggles: Toggles,
    Snackbars: Snackbars,
    Inputs: Inputs,
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
  <div class="min-h-screen bg-mm-background dark:bg-mm-background-dark dark:text-mm-text-dark flex">
    <nav class="bg-mm-background-trim dark:bg-mm-background-trim-dark shadow-2xl p-1 sm:p-4 justify-items-center items-center min-w-1/3
    max-w-1/3 sm:min-w-1/4 sm:max-w-1/4">
      <div class="col-span-1fr md:flex font-medium items-center text-mm-text mb-4 cursor-pointer text-center justify-items-center" on:click={()=>{toggleDarkMode();}}>
        <img src={mmLogo} class="w-12 md:mr-2">
        <span class="text-xl text-mm-text dark:text-mm-text-dark">Model Match Style Guide</span>
      </div>
      <div class="flex flex-col">
        {#each Object.keys(pages) as page }
          <button class="mr-5 rounded-md px-4 py-2 mb-2 ring-mm-blue hover:ring-1 hover:shadow-md text-center w-full {_pageName === page ? "bg-mm-blue text-mm-background" : ""}" on:click="{()=>{setPage(page)}}">{page}</button>
        {/each}
      </div>
    </nav>

    <svelte:component class="" this={_page} />
  </div>
</main>