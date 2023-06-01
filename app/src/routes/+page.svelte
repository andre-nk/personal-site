<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';
</script>

<section>
	<div
		class="px-4 py-3.5 sm:py-8 sm:px-8 lg:px-24 lg:pt-8 lg:pb-12 lg:justify-center lg:h-screen flex flex-col space-y-6"
	>
		<div class="flex flex-col space-y-4 lg:hidden">
			<div class="w-full md:max-h-40 flex space-x-6">
				<div
					class="w-full space-y-4 md:space-y-0 rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white p-5 flex flex-col justify-between"
				>
					<div class="w-full flex justify-between items-center">
						<h1 class="font-source text-2xl font-semibold block">Andreas N.</h1>
					</div>
					<span class="text-sm font-light">
						<b class="font-medium">Mobile Developer</b> and <b class="font-medium">CS Student</b>
						<br />
						based in Yogyakarta, Indonesia
					</span>
				</div>
				<a
					href="/project"
					class="h-full hidden aspect-square rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white p-4 flex-col justify-between"
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
			</div>

			<div class="w-full flex space-x-6 md:space-x-0 md:max-h-40">
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
				class="overflow-clip aspect-square md:aspect-video rounded-xl transition hover:border-[0.8px] border-outline duration-200 bg-white flex flex-col justify-between"
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
		<div class="hidden lg:flex w-full h-full space-x-6">
			<div class="w-[55%] h-full flex flex-col space-y-6">
				<div
					class="w-full h-full flex-1 flex flex-col justify-between rounded-2xl hover:border hover:border-outline duration-200 transition cursor-pointer bg-white p-6 pt-5"
				>
					<div class="flex flex-col space-y-1">
						<div class="w-full flex justify-between items-center">
							<h1 class="font-source text-[1.75rem] font-semibold block">Andreas Notokusumo</h1>
							<a href="/">
								<ArrowForwardCircleOutline size="28" />
							</a>
						</div>
						<span class="text-base font-light tracking-wide">
							<b class="font-medium">Mobile Developer</b> and <b class="font-medium">CS Student</b>
							based in Yogyakarta, Indonesia
						</span>
					</div>
					<div class="flex space-x-6">
						<a href="/" class="cursor-pointer">
							<img alt="The project logo" src={'/github.svg'} height="26" width="26" />
						</a>
						<a href="/" class="cursor-pointer">
							<img alt="The project logo" src={'/linkedin.svg'} height="28" width="28" />
						</a>
					</div>
				</div>
				<div class="w-full h-full flex-1 flex space-x-6">
					<div
						class="bg-white hover:border hover:border-outline duration-200 transition cursor-pointer aspect-square p-6 rounded-2xl"
					>
						<p>pp</p>
					</div>
					<div
						class="bg-white hover:border hover:border-outline duration-200 transition cursor-pointer w-full p-6 py-5 rounded-2xl flex flex-col justify-between"
					>
						<div class="self-end">
							<a href="/">
								<ArrowForwardCircleOutline size="28" />
							</a>
						</div>
						<p class="font-serif font-normal text-[1.3rem] leading-[1.75rem]">
							discover<br />all projects
						</p>
					</div>
				</div>
				<div class="w-full h-full flex-1 flex space-x-6">
					<div
						class="bg-white hover:border hover:border-outline duration-200 transition cursor-pointer w-full rounded-2xl flex justify-between"
					>
						<p class="font-serif font-normal w-[40%] text-[1.3rem] leading-[1.75rem] self-end p-6">
							read<br />my blog
						</p>
						<div class="w-full relative flex justify-end pt-6 pr-6">
							<img src="/article.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div class="w-[45%] h-full flex flex-col space-y-6">
				<ProjectCard title="Handles" />
				<ProjectCard title="OmahTI Official Site"/>
				<ProjectCard title="GetHeroes"/>
			</div>
		</div>
	</div>
</section>
