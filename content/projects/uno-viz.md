---
name: UnoViz: One-Shot Face Recognition
sysId: SYS-CV-03
type: Siamese Metric Learning
category: DEEP LEARNING
status: RESEARCH SPEC
summary: One-shot biometric verification system utilizing Siamese convolutional feature projection and Triplet Loss optimization to verify individuals from a single reference image.
metric: Single-Image Enrollment
metricLabel: ONE-SHOT VERIFICATION
stack: [TensorFlow, OpenCV, Siamese Networks, Triplet Loss, Python]
github: https://github.com/Saptarshi-Bandopadhyay/Face-Recognition-Using-SiameseNetwork_TripletLoss
stages:
  - id: "01"
    title: Anchor & Candidate Ingestion
    spec: Haar Cascade / MTCNN facial region extraction and affine alignment
    type: input
  - id: "02"
    title: Twin CNN Embedding Pipeline
    spec: Projects 128-dimensional L2-normalized facial embeddings
    type: transformer
  - id: "03"
    title: Euclidean Distance Metric
    spec: Computes vector distance against registered anchor embedding in latent space
    type: inference
  - id: "04"
    title: Threshold Verification
    spec: Calibrated margin threshold outputs binary Verification / Rejection decision
    type: output
designDecisions:
  - Trained with semi-hard Triplet Loss to enforce intra-class compactness and inter-class margin separation.
  - Applied L2 normalization to constrain all embedding projections onto a unit hypersphere.
failureModes:
  - Added affine pose normalization to minimize false rejections from extreme facial yaw or pitch.
---

An exploration of deep metric learning where the objective is not discrete classification, but learning an embedding space where identical subjects cluster and different subjects are separated by a margin.
