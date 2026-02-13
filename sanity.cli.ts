import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
	api: {
		projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "hismgx2i",
		dataset: process.env.PUBLIC_SANITY_DATASET || "production",
	},
	studioHost: "portfolio-cms",
});
