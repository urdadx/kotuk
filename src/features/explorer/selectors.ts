import type { ExplorerState } from "../../types/app"
import type { FileEntry } from "../../types/file"

export function getCurrentEntry(state: ExplorerState): FileEntry | null {
	return state.entries[state.cursor] ?? null
}

export function getSelectedCount(state: ExplorerState): number {
	return state.selectedPaths.length
}
