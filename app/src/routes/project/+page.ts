import { client } from '$lib/utils/sanity';

export async function load() {
	const data = await client.fetch(`*[_type == "project"] | order(isTop asc)`);

	if (data) {
		return {
			project: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
