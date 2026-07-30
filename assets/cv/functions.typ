#import "@preview/use-tabler-icons:0.20.0": *
#let imgPath = "imgs/cropped.jpg"
#let headerHight = 5cm

#let _portrait(source, size) = box(
  width: size,
  height: size,
  clip: true,
  radius: 50%,
  image(source, fit: "cover", width: 100%, height: 100%),
)

#let _leftHeader2() = grid(
  rows: 3,  
  row-gutter: 1em,
  // align: (left,left,right),
  [#text([*Philipp Herrmann*], size: 26pt)],
  // [M. Sc. Robotik und KI in der Produktion | B. Eng. Mechatronik @ Hochschule Karlsruhe]
  [*Master of Science* und *Bachelor of Engineering* bei der *Hochschule Karlsruhe*],
  [#grid(
    columns: (0.1fr, 0.4fr, 0.4fr,0.1fr),
    rows: 2,
    // stroke: black,
    [],
    [#tabler-icon("at", fill: blue) #link("mailto:herrmann-philipp1@web.de")],
    [#tabler-icon("phone", fill: blue) 0157/50649653 ],
    [],
    [],
    [#tabler-icon("brand-linkedin", fill: blue) #link("https://www.linkedin.com/in/herrmann-philipp1/")[LinkedIn]],
    [#tabler-icon("mail", fill: blue) 76684 Östringen, Thiviersstr. 3 ],
    []
  )]
)

#let _leftHeader3(name, degree, university, email, phone, linkedin, adress) = grid(
  rows: 3,  
  row-gutter: 1em,
  // align: (left,left,right),
  [#text([*#name*], size: 26pt)],
  // [M. Sc. Robotik und KI in der Produktion | B. Eng. Mechatronik @ Hochschule Karlsruhe]
  [#degree],
  [#grid(
    columns: (0.4fr, 0.4fr, 0.1fr),
    rows: 2,
    row-gutter: 0.5em,
    // stroke: black,
    [#tabler-icon("at", fill: blue) #link(email)],
    [#tabler-icon("phone", fill: blue) #phone ],
    [],
    [#tabler-icon("brand-linkedin", fill: blue) #link(linkedin)[LinkedIn]],
    [#tabler-icon("mail", fill: blue) #adress],
    []
  )]
)


#let drawEducation(degree:[], title:[], duration:[], location:[], grade:[]) = grid(
      columns: (5cm, auto),
      rows: 3,
      gutter: 0.5em,
      [#tabler-icon("school", fill: black) #degree],
      [#tabler-icon("book-2", fill: black) #title],
      [#tabler-icon("calendar-week", fill: black) #duration],
      [#tabler-icon("map-pin", fill: black) #location],
      [#tabler-icon("award", fill: black) #grade],
      []
    )

// #let drawExperience(title:[], duration:[], location:[], descriptions:()) = grid(
//       rows: 2,
//       row-gutter: 0.5em,
//       [#title],
//       grid(
//         columns: 2,
//         rows: int(1+(descriptions.len()*0.5)),
//         gutter: 0.5em,
//         [#tabler-icon("calendar-week", fill: black) #duration],
//         [#tabler-icon("map-pin", fill: black) #location],
//         if descriptions.len() > 2 {
//           for description in descriptions {
//             description
//           }
//         }
//         else {
//           for description in descriptions {
//             grid.cell(
//               colspan: 2,
//               description
//             )
//           }
//         }
        
//       )
//     )

#let drawExperience(title: [], duration: [], location: [], descriptions: ()) = {
  let desc-cells = if descriptions.len() > 2 {
    // Two columns: use the descriptions directly as grid cells
     descriptions.map(d => d)
  } else {
    // One column: each description spans both columns
    descriptions.map(d => grid.cell(colspan: 2)[#d])
  }

  // Compute number of rows depending on layout
  let rows = if descriptions.len() > 2 {
    int(1 + (descriptions.len() * 0.5))
  } else {
    1 + descriptions.len()
  }

  grid(
    rows: 2,
    row-gutter: 0.7em,
    [*#title*],
    grid(
      columns: (0.81fr, 1fr),//(4cm, auto),
      rows: rows,
      gutter: 0.5em,
      [#tabler-icon("calendar-week", fill: black) #duration],
      [#tabler-icon("map-pin", fill: black) #location],
      ..desc-cells,
    ),
  )
}

#let drawProjects(symbol:[], title: [], description: []) = grid(
    rows: 2,
    gutter: 0.5em,
    [*#title*],
    [#list(marker: tabler-icon(symbol), description)]
  )

#let rating(points) = grid(
  columns: 5,
  gutter: 3pt,
  ..range(5).map(i =>
    circle(
      radius: 3pt,
      fill: if i < points { black } else { none },
      stroke: black,
    )
  ),
)

#let drawLanguages(languages: (), levels: (), points: ()) = {
  let values = range(languages.len())
      .map(i => (
        languages.at(i),
        levels.at(i),
        rating(points.at(i)),
      ))
      .flatten()
  grid(
    columns: (1fr,1fr,1fr),
    align: (left, left, left),
    rows: languages.len(),
    gutter: 0.5em,
    ..values
  )
}

#let drawSkills(skills: ()) = {
  set par(spacing: 0.5em)
    line(stroke: (paint: gray, thickness: 1pt, dash: "dashed"), length: 100%)

  for row in skills {
    grid(
      columns: (1fr,)*row.len(),
      align: (center,)*row.len(),
      column-gutter: 1em,
      row-gutter: 0.5em,
      ..row.map(it => rect(it))
    )
    line(stroke: (paint: gray, thickness: 1pt, dash: "dashed"), length: 100%)
  }
}


#let drawPersonals(name: [], icons: (), description: ()) = {
  let count = icons.len()
  grid(
    columns: (0.4*1fr),
    align: (center),
    // stroke:blue,
    rows: 2,
    row-gutter: 0.1em,
    [*#name*],
    grid(
      columns: (1fr,)*count,
      align: (center+horizon, )* count,
      column-gutter: 0.5em,
      row-gutter: 0.2em,
      ..icons.map(it => rect(it)),
      ..description.map(it => text(it, size:0.7em))
    )
  )
}

// #set page(
//     paper: "a4",
//     margin: (
//       inside: 3cm,
//       outside: 2cm,
//       top: 5cm
//     ),
//     header: [
//     #grid(
//       columns: 2,//(1fr, 1fr),
//       align: (left+horizon, right+horizon),
//       [#_leftHeader3()],
//       [
//         #_portrait(imgPath, headerHight*0.5)
//       ],
//     )]
// )

// #_leftHeader2()
// #_leftHeader3()
