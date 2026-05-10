export type FileEntryKind = "directory" | "file" | "symlink" | "other"

export interface FileEntry {
	name: string
	path: string
	kind: FileEntryKind
	isHidden: boolean
	size: number
	modifiedAt: Date
}
