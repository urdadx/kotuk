import { TextAttributes } from "@opentui/core"

import type { FileListProps } from "../types/app"

export function FileList({ explorer }: FileListProps) {
	return (
		<box title="Files" flexDirection="column" flexGrow={1} style={{ border: true, padding: 1 }}>
			<text attributes={TextAttributes.BOLD}>{explorer.cwd}</text>
			<text> </text>
			{explorer.isLoading ? <text attributes={TextAttributes.DIM}>Loading...</text> : null}
			{explorer.error ? <text>{explorer.error}</text> : null}
			{!explorer.isLoading && !explorer.error && explorer.entries.length === 0 ? <text attributes={TextAttributes.DIM}>Empty directory</text> : null}
			{explorer.entries.map((entry, index) => {
				const isSelected = explorer.selectedPaths.includes(entry.path)
				const label = `${entry.kind === "directory" ? "[d]" : "[f]"} ${entry.name}`

				return (
					<text key={entry.path} attributes={index === explorer.cursor ? TextAttributes.INVERSE : TextAttributes.NONE}>
						{isSelected ? `* ${label}` : `  ${label}`}
					</text>
				)
			})}
		</box>
	)
}
