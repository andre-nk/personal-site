<script>
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';
</script>

<section>
	<div class="p-6 flex flex-col space-y-6">
		<div
			class="w-full rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white px-4 py-3.5 flex flex-col space-y-4"
		>
			<div class="w-full flex justify-between items-center">
				<h1 class="font-source text-2xl font-semibold">Andreas N.</h1>
				<button>
					<ArrowForwardCircleOutline />
				</button>
			</div>
			<span class="text-sm font-light">
				<b class="font-medium">Mobile Developer</b> and <b class="font-medium">CS Student</b>
				<br />
				based in Yogyakarta, Indonesia
			</span>
		</div>
		<div class="w-full flex space-x-6">
			<div
				class="w-full rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white px-4 py-3.5 flex flex-col space-y-4"
			/>
			<div
				class="w-full aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white px-4 py-3.5 flex flex-col justify-between"
			>
				<div class="w-full flex justify-end">
					<button>
						<ArrowForwardCircleOutline />
					</button>
				</div>
				<h3 class="font-source text-xl font-semibold">
					discover <br />
					all projects
				</h3>
			</div>
		</div>
		<div
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
		</div>
	</div>
</section>
