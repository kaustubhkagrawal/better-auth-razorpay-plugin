# Codex Instructions

## Project

This repository is a TypeScript library for a Better Auth Razorpay plugin.

## Commands

- Install dependencies: `npm install`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- Test: `npm test`

## Conventions

- Keep the public API in `src/index.ts` and the client plugin entry in `src/client.ts`.
- Do not expose Razorpay key secrets through client exports or response bodies.
- Prefer Better Auth plugin primitives from `better-auth` and `better-auth/api`.
- Endpoint paths should stay under `/razorpay/*` and use kebab-case.
- Use focused tests for pure helpers and typecheck/build for Better Auth integration.
