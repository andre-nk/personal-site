<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Image } from '@sanity/types';
	export let title: string;
	export let caption: string;
	export let slug: string;
	export let coverImage: Image;
	export let type: string;
	export let category: string;
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';

  console.log(coverImage);
</script>

<a
	href="/project/{slug}"
	class="overflow-clip rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
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
	<div class="h-48 bg-gray-200 rounded-xl">
		<img src={urlFor(coverImage).url()} alt="${coverImage} Cover" class="h-full w-full object-cover" />
	</div>
</a>
