---
title: Building RAG systems that answer the real question
date: 2026-09-20
description: Retrieval quality starts before the vector database. A practical look at decomposition, query expansion and evidence.
tags: [RAG, LLM, Retrieval]
readTime: 6 min read
---

A retrieval system is only useful when it finds the evidence that actually answers the question.

## Start with the question

Before choosing an embedding model, decide what the user is really asking. Query expansion and decomposition can turn one vague request into several retrieval-friendly searches.

## Retrieval is a pipeline

```python
queries = expand(question)
subquestions = decompose(queries)
evidence = hybrid_search(subquestions)
answer = generate(evidence)
```

The important part is not any single component. It is how the components behave together.

## Measure the retrieval layer

Track whether the relevant document appears in the candidate set, then measure the quality of the generated answer separately. Retrieval and generation fail differently, so they need different evaluation signals.
