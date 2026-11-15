# How to Add a Project

To add a new project, simply open `lib/projects.ts` and add a new object to the `projects` array:

```typescript
{
  slug: 'my-new-project',
  name: 'My New Project Title',
  sysId: 'SYS-AI-05',
  type: 'Autonomous Agent / Vision / Data Pipeline',
  category: 'COMPUTER VISION', // Or 'NLP & TRANSFORMERS', 'DEEP LEARNING', 'OPEN SOURCE'
  status: 'DEPLOYED', // Or 'VERIFIED PR', 'RESEARCH SPEC'
  summary: 'A short 1-2 sentence description of what the system does.',
  metric: '99.2% Accuracy // <120ms Latency',
  metricLabel: 'BENCHMARK & EVALUATION',
  stack: ['Python', 'FastAPI', 'PyTorch', 'Docker'],
  github: 'https://github.com/Saptarshi-Bandopadhyay/my-repo',
  demo: 'https://huggingface.co/spaces/...', // Optional
  stages: [
    { id: '01', title: 'Input Ingestion', spec: 'Raw data normalization and tokenization', type: 'input' },
    { id: '02', title: 'Neural Inference', spec: 'Forward pass through transformer blocks', type: 'transformer' },
    { id: '03', title: 'Output Serialization', spec: 'Generates formatted JSON payload', type: 'output' },
  ],
  overview: 'Detailed system overview and problem statement...',
  designDecisions: [
    'Why you chose this model or framework.',
    'Performance and throughput trade-offs.',
  ],
  failureModes: [
    'Handling edge cases, rate limits, and failure recovery.',
  ],
},
```

### What happens automatically:
- The project appears in `/projects/`.
- It gets filtered by its category.
- It receives its own dedicated deep-dive page at `/projects/my-new-project/`.
- Its stages render in the interactive CAD pipeline viewer with mechanical sound feedback!
