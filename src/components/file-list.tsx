import { TextAttributes } from "@opentui/core"

const ITEMS = ["src/", "package.json", "README.md", "bun.lock", "examples/"]

export function FileList() {
	return (
		<box title="Files" flexDirection="column" flexGrow={1} style={{ border: true, padding: 1 }}>
			<text attributes={TextAttributes.BOLD}>/home/shinobi/projects/kotuk</text>
			<text> </text>
			{ITEMS.map((item, index) => (
				<text key={item} attributes={index === 0 ? TextAttributes.INVERSE : TextAttributes.NONE}>
					{item}
				</text>
			))}
		</box>
	)
}
