import { TextAttributes } from "@opentui/core"

import type { PreviewPaneProps } from "../types/app"

export function PreviewPane({ explorer }: PreviewPaneProps) {
	const currentEntry = explorer.currentEntry

	return (
		<box title="Preview" flexDirection="column" flexGrow={1} style={{ border: true, padding: 1 }}>
			{currentEntry ? (
				<box flexDirection="column" flexGrow={1}>
					<text attributes={TextAttributes.BOLD}>{currentEntry.name}</text>
					<text> </text>
					<text>Path: {currentEntry.path}</text>
					<text>Type: {currentEntry.kind}</text>
					<text>Size: {currentEntry.size} bytes</text>
					<text>Hidden: {currentEntry.isHidden ? "yes" : "no"}</text>
				</box>
			) : (
				<box alignItems="center" justifyContent="center" flexGrow={1}>
					<box justifyContent="center" alignItems="center">
						<ascii-font font="tiny" text="KOTUK" />
						<text attributes={TextAttributes.DIM}>Fast and elegant terminal based file manager</text>
					</box>
				</box>
			)}
		</box>
	)
}
