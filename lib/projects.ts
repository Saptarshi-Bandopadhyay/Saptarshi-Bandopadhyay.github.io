export type ArchitectureStep = {
  id: string
  title: string
  spec: string
  type: 'input' | 'transform' | 'search' | 'output'
}

export type Project = {
  slug: string
  name: string
  dwgNo: string
  type: string
  category: 'AGENTIC AI' | 'RETRIEVAL' | 'DATA & ETL' | 'COMPUTER VISION' | 'NLP' | 'OPEN SOURCE'
  status: 'PRODUCTION-GRADE' | 'DEPLOYED' | 'VERIFIED PR' | 'RESEARCH SPEC'
  summary: string
  metric: string
  metricLabel: string
  stack: string[]
  steps: ArchitectureStep[]
  github?: string
  demo?: string
  prUrl?: string
  overview: string
  designDecisions: string[]
  failureModes: string[]
}

export const projects: Project[] = [
  {
    slug: 'rag-agent',
    name: 'Multi-Step LangGraph RAG Agent',
    dwgNo: 'DWG-RAG-01',
    type: 'Hybrid Retrieval & Reasoning Engine',
    category: 'RETRIEVAL',
    status: 'PRODUCTION-GRADE',
    summary: 'Streaming agent orchestration utilizing LangGraph and Milvus (Hybrid Search) to expand, decompose, and retrieve evidence across high-volume document indexes.',
    metric: '100k+ Documents // <320ms Retrieval',
    metricLabel: 'DOCUMENT SCALE & LATENCY',
    stack: ['Python', 'LangGraph', 'Milvus', 'LangChain', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/Saptarshi-Bandopadhyay',
    steps: [
      { id: '01', title: 'Query Decomposition', spec: 'Splits compound queries into atomic semantic sub-questions', type: 'input' },
      { id: '02', title: 'Hybrid Dense/Sparse Search', spec: 'Concurrent Milvus vector search + BM25 keyword matching', type: 'search' },
      { id: '03', title: 'Cross-Encoder Reranking', spec: 'Reranks top 50 candidates down to top 5 evidence blocks', type: 'transform' },
      { id: '04', title: 'Synthesized Token Stream', spec: 'Streams hallucination-checked citations to client', type: 'output' },
    ],
    overview: 'Built to overcome single-vector retrieval failures on complex queries. Uses an iterative LangGraph state-machine that decides whether retrieved context is sufficient or requires query reformation.',
    designDecisions: [
      'Separated decomposition from generation to isolate retrieval precision.',
      'Implemented Milvus hybrid dense-sparse indexing to handle exact technical acronyms and domain terminology.',
      'Streamed token chunks via Server-Sent Events to minimize perceived user latency.',
    ],
    failureModes: [
      'Handled sparse retrieval collapse on out-of-vocabulary domain tokens with query expansion fallbacks.',
      'Protected token budgets through dynamic context window trimming before reranker pass.',
    ],
  },
  {
    slug: 'etl-agent',
    name: 'Autonomous AI-ETL Pipeline',
    dwgNo: 'DWG-ETL-02',
    type: 'Automated Scraping & Relational Ingestion',
    category: 'DATA & ETL',
    status: 'PRODUCTION-GRADE',
    summary: 'Dynamic headless browser pipeline that discovers, parses, cleanses, and ingests unstructured web records directly into PostgreSQL schemas.',
    metric: '10,000+ Records / Day',
    metricLabel: 'DAILY INGESTION THROUGHPUT',
    stack: ['Python', 'Playwright', 'PostgreSQL', 'SQLAlchemy', 'Pydantic', 'Docker'],
    github: 'https://github.com/Saptarshi-Bandopadhyay',
    steps: [
      { id: '01', title: 'Target Discovery', spec: 'Detects pagination patterns and dynamic SPA endpoints', type: 'input' },
      { id: '02', title: 'Playwright Extraction', spec: 'Headless browser execution avoiding DOM stale reference traps', type: 'search' },
      { id: '03', title: 'Pydantic Schema Validation', spec: 'Strict schema enforcement and anomaly sanitization', type: 'transform' },
      { id: '04', title: 'Bulk PostgreSQL Upsert', spec: 'Batched upserts with automatic conflict resolution', type: 'output' },
    ],
    overview: 'Engineered at Binoloop to power downstream machine learning workflows with continuously refreshed, high-integrity data extracted from disparate websites.',
    designDecisions: [
      'Chosen Playwright over simple HTTP clients to reliably capture client-side hydrated state.',
      'Implemented idempotency keys to ensure zero duplicate database writes during retries.',
    ],
    failureModes: [
      'Auto-restarts crashed browser worker pools with exponential backoff on network failures.',
      'Routes malformed payloads into an inspection dead-letter table without breaking the ingestion batch.',
    ],
  },
  {
    slug: 'ops-assistant',
    name: 'Enterprise Operations & Compliance Assistant',
    dwgNo: 'DWG-OPS-03',
    type: 'Event-Driven Workflow Automation',
    category: 'AGENTIC AI',
    status: 'PRODUCTION-GRADE',
    summary: 'Autonomous assistant monitoring enterprise Outlook inboxes via Microsoft Graph API to classify operations, schedule meetings, and generate warehouse audit reports.',
    metric: '500+ Emails/Hr // 85% Admin Reduction',
    metricLabel: 'AUTOMATION CAPACITY',
    stack: ['FastAPI', 'Microsoft Graph API', 'AWS SES', 'MySQL', 'SQLAlchemy', 'Python'],
    github: 'https://github.com/Saptarshi-Bandopadhyay',
    steps: [
      { id: '01', title: 'Graph API Webhook Event', spec: 'Subscribes to mailbox change notifications in real-time', type: 'input' },
      { id: '02', title: 'Intent Classification', spec: 'Classifies emails into scheduling, compliance, or operational inquiry', type: 'transform' },
      { id: '03', title: 'Rule-Based Routing & Action', spec: 'Books calendar slots, generates draft replies, or audits logs', type: 'search' },
      { id: '04', title: 'AWS SES Notification', spec: 'Dispatches confirmed receipts and executive risk summaries', type: 'output' },
    ],
    overview: 'Architected at AI Tech UK to eliminate manual operational overhead across Outlook users and automate warehouse operational audits with strict compliance logging.',
    designDecisions: [
      'Event-driven FastAPI webhook listener with asynchronous Celery/Redis queue for high-throughput spikes.',
      'Dual human-in-the-loop review mechanism for sensitive external vendor correspondence.',
    ],
    failureModes: [
      'Handled Microsoft Graph token expiration gracefully with proactive token renewal loops.',
      'Protected against rate limiting via adaptive throttling and request batching.',
    ],
  },
  {
    slug: 'snap-script',
    name: 'SnapScript: Image Captioning System',
    dwgNo: 'DWG-CV-04',
    type: 'Encoder-Decoder Vision Model',
    category: 'COMPUTER VISION',
    status: 'DEPLOYED',
    summary: 'Deep learning vision model combining an EfficientNetB0 feature extractor with a Transformer decoder for zero-shot descriptive caption generation.',
    metric: 'Flickr8k Benchmark // Live on HuggingFace',
    metricLabel: 'MODEL PERFORMANCE',
    stack: ['TensorFlow', 'EfficientNetB0', 'Transformers', 'Gradio', 'Python', 'HuggingFace'],
    github: 'https://github.com/Saptarshi-Bandopadhyay/Image_Captioning_Using_Transformers',
    demo: 'https://huggingface.co/spaces/Saptarshi003/Image_Captioning_Using_Transformer',
    steps: [
      { id: '01', title: 'Raw Image Input', spec: 'Normalized 224x224 RGB tensor passed to CNN backbone', type: 'input' },
      { id: '02', title: 'EfficientNet Feature Map', spec: 'Extracts spatial visual feature representations', type: 'transform' },
      { id: '03', title: 'Multi-Head Attention Decoder', spec: 'Attends to spatial visual features across autoregressive token steps', type: 'search' },
      { id: '04', title: 'Descriptive Caption', spec: 'Outputs grammatically coherent descriptive English text', type: 'output' },
    ],
    overview: 'End-to-end computer vision and NLP integration trained on the Flickr8k dataset, deployed as an interactive HuggingFace space.',
    designDecisions: [
      'Adopted pre-trained EfficientNetB0 for optimal balance of feature richness and inference speed.',
      'Employed causal masked multi-head attention in the decoder to eliminate autoregressive lookahead bias.',
    ],
    failureModes: [
      'Mitigated repetitive token loops by applying nucleus (top-p) sampling during beam search.',
    ],
  },
  {
    slug: 'cross-talk',
    name: 'CrossTalk: English-to-Spanish Translation',
    dwgNo: 'DWG-NLP-05',
    type: 'Sequence-to-Sequence Transformer',
    category: 'NLP',
    status: 'DEPLOYED',
    summary: 'Neural machine translation system translating conversational English into grammatically accurate Spanish using custom Transformer architectures.',
    metric: 'High BLEU Score // Live Demo',
    metricLabel: 'TRANSLATION FIDELITY',
    stack: ['PyTorch', 'Transformers', 'HuggingFace Spaces', 'Gradio', 'Python'],
    github: 'https://github.com/Saptarshi-Bandopadhyay/Neural_Machine_Translation',
    demo: 'https://huggingface.co/spaces/Saptarshi003/Neural_Machine_Translation',
    steps: [
      { id: '01', title: 'English Sentence Ingestion', spec: 'BPE tokenization and positional encoding', type: 'input' },
      { id: '02', title: 'Transformer Encoder', spec: 'Bidirectional context representation modeling', type: 'transform' },
      { id: '03', title: 'Cross-Attention Decoder', spec: 'Autoregressively generates target Spanish token IDs', type: 'search' },
      { id: '04', title: 'Detokenized Spanish Output', spec: 'Reconstructs fluid, idiomatic Spanish prose', type: 'output' },
    ],
    overview: 'Built from the ground up to study sequence-to-sequence translation mechanics, attention weight distributions, and tokenization boundary effects.',
    designDecisions: [
      'Byte-Pair Encoding (BPE) subword tokenization to seamlessly handle compound terms and rare words.',
      'Positional encodings added directly to embedding vectors to preserve word-order sensitivity.',
    ],
    failureModes: [
      'Handled lengthy run-on sentences via dynamic sentence boundary chunking.',
    ],
  },
  {
    slug: 'uno-viz',
    name: 'UnoViz: One-Shot Face Recognition',
    dwgNo: 'DWG-CV-06',
    type: 'Siamese Metric Learning',
    category: 'COMPUTER VISION',
    status: 'RESEARCH SPEC',
    summary: 'One-shot facial recognition system capable of utilizing a single reference photograph to verify individuals through Siamese feature projection and Triplet Loss optimization.',
    metric: 'Single-Image Enrollment',
    metricLabel: 'ONE-SHOT ACCURACY',
    stack: ['TensorFlow', 'OpenCV', 'Siamese Networks', 'Triplet Loss', 'Python'],
    github: 'https://github.com/Saptarshi-Bandopadhyay/Face-Recognition-Using-SiameseNetwork_TripletLoss',
    steps: [
      { id: '01', title: 'Anchor & Candidate Ingestion', spec: 'Face bounding box extraction via Haar cascade/MTCNN', type: 'input' },
      { id: '02', title: 'Twin CNN Embedding Pipeline', spec: 'Projects 128-dimensional L2-normalized face vectors', type: 'transform' },
      { id: '03', title: 'Triplet Distance Metric', spec: 'Calculates Euclidean distance against reference anchor', type: 'search' },
      { id: '04', title: 'Verification Decision', spec: 'Threshold classifier flags Match or Impostor', type: 'output' },
    ],
    overview: 'Explored metric learning and distance representation to identify individuals when only one reference image is available.',
    designDecisions: [
      'Trained using semi-hard Triplet Loss to enforce intra-class compactness and inter-class separation.',
      'Applied L2 vector normalization to map face embeddings onto a clean hypersphere.',
    ],
    failureModes: [
      'Incorporate affine alignment to prevent false rejects caused by extreme head yaw angles.',
    ],
  },
  {
    slug: 'ivy-framework',
    name: 'Ivy Unified ML Framework Contributions',
    dwgNo: 'DWG-OSS-07',
    type: 'Open Source Framework Engineering',
    category: 'OPEN SOURCE',
    status: 'VERIFIED PR',
    summary: 'Implemented NumPy frontend instance methods and exhaustive hypothesis-based test suites for Unify’s Ivy framework, enabling seamless cross-framework execution.',
    metric: 'Merged PR #22199 // Top Contributor',
    metricLabel: 'OPEN SOURCE IMPACT',
    stack: ['Python', 'NumPy', 'PyTorch', 'TensorFlow', 'JAX', 'Git'],
    github: 'https://github.com/unifyai/ivy/pull/22199',
    prUrl: 'https://github.com/unifyai/ivy/pull/22199',
    steps: [
      { id: '01', title: 'Frontend Method Definition', spec: 'Mirroring NumPy instance method signature and behavioral contracts', type: 'input' },
      { id: '02', title: 'Backend Dispatch Wiring', spec: 'Translating backend calls into unified Ivy functional primitives', type: 'transform' },
      { id: '03', title: 'Property-Based Test Harness', spec: 'Hypothesis-generated test cases verifying gradients and dtypes', type: 'search' },
      { id: '04', title: 'Upstream Merge', spec: 'Rigorous code review, CI matrix pass, and merge into master', type: 'output' },
    ],
    overview: 'Contributed directly to the core runtime of Ivy (London, UK), recognized as a Top Contributor for reliable frontend implementation.',
    designDecisions: [
      'Handled dtype promotions strictly according to NumPy casting rules across diverse backends.',
      'Wrote comprehensive property-based fuzz tests to ensure numeric stability under float16 and float64.',
    ],
    failureModes: [
      'Fixed edge-case discrepancies where JAX and PyTorch backend array semantics diverged.',
    ],
  },
]
