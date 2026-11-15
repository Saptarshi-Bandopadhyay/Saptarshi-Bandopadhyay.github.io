---
name: CrossTalk: Neural Machine Translation
sysId: SYS-NLP-02
type: Sequence-to-Sequence Transformer
category: NLP & TRANSFORMERS
status: DEPLOYED
summary: Neural machine translation system translating conversational English into grammatically sound Spanish using custom encoder-decoder Transformer architectures.
metric: High BLEU Score // Live on HuggingFace
metricLabel: TRANSLATION ACCURACY
stack: [PyTorch, Transformers, HuggingFace Spaces, Gradio, Python]
github: https://github.com/Saptarshi-Bandopadhyay/Neural_Machine_Translation
demo: https://huggingface.co/spaces/Saptarshi003/Neural_Machine_Translation
stages:
  - id: "01"
    title: BPE Subword Tokenization
    spec: Byte-Pair Encoding with sinusoidal positional encodings
    type: input
  - id: "02"
    title: Multi-Head Self-Attention Encoder
    spec: Bidirectional context representation modeling across token sequences
    type: transformer
  - id: "03"
    title: Cross-Attention Decoder
    spec: Queries decoder state against encoder key-value representations
    type: attention
  - id: "04"
    title: Detokenized Spanish Output
    spec: Softmax vocabulary projection and detokenization into fluent Spanish prose
    type: output
designDecisions:
  - Learned BPE subword vocabulary to gracefully manage inflectional variations and out-of-vocabulary tokens.
  - Scaled dot-product attention paired with residual feed-forward networks for deep gradient flow.
failureModes:
  - Handled long context run-on sentences through dynamic sliding-window attention chunking.
---

Built from foundational PyTorch primitives to inspect attention weight distributions, positional encoding fidelity, and subword boundary mechanics during bilingual sequence translation.
