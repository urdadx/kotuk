import { CommandBar } from "../components/command-bar";
import { FileList } from "../components/file-list";
import { InfoPane } from "../components/info-pane";
import { PreviewPane } from "../components/preview-pane";
import { StatusBar } from "../components/status-bar";

export function Layout() {
	return (
		<box flexDirection="column" flexGrow={1} style={{ padding: 1 }}>
			<box flexDirection="row" flexGrow={1}>
				<box style={{ width: "20%", marginRight: 1 }}>
					<InfoPane />
				</box>
				<box style={{ width: "45%", marginRight: 1 }}>
					<FileList />
				</box>
				<box style={{ width: "35%" }}>
					<PreviewPane />
				</box>
			</box>
			{/* <box style={{ marginTop: 1 }}>
				<StatusBar />
			</box>
			<box style={{ marginTop: 1 }}>
				<CommandBar />
			</box> */}
		</box>
	);
}
