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

<div class="px-4 flex flex-wrap ">
  {#each colors as color}
    <div class="p-2">
      {color}
      <div class="rounded-md bg-mm-{color} hover:bg-mm-{color}-hover dark:bg-mm-{color}-dark h-24 w-24"></div>
    </div>
  {/each}
  <!-- <h1 class="bg-mm-background-trim">TEST</h1> -->
</div>