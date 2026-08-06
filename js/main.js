/**
 * Edit the PROJECTS array below to add, remove, or update project cards.
 * Nothing else in this file needs to change.
 *
 * Each project:
 *   title    - string, shown as the card heading
 *   category - short uppercase-ish label, also used for the filter chips
 *              e.g. "MANIPULATION", "NAVIGATION", "CONTROL SYSTEMS"
 *   summary  - 1-2 sentences
 *   media    - { type: "image" | "video", src: "assets/projects/...", poster }
 *              poster is optional, only used for video
 *   links    - array of { label, href }, e.g. GitHub repo, demo video, writeup
 */
const PROJECTS = [
  {
    title: "Vision-Guided Robotic Arm",
    category: "Manipulation",
    summary: "6-DOF manipulator with an inverse-kinematics solver and a camera-based detector for autonomous pick-and-place.",
    media: { type: "image", src: "assets/projects/rittersport/robotRittersport.png" },
    links: [
      { label: "Details", href: "assets/projects/rittersport/rittersportDetails.html" },
      { label: "Demo video", href: "https://youtu.be/1Ry15GMkm0E" },
    ],
  },
  {
    title: "Grasping occluded objects in a Box",
    category: "Grasping",
    summary: "Developed a pipeline from RGB images to a Graph Neural Network (GNN) for grasp classification",
    media: { type: "image", src: "assets/projects/grasping/graspPipeline2.png" },
    links: [
      { label: "Details", href: "assets/projects/grasping/graspDetails.html" },
      // { label: "Writeup", href: "#" },
    ],
  },
  {
    title: "Commissioning and programming of a robotic arm",
    category: "Commissioning",
    summary: "Integration and commissioning of the robot system, covering the complete control chain from motion controller build up to motor operation.",
    media: { type: "image", src: "assets/projects/robotArm/robotArm.png", },
    links: [
      { label: "Motion Controller", href: "assets/projects/robotArm/motionController.jpg"},
      { label: "Demo Video", href: "https://youtu.be/o4Wnqkcbrxw" }
    ],
  },
  {
    title: "Object sorting",
    category: "AI",
    summary: "Size-based sorting of screws, nails, and dowels using computer vision and selfmade dataset",
    media: { type: "image", src: "assets/projects/sorting/sortingExample.png" },
    links: [
      { label: "Dataset", href: "https://app.roboflow.com/vdki-projekt/ki-projekt-s35p5/models" }
      // { label: "Report", href: "#" },
    ],
  },
  {
    title: "Immersion Cooling",
    category: "Test Bench",
    summary: "Development of a test bench for immersion cooling of electronic components including 3D printed housing.",
    media: { type: "image", src: "assets/projects/immersionCooling/immersionCooling.jpeg" },
    links:[
      {label: "APL post", href: "https://www.linkedin.com/posts/apl-automobil-prueftechnik_ai-datacenters-liquidcooling-activity-7473282528775393280-Woa5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEJMxRMBiaj5UqKTuC2yu0XhpVpnzcpAbLo"},
      {label: "Close-up", href: "assets/projects/immersionCooling/immersionCooling2.jpeg"}
    ]
  },
  {
    title: "BMS Interface",
    category: "Bachelor Thesis",
    summary: "Bachelor thesis on Design and Development of Test Hardware for Battery Management System Validation and Calibration.",
    media: { type: "image", src: "assets/projects/bachelorThesis/MMS_LED_Frontal_DSC_5209.png" },
    links: [
      { label: "SOTA Thesis", href: "assets/projects/bachelorThesis/sota_BachelorThesis.pdf" },
      {label: "HW-Overview", href: "assets/projects/bachelorThesis/HWOverview.pdf"},
      {label: "GUI", href: "assets/projects/bachelorThesis/MMS_GUI.png"},
      {label: "BMS Back", href: "assets/projects/bachelorThesis/MMS_Buchsen_Frontal_DSC_5209.png"},
    ]
  },
  {
    title: "EdgeAI Tracking",
    category: "Master Thesis",
    summary: "Pose Estimation and Tracking of Objects in an Industrial Environment",
    media: { type: "image", src: "assets/projects/masterThesis/blackbox.svg" },
    links: [
      { label: "SOTA Thesis", href: "assets/projects/masterThesis/sota_MasterThesis.pdf" },
      {label: "Framework", href: "assets/projects/masterThesis/framework.pdf"},
      {label: "Demo", href: "assets/projects/masterThesis/realWorldTest.pdf"},
      {label: "Hardware", href: "assets/projects/masterThesis/HWOverview.pdf"},
    ]
  }
];

function mediaMarkup(media, title) {
  if (media.type === "video") {
    const poster = media.poster ? ` poster="${media.poster}"` : "";
    return `
      <video controls muted playsinline${poster}>
        <source src="${media.src}" type="video/mp4">
      </video>
      <div class="media-placeholder" data-fallback>Add ${media.src} to show this video</div>
    `;
  }

  if (media.type === "pdf") {
    return `
      <div class="pdf-container">
        <iframe 
          src="${media.src}#toolbar=0&navpanes=0"
          class="pdf-preview"
          title="${title}">
        </iframe>
      </div>
      <div class="media-placeholder" data-fallback>Add ${media.src} to show this PDF</div>
    `;
  }
  return `
    <img src="${media.src}" alt="${title}" loading="lazy"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
    <div class="media-placeholder" data-fallback style="display:none;">Add ${media.src} to show this image</div>
  `;
}

function renderProjects(activeCategory) {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map((p) => {
    const hidden = activeCategory && activeCategory !== "All" && p.category !== activeCategory;
    const links = p.links
      .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`)
      .join("");
    return `
      <article class="project-card" ${hidden ? "hidden" : ""} data-category="${p.category}">
        <div class="project-media">
          <span class="project-tag">${p.category}</span>
          ${mediaMarkup(p.media, p.title)}
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <div class="project-links">${links}</div>
        </div>
      </article>
    `;
  }).join("");
}

function renderFilters() {
  const wrap = document.getElementById("project-filters");
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  wrap.innerHTML = categories
    .map((c, i) => `<button class="filter-btn${i === 0 ? " is-active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    wrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProjects(btn.dataset.cat);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProjects("All");
});
