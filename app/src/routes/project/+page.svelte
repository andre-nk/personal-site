<script>
	import ProjectTile from '$lib/components/ProjectTile.svelte';
	import { SearchOutline } from 'svelte-ionicons';

	let searchQuery = '';

  export let data;
</script>

<section>
	<div
		class="px-4 pr-7 py-4 sm:py-8 sm:px-8 lg:px-24 lg:pt-8 lg:pb-12 flex flex-col items-center justify-start space-y-6"
	>
		<div class="w-full px-5 py-4 rounded-xl bg-white flex justify-start items-center space-x-4">
			<SearchOutline size="20" />
			<input
				value={searchQuery}
				placeholder="Search projects..."
				class="outline-none font-inter font-light"
			/>
		</div>

		<div
			class="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6"
		>
			{#if data.project && data.project.length}
				{#each data.project as item}
					<ProjectTile
						title={item.title}
						caption={item.caption}
						slug={item.slug}
						coverImage={item.coverImage}
						type={item.type}
						category={item.category}
					/>
				{/each}
			{:else}
				<p>No projects found.</p>
			{/if}
		</div>
	</div>
</section>
