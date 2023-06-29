<script lang="ts">
  import moment from 'moment';
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';

	export let title: string;
	export let dateAdded: Date;
	export let coverImage: string;
	export let slug: string;
</script>

<a
	href={`https://andrenk.hashnode.dev/${slug}`}
	target="_blank"
	class="w-full overflow-clip aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
>
	<div class="px-6 py-5 flex flex-col">
		<div class="flex justify-between items-center">
			<p class="text-xs tracking-wider font-medium uppercase">{moment(dateAdded).format('LL')}</p>
			<button>
				<ArrowForwardCircleOutline />
			</button>
		</div>
		<h2 class="font-source text-2xl mt-4 font-semibold">
			{title}
		</h2>
	</div>
	<div class="h-1/2 bg-gray-200 rounded-xl">
		<img src={coverImage} alt={title} />
	</div>
</a>
