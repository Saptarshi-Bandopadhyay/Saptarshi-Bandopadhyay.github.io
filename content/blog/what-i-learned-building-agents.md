---
title: What I learned building AI agents
date: 2026-09-12
description: Agents are less about clever prompts and more about constrained tools, state and failure handling.
tags: [Agents, LangGraph, Engineering]
readTime: 5 min read
---

The most useful lesson from building agents was that autonomy is not the same as complexity.

## Give the model fewer ways to fail

A small set of explicit tools with strong schemas is often easier to reason about than a large toolbox.

## State matters

An agent needs to know what has already happened, what remains uncertain, and which action is safe to take next.

## The boring parts are important

Logging, retries, validation and deterministic fallbacks are what turn an interesting demo into software.
