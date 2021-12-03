<script>
  import Test from './lib/test.svelte';
  import mmLogo from './assets/modelmatch_logo_150ppi.png'
  import Buttons from './lib/components/buttons.svelte';
  import Modals from './lib/components/modals.svelte';
  import Snackbars from './lib/components/snackbars.svelte';
  import Toggles from './lib/components/toggles.svelte';
  import Inputs from './lib/components/inputs.svelte';
  import Text from './lib/text.svelte';
  import Colors from './lib/colors.svelte';
  import Maps from './lib/maps.svelte';

  let pages = {
    // Test: Test,
    Colors: Colors,
    Buttons: Buttons,
    Text: Text,
    Modals: Modals,
    Toggles: Toggles,
    Snackbars: Snackbars,
    Inputs: Inputs,
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
  <div class="min-h-screen bg-mm-background dark:bg-mm-background-dark dark:text-mm-text-light flex relative overflow-auto">
    <nav class="bg-mm-background dark:bg-mm-background-dark shadow-2xl p-4 justify-items-center">
      <div class="md:flex font-medium items-center text-mm-text mb-4 cursor-pointer" on:click={()=>{toggleDarkMode();}}>
        <img src={mmLogo} class="w-12 md:mr-2">
        <span class="text-xl text-mm-text dark:text-mm-text-light">Model Match Style Guide</span>
      </div>
      <div class="flex flex-col">
        {#each Object.keys(pages) as page }
          <button class="mr-5 rounded-md px-4 py-2 mb-2 hover:bg-mm-blue hover:text-mm-background text-center w-full {_pageName === page ? "bg-mm-blue text-mm-background" : ""}" on:click="{()=>{setPage(page)}}">{page}</button>
        {/each}
      </div>
    </nav>

    <svelte:component class="overflow-auto" this={_page} />
  </div>
</main>