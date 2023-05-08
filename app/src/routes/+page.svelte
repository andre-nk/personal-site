<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.posts.length}
		{#each data.posts as post}
			<p>Yosh</p>
		{/each}
	{:else}
		<div>
			<p>Test</p>
		</div>
	{/if}
</section>
