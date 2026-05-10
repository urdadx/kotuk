import { TextAttributes } from "@opentui/core";

export function InfoPane() {
	return (
		<box
			title="Directories"
			flexDirection="column"
			flexGrow={1}
			style={{ border: true, padding: 1 }}>
			<text attributes={TextAttributes.BOLD}>Selected</text>
			<text>src/</text>
			<text> </text>
			<text attributes={TextAttributes.BOLD}>Quick Stats</text>
			<text>Type: directory</text>
			<text>Items: 1</text>
			<text>Hidden: off</text>
			<text>Sort: name</text>
		</box>
	);
}
