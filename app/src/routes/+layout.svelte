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

<div class="overflow-clip">
	<nav class="bg-white px-[1.4rem] py-3">
		<button on:click={modifySideBar} class="p-1 ml-.5 rounded-md hover:bg-main w-fit duration-200">
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
