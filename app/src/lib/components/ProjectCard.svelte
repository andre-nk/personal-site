<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Image } from '@sanity/types';
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';

	export let title: string;
	export let caption: string;
	export let slug: string;
	export let coverImage: Image;
	export let type: string;
	export let category: string;
</script>

<div
	class="w-full h-full flex-1 group hover:flex-[1.5] flex flex-col justify-between duration-200 transition-all bg-white rounded-2xl overflow-clip"
>
	<div class="w-full relative">
		<div
			class="w-full h-8 bg-gray-200 absolute top-0 group-hover:h-[9rem] transition-all duration-300"
		>
			<img
				src={urlFor(coverImage).url()}
				alt="${coverImage} Cover"
				class="h-full object-cover w-full"
			/>
		</div>
		<div
			class="w-full flex justify-between items-center px-5 pt-4 pb-0 absolute top-8 group-hover:top-0 transition-all duration-300"
		>
			<p
				class="text-[12px] font-medium tracking-wider uppercase bg-transparent group-hover:bg-white group-hover:rounded-lg group-hover:px-2.5 group-hover:py-1 transition-all duration-300"
			>
				{type} • {category}
			</p>
			<a href="/project/{slug}">
				<ArrowForwardCircleOutline size="28" />
			</a>
		</div>
	</div>
	<div class="w-full p-5 pt-0 pb-[1.15rem] flex flex-col">
		<h2 class="font-serif font-medium text-[1.35rem]">{title}</h2>
		<p class="text-sm font-light pt-0.5">{caption}</p>
	</div>
</div>
