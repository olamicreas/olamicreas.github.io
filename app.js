/**
 * Abdulquayyum Oyedotun — Interactive Portfolio Application Engine
 * Optimized for 60/120 FPS GPU Acceleration (Zero VCD/DVD Cracking)
 * Features Pinned 2D-to-3D Spatial Centerpiece Stage with Details Floating In
 * Separately from Left & Right on Scroll, 3D Tilt Cards, and Architectural Deep-Dives.
 */

// ==========================================================================
// 1. DATA REPOSITORY: PROJECT ARCHITECTURAL DETAILS
// ==========================================================================
const projectData = {
  ngnflow: {
    title: "NGNflow — Nigerian Naira Payment & Settlement Engine",
    category: "Fintech & Core Banking Infrastructure",
    year: "2026",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Paystack Webhooks", "Docker"],
    architecture: `
  [Client Checkout] ──> [FastAPI Ingress Router]
                                 │
              ┌──────────────────┴──────────────────┐
              ▼                                     ▼
     [Idempotency Key Verifier]           [Redis Rate Limiter]
              │                                     │
              ▼                                     ▼
     [Core Ledger Engine] ──(Webhook Queue)──> [Celery Workers]
              │                                     │
              ▼                                     ▼
     [PostgreSQL Atomic Tx]               [Bank Settlement Rail]
    `,
    overview: "NGNflow is a high-reliability Nigerian Naira payment orchestration gateway engineered to address high-concurrency settlement bottlenecks, double-spending vulnerabilities, and asynchronous webhook delivery dropped by upstream banking switches.",
    highlights: [
      "Engineered distributed idempotency checking using Redis atomic locks, guaranteeing zero duplicate payment processing during network re-attempts.",
      "Built resilient webhook ingestion pipeline capable of parsing 1,500+ events/sec with exponential backoff retries and cryptographic signature verification.",
      "Designed atomic double-entry ledger database schema in PostgreSQL ensuring balance integrity across account transfers."
    ]
  },

  finflow: {
    title: "finflow — Autonomous AI Financial Accounting Agent",
    category: "Autonomous AI & LangGraph",
    year: "2025",
    stack: ["LangGraph", "LangChain", "FastAPI", "Python", "ReAct Loop", "React"],
    architecture: `
  [Financial Statements / CSV] ──> [Document Ingestion Pipeline]
                                            │
                                            ▼
                              [LangGraph StateGraph Router]
                                            │
                    ┌───────────────────────┴───────────────────────┐
                    ▼                                               ▼
         [ReAct Anomaly Agent]                            [Tax & Ledger Tool]
         - Step 1: Reason about mismatch                  - Tool: Query SQL Balance
         - Step 2: Query Jira / Banking API               - Tool: Reconcile Invoice
                    │                                               │
                    └───────────────────────┬───────────────────────┘
                                            ▼
                             [Verified Financial Report]
    `,
    overview: "finflow bridges traditional bookkeeping with autonomous AI reasoning. Rather than static rule checks, it deploys a cyclical ReAct (Reason + Act) loop via LangGraph that analyzes financial statements, flags anomalies, queries external accounting APIs, and outputs verified ledgers.",
    highlights: [
      "Implemented cyclic LangGraph state machines with conditional routing to autonomously determine when external tool calls (banking APIs, ledger queries) are required.",
      "Reduced invoice reconciliation discrepancies by 78% compared to manual auditing.",
      "Enforced strict input validation and secure prompt sanitization to eliminate prompt injection attacks against financial data models."
    ]
  },

  pixhd: {
    title: "PixHD — High-Fidelity Media & Neural Image Optimization",
    category: "Media Microservice & Computer Vision",
    year: "2025",
    stack: ["Python", "FastAPI", "OpenCV", "Pillow", "Cloudflare R2", "Docker"],
    architecture: `
  [Raw Image Upload] ──> [FastAPI Stream Handler]
                                 │
              ┌──────────────────┴──────────────────┐
              ▼                                     ▼
     [Neural Resize & Crop]               [Format Transcoding]
     - OpenCV Resampling                  - WebP / AVIF Generation
              │                                     │
              └──────────────────┬──────────────────┘
                                 ▼
                     [Cloudflare R2 Edge Storage]
                                 │
                                 ▼
                     [Global CDN Signed URLs]
    `,
    overview: "PixHD is a high-performance image processing microservice designed to ingest large high-resolution assets and transcode them in sub-second latency into modern formats (WebP, AVIF) with neural edge-enhancement.",
    highlights: [
      "Benchmarked average image payload reduction of 65% while maintaining perceptual SSIM (Structural Similarity Index) above 0.98.",
      "Asynchronous streaming file uploads directly piped into RAM-buffered worker queues, preventing disk I/O bottlenecks.",
      "Pre-signed URL generation with cryptographic expiry tokens for secure client asset retrieval."
    ]
  },

  hence: {
    title: "Hence — Enterprise Collaboration & Workflow Execution",
    category: "Enterprise SaaS & Real-Time Web",
    year: "2025",
    stack: ["Python", "Django", "Django REST Framework", "WebSockets", "Redis", "PostgreSQL"],
    architecture: `
  [Enterprise Users] ──(WebSockets / HTTPS)──> [Django Channels Gateway]
                                                       │
                           ┌───────────────────────────┴───────────────────────────┐
                           ▼                                                       ▼
                [Real-Time State Pub/Sub]                                 [REST API Controllers]
                       (Redis)                                                 (DRF)
                           │                                                       │
                           └───────────────────────────┬───────────────────────────┘
                                                       ▼
                                         [PostgreSQL Cluster + RBAC]
    `,
    overview: "Hence is an enterprise coordination and task management platform architected for distributed teams requiring sub-100ms real-time state synchronization, granular permissions, and full compliance audit trails.",
    highlights: [
      "Built real-time messaging and live document lock state via Django Channels and Redis Pub/Sub.",
      "Architected a granular Role-Based Access Control (RBAC) matrix protecting organizational data across multitenant company boundaries.",
      "Integrated automated compliance logging recording all critical state mutations to an append-only audit ledger."
    ]
  },

  volta: {
    title: "Volta — On-Demand Taxi & Ride-Booking Platform (Uber-Like)",
    category: "Full-Stack Ride-Hailing & Real-Time Dispatch",
    year: "2024",
    stack: ["Python", "FastAPI / Django", "WebSockets", "PostgreSQL / PostGIS", "Redis Geo", "Google Maps API"],
    architecture: `
  [Rider App / Web] ──(Request Ride)──> [FastAPI Dispatch Ingress]
                                                 │
                                      [Redis Geo Radius Search]
                                                 │
                                    [Find Nearest Online Drivers]
                                                 │
                               ┌─────────────────┴─────────────────┐
                               ▼                                   ▼
                    [WebSocket Driver Ping]              [Dynamic Fare Calculator]
                               │                                   │
                               └─────────────────┬─────────────────┘
                                                 ▼
                                      [Live Trip Tracking & State]
    `,
    overview: "Volta is a full-featured on-demand taxi booking platform engineered with real-time geospatial capabilities similar to Uber. Built to handle rapid ride requests, concurrent driver location broadcasts, automated surge-aware fare estimation, and end-to-end trip state machines.",
    highlights: [
      "Engineered real-time driver dispatch using Redis Geospatial queries to match riders with the closest available drivers in under 200ms.",
      "Implemented bidirectional WebSocket channels for millisecond-level driver GPS updates, turn-by-turn route tracking, and instant trip status sync.",
      "Constructed dynamic fare estimation engine calculating base rate, mileage distance matrix, estimated time of arrival, and automated surge multipliers."
    ]
  },

  ridgenooks: {
    title: "Ridgenooks — Properties & Short-Let Reservation Platform",
    category: "Full-Stack Property Booking & Hospitality Management",
    year: "2024",
    stack: ["Python", "Django", "PostgreSQL", "JavaScript", "Stripe / Paystack", "Redis Cache"],
    architecture: `
  [Guest Search & Filter] ──> [Django Property Controller]
                                          │
                            [Atomic Date Range Lock (Redis)]
                                          │
                            [Stripe / Paystack Payment Intent]
                                          │
                            [Confirmed Booking Database Record]
                                          │
                            [Async Itinerary Dispatch (Celery/SMS)]
    `,
    overview: "Ridgenooks is an Airbnb-style vacation rental and short-let apartment reservation platform. It powers property discovery, dynamic seasonal pricing calendars, concurrency-safe booking locks to avoid double-bookings, and automated host-guest communication.",
    highlights: [
      "Engineered concurrency-safe room and apartment date-range locking algorithm preventing double-booking during high-traffic checkout spikes.",
      "Integrated multi-currency payment checkout supporting domestic debit/credit cards, direct bank transfers, and international payment gateways.",
      "Automated guest digital itinerary generation, check-in instructions, and host notifications via asynchronous background workers."
    ]
  },

  refandearn: {
    title: "Refandearn — Fraud-Resistant Growth & Referral Engine",
    category: "Fintech & Cybersecurity",
    year: "2024",
    stack: ["Python", "FastAPI", "Redis Streams", "PostgreSQL", "Cryptographic Hashing"],
    architecture: `
  [Referral Link Click] ──> [FastAPI Telemetry Ingress]
                                     │
                          [Anti-Fraud Scorer]
                          - IP Subnet Cluster Analysis
                          - Device Fingerprint Hash
                          - Action Entropy Score
                                     │
                     ┌───────────────┴───────────────┐
                     ▼                               ▼
             [Legitimate Action]              [Fraud Detected]
                     │                               │
             [Credit Ledger]                  [Drop & Flag IP]
    `,
    overview: "Refandearn is a high-scale referral attribution engine featuring rigorous anti-abuse algorithms that protect customer acquisition budgets from bot farms and fraudulent self-referrals.",
    highlights: [
      "Designed cryptographic device fingerprint hashing and IP cluster entropy scoring to detect coordinated referral syndicates.",
      "Leveraged Redis Streams for event-driven commission calculation without blocking API response times.",
      "Prevented thousands of fraudulent payouts through multi-factor validation triggers."
    ]
  },

  "enterprise-ai": {
    title: "Enterprise AI Agent Application Server",
    category: "Autonomous AI & LangGraph Workflows",
    year: "2024",
    stack: ["LangChain", "LangGraph", "FastAPI", "Jira API", "Python"],
    architecture: `
  [Enterprise Prompt] ──> [FastAPI Server]
                                 │
                                 ▼
                     [LangGraph StateGraph]
                                 │
                     [ReAct Agent Loop]
                     ┌───────────┴───────────┐
                     ▼                       ▼
            [Tool: Jira API]         [Tool: Internal Vector DB]
            - Query Bug Tracker      - Search Knowledgebase
                     │                       │
                     └───────────┬───────────┘
                                 ▼
                     [Synthesized Resolution]
    `,
    overview: "A full-scale autonomous agent server that takes unstructured enterprise prompts, reasons through complex multi-step tasks, invokes internal tools (such as querying and filing Jira issues), and delivers verified answers.",
    highlights: [
      "Implemented LangGraph cyclical graphs with ReAct loops and human-in-the-loop escalation branches.",
      "Secured prompt inputs against jailbreaks and prompt injection using strict regex and LLM guardrails.",
      "Packaged with FastAPI to deliver microsecond API dispatch and asynchronous streaming response generation."
    ]
  }
};

