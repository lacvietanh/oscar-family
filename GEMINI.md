# GEMINI.md — Rules & Bootstrap Configuration

This file serves as a global guardrail and bootstrap loader for Gemini and Antigravity agents working on the Oscar Family project.

## Core Directives

### 1. Native Flow & Simplicity First
- **No Workarounds**: Always approach and resolve problems using native, standard Vue 3 / Vite-SSG flows.
- **Single Responsibility**: Do not introduce fragmented, overlapping, or duplicated code responsibilities.
- **Simplicity Over Everything**: Prioritize clean, straightforward implementations. Over-engineering and unnecessary abstractions are strictly prohibited.

### 2. Transparent & Secure Operations
- **Command Transparency**: Before executing any obscure, complex, or potentially sensitive terminal commands, declare Intent, Rationale, Expected Outcome, and Risks.
- **Confirm Before Action**: Ask for confirmation before high-impact changes to target files or core logic.

---

## Bootstrap Loader — Project Context

> [!IMPORTANT]
> **This file is a bootstrap loader only.**
> The absolute source of truth for this project's rules, stack, and guidelines is **`CLAUDE.md`** at the project root.

### Mandatory First Step
1. **Load Context**: You MUST read `CLAUDE.md` in this directory immediately before performing any analysis or making any code changes.
2. **Adhere to Constraints**: `CLAUDE.md` contains the precise project stack, build commands, SEO policies, and release rules. Do not deviate.
3. **No Silent Deviations**: If instructions are ambiguous, ask first. Do not write placeholder code or modify files until confirmed.

### Why This File Exists
Gemini CLI and Antigravity auto-load `GEMINI.md` from the project root. This file directs those agents to `CLAUDE.md` as the single source of truth. Global rules also live at `~/.aki/claudedoc/`.
