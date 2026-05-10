export function togglePathSelection(selectedPaths: string[], path: string): string[] {
	return selectedPaths.includes(path)
		? selectedPaths.filter((selectedPath) => selectedPath !== path)
		: [...selectedPaths, path]
}
