import { TextAttributes } from "@opentui/core"

import type { InfoPaneProps } from "../types/app"

export function InfoPane({ explorer }: InfoPaneProps) {
	const currentEntry = explorer.currentEntry

	return (
		<box title="Info" flexDirection="column" flexGrow={1} style={{ border: true, padding: 1 }}>
			<text attributes={TextAttributes.BOLD}>Selected</text>
			<text>{currentEntry?.name ?? "Nothing selected"}</text>
			<text> </text>
			<text attributes={TextAttributes.BOLD}>Quick Stats</text>
			<text>Type: {currentEntry?.kind ?? "n/a"}</text>
			<text>Items: {explorer.entries.length}</text>
			<text>Hidden: off</text>
			<text>Sort: name</text>
			<text>Marked: {explorer.selectedCount}</text>
		</box>
	)
}
