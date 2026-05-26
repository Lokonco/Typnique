#set page(paper: "a4", margin: 2.5cm)
#set text(size: 12pt, font: "New Computer Modern")
#set par(justify: false, first-line-indent: 0pt)

#let title-blue = rgb("#1E3C78")
#let problems = json("problems-typ.json")

#align(center)[
  #text(size: 24pt, weight: "bold")[Formula Collection] \
  #v(-.3em)
  #text(size: 15pt, style: "italic")[rendered with Typst]
]

#v(0.5em)
#line(length: 100%, stroke: 0.8pt)

#for (i, p) in problems.enumerate() [
  #v(.18em)

  #text(size: 14pt, weight: "bold", fill: title-blue)[
    #eval(str(i + 1) + ". " + p.title, mode: "markup")
  ]

  #v(-.3em)

  #emph(p.description)

  #v(.65em)

  #eval("$ " + p.typst + " $", mode: "markup")

  #v(-.2em)

  #line(length: 100%, stroke: 0.4pt)
]


