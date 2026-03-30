const researchGroups = [
  {
    id: "parsing",
    theme: "amber",
    title: "Track-I: Scene Graph Generation / Parsing",
    description:
      "Structured parsing advances scene graphs from static 2D perception to universal multimodal and 4D dynamic representations.",
    papers: [
      {
        venue: "CVPR 2025 Highlight",
        code: "4D-LLM",
        thumbLabel: "4D scene graph",
        title: "Learning 4D Panoptic Scene Graph Generation from Rich 2D Visual Scene",
        summary:
          "End-to-end 4D panoptic scene graph generation with 4D-LLM, open-vocabulary chained inference, and 2D-to-4D transfer learning to counter scarce 4D supervision.",
        tags: ["4D-PSG", "Open vocabulary", "Transfer learning"],
        points: [
          "Combines a 4D LLM with a 3D mask decoder for direct 4D-PSG generation.",
          "Uses chained SG inference to iteratively refine object and relation labels.",
          "Transfers dimension-invariant features from rich 2D SG annotations into 4D scenes.",
        ],
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2503.15019" },
          { label: "Project", url: "https://sqwu.top/PSG-4D-LLM/" },
        ],
      },
      {
        venue: "CVPR 2025 Highlight",
        code: "USG",
        thumbLabel: "Universal scene graph",
        title: "Universal Scene Graph Generation",
        summary:
          "Introduces Universal Scene Graphs as a representation that captures modality-invariant and modality-specific semantics across arbitrary combinations of inputs.",
        tags: ["Universal SG", "Cross-modal parsing", "Modular alignment"],
        points: [
          "Defines a unified SG representation spanning image, text, video, and 3D modalities.",
          "Builds USG-Par with an object associator to reduce cross-modal alignment gaps.",
          "Uses text-centric scene contrastive learning to mitigate domain imbalance.",
        ],
        links: [
          { label: "Paper", url: "https://arxiv.org/pdf/2503.15005" },
          { label: "Project", url: "https://sqwu.top/USG/" },
        ],
      },
    ],
  },
  {
    id: "reasoning",
    theme: "sage",
    title: "Track-II: Scene-Graph-aided Cross-modal Comprehension / Reasoning",
    description:
      "Scene graphs act as alignment scaffolds for video-language learning, 3D understanding, captioning, IE, translation, and structured event reasoning.",
    papers: [
      {
        venue: "IEEE TPAMI 2024",
        code: "Finsta",
        thumbLabel: "Language-video modeling",
        title: "Enhancing Video-Language Representations with Structural Spatio-Temporal Alignment",
        summary:
          "A plug-and-play SG framework that strengthens video-language models with fine-grained spatial and temporal alignment between text and video.",
        tags: ["Video-language", "Spatio-temporal", "Plug-and-play"],
        points: [
          "Builds textual, dynamic, and holistic scene graphs across the two modalities.",
          "Uses recurrent graph transformers for spatial and temporal feature propagation.",
          "Improves 13 strong VLMs across 12 datasets in fine-tuning and zero-shot settings.",
        ],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2406.19255" }],
      },
      {
        venue: "ACL 2023",
        code: "Go3D-S2G",
        thumbLabel: "3D spatial modeling",
        title: "Generating Visual Spatial Description via Holistic 3D Scene Understanding",
        summary:
          "Builds target-centered 3D spatial scene graphs to improve spatial faithfulness and diversity for visual spatial description.",
        tags: ["3D scene graph", "Spatial language", "Holistic scenes"],
        points: [
          "Extracts 3D objects and scene features to construct a holistic 3D SG.",
          "Selects topologically diverse subgraphs for diversified spatial text generation.",
          "Outperforms 2D-only baselines especially on complex spatial relations.",
        ],
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2305.11768" },
          { label: "Code", url: "https://github.com/zhaoyucs/VSD" },
        ],
      },
      {
        venue: "ACL 2023",
        code: "Cross2StrA",
        thumbLabel: "Visual captioning",
        title: "Cross2StrA: Unpaired Cross-lingual Image Captioning with Cross-lingual Cross-modal Structure-pivoted Alignment",
        summary:
          "Uses scene graphs and constituency trees as semantic and syntactic pivots for cross-modal and cross-lingual caption transfer.",
        tags: ["Captioning", "Cross-lingual", "Structure alignment"],
        points: [
          "Couples structure-guided image-to-pivot captioning with pivot-to-target translation.",
          "Aligns scene semantics across modalities and syntax across languages.",
          "Improves both caption relevance and fluency in English-Chinese transfer.",
        ],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2305.12260" }],
      },
      {
        venue: "ACM MM 2023",
        code: "HostSG",
        thumbLabel: "Video semantic roles",
        title: "Constructing Holistic Spatio-Temporal Scene Graph for Video Semantic Role Labeling",
        summary:
          "Constructs a holistic spatio-temporal SG and scene-event hierarchy to improve salient event understanding in video semantic role labeling.",
        tags: ["VidSRL", "Event structure", "Hierarchical graph"],
        points: [
          "Bridges scene structure and high-level event semantics through an ICE graph.",
          "Applies iterative structure refinement to better fit downstream task needs.",
          "Jointly decodes VidSRL subtasks to avoid pipeline error propagation.",
        ],
        links: [{ label: "Paper", url: "https://arxiv.org/abs/2308.05081" }],
      },
      {
        venue: "ACL 2023 Paper Award Nomination",
        code: "MRE-ISE",
        thumbLabel: "Information extraction",
        title: "Information Screening whilst Exploiting! Multimodal Relation Extraction with Feature Denoising and Multimodal Topic Modeling",
        summary:
          "Fuses visual and textual SGs into a cross-modal graph, denoises less informative features, and injects multimodal topic signals for relation extraction.",
        tags: ["Relation extraction", "Feature denoising", "Topic modeling"],
        points: [
          "Builds a unified cross-modal graph over image and text scene structures.",
          "Uses a graph information bottleneck to filter noisy or weak signals.",
          "Adds latent multimodal topics to enrich context for relation prediction.",
        ],
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2305.11719" },
          { label: "Code", url: "https://github.com/ChocoWu/MRE-ISE" },
        ],
      },
      {
        venue: "ACL 2023",
        code: "VSH",
        thumbLabel: "Multimodal translation",
        title: "Scene Graph as Pivoting: Inference-time Image-free Unsupervised Multimodal Machine Translation with Visual Scene Hallucination",
        summary:
          "Enables inference-time image-free multimodal translation by hallucinating pseudo visual scene graphs from textual structure.",
        tags: ["Machine translation", "Image-free inference", "Scene hallucination"],
        points: [
          "Represents paired image-text inputs with visual and language SGs during training.",
          "Hallucinates pseudo visual SGs from text at inference time.",
          "Improves translation completeness, relevance, and fluency on Multi30K.",
        ],
        links: [
          { label: "Paper", url: "https://arxiv.org/abs/2305.12256" },
          { label: "Code", url: "https://github.com/scofield7419/UMMT-VSH" },
        ],
      },
    ],
  },
  {
    id: "generation",
    theme: "sky",
    title: "Track-III: Scene-Graph-aided Cross-modal Generation",
    description:
      "Scene graphs become explicit control signals and imagination spaces for high-faithfulness text-to-image and text-to-video synthesis.",
    papers: [
      {
        venue: "ACM MM 2023",
        code: "LayoutLLM-T2I",
        thumbLabel: "Text-to-image generation",
        title: "LayoutLLM-T2I: Eliciting Layout Guidance from LLM for Text-to-Image Generation",
        summary:
          "Uses LLMs to infer scene layouts from text prompts, then turns those layouts into guidance for high-faithfulness image generation.",
        tags: ["Text-to-image", "Layout planning", "LLM guidance"],
        points: [
          "Generates coarse scene layout plans directly from natural language prompts.",
          "Introduces object-interaction diffusion for finer and more faithful synthesis.",
          "Improves text-layout alignment and image faithfulness over prior approaches.",
        ],
        links: [
          { label: "Project", url: "https://layoutllm-t2i.github.io/" },
          { label: "Paper", url: "https://arxiv.org/pdf/2308.05095" },
        ],
      },
      {
        venue: "NeurIPS 2024",
        code: "Salad",
        thumbLabel: "Abstract-to-intricate T2I",
        title: "Imagine That! Abstract-to-Intricate Text-to-Image Synthesis with Scene Graph Hallucination Diffusion",
        summary:
          "Improves abstract-to-intricate text-to-image synthesis by hallucinating richer scene graphs before running structure-guided diffusion.",
        tags: ["Scene hallucination", "Diffusion", "Abstract prompts"],
        points: [
          "Expands initial prompt graphs into richer feasible scene structures.",
          "Uses discrete diffusion for SG evolution and continuous diffusion for image synthesis.",
          "Notably improves intricate generation from simple abstract prompts.",
        ],
        links: [
          { label: "Paper", url: "https://openreview.net/forum?id=hSTaTBIUCj" },
          { label: "Code", url: "https://github.com/ChocoWu/T2I-Salad" },
        ],
      },
      {
        venue: "CVPR 2024",
        code: "Dysen-VDM",
        thumbLabel: "Text-to-video generation",
        title: "Dysen-VDM: Empowering Dynamics-aware Text-to-Video Diffusion with LLMs",
        summary:
          "Uses LLM-driven dynamic scene graph planning to strengthen action ordering, temporal coherence, and motion quality in text-to-video diffusion.",
        tags: ["Text-to-video", "Dynamic SG", "Temporal dynamics"],
        points: [
          "Extracts ordered actions and transforms them into dynamic scene graphs.",
          "Enriches action scenes with fine-grained temporal details before generation.",
          "Consistently improves video quality, especially under complex action prompts.",
        ],
        links: [
          { label: "Project", url: "https://haofei.vip/Dysen-VDM/" },
          { label: "Paper", url: "https://arxiv.org/abs/2308.13812" },
        ],
      },
    ],
  },
];

