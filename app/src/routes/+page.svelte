<script>
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';
</script>

<section>
	<div
		class="px-4 py-3.5 flex flex-col space-y-6 md:bg-red-200 lg:bg-blue-200 xl:bg-green-200 lg:px-24 lg:py-12 lg:justify-center lg:h-screen"
	>
		<div class="w-full md:max-h-40 lg:h-64 flex space-x-6">
			<div
				class="w-full space-y-4 md:space-y-0 rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white p-5 flex flex-col justify-between"
			>
				<div class="w-full flex justify-between items-center">
					<h1 class="font-source text-2xl lg:text-[1.75rem] font-semibold">Andreas N.</h1>
				</div>
				<span class="text-sm font-light">
					<b class="font-medium">Mobile Developer</b> and <b class="font-medium">CS Student</b>
					<br />
					based in Yogyakarta, Indonesia
				</span>
			</div>
			<a
				href="/project"
				class="h-full hidden lg:flex aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white p-4 flex-col justify-between"
			>
				<div class="w-full flex justify-end">
					<button>
						<ArrowForwardCircleOutline />
					</button>
				</div>
				<h3 class="font-source text-lg leading-tight font-semibold">
					discover <br />
					all projects
				</h3>
			</a>
			<img src="/avatar.png" alt="Avatar" class="hidden lg:block h-full aspect-square rounded-xl" />
		</div>

		<div class="w-full flex space-x-6 md:space-x-0 md:max-h-40 lg:hidden">
			<div
				class="md:hidden w-full rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white overflow-clip flex flex-col space-y-4"
			>
				<img src="/avatar.png" alt="Avatar" class="object-cover h-full w-full" />
			</div>
			<a
				href="/project"
				class="w-full aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white px-4 py-3.5 lg:p-5 flex flex-col justify-between"
			>
				<div class="w-full flex justify-end">
					<button>
						<ArrowForwardCircleOutline />
					</button>
				</div>
				<h3 class="font-source text-xl leading-tight font-semibold">
					discover <br />
					all projects
				</h3>
			</a>
		</div>

		<a
			href="/project/sindustore"
			class="lg:hidden overflow-clip aspect-square md:aspect-video rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
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

		<div class="flex w-full space-x-6 justify-start">
			<div class="hidden lg:flex h-full">
				<div
					class="rounded-xl h-full bg-white flex flex-col justify-between transition hover:border-[0.8px] border-outline duration-200 cursor-pointer"
				>
					<div class="p-5 flex flex-col">
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
					<div class="h-56 bg-gray-200 rounded-xl" />
				</div>
			</div>
			<div class="flex flex-col space-y-6">
				<div
					class="rounded-xl h-full w-full bg-white flex justify-between transition hover:border-[0.8px] border-outline duration-200 cursor-pointer"
				>
					komtol
				</div>
				<div
					class="rounded-xl h-full w-full bg-white flex justify-between transition hover:border-[0.8px] border-outline duration-200 cursor-pointer"
				>
					komtol
				</div>
			</div>
		</div>
	</div>
</section>
