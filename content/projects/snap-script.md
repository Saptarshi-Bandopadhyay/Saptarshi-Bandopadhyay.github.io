---
name: SnapScript: Image Captioning Engine
sysId: SYS-CV-01
type: Vision-Language Transformer
category: COMPUTER VISION
status: DEPLOYED
summary: Deep learning vision-language architecture combining an EfficientNetB0 visual feature extractor with an autoregressive Transformer decoder for descriptive token generation.
metric: Flickr8k Benchmark // Live on HuggingFace
metricLabel: BENCHMARK & EVALUATION
stack: [TensorFlow, EfficientNetB0, Transformers, Gradio, Python, HuggingFace]
github: https://github.com/Saptarshi-Bandopadhyay/Image_Captioning_Using_Transformers
demo: https://huggingface.co/spaces/Saptarshi003/Image_Captioning_Using_Transformer
stages:
  - id: "01"
    title: Spatial Tensor Input
    spec: 224x224 RGB image normalized and passed to convolutional feature backbone
    type: input
  - id: "02"
    title: EfficientNet Feature Map
    spec: Extracts spatial visual feature representations and projects into embedding dimension
    type: transformer
  - id: "03"
    title: Causal Masked Cross-Attention
    spec: Decoder attends to spatial visual feature maps across autoregressive token steps
    type: attention
  - id: "04"
    title: Token Sampling & Captioning
    spec: Nucleus top-p sampling produces coherent descriptive English sentences
    type: output
designDecisions:
  - Selected pre-trained EfficientNetB0 for optimal computational efficiency and dense visual representation.
  - Implemented causal masking in the decoder self-attention to eliminate autoregressive sequence lookahead bias.
  - Employed nucleus (top-p) sampling during beam search to minimize repetitive sequence loops.
failureModes:
  - Mitigated vocabulary collapse on uncommon object combinations via subword tokenization.
  - Applied gradient clipping during training to stabilize cross-attention decoder backpropagation.
---

End-to-end vision-language integration trained on the Flickr8k benchmark. Combines deep convolutional feature representations with self-attention and cross-attention sequence decoding, deployed as an interactive HuggingFace space.
