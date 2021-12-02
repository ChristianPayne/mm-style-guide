<div class="h-48 flex flex-wrap content-center">
  <button class="mm-button mm-button-primary">Primary</button>
  <button class="mm-button mm-button-secondary">Secondary</button>
  <button class="mm-button mm-button-warn">Warning</button>
  <button class="mm-button">Cancel</button>
</div>

<style>
  .mm-button {
    @apply px-4 py-2 m-2 rounded-md hover:bg-mm-selection;
  }
  .mm-button-primary {
    @apply bg-mm-accent text-mm-trim shadow-md;
  }

  .mm-button-secondary {
    @apply bg-mm-accent-blue text-mm-trim shadow-md;
  }

  .mm-button-warn {
    @apply bg-mm-warn text-mm-trim shadow-md;
  }
</style>