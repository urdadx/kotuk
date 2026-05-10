import { CommandBar } from "../components/command-bar"
import { FileList } from "../components/file-list"
import { InfoPane } from "../components/info-pane"
import { PreviewPane } from "../components/preview-pane"
import { StatusBar } from "../components/status-bar"
import type { LayoutProps } from "../types/app"

export function Layout({ explorer }: LayoutProps) {
	return (
		<box flexDirection="column" flexGrow={1} style={{ padding: 1 }}>
			<box flexDirection="row" flexGrow={1}>
				<box style={{ width: "20%", marginRight: 1 }}>
					<InfoPane explorer={explorer} />
				</box>
				<box style={{ width: "45%", marginRight: 1 }}>
					<FileList explorer={explorer} />
				</box>
				<box style={{ width: "35%" }}>
					<PreviewPane explorer={explorer} />
				</box>
			</box>
			<box style={{ marginTop: 1 }}>
				<StatusBar explorer={explorer} />
			</box>
			<box style={{ marginTop: 1 }}>
				<CommandBar />
			</box>
		</box>
	)
}
