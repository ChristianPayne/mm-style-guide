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

  let pages = {
    test: Test,
    buttons: Buttons,
    modals: Modals,
    snackbars: Snackbars,
    toggles: Toggles
  };

  let _page = pages[Object.keys(pages)[0]]

  function setPage (pageName) {
    _page = pages[pageName];
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
          <button class="mr-5 hover:text-gray-900" on:click="{()=>{setPage("buttons")}}">Buttons</button>
          <button class="mr-5 hover:text-gray-900" on:click="{()=>{setPage("modals")}}">Modals</button>
          <button class="mr-5 hover:text-gray-900" on:click="{()=>{setPage("toggles")}}">Toggles</button>
          <button class="mr-5 hover:text-gray-900" on:click="{()=>{setPage("snackbars")}}">Snackbars</button>
          <button class="mr-5 hover:text-gray-900" on:click="{()=>{setPage("test")}}">Test</button>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>

    <svelte:component this={_page} />
    
  </section>