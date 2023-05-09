<script>
	import { page } from '$app/stores';

	/**
	 * @type {string | URL | undefined}
	 */
	export let pathname;
	export let isSocialButton = false;

	let isActive = false;
	if ($page.url.pathname === pathname) {
		isActive = true;
	}

	function handleClick() {
		if (isSocialButton && pathname !== undefined) {
			// @ts-ignore
			window.open(pathname, '_blank').focus();
		} else {
			//routing
		}
	}
</script>

<button
	on:click={handleClick}
	class="p-1 rounded-md hover:bg-main w-fit duration-200"
	class:bg-main={isActive}
>
	<slot />
</button>
