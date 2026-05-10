import { TextAttributes } from "@opentui/core"

import type { StatusBarProps } from "../types/app"

export function StatusBar({ explorer }: StatusBarProps) {
	return (
		<box justifyContent="space-between" style={{ border: true, paddingLeft: 1, paddingRight: 1 }}>
			<text attributes={TextAttributes.DIM}>{explorer.isLoading ? "LOADING" : "NORMAL"}</text>
			<text>{explorer.selectedCount} selected</text>
			<text attributes={TextAttributes.DIM}>[j/k] move  [enter/l] open  [backspace/h] up  [space] mark</text>
		</box>
	)
}
