#import "cv_template.typ": project
#import "functions.typ": drawEducation, drawExperience, drawProjects, drawLanguages, drawSkills, drawPersonals
#import "@preview/use-tabler-icons:0.20.0": *
// TODO: add githubIO
#show: project.with(
  name: "Philipp Herrmann",
  degree: [M. Sc. Robotik und KI | B. Eng. Mechatronik],
  university: [HKA], // Hochschule Karlsruhe
  adress: "76684 Östringen, Thiviersstr. 3",
  email: "mailto:herrmann-philipp1@web.de",
  linkedin: "https://www.linkedin.com/in/herrmann-philipp1/",
  phone: "0157/50649653"
  )
#set list(
)
#grid(
  columns: (0.6fr, 0.4fr),
  column-gutter: 1em,
  [
    = Ausbildung // TODO: make table second colum statr at same space everywhere
    #grid(
      rows: 3,
      row-gutter: 0.5em,
      [*Hochschule Karlsruhe*],
      [ 
        #drawEducation(
          degree: [Master],
          title: [Robotik und KI in der Produktion],
          duration: [WS23/24 - SS25],
          location: [Karlsruhe],
          grade: [1,5])
      ],
      [
        #drawEducation(
          degree: [Bachelor],
          title: [Mechatronik],
          duration: [WS19/20 - WS23/24],
          location: [Karlsruhe],
          grade: [2,2])
      ]
    )
    #grid(
      rows: 2,
      row-gutter: 0.5em,
      [*Leibniz-Gymnasium*],
      [
        #drawEducation(
              degree: [Allgemeine Hochschulreife],
              title: [Deutsch, Englisch, Mathe, Physik],
              duration: [2011 - 2019],
              location: [Östringen],
              grade: [2,9]
            )
      ]
    )
    
    = Berufserfahrung
      #drawExperience(
        title: [Masterarbeit], duration:[SS25], location:[SEW-Eurodrive Bruchsal], descriptions:([- Posenschätzung und Tracking von Objekten im industriellen Umfeld], [- Implementierung einer Sensorfusion von LiDAR und RGB-Kameras und anschließendes 3D-Tracking auf einer NVIDIA Jetson Plattform (Edge AI)]))

      #drawExperience(
            title: [Werkstudent],
            duration:[SS24 - SS25],
            location:[Automobil-Prüftechnik Landau],
            descriptions:([- Datenauswertung], [- Softwareentwicklung], [- Recherche], [- Konstruktion]))
      #drawExperience(
            title: [Bachelorarbeit],duration:[WS23/24], location:[Automobil-Prüftechnik Landau], descriptions:([- Entwicklung einer Testhardware mit Prüfmethode zur Untersuchung und Validierung von Batterie-Management-Systemen],))
      #drawExperience(
            title: [Praxissemester],duration:[WS22/23], location:[Automobil-Prüftechnik Landau], descriptions:([- Prüfstandsentwicklung Tauchkühlung elektronischer Komponenten], [- Prüfprogramm zur Auswertung verschiedener Fluide]))
  ],
  [
    = Sprachen
      #drawLanguages(languages: ([Deutsch], [Englisch], [Französisch]), levels: ([C2], [B2(C2)], [B2]), points: (5, 4, 2))
    = Fähigkeiten
      #drawSkills(skills: (("python", "C++", "C", "matlab"), ("latex", "typst", "office"), ("git", "docker", "ROS2"), ("opencv", "tensorflow", "torch"), ("Creo", "Fusion360", "FreeCad")))
    = Spezialisierungen // TODO mayby different name
    // #grid(
    //   columns: (auto, auto),
    //   rows: 1,
    //   column-gutter: 0.5em,
    //   [- *Master*:],
    //   [Winter-School "Advanced Topics in AI" (Edge AI)]
    // )
    // #grid(columns: (auto, auto),
    //   rows: 1,
    //   column-gutter: 0.5em,
    //   [- *Bachelor*:],
    //   [Vertiefung Robotik und Bionik]
    // )
    #grid(
      columns: (auto, auto),
      rows: 2,
      column-gutter: 0.5em,
      row-gutter: 1em,
      [- *Master*:],
      [Winter-School "Advanced Topics in AI" (Edge AI)],
      [- *Bachelor*:],
      [Vertiefung Robotik und Bionik]
    )
    = Persönliches // mayby Persönliches
    #let iconHeight =3em
    #drawPersonals(name: [Hobbies], icons: (tabler-icon("play-football", size:iconHeight), tabler-icon("bike", size:iconHeight), tabler-icon("drone", size:iconHeight), image("imgs/3dprinter.svg", height: iconHeight)), description: ("Fußball", "Radfahren", "FPV-Drohne", "3D-Drucker"))
    *Weiteres*
    - Führerschein: Klasse B
    - Familienstand: ledig
    - Geburtsdatum: 01.05.2001
    - Staatsangehörigkeit: Deutsch
    - Geburtsort: 76646 Bruchsal
  ],
)
    = Projekte
    #grid(
      columns: 2,
      rows: 2,
      gutter: 0.5em,
      drawProjects(
        title: [Forschungs- und Entwicklungsprojekt I],
        symbol: "hand-grab",
        description: [- Entwicklung einer neuartigen Greifstrategie mittels maschinellen Lernens]
      ),
      drawProjects(
        title: [Forschungs- und Entwicklungsprojekt II],
        symbol: "robot",
        description: [- Inbetriebnahme eines Roboters (Softwareanpassungen und Hardwareverbesserungen)]
      ),
      drawProjects(
        title: [Robogistics-Projekt],
        symbol: "eye",
        description: [- Erkennung von Rittersport-Schokolade mittels KI und Übergabe an den Anwender durch KUKA-Roboter]
      ),
      drawProjects(
        title: [KI-Projekt],
        symbol: "brain",
        description: [- Unterscheidung von Schrauben, Nägeln und Dübeln, sowie zählen auf einem Bild]
      )
    )
     