(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{162:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(173),s=n.n(c),l=n(171),i=n(170);a.default=function(){var e=Object(t.useState)(null),a=e[0],n=e[1],d=Object(t.useState)(null),o=d[0],m=d[1];return r.a.createElement(l.a,{title:"Persian Calendar"},r.a.createElement("p",null,"Turning this date picker into a Persian date picker is as easy as adding a ",r.a.createElement("code",{className:"custom-code"},"isPersian")," prop. For other features like minimum and maximum dates, just use them like the gregorian calendar:"),r.a.createElement("h2",{className:"Docs__titleSecondary"},r.a.createElement("code",{className:"custom-code"},"<DatePicker />")),r.a.createElement("div",{className:"Docs__sampleContainer"},r.a.createElement(i.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-modern-calendar-datepicker/lib/DatePicker.css";\nimport DatePicker from "react-modern-calendar-datepicker";\n\nconst App = () => {\n  const [selectedDay, setSelectedDay] = useState(null);\n  return (\n    <DatePicker\n      value={selectedDay}\n      onChange={setSelectedDay}\n      shouldHighlightWeekends\n      isPersian // add this\n    />\n  );\n};\n\nexport default App;\n\n          '),r.a.createElement(s.a,{calendarClassName:"responsive-calendar",wrapperClassName:"fontWrapper -persian",value:a,onChange:n,isPersian:!0,shouldHighlightWeekends:!0})),r.a.createElement("h2",{className:"Docs__titleSecondary"},r.a.createElement("code",{className:"custom-code"},"<Calendar />")),r.a.createElement("div",{className:"Docs__sampleContainer"},r.a.createElement(i.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-modern-calendar-datepicker/lib/DatePicker.css";\nimport { Calendar } from "react-modern-calendar-datepicker";\n\nconst App = () => {\n  const [selectedDay, setSelectedDay] = useState(null);\n  return (\n    <Calendar\n      value={selectedDay}\n      onChange={setSelectedDay}\n      shouldHighlightWeekends\n      isPersian // add this\n    />\n  );\n};\n\nexport default App;\n\n                '),r.a.createElement(c.Calendar,{calendarClassName:"fontWrapper -persian responsive-calendar",value:o,onChange:m,isPersian:!0,shouldHighlightWeekends:!0})))}},171:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(170);n(147);a.a=function(e){var a=e.title,n=e.children;return r.a.createElement(c.d,null,r.a.createElement(c.e,{title:a+" - react-modern-calendar-datepicker",keywords:[a]}),r.a.createElement("div",{className:"Docs"},r.a.createElement(c.c,null),r.a.createElement("div",{className:"Docs__content"},r.a.createElement("h1",{className:"Docs__title"},a),n)))}}}]);
//# sourceMappingURL=component---src-pages-docs-persian-calendar-js-ed488051cabf88b14d6b.js.map