// ==========================================================================
// 2. ZERO-CRACKING AMBIENT 3D BACKGROUND (GPU-COMPOSITED)
// ==========================================================================
function init3DBackground() {
  const canvas = document.getElementById('bg-canvas-3d');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  const particleCount = 180;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

    const isCyan = Math.random() > 0.5;
    colors[i * 3] = isCyan ? 0.02 : 0.39;
    colors[i * 3 + 1] = isCyan ? 0.71 : 0.40;
    colors[i * 3 + 2] = isCyan ? 0.83 : 0.95;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    depthWrite: false
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  let targetScroll = 0;
  let currentScroll = 0;

  window.addEventListener('scroll', () => {
    targetScroll = window.scrollY * 0.0005;
  }, { passive: true });

  function render(time) {
    requestAnimationFrame(render);
    const t = time * 0.0003;
    currentScroll += (targetScroll - currentScroll) * 0.05;

    particles.rotation.y = t * 0.3 + currentScroll * 0.5;
    particles.rotation.x = t * 0.15 + currentScroll * 0.2;

    renderer.render(scene, camera);
  }
  requestAnimationFrame(render);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ==========================================================================
// 3. PINNED 2D-TO-3D SPATIAL CENTERPIECE + SEPARATE FLOATING IN DETAILS
// ==========================================================================
function initHero2Dto3D() {
  const canvas = document.getElementById('hero-interactive-canvas');
  const heroTrack = document.getElementById('hero');
  const canvasWrapper = document.getElementById('canvas-wrapper-3d');
  const stickyContainer = document.querySelector('.hero-sticky-container');
  const branchesLayer = document.getElementById('branches-layer');
  const scrubFill = document.getElementById('scrub-fill');
  const scrubButtons = document.querySelectorAll('.scrub-step-btn');

  // Floating Elements (Floating in from left & right per scroll)
  const hudName = document.getElementById('hud-name');         // Left 1
  const hudCipher = document.getElementById('hud-cipher');     // Right 1
  const hudBio = document.getElementById('hud-bio');           // Left 2
  const hudTelemetry = document.getElementById('hud-telemetry');// Right 2
  const hudActions = document.getElementById('hud-actions');   // Bottom 1

  if (!canvas || !heroTrack) return;

  // Setup WebGL Scene
  const scene = new THREE.Scene();
  const width = canvas.parentElement.clientWidth || 480;
  const height = canvas.parentElement.clientHeight || 480;

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 3.6);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Procedural Engineering Badge Canvas Texture
  const textureCanvas = document.createElement('canvas');
  textureCanvas.width = 1024;
  textureCanvas.height = 1024;
  const ctx = textureCanvas.getContext('2d');

  function drawBadgeTexture() {
    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
    grad.addColorStop(0, '#0a0d18');
    grad.addColorStop(0.5, '#12162a');
    grad.addColorStop(1, '#080a12');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Outer border ring
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.45)';
    ctx.lineWidth = 14;
    ctx.strokeRect(40, 40, 944, 944);

    // Inner glowing grid
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.14)';
    ctx.lineWidth = 2;
    for (let x = 80; x < 944; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 40);
      ctx.lineTo(x, 984);
      ctx.stroke();
    }
    for (let y = 80; y < 944; y += 64) {
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(984, y);
      ctx.stroke();
    }

    // Circuit lines and node connections
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(120, 260); ctx.lineTo(340, 260); ctx.lineTo(440, 360);
    ctx.moveTo(904, 764); ctx.lineTo(684, 764); ctx.lineTo(584, 664);
    ctx.stroke();

    // Circuit nodes
    ctx.fillStyle = '#06b6d4';
    [ [120, 260], [340, 260], [440, 360], [904, 764], [684, 764], [584, 664] ].forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();
    });

    // Central Monogram <AO/>
    ctx.font = '800 160px -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Drop shadow
    ctx.fillStyle = 'rgba(10, 132, 255, 0.35)';
    ctx.fillText('<AO/>', 516, 490);

    // Gradient text
    const textGrad = ctx.createLinearGradient(300, 350, 724, 550);
    textGrad.addColorStop(0, '#ffffff');
    textGrad.addColorStop(0.5, '#64D2FF');
    textGrad.addColorStop(1, '#0A84FF');
    ctx.fillStyle = textGrad;
    ctx.fillText('<AO/>', 512, 486);

    // Subtitle & Specialty
    ctx.font = '600 36px -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif';
    ctx.fillStyle = '#86868b';
    ctx.letterSpacing = '5px';
    ctx.fillText('SOFTWARE & AI ENGINEER', 512, 610);

    ctx.font = '600 28px "SF Mono", "SF Pro Mono", ui-monospace, Menlo, monospace';
    ctx.fillStyle = '#0A84FF';
    ctx.fillText('AUTONOMOUS AGENTS • CYBERSECURITY', 512, 670);

    // Corner decorative markers
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(40, 40, 40, 6);
    ctx.fillRect(40, 40, 6, 40);
    ctx.fillRect(944, 40, 40, 6);
    ctx.fillRect(978, 40, 6, 40);
    ctx.fillRect(40, 978, 40, 6);
    ctx.fillRect(40, 944, 6, 40);
    ctx.fillRect(944, 978, 40, 6);
    ctx.fillRect(978, 944, 6, 40);
  }
  drawBadgeTexture();

  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.generateMipmaps = true;

  // Subdivided plane geometry for vertex displacement
  const geometry = new THREE.PlaneGeometry(2.35, 2.35, 96, 96);

  // GLSL Custom Shaders for Hardware Vertex Displacement
  const vertexShader = `
    uniform float uDisplacement;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec4 tex = texture2D(uTexture, uv);
      
      // Calculate luminance depth
      float depth = dot(tex.rgb, vec3(0.299, 0.587, 0.114));

      vec3 pos = position;

      // 2D to 3D Extrusion
      float elevation = depth * (uDisplacement * 0.95);
      
      // Gentle spatial breathing wave when 3D is active
      elevation += sin(pos.x * 3.5 + uTime * 2.0) * cos(pos.y * 3.5 + uTime * 2.0) * 0.05 * uDisplacement;

      pos.z += elevation;

      // Mouse-driven 3D holographic tilt
      pos.x += uMouse.x * 0.12 * uDisplacement;
      pos.y += uMouse.y * 0.12 * uDisplacement;

      vElevation = elevation;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D uTexture;
    uniform float uDisplacement;
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vec4 baseColor = texture2D(uTexture, vUv);

      // In flat 2D mode: display exact crisp texture
      // In extruded 3D mode: add specular lighting, normal shimmer & edge glow
      vec3 color = baseColor.rgb;

      // Holographic scanline sheen
      float scan = sin(vUv.y * 140.0 + uTime * 3.0) * 0.04 * uDisplacement;

      // Elevation-based light reflection
      float light = 0.88 + (vElevation * 0.65);
      
      // Subtle edge glow tint
      vec3 glowTint = mix(vec3(0.39, 0.40, 0.95), vec3(0.02, 0.71, 0.83), vUv.x);
      color = mix(color, color + glowTint * 0.35, uDisplacement * 0.4);

      color = color * light + scan;
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const uniforms = {
    uTexture: { value: texture },
    uDisplacement: { value: 0.0 }, // Starts 100% 2D
    uTime: { value: 0.0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
  };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    side: THREE.DoubleSide
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Mouse & Touch Parallax on Centerpiece
  let targetMouseX = 0, targetMouseY = 0;
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    targetMouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    targetMouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });
  canvas.addEventListener('mouseleave', () => {
    targetMouseX = 0;
    targetMouseY = 0;
  });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      targetMouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
    }
  }, { passive: true });
  canvas.addEventListener('touchend', () => {
    targetMouseX = 0;
    targetMouseY = 0;
  });

  // Scroll Synchronization within Pinned Track
  let currentProgress = 0;
  let targetProgress = 0;

  function updateScrollProgress() {
    const rect = heroTrack.getBoundingClientRect();
    const scrollDistance = heroTrack.offsetHeight - window.innerHeight;
    
    if (scrollDistance > 0) {
      const p = -rect.top / scrollDistance;
      targetProgress = Math.min(Math.max(p, 0), 1);
    }
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  // Clickable Scrub Buttons (Direct step jumping)
  scrubButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-step'), 10);
      const scrollDistance = heroTrack.offsetHeight - window.innerHeight;
      const targetY = heroTrack.offsetTop + (step / 3) * scrollDistance;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });

  // =======================================================================
  // DYNAMIC CYBERNETIC BRANCH HANDS RENDERING ENGINE
  // =======================================================================
  const branchNodes = [
    { card: hudName, side: 'left-top', threshold: 0.04 },
    { card: hudCipher, side: 'right-top', threshold: 0.22 },
    { card: hudBio, side: 'left-bottom', threshold: 0.44 },
    { card: hudTelemetry, side: 'right-bottom', threshold: 0.66 },
    { card: hudActions, side: 'bottom', threshold: 0.86 }
  ];

  const branchElements = branchNodes.map((node, i) => {
    const group = document.getElementById(`branch-${i}`);
    return {
      group,
      path: group ? group.querySelector('.branch-path') : null,
      jointStart: group ? group.querySelector('.joint-start') : null,
      jointEnd: group ? group.querySelector('.joint-end') : null,
      ...node
    };
  });

  function renderBranchHands(progress) {
    if (!branchesLayer || !canvasWrapper || !stickyContainer) {
      return;
    }

    const containerRect = stickyContainer.getBoundingClientRect();
    const stageRect = canvasWrapper.getBoundingClientRect();
    const isMobile = window.innerWidth <= 768;

    branchElements.forEach((el, index) => {
      if (!el.card || !el.path) return;

      const clawEl = el.card.querySelector('.hand-claw') || el.card.querySelector('.branch-hand');
      const clawRect = clawEl ? clawEl.getBoundingClientRect() : el.card.getBoundingClientRect();
      const isActive = progress >= el.threshold;

      // Exact sub-pixel center of the docking claw on the target card
      const endX = clawRect.left - containerRect.left + clawRect.width * 0.5;
      const endY = clawRect.top - containerRect.top + clawRect.height * 0.5;

      let startX, startY, pathD;

      if (isMobile) {
        // MOBILE PORTRAIT BRANCHING (Dedicated non-overlapping corridors)
        if (index === 0) {
          // Card 1: Name & Title (Top-Left quadrant, claw on LEFT edge)
          // Starts from stage left edge, sweeps up through the left gutter into Card 1 left claw
          startX = stageRect.left - containerRect.left + 8;
          startY = stageRect.top - containerRect.top + stageRect.height * 0.25;

          const ctrlX1 = Math.min(startX - 35, endX - 14);
          const ctrlY1 = startY - (startY - endY) * 0.45;
          const ctrlX2 = endX - 20;
          const ctrlY2 = endY + (startY - endY) * 0.25;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`;
        } else if (index === 1) {
          // Card 2: Cipher HUD (Top-Right quadrant, claw on RIGHT edge)
          // Starts from stage right-top, sweeps up through the right gutter into Card 2 right claw
          startX = stageRect.right - containerRect.left - 8;
          startY = stageRect.top - containerRect.top + stageRect.height * 0.25;

          const ctrlX1 = Math.max(startX + 35, endX + 14);
          const ctrlY1 = startY - (startY - endY) * 0.45;
          const ctrlX2 = endX + 20;
          const ctrlY2 = endY + (startY - endY) * 0.25;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`;
        } else if (index === 2) {
          // Card 3: Engineering Bio (Directly below stage, claw on TOP edge)
          // Starts from stage bottom-center, extends down into Card 3 top claw
          startX = stageRect.left - containerRect.left + stageRect.width * 0.5;
          startY = stageRect.bottom - containerRect.top - 6;

          const ctrlY1 = startY + (endY - startY) * 0.5;
          const ctrlY2 = endY - (endY - startY) * 0.5;
          pathD = `M ${startX} ${startY} C ${startX} ${ctrlY1}, ${endX} ${ctrlY2}, ${endX} ${endY}`;
        } else if (index === 3) {
          // Card 4: Telemetry (Bottom-Right quadrant, claw on RIGHT edge)
          // Starts from stage right edge, sweeps down through the right gutter into Card 4 right claw
          startX = stageRect.right - containerRect.left - 8;
          startY = stageRect.bottom - containerRect.top - stageRect.height * 0.25;

          const ctrlX1 = Math.max(startX + 35, endX + 14);
          const ctrlY1 = startY + (endY - startY) * 0.45;
          const ctrlX2 = endX + 20;
          const ctrlY2 = endY - (endY - startY) * 0.25;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`;
        } else if (index === 4) {
          // Card 5: Actions dock (Bottom-Left quadrant, claw on LEFT edge)
          // Starts from stage bottom-left, sweeps down through the left gutter into Card 5 left claw
          startX = stageRect.left - containerRect.left + 8;
          startY = stageRect.bottom - containerRect.top - stageRect.height * 0.25;

          const ctrlX1 = Math.min(startX - 35, endX - 14);
          const ctrlY1 = startY + (endY - startY) * 0.45;
          const ctrlX2 = endX - 20;
          const ctrlY2 = endY - (endY - startY) * 0.25;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${ctrlY1}, ${ctrlX2} ${ctrlY2}, ${endX} ${endY}`;
        }
      } else {
        // DESKTOP & TABLET LATERAL BRANCHING
        if (el.side === 'left-top') {
          startX = stageRect.left - containerRect.left + 15;
          startY = stageRect.top - containerRect.top + stageRect.height * 0.28;

          const ctrlX1 = startX - 70;
          const ctrlX2 = endX + 70;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${startY}, ${ctrlX2} ${endY}, ${endX} ${endY}`;
        } else if (el.side === 'right-top') {
          startX = stageRect.right - containerRect.left - 15;
          startY = stageRect.top - containerRect.top + stageRect.height * 0.28;

          const ctrlX1 = startX + 70;
          const ctrlX2 = endX - 70;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${startY}, ${ctrlX2} ${endY}, ${endX} ${endY}`;
        } else if (el.side === 'left-bottom') {
          startX = stageRect.left - containerRect.left + 15;
          startY = stageRect.top - containerRect.top + stageRect.height * 0.72;

          const ctrlX1 = startX - 70;
          const ctrlX2 = endX + 70;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${startY}, ${ctrlX2} ${endY}, ${endX} ${endY}`;
        } else if (el.side === 'right-bottom') {
          startX = stageRect.right - containerRect.left - 15;
          startY = stageRect.top - containerRect.top + stageRect.height * 0.72;

          const ctrlX1 = startX + 70;
          const ctrlX2 = endX - 70;
          pathD = `M ${startX} ${startY} C ${ctrlX1} ${startY}, ${ctrlX2} ${endY}, ${endX} ${endY}`;
        } else if (el.side === 'bottom') {
          startX = stageRect.left - containerRect.left + stageRect.width * 0.5;
          startY = stageRect.bottom - containerRect.top - 15;

          pathD = `M ${startX} ${startY} L ${endX} ${endY}`;
        }
      }

      el.path.setAttribute('d', pathD);
      el.path.classList.toggle('active', isActive);

      if (el.jointStart) {
        el.jointStart.setAttribute('cx', startX);
        el.jointStart.setAttribute('cy', startY);
        el.jointStart.classList.toggle('active', isActive);
      }
      if (el.jointEnd) {
        el.jointEnd.setAttribute('cx', endX);
        el.jointEnd.setAttribute('cy', endY);
        el.jointEnd.classList.toggle('active', isActive);
      }
    });
  }

  // Main Render Loop with Separate Floating In Choreography & Attached Branch Hands
  function animate(time) {
    requestAnimationFrame(animate);
    const t = time * 0.001;
    uniforms.uTime.value = t;

    // Smooth lerp for scroll progress with gentle inertia
    currentProgress += (targetProgress - currentProgress) * 0.065;

    // Pass smooth displacement uniform to GPU vertex shader
    uniforms.uDisplacement.value = currentProgress;

    // Camera perspective & Mesh 3D Rotation
    // At progress = 0: Perfect flat 2D facing camera
    // At progress > 0: Tilts into dimensional 3D space
    mesh.rotation.y = (currentProgress - 0.1) * 0.72 + (uniforms.uMouse.value.x * 0.22);
    mesh.rotation.x = currentProgress * 0.42 + (uniforms.uMouse.value.y * -0.22);
    mesh.position.z = currentProgress * 0.45;

    // Lerp mouse
    uniforms.uMouse.value.x += (targetMouseX - uniforms.uMouse.value.x) * 0.08;
    uniforms.uMouse.value.y += (targetMouseY - uniforms.uMouse.value.y) * 0.08;

    // Update Scrub Fill Meter
    if (scrubFill) scrubFill.style.width = `${Math.round(currentProgress * 100)}%`;

    // =======================================================================
    // CHOREOGRAPH SEPARATE FLOATING IN OF DETAILS FROM LEFT & RIGHT
    // =======================================================================
    // Piece 1: Name & Core Badge floats in from LEFT (Threshold: >= 0.04)
    if (hudName) {
      if (currentProgress >= 0.04) hudName.classList.add('visible');
      else hudName.classList.remove('visible');
    }

    // Piece 2: Cipher Tagline / Terminal HUD floats in from RIGHT (Threshold: >= 0.22)
    if (hudCipher) {
      if (currentProgress >= 0.22) hudCipher.classList.add('visible');
      else hudCipher.classList.remove('visible');
    }

    // Piece 3: Engineering Bio Statement floats in from LEFT (Threshold: >= 0.44)
    if (hudBio) {
      if (currentProgress >= 0.44) hudBio.classList.add('visible');
      else hudBio.classList.remove('visible');
    }

    // Piece 4: Live Telemetry & Stats floats in from RIGHT (Threshold: >= 0.66)
    if (hudTelemetry) {
      if (currentProgress >= 0.66) hudTelemetry.classList.add('visible');
      else hudTelemetry.classList.remove('visible');
    }

    // Piece 5: Action Dock (Explore, Copy, GitHub) floats in from BOTTOM (Threshold: >= 0.86)
    if (hudActions) {
      if (currentProgress >= 0.86) hudActions.classList.add('visible');
      else hudActions.classList.remove('visible');
    }

    // Update Dynamic Branch Hands Attaching to Cards
    renderBranchHands(currentProgress);

    // Update Scrub Buttons active state
    let activeStep = 0;
    if (currentProgress >= 0.75) activeStep = 3;
    else if (currentProgress >= 0.50) activeStep = 2;
    else if (currentProgress >= 0.25) activeStep = 1;
    else activeStep = 0;

    scrubButtons.forEach((btn, idx) => {
      if (idx === activeStep) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);

  window.addEventListener('resize', () => {
    const newW = canvas.parentElement.clientWidth || 480;
    const newH = canvas.parentElement.clientHeight || 480;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  });
}

// ==========================================================================
// 4. CYBERPUNK CIPHER DECRYPTION ENGINE
// ==========================================================================
function initCipherRoles() {
  const roleEl = document.getElementById('cipher-role');
  if (!roleEl) return;

  const roles = [
    "CORE INFRASTRUCTURE AT AFEX",
    "AUTONOMOUS AGENT ARCHITECT (LangGraph)",
    "BACKEND SYSTEMS ENGINEER (FastAPI & Django)",
    "SECURITY-AWARE API SPECIALIST (B.Tech)",
    "OPEN-SOURCE TOOL CREATOR (@olamicreas)"
  ];

  const glyphs = "!<>-_\\/[]{}—=+*^?#0123456789ABCDEF";
  let currentIdx = 0;

  function decrypt(targetText) {
    let frame = 0;
    const totalFrames = 34;
    const interval = setInterval(() => {
      frame++;
      let output = "";
      for (let i = 0; i < targetText.length; i++) {
        if (frame / totalFrames > (i / targetText.length)) {
          output += targetText[i];
        } else {
          output += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      roleEl.innerText = output;

      if (frame >= totalFrames) {
        clearInterval(interval);
        setTimeout(() => {
          currentIdx = (currentIdx + 1) % roles.length;
          decrypt(roles[currentIdx]);
        }, 2800);
      }
    }, 32);
  }

  decrypt(roles[0]);
}

// ==========================================================================
// 5. 3D CARD TILT ON MOUSE HOVER
// ==========================================================================
function init3DTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  });
}

