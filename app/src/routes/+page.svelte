<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectCardMobile from '$lib/components/ProjectCardMobile.svelte';
	import { ArrowForwardCircleOutline } from 'svelte-ionicons';

	export let data;
</script>

<section>
	<div
		class="px-4 pr-7 py-4 sm:py-8 sm:px-8 lg:px-24 lg:pt-8 lg:pb-12 lg:justify-center lg:h-screen flex flex-col space-y-6"
	>
		<!-- MOBILE -->
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

			<div class="w-full h-[10.5rem] flex space-x-4">
				<div class="w-[10.5rem] bg-gray-200 rounded-xl" />
				<div
					class="flex-1 h-full bg-white p-4 rounded-xl flex flex-col justify-between hover:border-[0.8px] hover:border-outline transition duration-200"
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
				</div>
			</div>

			<div class="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
				{#if data.project && data.project.length}
					{#each data.project as item}
						<ProjectCardMobile
							title={item.title}
							caption={item.caption}
							slug={item.slug}
							coverImage={item.coverImage}
							type={item.type}
							category={item.category}
						/>
					{/each}
				{:else}
					<p>No projects found.</p>
				{/if}
			</div>
		</div>

		<!-- MEDIUM & DESKTOP -->
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
						<span class="text-base font-light">
							<b class="font-medium">Mobile Developer</b> and <b class="font-medium">CS Student</b>
							based in Yogyakarta, Indonesia
						</span>
					</div>
					<div class="flex space-x-6">
						<a href="https://github.com/andre-nk" class="cursor-pointer">
							<img alt="The project logo" src={'/github.svg'} height="26" width="26" />
						</a>
						<a href="https://www.linkedin.com/in/andreasnk/" class="cursor-pointer">
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
							<img src="/article.svg" alt="article" />
						</div>
					</div>
				</div>
			</div>
			<div class="w-[45%] h-full flex flex-col space-y-6">
				{#if data.project && data.project.length}
					{#each data.project as item}
						<ProjectCard
							title={item.title}
							caption={item.caption}
							slug={item.slug}
							coverImage={item.coverImage}
							type={item.type}
							category={item.category}
						/>
					{/each}
				{:else}
					<p>No projects found.</p>
				{/if}
			</div>
		</div>
	</div>
</section>
