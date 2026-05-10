import { useKeyboard, useRenderer } from "@opentui/react"

import { Layout } from "./layout"

export function App() {
	const renderer = useRenderer()

	useKeyboard((key) => {
		if (key.name === "escape") {
			renderer.destroy()
		}
	})

	return <Layout />
}
