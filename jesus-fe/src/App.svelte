<script lang="ts">
  let responseObject: { text: string };
  let inputText = "";

  const request = async () => {
    const response = await fetch("http://localhost:3000/prompt", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        text: inputText,
      }),
    });
    responseObject = await response.json();
  };
</script>

<main>
  <div class="prompt">
    <input type="text" bind:value={inputText} />
    <button on:click={request}>submit</button>
  </div>
  {#if responseObject}
    <p>{@html responseObject.text}</p>
  {:else}
    <div>ask Jesus</div>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .prompt {
    display: flex;
  }
</style>
