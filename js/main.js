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
    media: { type: "image", src: "assets/projects/robotic-arm.jpg" },
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo video", href: "#" },
    ],
  },
  {
    title: "Autonomous Mobile Robot — SLAM",
    category: "Navigation",
    summary: "Differential-drive robot running ROS 2 with LiDAR-based SLAM and dynamic path re-planning around obstacles.",
    media: { type: "video", src: "assets/projects/amr-slam.mp4", poster: "assets/projects/amr-slam-poster.jpg" },
    links: [
      { label: "GitHub", href: "#" },
      { label: "Writeup", href: "#" },
    ],
  },
  {
    title: "Motor Control Test Rig",
    category: "Control Systems",
    summary: "Cascaded PID control for a BLDC motor test bench, tuned in simulation and validated against real step responses.",
    media: { type: "image", src: "assets/projects/control-rig.jpg" },
    links: [
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Defect Detection on the Line",
    category: "AI in Production",
    summary: "CNN-based visual inspection system for a small production line, flagging defective parts in real time.",
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
