<script>
  let colors = [
    "background",
    "background-dark",
    "trim",
    "selection",
    "text",
    "text-subtle",
    "accent",
    "accent-blue",
    "accent-green",
    "accent-cyan",
    "accent-pink",
    "accent-purple",
    "disabled"
  ]
</script>

<div class="grid grid-cols-4 gap-4 p-8">
  {#each colors as color}
  <div>
    {color}
    <div class="rounded-md bg-mm-{color} h-24 w-24"></div>
  </div>
  {/each}
</div>