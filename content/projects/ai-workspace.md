---
name: "AI Workspace: AI Agent Platform"
sysId: SYS-AGENT-02
type: Agentic Runtime & Vector RAG Platform
category: AGENTIC AI
status: DEPLOYED
summary: AI agent backend engineered with FastAPI, PostgreSQL/pgvector, and Gemini, implementing RAG, persistent state, asynchronous processing, and a custom streaming tool-calling runtime.
metric: Real-time Streaming // Iterative Tool-Calling Runtime
metricLabel: AGENT RUNTIME & OBSERVABILITY
stack: [FastAPI, PostgreSQL, pgvector, Gemini, OpenTelemetry, Prometheus, Docker, Python]
stages:
  - id: "01"
    title: Provider-Agnostic LLM Layer
    spec: Standardized abstraction supporting frontier model providers
    type: input
  - id: "02"
    title: Persistent State & Vector RAG
    spec: PostgreSQL/pgvector session persistence and similarity retrieval
    type: transformer
  - id: "03"
    title: Iterative Tool Execution
    spec: Sandboxed tool execution with streamed token responses
    type: inference
  - id: "04"
    title: OpenTelemetry & Prometheus Telemetry
    spec: Distributed tracing and real-time inference latency metrics
    type: output
designDecisions:
  - Custom tool-calling runtime supporting multi-turn iterative execution and token streaming.
  - Asynchronous background processing paired with pgvector for fast contextual embedding lookups.
failureModes:
  - OpenTelemetry distributed tracing and structured Prometheus metrics to diagnose silent tool invocation failures.
---

Engineered an AI agent backend with FastAPI, PostgreSQL/pgvector, and Gemini, implementing RAG, persistent state, asynchronous processing, and provider-agnostic LLM abstractions.

Built a custom tool-calling runtime supporting iterative execution and streaming, with OpenTelemetry tracing, Prometheus metrics, and Docker-based deployment.
