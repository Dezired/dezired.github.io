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
    media: { type: "image", src: "assets/projects/defect-detection.jpg" },
    links: [
      { label: "GitHub", href: "#" },
      { label: "Report", href: "#" },
    ],
  },
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
