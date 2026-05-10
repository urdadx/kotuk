import type { FileEntry } from "./file"

export interface ExplorerState {
	cwd: string
	entries: FileEntry[]
	cursor: number
	selectedPaths: string[]
	isLoading: boolean
	error: string | null
}

export interface ExplorerApi {
	cwd: string
	entries: FileEntry[]
	cursor: number
	currentEntry: FileEntry | null
	selectedPaths: string[]
	selectedCount: number
	isLoading: boolean
	error: string | null
	moveCursorUp: () => void
	moveCursorDown: () => void
	openEntry: () => void
	goUp: () => void
	toggleSelect: () => void
	refresh: () => Promise<void>
}

export interface LayoutProps {
	explorer: ExplorerApi
}

export interface FileListProps {
	explorer: ExplorerApi
}

export interface InfoPaneProps {
	explorer: ExplorerApi
}

export interface PreviewPaneProps {
	explorer: ExplorerApi
}

export interface StatusBarProps {
	explorer: ExplorerApi
}
