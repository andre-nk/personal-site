<script lang="ts">
	import moment from 'moment';
	import { onMount } from 'svelte';
	import { urlFor } from '$lib/utils/image';
	import { browser } from '$app/environment';
	import { PortableText } from '@portabletext/svelte';

	export let data;

	onMount(() => {
		if (browser) {
			document.title = `Andreas N. - ${data.project.title}`;
		}
	});
</script>

<section class="px-7 py-12 sm:px-8 lg:px-64 lg:py-20 flex flex-col space-y-8">
	<div class="flex flex-col space-y-5 lg:space-y-6 px-4">
		<div class="flex flex-col space-y-1 lg:space-y-3">
			<h2 class="text-[2rem] lg:text-4xl font-serif">{data.project.title}</h2>
			<p class="text-sm lg:text-base font-light">
				Project added: {moment(data.project.dateAdded).format('LL')}
			</p>
		</div>
		<div class="flex space-x-4">
			<div class="rounded-lg bg-white py-2 px-3">
				<p class="text-sm">{data.project.type}</p>
			</div>
			<div class="rounded-lg bg-white py-2 px-3">
				<p class="text-sm">{data.project.category}</p>
			</div>
		</div>
	</div>
	<div class="w-full overflow-clip rounded-xl bg-white">
		<img
			src={urlFor(data.project.coverImage).url()}
			alt="${data.project.coverImage} Cover"
			class="h-full object-cover w-full"
		/>
	</div>
	<p class="px-4">
		<PortableText value={data.project.content} />
	</p>
</section>
