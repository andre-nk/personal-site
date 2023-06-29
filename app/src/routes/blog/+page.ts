export async function load() {
	const query = `
    query GetUserArticles($page: Int!) {
        user(username: "andrenk") {
            publication {
                posts(page: $page) {
                    title
                    dateAdded
                    slug
                    coverImage
                }
            }
        }
    }
`;

	const variables = { page: 0 };

	const data = await fetch('https://api.hashnode.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

  const res = await data.json();
  const articles = res.data.user.publication.posts;

	if (data) {
		return {
			articles: articles
		};
	}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
