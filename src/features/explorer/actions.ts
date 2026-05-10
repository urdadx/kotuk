import { togglePathSelection } from "../../services/selection"
import type { ExplorerState } from "../../types/app"
import type { FileEntry } from "../../types/file"

function clampCursor(cursor: number, entries: FileEntry[]): number {
	if (entries.length === 0) {
		return 0
	}

	return Math.max(0, Math.min(cursor, entries.length - 1))
}

export function setExplorerLoading(state: ExplorerState): ExplorerState {
	return {
		...state,
		isLoading: true,
		error: null,
	}
}

export function setExplorerEntries(state: ExplorerState, cwd: string, entries: FileEntry[]): ExplorerState {
	const validSelectedPaths = state.selectedPaths.filter((selectedPath) => entries.some((entry) => entry.path === selectedPath))

	return {
		...state,
		cwd,
		entries,
		cursor: clampCursor(state.cursor, entries),
		selectedPaths: validSelectedPaths,
		isLoading: false,
		error: null,
	}
}

export function setExplorerError(state: ExplorerState, error: string): ExplorerState {
	return {
		...state,
		entries: [],
		cursor: 0,
		selectedPaths: [],
		isLoading: false,
		error,
	}
}

export function moveExplorerCursor(state: ExplorerState, delta: number): ExplorerState {
	return {
		...state,
		cursor: clampCursor(state.cursor + delta, state.entries),
	}
}

export function toggleExplorerSelection(state: ExplorerState): ExplorerState {
	const currentEntry = state.entries[state.cursor]

	if (!currentEntry) {
		return state
	}

	return {
		...state,
		selectedPaths: togglePathSelection(state.selectedPaths, currentEntry.path),
	}
}
