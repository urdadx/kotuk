import { lstat, readdir } from "node:fs/promises"

import type { FileEntry, FileEntryKind } from "../types/file"
import { sortEntries } from "./sorting"

function getEntryKind(isDirectory: boolean, isFile: boolean, isSymbolicLink: boolean): FileEntryKind {
	if (isDirectory) {
		return "directory"
	}

	if (isFile) {
		return "file"
	}

	if (isSymbolicLink) {
		return "symlink"
	}

	return "other"
}

function joinPath(directory: string, name: string): string {
	if (directory === "/") {
		return `/${name}`
	}

	if (directory === ".") {
		return name
	}

	return `${directory}/${name}`
}

export async function readDirectory(directory: string): Promise<FileEntry[]> {
	const directoryEntries = await readdir(directory, { withFileTypes: true })

	const entries = await Promise.all(
		directoryEntries.map(async (directoryEntry) => {
			const entryPath = joinPath(directory, directoryEntry.name)
			const stats = await lstat(entryPath)

			return {
				name: directoryEntry.name,
				path: entryPath,
				kind: getEntryKind(directoryEntry.isDirectory(), directoryEntry.isFile(), directoryEntry.isSymbolicLink()),
				isHidden: directoryEntry.name.startsWith("."),
				size: stats.size,
				modifiedAt: stats.mtime,
			} satisfies FileEntry
		}),
	)

	return sortEntries(entries)
}
