# Repository Agent Instructions

Scope: entire repository.

This repository follows the shared OpenAutonomyX instruction layer in `openautonomyx/common-instructions` while remaining scoped to AgentNxt website content and documentation.

## Content-only alignment rule

For documentation alignment tasks, update README files, docs, examples, copy, and repo-level guidance only. Do not change application code unless a human maintainer explicitly requests implementation work.

## Shared references

Use these shared references as the default baseline:

- `standards/engineering-execution-standard.md`
- `policies/context-and-guardrails-policy.md`
- `policies/test-and-process-improvement-policy.md`
- `policies/airgapped-operation-policy.md`

Do not duplicate shared policies in this repository. Reference them and add only AgentNxt website-specific guidance.

## In scope

- AgentNxt website copy
- README and content documentation
- Navigation and information architecture notes
- SEO/schema documentation
- Review notes for substantial content changes

## Out of scope

- Organization-level vision or strategy source documents
- Shared prompt packs
- Shared reusable code/config packages
- Unreviewed production-facing code changes

## Review guardrail

Production-facing website content should be reviewable, accurate, and aligned with AgentNxt positioning. Require reviewer approval and HITL sign-off before release when changes affect public claims, pricing, security, compliance, or product commitments.
