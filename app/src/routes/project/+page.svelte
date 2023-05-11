<script>
	import { SearchOutline, ArrowForwardCircleOutline } from 'svelte-ionicons';

	let searchQuery = "";
</script>

<section>
	<div class="p-6 flex flex-col items-center justify-start space-y-6">
		<div class="w-full px-5 py-4 rounded-xl bg-white flex justify-start items-center space-x-4">
			<SearchOutline size=20/>
			<input value={searchQuery} placeholder="Search projects..." class="outline-none font-inter font-light"/>
		</div>
		<a
			href="/project/sindustore"
			class="w-full overflow-clip aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
		>
			<div class="px-6 py-5 flex flex-col">
				<div class="flex justify-between items-center">
					<p class="text-xs tracking-wider font-medium">FLUTTER APPS</p>
					<button>
						<ArrowForwardCircleOutline />
					</button>
				</div>
				<h2 class="font-source text-2xl mt-4 font-semibold">Sindustore</h2>
				<p class="font-extralight text-sm mt-1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec
					interdum auctor. Fusce gravida dictum
				</p>
			</div>
			<div class="h-1/2 bg-gray-200 rounded-xl" />
		</a>
		<a
			href="/project/sindustore"
			class="w-full overflow-clip aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
		>
			<div class="px-6 py-5 flex flex-col">
				<div class="flex justify-between items-center">
					<p class="text-xs tracking-wider font-medium">FLUTTER APPS</p>
					<button>
						<ArrowForwardCircleOutline />
					</button>
				</div>
				<h2 class="font-source text-2xl mt-4 font-semibold">Sindustore</h2>
				<p class="font-extralight text-sm mt-1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec
					interdum auctor. Fusce gravida dictum
				</p>
			</div>
			<div class="h-1/2 bg-gray-200 rounded-xl" />
		</a>
		<a
			href="/project/sindustore"
			class="w-full overflow-clip aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
		>
			<div class="px-6 py-5 flex flex-col">
				<div class="flex justify-between items-center">
					<p class="text-xs tracking-wider font-medium">FLUTTER APPS</p>
					<button>
						<ArrowForwardCircleOutline />
					</button>
				</div>
				<h2 class="font-source text-2xl mt-4 font-semibold">Sindustore</h2>
				<p class="font-extralight text-sm mt-1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec
					interdum auctor. Fusce gravida dictum
				</p>
			</div>
			<div class="h-1/2 bg-gray-200 rounded-xl" />
		</a>
		<a
			href="/project/sindustore"
			class="w-full overflow-clip aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
		>
			<div class="px-6 py-5 flex flex-col">
				<div class="flex justify-between items-center">
					<p class="text-xs tracking-wider font-medium">FLUTTER APPS</p>
					<button>
						<ArrowForwardCircleOutline />
					</button>
				</div>
				<h2 class="font-source text-2xl mt-4 font-semibold">Sindustore</h2>
				<p class="font-extralight text-sm mt-1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris nec
					interdum auctor. Fusce gravida dictum
				</p>
			</div>
			<div class="h-1/2 bg-gray-200 rounded-xl" />
		</a>
	</div>
</section>
