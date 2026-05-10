import { TextAttributes } from "@opentui/core"

export function StatusBar() {
	return (
		<box justifyContent="space-between" style={{ border: true, paddingLeft: 1, paddingRight: 1 }}>
			<text attributes={TextAttributes.DIM}>NORMAL</text>
			<text>1 selected</text>
			<text attributes={TextAttributes.DIM}>[j/k] move  [enter] open  [esc] quit</text>
		</box>
	)
}
