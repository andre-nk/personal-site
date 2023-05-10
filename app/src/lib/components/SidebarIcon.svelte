<script lang="ts">
	import { page } from '$app/stores';

	export let pathname : string;

	let isActive = false;
	if ($page.url.pathname === pathname) {
		isActive = true;
	}
</script>

<a
	href={pathname}
	class="p-1 rounded-md hover:bg-main w-fit duration-200"
	class:bg-main={isActive}
>
	<slot />
</a>
