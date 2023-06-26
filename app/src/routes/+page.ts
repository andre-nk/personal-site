// src/routes/+page.js

import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "5a3auag5",
  dataset: "production",
  apiVersion: "2023-06-04",
  useCdn: false
});

export async function load() {
  const data = await client.fetch(`*[_type == "project"]`);

  if (data) {
    return {
      project: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}