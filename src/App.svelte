<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<script>
  import Test from './lib/test.svelte';
  import mmLogo from './assets/modelmatch_logo_150ppi.png'
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
    Colors: Colors,
    Text: Text,
    Buttons: Buttons,
    Modals: Modals,
    Toggles: Toggles,
    Snackbars: Snackbars,
    Inputs: Inputs,
    Maps: Maps,
  };

  let _page = pages[Object.keys(pages)[0]]
  let _pageName = Object.keys(pages)[0]

  function setPage (pageName) {
    _page = pages[pageName];
    _pageName = pageName;
  }
</script>

<section>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={mmLogo} class="w-12">
          <span class="ml-3 text-xl">Model Match Style Guide</span>
        </div>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {#each Object.keys(pages) as page }
            <button class="mr-5 rounded-md px-4 py-2 hover:bg-mm-accent hover:text-mm-background {_pageName === page ? "bg-mm-accent text-mm-background" : ""}" on:click="{()=>{setPage(page)}}">{page}</button>
          {/each}
        </nav>
      </div>
    </header>

    <svelte:component this={_page} />
    
  </section>