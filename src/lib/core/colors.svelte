<script>
  let colors = [
    "background",
    "background-trim",
    "text",
    "text-subtle",
    "selection",
    "blue",
    "lightblue",
    "green",
    "cyan",
    "pink",
    "purple",
    "warn",
    "disabled",
  ]
</script>

<div class="px-4 grid grid-flow-row grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-10 justify-items-center">
  {#each colors as color}
    <div class="p-2 h-24 w-24">
      <div class="rounded-md bg-mm-{color} hover:bg-mm-{color}-hover dark:bg-mm-{color}-dark h-full w-full"></div>
      <h2 class="">
        {color}
      </h2>
    </div>
  {/each}
</div>