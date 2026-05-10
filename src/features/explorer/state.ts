import { getInitialDirectory } from "../../services/navigation"
import type { ExplorerState } from "../../types/app"

export function createExplorerState(): ExplorerState {
	return {
		cwd: getInitialDirectory(),
		entries: [],
		cursor: 0,
		selectedPaths: [],
		isLoading: true,
		error: null,
	}
}
