import { useKeyboard, useRenderer } from "@opentui/react"

import { useExplorer } from "../hooks/use-explorer"
import { Layout } from "./layout"

export function App() {
	const renderer = useRenderer()
	const explorer = useExplorer()

	useKeyboard((key) => {
		if (key.name === "escape") {
			renderer.destroy()
		}

		if (key.name === "up" || key.sequence === "k") {
			explorer.moveCursorUp()
		}

		if (key.name === "down" || key.sequence === "j") {
			explorer.moveCursorDown()
		}

		if (key.name === "return" || key.sequence === "l") {
			explorer.openEntry()
		}

		if (key.name === "backspace" || key.sequence === "h") {
			explorer.goUp()
		}

		if (key.name === "space") {
			explorer.toggleSelect()
		}
	})

	return <Layout explorer={explorer} />
}
