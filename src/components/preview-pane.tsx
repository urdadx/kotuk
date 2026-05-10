import { TextAttributes } from "@opentui/core"

export function PreviewPane() {
	return (
		<box title="Preview" flexDirection="column" flexGrow={1} style={{ border: true, padding: 1 }}>
			<box alignItems="center" justifyContent="center" flexGrow={1}>
				<box justifyContent="center" alignItems="center">
					<ascii-font font="tiny" text="KOTUK" />
					<text attributes={TextAttributes.DIM}>Fast and elegant terminal based file manager</text>
				</box>
			</box>
		</box>
	)
}
