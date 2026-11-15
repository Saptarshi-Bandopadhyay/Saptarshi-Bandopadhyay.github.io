---
title: From scraping to a useful data product
date: 2026-08-30
description: The interesting part of an ETL pipeline begins after the data is collected.
tags: [Python, ETL, PostgreSQL]
readTime: 4 min read
---

Collecting data is only the first step. The useful pipeline makes the output consistent, searchable and trustworthy.

## Normalize early

Raw sources disagree about names, identifiers and nested fields. Normalization should happen before downstream consumers have to understand every source-specific quirk.

## Persist for the next question

A database is not just storage. Its schema should make the questions you expect to ask cheap and reliable.
