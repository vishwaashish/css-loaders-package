# Define variables
OUT_DIR=lib
SRC_DIR=src

# Targets
.PHONY: all clean build generate-css lint lint-fix

# Default target
all: clean build generate-css

# Clean target
clean:
	@echo "Cleaning up..."
	@rm -rf $(OUT_DIR)

# Generate CSS target
generate-css:
	@echo "Generating CSS file..."
	npx tsc $(SRC_DIR)/generateCss.ts --outDir $(OUT_DIR) && node $(OUT_DIR)/generateCss.js

# Build target
build:
	@echo "Building TypeScript files..."
	npx tsc --project tsconfig.build.json && \
	npx tsc --module commonjs --outDir $(OUT_DIR)/cjs --project tsconfig.build.json

# Lint target
lint:
	@echo "Linting TypeScript files..."
	npx eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0

# Lint fix target
lint-fix:
	@echo "Fixing lint issues..."
	npx eslint . --ext ts,tsx --fix
