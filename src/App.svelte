<script lang="ts">
  import { getRandomDogImageUrl } from './lib/api'
</script>

<main>
  {#await getRandomDogImageUrl()}
    <p>Fetching dog image...</p>
  {:then imageUrl}
    <img src={imageUrl} alt="Random dog" width="300" />
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
