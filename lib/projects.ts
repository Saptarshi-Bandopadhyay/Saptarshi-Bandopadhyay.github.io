export type PipelineStage = {
  id: string
  title: string
  spec: string
  type: 'input' | 'transformer' | 'attention' | 'inference' | 'output'
}

export type Project = {
  slug: string
  name: string
  sysId: string
  type: string
  category: 'AGENTIC AI' | 'COMPUTER VISION' | 'NLP & TRANSFORMERS' | 'DEEP LEARNING' | 'OPEN SOURCE'
  status: 'DEPLOYED' | 'VERIFIED PR' | 'RESEARCH SPEC'
  summary: string
  metric: string
  metricLabel: string
  stack: string[]
  stages: PipelineStage[]
  github?: string
  demo?: string
  prUrl?: string
  overview: string
  designDecisions: string[]
  failureModes: string[]
}

export const projects: Project[] = [
  {
    slug: 'axiom',
    name: 'AXIOM: Automated X-Section Integrity & Oversight',
    sysId: 'SYS-AXIOM-01',
    type: 'Research Review Engine & Multi-Tier Gateway',
    category: 'AGENTIC AI',
    status: 'DEPLOYED',
    summary: 'End-to-end AI research review engine using FastAPI and LangGraph to automate full-paper reproducibility audits, validating citation graphs with 98% factual precision.',
    metric: '98% Factual Precision // <2 min Turnaround',
    metricLabel: 'FACTUAL PRECISION & AUDIT SPEED',
    stack: ['FastAPI', 'LangGraph', 'LiteLLM', 'Gemini 3.5', 'Groq 120B', 'Redis', 'Python'],
    github: 'https://github.com/Saptarshi-Bandopadhyay',
    stages: [
      { id: '01', title: 'Cross-Section Text Parsing', spec: 'Structural text segmentation and citation graph validation', type: 'input' },
      { id: '02', title: 'Multi-Tier LLM Routing', spec: 'Dynamic model gateway routing across LiteLLM, Gemini 3.5, and Groq 120B', type: 'transformer' },
      { id: '03', title: 'Token Trimming & Redis Caching', spec: 'Automated prompt budget optimization achieving 99.9% pipeline availability', type: 'inference' },
      { id: '04', title: 'Audit Report Generation', spec: 'Detects empirical gaps and ungrounded claims with 98% precision in <2 minutes', type: 'output' },
    ],
    overview: 'Architected an end-to-end AI research review engine using FastAPI and LangGraph to automate full-paper reproducibility audits. Parses cross-section text and validates citation graphs to identify empirical gaps and ungrounded claims with 98% factual precision, cutting review turnaround from 3+ hours to under 2 minutes. Engineered a resilient multi-tier LLM routing gateway (LiteLLM, Gemini 3.5, Groq 120B) with automated prompt token-budget trimming, exponential backoff retries, and Redis prompt caching, achieving 99.9% pipeline availability across 20k+ token documents and reducing API latency and compute costs by 45%.',
    designDecisions: [
      'Multi-tier LLM routing gateway selecting optimal models based on document token length and latency constraints.',
      'Automated token-budget trimming and Redis prompt caching, cutting API latency and compute costs by 45%.',
    ],
    failureModes: [
      'Exponential backoff retries and graceful fallback routing across model providers during upstream rate limits.',
    ],
  },
  {
    slug: 'ai-workspace',
    name: 'AI Workspace: AI Agent Platform',
    sysId: 'SYS-AGENT-02',
    type: 'Agentic Runtime & Vector RAG Platform',
    category: 'AGENTIC AI',
    status: 'DEPLOYED',
    summary: 'AI agent backend engineered with FastAPI, PostgreSQL/pgvector, and Gemini, implementing RAG, persistent state, asynchronous processing, and an iterative streaming tool runtime.',
    metric: 'Real-time Streaming // Iterative Tool-Calling Runtime',
    metricLabel: 'AGENT PLATFORM RUNTIME',
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Gemini', 'OpenTelemetry', 'Prometheus', 'Docker', 'Python'],
    github: 'https://github.com/Saptarshi-Bandopadhyay',
    stages: [
      { id: '01', title: 'Provider-Agnostic LLM Layer', spec: 'Standardized abstraction supporting frontier model providers', type: 'input' },
      { id: '02', title: 'Persistent State & Vector RAG', spec: 'PostgreSQL/pgvector session persistence and similarity retrieval', type: 'transformer' },
      { id: '03', title: 'Iterative Tool Execution', spec: 'Sandboxed tool execution with streamed token responses', type: 'inference' },
      { id: '04', title: 'OpenTelemetry Observability', spec: 'Distributed tracing and Prometheus inference latency metrics', type: 'output' },
    ],
    overview: 'Engineered an AI agent backend with FastAPI, PostgreSQL/pgvector, and Gemini, implementing RAG, persistent state, asynchronous processing, and provider-agnostic LLM abstractions. Built a custom tool-calling runtime supporting iterative execution and streaming, with OpenTelemetry tracing, Prometheus metrics, and Docker-based deployment.',
    designDecisions: [
      'Custom tool-calling runtime supporting multi-turn iterative execution and token streaming.',
      'Asynchronous background processing paired with pgvector for fast contextual embedding lookups.',
    ],
    failureModes: [
      'OpenTelemetry distributed tracing and structured Prometheus metrics to diagnose silent tool invocation failures.',
    ],
  },
  {
    slug: 'snap-script',
    name: 'SnapScript: Image Captioning Engine',
    sysId: 'SYS-CV-03',
    type: 'Vision-Language Transformer',
    category: 'COMPUTER VISION',
    status: 'DEPLOYED',
    summary: 'Deep learning vision-language architecture combining an EfficientNetB0 visual feature extractor with an autoregressive Transformer decoder for descriptive token generation.',
    metric: 'Flickr8k Benchmark // Live on HuggingFace',
    metricLabel: 'BENCHMARK & EVALUATION',
    stack: ['TensorFlow', 'EfficientNetB0', 'Transformers', 'Gradio', 'Python', 'HuggingFace'],
    github: 'https://github.com/Saptarshi-Bandopadhyay/Image_Captioning_Using_Transformers',
    demo: 'https://huggingface.co/spaces/Saptarshi003/Image_Captioning_Using_Transformer',
    stages: [
      { id: '01', title: 'Spatial Tensor Input', spec: '224x224 RGB image normalized and passed to convolutional feature backbone', type: 'input' },
      { id: '02', title: 'EfficientNet Feature Map', spec: 'Extracts spatial visual feature representations and projects into embedding dimension', type: 'transformer' },
      { id: '03', title: 'Causal Masked Cross-Attention', spec: 'Decoder attends to spatial visual feature maps across autoregressive token steps', type: 'attention' },
      { id: '04', title: 'Token Sampling & Captioning', spec: 'Nucleus top-p sampling produces coherent descriptive English sentences', type: 'output' },
    ],
    overview: 'End-to-end vision-language integration trained on the Flickr8k benchmark. Combines deep convolutional feature representations with self-attention and cross-attention sequence decoding, deployed as an interactive HuggingFace space.',
    designDecisions: [
      'Selected pre-trained EfficientNetB0 for optimal computational efficiency and dense visual representation.',
      'Implemented causal masking in the decoder self-attention to eliminate autoregressive sequence lookahead bias.',
      'Employed nucleus (top-p) sampling during beam search to minimize repetitive sequence loops.',
    ],
    failureModes: [
      'Mitigated vocabulary collapse on uncommon object combinations via subword tokenization.',
      'Applied gradient clipping during training to stabilize cross-attention decoder backpropagation.',
    ],
  },
  {
    slug: 'cross-talk',
    name: 'CrossTalk: Neural Machine Translation',
    sysId: 'SYS-NLP-04',
    type: 'Sequence-to-Sequence Transformer',
    category: 'NLP & TRANSFORMERS',
    status: 'DEPLOYED',
    summary: 'Neural machine translation system translating conversational English into grammatically sound Spanish using custom encoder-decoder Transformer architectures.',
    metric: 'High BLEU Score // Live on HuggingFace',
    metricLabel: 'TRANSLATION ACCURACY',
    stack: ['PyTorch', 'Transformers', 'HuggingFace Spaces', 'Gradio', 'Python'],
    github: 'https://github.com/Saptarshi-Bandopadhyay/Neural_Machine_Translation',
    demo: 'https://huggingface.co/spaces/Saptarshi003/Neural_Machine_Translation',
    stages: [
      { id: '01', title: 'BPE Subword Tokenization', spec: 'Byte-Pair Encoding with sinusoidal positional encodings', type: 'input' },
      { id: '02', title: 'Multi-Head Self-Attention Encoder', spec: 'Bidirectional context representation modeling across token sequences', type: 'transformer' },
      { id: '03', title: 'Cross-Attention Decoder', spec: 'Queries decoder state against encoder key-value representations', type: 'attention' },
      { id: '04', title: 'Detokenized Spanish Output', spec: 'Softmax vocabulary projection and detokenization into fluent Spanish prose', type: 'output' },
    ],
    overview: 'Built from foundational PyTorch primitives to inspect attention weight distributions, positional encoding fidelity, and subword boundary mechanics during bilingual sequence translation.',
    designDecisions: [
      'Learned BPE subword vocabulary to gracefully manage inflectional variations and out-of-vocabulary tokens.',
      'Scaled dot-product attention paired with residual feed-forward networks for deep gradient flow.',
    ],
    failureModes: [
      'Handled long context run-on sentences through dynamic sliding-window attention chunking.',
    ],
  },
  {
    slug: 'uno-viz',
    name: 'UnoViz: One-Shot Face Recognition',
    sysId: 'SYS-CV-05',
    type: 'Siamese Metric Learning',
    category: 'DEEP LEARNING',
    status: 'RESEARCH SPEC',
    summary: 'One-shot biometric verification system utilizing Siamese convolutional feature projection and Triplet Loss optimization to verify individuals from a single reference image.',
    metric: 'Single-Image Enrollment',
    metricLabel: 'ONE-SHOT VERIFICATION',
    stack: ['TensorFlow', 'OpenCV', 'Siamese Networks', 'Triplet Loss', 'Python'],
    github: 'https://github.com/Saptarshi-Bandopadhyay/Face-Recognition-Using-SiameseNetwork_TripletLoss',
    stages: [
      { id: '01', title: 'Anchor & Candidate Ingestion', spec: 'Haar Cascade / MTCNN facial region extraction and affine alignment', type: 'input' },
      { id: '02', title: 'Twin CNN Embedding Pipeline', spec: 'Projects 128-dimensional L2-normalized facial embeddings', type: 'transformer' },
      { id: '03', title: 'Euclidean Distance Metric', spec: 'Computes vector distance against registered anchor embedding in latent space', type: 'inference' },
      { id: '04', title: 'Threshold Verification', spec: 'Calibrated margin threshold outputs binary Verification / Rejection decision', type: 'output' },
    ],
    overview: 'An exploration of deep metric learning where the objective is not discrete classification, but learning an embedding space where identical subjects cluster and different subjects are separated by a margin.',
    designDecisions: [
      'Trained with semi-hard Triplet Loss to enforce intra-class compactness and inter-class margin separation.',
      'Applied L2 normalization to constrain all embedding projections onto a unit hypersphere.',
    ],
    failureModes: [
      'Added affine pose normalization to minimize false rejections from extreme facial yaw or pitch.',
    ],
  },
  {
    slug: 'ivy-framework',
    name: 'Ivy Unified ML Framework Core',
    sysId: 'SYS-OSS-06',
    type: 'Runtime Architecture & Systems',
    category: 'OPEN SOURCE',
    status: 'VERIFIED PR',
    summary: 'Implemented NumPy frontend instance methods and property-based test harnesses for Unify’s Ivy unified machine learning framework, enabling seamless cross-framework execution across PyTorch, TensorFlow, and JAX.',
    metric: 'Merged PR #22199 // Top Contributor',
    metricLabel: 'OPEN SOURCE IMPACT',
    stack: ['Python', 'NumPy', 'PyTorch', 'TensorFlow', 'JAX', 'Hypothesis'],
    github: 'https://github.com/unifyai/ivy/pull/22199',
    prUrl: 'https://github.com/unifyai/ivy/pull/22199',
    stages: [
      { id: '01', title: 'Frontend Method Signatures', spec: 'Mirrors exact NumPy instance method contracts and keyword semantics', type: 'input' },
      { id: '02', title: 'Unified Primitive Dispatch', spec: 'Translates high-level operations into standardized Ivy backend functional calls', type: 'transformer' },
      { id: '03', title: 'Property-Based Test Matrix', spec: 'Hypothesis-generated tensor test cases verifying gradients and dtypes across backends', type: 'inference' },
      { id: '04', title: 'Upstream Core Merge', spec: 'Passed complete CI test matrix across PyTorch, TF, JAX, and NumPy targets', type: 'output' },
    ],
    overview: 'Contributed to the core compiler and runtime frontend of Ivy (London, UK), earning Top Contributor distinction for implementing reliable frontend methods and rigorous hypothesis tests.',
    designDecisions: [
      'Enforced strict type promotion casting matching NumPy array semantics across diverse execution backends.',
      'Authored property-based fuzz test suites to detect floating-point precision drifts between JAX and PyTorch.',
    ],
    failureModes: [
      'Resolved subtle gradient tracking divergence when evaluating non-contiguous tensor memory layouts.',
    ],
  },
]
