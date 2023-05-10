const projects=[{title:"Elzero Dashboard",paragraph:"Elzero Dashboard Project Design And Programming And Hosting",date:"15/10/2021",team:["team-1","team-2","team-3","team-4","team-2"],tags:["Programming","Design","Hosting","Marketing"],progress:"50",price:"2500"},{title:"Academy Portal",paragraph:"Academy Portal Project Design And Programming",date:"15/6/2022",team:["team-1","team-3","team-2"],tags:["Programming","Design"],progress:"85",price:"1800"},{title:"Chatting Application",paragraph:"Chatting Application Project Design",date:"15/6/2022",team:["team-3","team-1","team-4"],tags:["Design"],progress:"100",price:"950"},{title:"Ahmed Dashboard",paragraph:"Ahmed Dashboard Project Design And Programming And Hosting",date:"15/6/2022",team:["team-2","team-3","team-1","team-4"],tags:["Programming","Design","Hosting","Marketing"],progress:"75",price:"1700"},{title:"Ahmed Portal",paragraph:"Ahmed Portal Project Design And Programming",date:"15/6/2022",team:["team-2","team-4","team-1"],tags:["Programming","Design"],progress:"80",price:"850"},{title:"Mohamed Application",paragraph:"Mohamed Application Project Design",date:"15/6/2022",team:["team-4","team-2","team-3"],tags:["Design"],progress:"30",price:"950"},{title:"Mohamed Dashboard",paragraph:"Mohamed Dashboard Project Design And Programming And Hosting",date:"15/6/2022",team:["team-3","team-4","team-2","team-1"],tags:["Programming","Design","Hosting","Marketing"],progress:"75",price:"1950"},{title:"Mohamed Portal",paragraph:"Mohamed Portal Project Design And Programming",date:"15/6/2022",team:["team-2","team-1","team-4"],tags:["Programming","Design"],progress:"60",price:"1650"},{title:"Ahmed Application",paragraph:"Ahmed Application Project Design",date:"15/6/2022",team:["team-1","team-3","team-4"],tags:["Design"],progress:"90",price:"950"}];function appendElementToGrid(e){var a=e.team.map(e=>`<img src="assets/images/team-members/${e}.png">`).join(" "),t=e.tags.map(e=>`<span class="noevent-btn">${e}</span>`).join(" "),r=document.createElement("article"),s=document.createElement("div"),n=document.createElement("h3"),i=document.createElement("p"),m=document.createElement("span"),d=document.createElement("div"),o=document.createElement("div"),g=document.createElement("div"),p=document.createElement("progress"),c=document.createElement("span"),l=document.createElement("i");r.classList.add("project"),s.classList.add("title"),m.classList.add("date"),d.classList.add("team-members"),o.classList.add("tags"),g.classList.add("row"),p.classList.add("progress"),p.setAttribute("max","100"),l.classList.add("fa-solid","fa-dollar-sign"),100==e.progress?p.classList.add("bg-blue"):75<=e.progress?p.classList.add("bg-green"):p.classList.add("bg-red"),n.textContent=e.title,i.textContent=e.paragraph,m.textContent=e.date,p.setAttribute("value",e.progress),c.textContent=e.price,r.appendChild(s),r.appendChild(d),r.appendChild(o),r.appendChild(g),s.appendChild(n),s.appendChild(i),s.appendChild(m),d.innerHTML=a,o.innerHTML=t,g.appendChild(p),g.appendChild(c),c.appendChild(l),document.querySelector(".grid").appendChild(r)}projects.forEach(e=>{appendElementToGrid(e)}),s;