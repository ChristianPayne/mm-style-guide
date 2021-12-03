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

<div class="px-4 grid grid-flow-row grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
  {#each colors as color}
    <div class="p-2 relative h-24 w-24">
      <div class="absolute rounded-md bg-mm-{color} hover:bg-mm-{color}-hover dark:bg-mm-{color}-dark h-full w-full">
        <h2 class="h-full w-full flex items-center justify-center">
          {color}
        </h2>
      </div>
    </div>
  {/each}
</div>