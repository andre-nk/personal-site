<script lang="ts">
	import { page } from '$app/stores';
	export let pathname: string;
	let path: string;

	$: path = $page.url.pathname;
</script>

<a href={pathname} class="p-1 rounded-md hover:bg-main w-fit duration-200" class:bg-main={pathname == path}>
	<slot />
</a>
