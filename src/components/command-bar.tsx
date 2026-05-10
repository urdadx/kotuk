import { TextAttributes } from "@opentui/core"

export function CommandBar() {
	return (
		<box style={{ border: true, paddingLeft: 1, paddingRight: 1 }}>
			<text attributes={TextAttributes.DIM}>:</text>
			<text> command palette placeholder</text>
		</box>
	)
}
