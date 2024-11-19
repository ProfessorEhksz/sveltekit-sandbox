import * as layout from "../components/layout.svelte";

const components = [
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/car.svelte")
];

const d = decodeURIComponent;
const empty = () => ({});

export const routes = [
	// src/routes/index.svelte
[/^\/$/, [components[0]]],

// src/routes/car.svelte
[/^\/car\/?$/, [components[1]]]
];

export { layout };