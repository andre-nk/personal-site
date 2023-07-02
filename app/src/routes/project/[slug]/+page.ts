import { client } from '$lib/utils/sanity';

export async function load({ params }) {
	const data = await client.fetch(`*[_type == "project" && slug.current == $slug][0]`, {
		slug: params.slug
	});

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
