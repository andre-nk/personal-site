<script lang="ts">
	import { onMount } from 'svelte';

	import ProjectTile from '$lib/components/ProjectTile.svelte';
	import { SearchOutline } from 'svelte-ionicons';

	let searchQuery = '';
	export let data;
	let filteredProjects: any[] = [];

	function filterProjects() {
		if (searchQuery) {
			filteredProjects = data.project.filter((item: any) =>
				item.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		} else {
			filteredProjects = data.project;
		}
	}

	// Run the filterProjects function on initial load
	onMount(filterProjects);
</script>

<svelte:head>
	<title>Andreas Nk. • Projects</title>
	<html lang="en" />
</svelte:head>

<section>
	<div
		class="px-4 pr-7 py-4 sm:py-8 sm:px-8 lg:px-24 lg:pt-8 lg:pb-12 flex flex-col items-center justify-start space-y-6"
	>
		<div class="w-full px-5 py-4 rounded-xl bg-white flex justify-start items-center space-x-4">
			<SearchOutline size="20" />
			<input
				bind:value={searchQuery}
				on:input={filterProjects}
				placeholder="Search projects..."
				class="outline-none font-inter font-light w-full"
			/>
		</div>

		<div>
			{#if filteredProjects.length > 0}
				<div
					class="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6"
				>
					{#each filteredProjects as item}
						<ProjectTile
							title={item.title}
							caption={item.caption}
							slug={item.slug}
							coverImage={item.coverImage}
							type={item.type}
							category={item.category}
						/>
					{/each}
				</div>
			{:else}
				<p class="bg-red-50 w-full">No projects found.</p>
			{/if}
		</div>
	</div>
</section>
