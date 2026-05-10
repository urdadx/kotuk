import { useEffect, useState } from "react"

import {
	moveExplorerCursor,
	setExplorerEntries,
	setExplorerError,
	setExplorerLoading,
	toggleExplorerSelection,
} from "../features/explorer/actions"
import { getCurrentEntry, getSelectedCount } from "../features/explorer/selectors"
import { createExplorerState } from "../features/explorer/state"
import { readDirectory } from "../services/fs"
import { getParentDirectory } from "../services/navigation"
import type { ExplorerApi } from "../types/app"

export function useExplorer(): ExplorerApi {
	const [state, setState] = useState(createExplorerState)

	const refresh = async (directory = state.cwd): Promise<void> => {
		setState((currentState) => setExplorerLoading(currentState))

		try {
			const entries = await readDirectory(directory)
			setState((currentState) => setExplorerEntries(currentState, directory, entries))
		} catch (error) {
			const message = error instanceof Error ? error.message : "Failed to read directory"
			setState((currentState) => setExplorerError(currentState, message))
		}
	}

	useEffect(() => {
		void refresh(state.cwd)
	}, [])

	const openEntry = (): void => {
		const currentEntry = getCurrentEntry(state)

		if (!currentEntry || currentEntry.kind !== "directory") {
			return
		}

		void refresh(currentEntry.path)
	}

	const goUp = (): void => {
		const parentDirectory = getParentDirectory(state.cwd)

		if (parentDirectory === state.cwd) {
			return
		}

		void refresh(parentDirectory)
	}

	return {
		cwd: state.cwd,
		entries: state.entries,
		cursor: state.cursor,
		currentEntry: getCurrentEntry(state),
		selectedPaths: state.selectedPaths,
		selectedCount: getSelectedCount(state),
		isLoading: state.isLoading,
		error: state.error,
		moveCursorUp: () => setState((currentState) => moveExplorerCursor(currentState, -1)),
		moveCursorDown: () => setState((currentState) => moveExplorerCursor(currentState, 1)),
		openEntry,
		goUp,
		toggleSelect: () => setState((currentState) => toggleExplorerSelection(currentState)),
		refresh: () => refresh(),
	}
}
