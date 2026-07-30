#import "@preview/use-tabler-icons:0.20.0": *
#import "functions.typ": _portrait, _leftHeader2, _leftHeader3
#let twoside = false
#let headerHight = 5cm
// #let imgPath = "imgs/Herrmann Philipp R 6x9.jpg"
#let imgPath = "imgs/cropped.jpg"

#let project(
  name: "",
  degree: "",
  university: "",
  email:"",
  phone: "",
  linkedin: "",
  adress: "",
  body
  ) = {
  set page(
    paper: "a4",
    binding: if twoside { left } else { auto },
    margin: (
      inside: 1cm,
      outside: 1cm,
      top: headerHight
    ),
    footer:context {
      let p = counter(page).get().first()
      if p > 1 {
        let side = if calc.rem(p, 2) == 0 { left } else { right }
        if twoside {align(side)[#p]} else {align(right)[#p]}
      }
      // rect(fill:blue, width:100%, height: 100%)
    },
    // header: align(right)[#image("imgs/black_rect.jpg")#image("imgs/Herrmann Philipp R 45x65.jpg", height:3cm)]
    header: [
    #grid(
      columns: 2,//(1fr, 1fr),
      align: (left+horizon, right+horizon),
      [#_leftHeader3(name, degree, university, email, phone, linkedin, adress)],
      [
        #_portrait(imgPath, headerHight*0.5)
      ]
    )],
  )
  set text(font: "New Computer Modern", lang:"de", size: 10pt)
  set document(title: [Lebenslauf Philipp Herrmann], author: "Philipp Herrmann", description: [Lebenslauf von Philipp Herrmann], keywords: ("Lebenslauf", "CV", "Philipp Herrmann"), date: auto)

  show heading: it => block(
  width: 100%,
  stroke: (bottom: 1pt + black),
  inset: (bottom: 4pt),
  it
  )

  body
}