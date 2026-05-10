const runtime = globalThis as typeof globalThis & {
	process?: { cwd?: () => string }
	Deno?: { cwd?: () => string }
}

export function getInitialDirectory(): string {
	if (typeof runtime.process?.cwd === "function") {
		return runtime.process.cwd()
	}

	if (typeof runtime.Deno?.cwd === "function") {
		return runtime.Deno.cwd()
	}

	return "."
}

export function getParentDirectory(path: string): string {
	if (path === "/" || path === ".") {
		return path
	}

	const normalizedPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path
	const separatorIndex = normalizedPath.lastIndexOf("/")

	if (separatorIndex <= 0) {
		return normalizedPath.startsWith("/") ? "/" : "."
	}

	return normalizedPath.slice(0, separatorIndex)
}