function renderResearchGroups() {
  const root = document.getElementById("research-sections");
  if (!root) return;

  let totalPapers = 0;

  researchGroups.forEach((group) => {
    totalPapers += group.papers.length;

    const section = document.createElement("section");
    section.className = `research-group theme-${group.theme} reveal`;
    section.id = group.id;

    const cards = group.papers
      .map(
        (paper) => {
          const visual = paper.image
            ? `
              <div class="paper-thumb paper-thumb--image">
                <img src="${paper.image}" alt="${paper.imageAlt || paper.title}" />
              </div>
            `
            : `
              <div class="paper-thumb">
                <div class="paper-thumb__topline">
                  <span>${paper.thumbLabel}</span>
                  <span>PNG slot</span>
                </div>
                <div class="paper-thumb__code">${paper.code}</div>
                <div class="paper-thumb__footer">
                  <span class="paper-thumb__caption">Project illustration placeholder</span>
                </div>
              </div>
            `;

          return `
          <article class="paper-card theme-${group.theme} reveal">
            ${visual}
            <div class="paper-body">
              <p class="paper-kicker">${paper.venue}</p>
              <h4 class="paper-title">${paper.title}</h4>
              <p class="paper-summary">${paper.summary}</p>
              <div class="paper-tags">
                ${paper.tags.map((tag) => `<span class="paper-tag">${tag}</span>`).join("")}
              </div>
              <ul class="paper-points">
                ${paper.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
              <div class="paper-links">
                ${paper.links
                  .map(
                    (link) => `
                      <a class="paper-link" href="${link.url}" target="_blank" rel="noreferrer">
                        ${link.label}
                      </a>
                    `
                  )
                  .join("")}
              </div>
            </div>
          </article>
        `
        }
      )
      .join("");

    section.innerHTML = `
      <div class="group-head">
        <div>
          <h3>${group.title}</h3>
          <p>${group.description}</p>
        </div>
      </div>
      <div class="paper-grid">
        ${cards}
      </div>
    `;

    root.appendChild(section);
  });

  const paperCount = document.getElementById("paper-count");
  if (paperCount) {
    paperCount.textContent = String(totalPapers);
  }
}

function setupRevealAnimation() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupActiveNav() {
  const navLinks = [...document.querySelectorAll(".nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const linkMap = new Map(
    navLinks.map((link) => [link.getAttribute("href").slice(1), link])
  );

  if (!("IntersectionObserver" in window) || sections.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkMap.get(entry.target.id);
        if (!link) return;

        if (entry.isIntersecting) {
          navLinks.forEach((item) => item.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-35% 0px -55% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupFooterYear() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

renderResearchGroups();
setupRevealAnimation();
setupActiveNav();
setupFooterYear();
