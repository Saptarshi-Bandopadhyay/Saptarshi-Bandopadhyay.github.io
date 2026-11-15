# How to Add a Project to this Portfolio

Adding a new project is as simple as dropping a Markdown file into `content/projects/`.

### 1. Create a new file
Create `content/projects/your-project-slug.md`:

```markdown
---
name: Your Project Name
sysId: SYS-AI-05
type: Sequence Model / Autonomous Agent / Vision System
category: COMPUTER VISION # Or 'NLP & TRANSFORMERS', 'DEEP LEARNING', 'OPEN SOURCE', 'AGENTIC AI'
status: DEPLOYED # Or 'VERIFIED PR', 'RESEARCH SPEC', 'IN PRODUCTION'
summary: A concise 1-2 sentence description of what the system does.
metric: 99.2% Accuracy // <120ms Latency
metricLabel: BENCHMARK & EVALUATION
stack: [Python, PyTorch, FastAPI, Docker]
github: https://github.com/Saptarshi-Bandopadhyay/your-repo
demo: https://huggingface.co/spaces/... # optional
stages:
  - id: "01"
    title: Stage Title
    spec: What happens in this execution step
    type: input # Or 'transformer', 'attention', 'inference', 'output'
  - id: "02"
    title: Inference Step
    spec: Neural forward pass or retrieval lookup
    type: inference
  - id: "03"
    title: Output Generation
    spec: Final formatted prediction or response
    type: output
designDecisions:
  - Explain why you chose this architecture or framework.
  - Detail any optimization or latency trade-offs.
failureModes:
  - Mention edge cases handled (e.g. out-of-bounds input, rate limits).
---

Write your full system overview, problem statement, and technical deep-dive here in Markdown!
```

### 2. That's it!
When you push to GitHub:
- The project will automatically appear in `/projects/`.
- It will be filterable by category and searchable.
- It will automatically receive its own dedicated blueprint specification sheet at `/projects/your-project-slug/`.
- Its interactive pipeline stages will be rendered in the CAD architecture viewer with click sound effects.