// ==========================================================================
// 6. INTERACTIVE PROJECT FILTER TABS
// ==========================================================================
function initProjectFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.project-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.split(' ').includes(filter) || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });

      if (typeof AOS !== 'undefined') {
        setTimeout(() => AOS.refresh(), 260);
      }
    });
  });
}

// ==========================================================================
// 7. ARCHITECTURE DEEP-DIVE MODAL SYSTEM
// ==========================================================================
function initModal() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');
  const openButtons = document.querySelectorAll('.open-modal-btn');

  function openProject(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="modal-header-meta">
        <span class="category-pill">${data.category}</span>
        <span class="project-year">${data.year}</span>
      </div>
      <h2 class="modal-title">${data.title}</h2>
      
      <div class="tech-stack-pills" style="margin-bottom: 1.5rem;">
        ${data.stack.map(s => `<span>${s}</span>`).join('')}
      </div>

      <div class="modal-section-title">System Overview</div>
      <p class="modal-body-text">${data.overview}</p>

      <div class="modal-section-title">Engineering Architecture & Data Flow</div>
      <pre class="arch-diagram"><code>${data.architecture.trim()}</code></pre>

      <div class="modal-section-title">Key Architectural Highlights & Performance</div>
      <ul class="modal-features-list">
        ${data.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.project-card');
      const id = card.getAttribute('data-id');
      openProject(id);
    });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const id = card.getAttribute('data-id');
      openProject(id);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

// ==========================================================================
// 8. CLIPBOARD COPY & TOAST NOTIFICATION
// ==========================================================================
function initClipboard() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');

  function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied: ${textToCopy}`);
        }).catch(() => {
          showToast(`Value: ${textToCopy}`);
        });
      } else {
        showToast(`Value: ${textToCopy}`);
      }
    });
  });
}

// ==========================================================================
// 9. HIGH-PERFORMANCE NATIVE IOS SCROLL REVEAL (PRE-TRIGGERED, ZERO-LAG)
// ==========================================================================
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  if (!elements.length) return;

  // Pre-triggers 80px before entering viewport boundary so items are smoothly
  // visible without empty black waiting gaps.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px 80px 0px',
    threshold: 0.02
  });

  elements.forEach(el => {
    const delay = el.getAttribute('data-aos-delay');
    if (delay) {
      el.style.transitionDelay = `${parseInt(delay, 10) * 0.7}ms`;
    }
    observer.observe(el);
  });
}

// ==========================================================================
// INITIALIZATION LIFECYCLE
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  init3DBackground();
  initHero2Dto3D();
  initCipherRoles();
  init3DTiltCards();
  initProjectFilters();
  initModal();
  initClipboard();
  initAOS();
});
