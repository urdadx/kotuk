import type { FileEntry } from "../types/file"

export function sortEntries(entries: FileEntry[]): FileEntry[] {
	return [...entries].sort((left, right) => {
		if (left.kind === "directory" && right.kind !== "directory") {
			return -1
		}

		if (left.kind !== "directory" && right.kind === "directory") {
			return 1
		}

		return left.name.localeCompare(right.name)
	})
}
