<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Image, Slug } from '@sanity/types';
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';

	export let title: string;
	export let caption: string;
	export let slug: Slug;
	export let coverImage: Image;
	export let type: string;
	export let category: string;
</script>

<a
	href="/project/{slug.current}"
	class="w-full overflow-clip aspect-square rounded-xl transition border-0 hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
>
	<div class="px-6 py-5 flex flex-col">
		<div class="flex justify-between items-center">
			<p class="text-xs tracking-wider font-medium uppercase">{type} • {category}</p>
			<button>
				<ArrowForwardCircleOutline />
			</button>
		</div>
		<h2 class="font-source text-2xl mt-4 font-semibold">{title}</h2>
		<p class="font-extralight text-sm mt-1">
			{caption}
		</p>
	</div>
	<div
		class="w-full aspect-video bg-gray-200 rounded-xl overflow-clip border border-t border-gray-200"
	>
		<img src={urlFor(coverImage).url()} alt={title} class="w-full h-full" />
	</div>
</a>
