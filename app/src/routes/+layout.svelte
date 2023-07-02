<script>
	import SidebarIcon from '$lib/components/SidebarIcon.svelte';
	import '@fontsource/source-serif-pro';
	import '@fontsource/inter/latin.css';

	import '../app.postcss';
	import {
		MenuOutline,
		CloseOutline,
		PlanetOutline,
		HappyOutline,
		BookOutline,
		MailOutline,
		CodeSlashOutline
	} from 'svelte-ionicons';

	//states
	let isSideBarActive = false;

	//modifier
	function modifySideBar() {
		isSideBarActive = !isSideBarActive;
	}
</script>

<div>
	<div class="overflow-clip lg:hidden">
		<nav class="bg-white px-[1.4rem] sm:px-8 py-3">
			<button
				on:click={modifySideBar}
				class="p-1 ml-.5 rounded-md hover:bg-main w-fit duration-200"
			>
				{#if !isSideBarActive}
					<MenuOutline />
				{:else}
					<CloseOutline />
				{/if}
			</button>
		</nav>
		<main
			class="min-h-full w-[calc(100%+6.5rem)] bg-white overflow-clip flex -translate-x-20 duration-200"
			class:transform-none={isSideBarActive}
		>
			<div class="bg-white h-max w-[5rem] py-4 flex flex-col space-y-6 items-center">
				<SidebarIcon pathname="/">
					<PlanetOutline />
				</SidebarIcon>
				<SidebarIcon pathname="/about">
					<HappyOutline />
				</SidebarIcon>
				<SidebarIcon pathname="/project">
					<CodeSlashOutline />
				</SidebarIcon>
				<SidebarIcon pathname="/blog">
					<BookOutline />
				</SidebarIcon>
				<SidebarIcon pathname="mailto:andreasnotokusumo23@gmail.com">
					<MailOutline />
				</SidebarIcon>
			</div>
			<div class="bg-main duration-200 w-screen">
				<slot />
			</div>
		</main>
	</div>

	<div class="hidden lg:block">
		<div
			class="bg-white h-screen w-[7.5%] py-4 fixed top-0 left-0 flex flex-col space-y-12 justify-center items-center"
		>
			<SidebarIcon pathname="/">
				<PlanetOutline />
			</SidebarIcon>
			<SidebarIcon pathname="/about">
				<HappyOutline />
			</SidebarIcon>
			<SidebarIcon pathname="/project">
				<CodeSlashOutline />
			</SidebarIcon>
			<SidebarIcon pathname="/blog">
				<BookOutline />
			</SidebarIcon>
			<SidebarIcon pathname="mailto:andreasnotokusumo23@gmail.com">
				<MailOutline />
			</SidebarIcon>
		</div>
		<main class="min-h-full absolute right-0 w-[92.5%] bg-white flex duration-200">
			<div class="bg-main duration-200 w-screen">
				<slot />
			</div>
		</main>
	</div>
</div>
