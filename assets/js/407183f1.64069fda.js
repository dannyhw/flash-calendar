"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75],{9256:(e,t,n)=>{n.d(t,{z:()=>a});var s=n(1085);const a=e=>{let{alignItems:t,children:n,justifyContent:a="flex-start",spacing:r=0}=e;return(0,s.jsx)("div",{style:{gap:r,flexDirection:"row",justifyContent:a,alignItems:t,display:"flex"},children:n})}},9638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=n(1085),a=n(1184),r=n(9256);const o={sidebar_position:4},i="Tips and Tricks",d={id:"fundamentals/tips-and-tricks",title:"Tips and Tricks",description:"Date IDs vs Dates",source:"@site/docs/fundamentals/tips-and-tricks.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/tips-and-tricks",permalink:"/fundamentals/tips-and-tricks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Customization",permalink:"/fundamentals/customization"}},c={},l=[{value:"Date IDs vs Dates",id:"date-ids-vs-dates",level:2},{value:"Programmatically scrolling to a specific date",id:"programmatically-scrolling-to-a-specific-date",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tips-and-tricks",children:"Tips and Tricks"}),"\n",(0,s.jsx)(t.h2,{id:"date-ids-vs-dates",children:"Date IDs vs Dates"}),"\n",(0,s.jsxs)(t.p,{children:["Date and timezones are a confusing topic. This is why Flash Calendar is careful to name things consistently. All props and callbacks used by the library follows the same convention of using a date ID instead of a ",(0,s.jsx)(t.code,{children:"Date"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Date ID is a simple ",(0,s.jsx)(t.code,{children:"YYYY-MM-DD"})," representation of a given date. Flash Calendar exposes two functions to convert between Date and Date ID."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import { toDateId, fromDateId } from "@marceloterreiro/flash-calendar";\n\nconst januaryFirstAsDate = fromDateId("2024-01-01"); // Date object\nconst januaryFirstAsId = toDateId(januaryFirstAsDate); // "2024-01-01"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["It's ",(0,s.jsxs)(t.strong,{children:["highly recommended to use ",(0,s.jsx)(t.code,{children:"toDateId"})," and ",(0,s.jsx)(t.code,{children:"fromDateId"})," when interacting with the library"]}),". These functions were purposefully created to avoid timezones and other date-related issues."]}),"\n",(0,s.jsx)(t.p,{children:"For instance, consider this code:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const endOfJanuary = new Date("2024-01-31");\n\n// \u274c Don\'t do this, for some dates and timezones, this will return unexpected results\nconst endOfJanuaryId = endOfJanuary.toISOString().slice(0, 10); // 2024-02-01 or 2024-01-31, depending on the timezone\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The code above is not completely safe. It can return ",(0,s.jsx)(t.code,{children:"2024-02-01"})," for some timezones. Instead, use ",(0,s.jsx)(t.code,{children:"toDateId"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'const endOfJanuaryId = toDateId("2024-01-31");\nconst endOfJanuary = fromDateId(endOfJanuaryId); // Date object\n'})}),"\n",(0,s.jsxs)(t.p,{children:["These two convertions functions were ",(0,s.jsx)(t.a,{href:"https://github.com/MarceloPrado/flash-calendar/blob/ee87cb1a695a42840f00f17bbaeb1a795a1e3ba0/packages/flash-calendar/src/helpers/dates.test.ts#L30-L130",children:"battle-tested"})," to return the expected results, regardless of the timezone."]}),"\n",(0,s.jsx)(t.h2,{id:"programmatically-scrolling-to-a-specific-date",children:"Programmatically scrolling to a specific date"}),"\n",(0,s.jsxs)(t.p,{children:["Flash Calendar exposes a ",(0,s.jsx)(t.code,{children:"ref"})," that allows imperative scrolling to a desired date."]}),"\n",(0,s.jsxs)(r.z,{spacing:24,alignItems:"flex-start",children:[(0,s.jsx)("div",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import { addMonths, subMonths, startOfMonth } from "date-fns";\nimport type { CalendarListRef } from "@marceloterreiro/flash-calendar";\nimport { Calendar, toDateId } from "@marceloterreiro/flash-calendar";\nimport { useRef, useState } from "react";\nimport { Button, Text, View } from "react-native";\n\nexport function ImperativeScrolling() {\n  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));\n\n  const ref = useRef<CalendarListRef>(null);\n\n  return (\n    <View style={{ paddingTop: 20, flex: 1 }}>\n      <View style={{ flexDirection: "row", gap: 12 }}>\n        <Button\n          onPress={() => {\n            const pastMonth = subMonths(currentMonth, 1);\n            setCurrentMonth(pastMonth);\n            ref.current?.scrollToDate(pastMonth, true);\n          }}\n          title="Past month"\n        />\n        <Text>Current: {toDateId(currentMonth)}</Text>\n        <Button\n          onPress={() => {\n            const nextMonth = addMonths(currentMonth, 1);\n            setCurrentMonth(nextMonth);\n            ref.current?.scrollToDate(nextMonth, true);\n          }}\n          title="Next month"\n        />\n      </View>\n      <View style={{ flex: 1, width: "100%" }}>\n        <Calendar.List\n          calendarInitialMonthId={toDateId(currentMonth)}\n          onCalendarDayPress={(dateId) => console.log(`Pressed ${dateId}`)}\n          ref={ref}\n        />\n      </View>\n    </View>\n  );\n}\n'})})}),(0,s.jsx)("video",{controls:!0,width:300,children:(0,s.jsx)("source",{src:"/videos/imperative-scroll.mp4",type:"video/mp4"})})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);