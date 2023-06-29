<script lang="ts">
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { onMount } from 'svelte';
	import { SearchOutline } from 'svelte-ionicons';

	let searchQuery = '';
	export let data;
	let filteredArticles: any[] = [];

	function filterArticles() {
		if (searchQuery) {
			filteredArticles = data.articles.filter((item: any) =>
				item.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		} else {
			filteredArticles = data.articles;
		}
	}

	// Run the filterArticles function on initial load
	onMount(filterArticles);
</script>

<svelte:head>
	<title>Andreas Nk. • Blog</title>
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
				on:input={filterArticles}
				placeholder="Search articles..."
				class="outline-none font-inter font-light"
			/>
		</div>
		<div>
			{#if filteredArticles && filteredArticles.length > 0}
				<div
					class="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6"
				>
					{#each filteredArticles as article}
						<ArticleCard
							title={article.title}
							dateAdded={new Date(Date.parse(article.dateAdded))}
							coverImage={article.coverImage}
							slug={article.slug}
						/>
					{/each}
				</div>
			{:else}
				<p class="w-full">No articles found.</p>
			{/if}
		</div>
	</div>
</section>
