fetch("./data.json")
.then(response => {
   return response.json();
})
.then(data => {

    console.log(data)
    var items = `${data.map(item => 

        `<div id="item${item.id}">
        <div class="box">
            <img src="/quantum screen assets/quantum screen assets/images/${item.image}" alt="">
            <div class="con">
                <div id="con-1">
                    <div id="title">${item.title}</div>
                    <img src="/quantum screen assets/quantum screen assets/icons/${item.favourite ? 'favourite.svg' : 'favourite-unchecked.png'}" 
                    alt="">
                </div>
                <div id="con-2">
                    <span id="sub">${item.subject}</span>
                    <span>Grade</span>
                    ${item.grade} <span id="g-u">+${item['grade-upto']}</span>
                </div>
                <div id="con-3">
                    ${item.units ? `<span id="num">${item.units}</span>
                    <span id="info" >Units</span>` : ''}
                    ${item.lessons ? `<span id="num" >${item.lessons}</span>
                    <span id="info" >Lessons</span>` : ""}
                    ${item.topics ? `<span id="num">${item.topics}</span>
                    <span >Topics</span>` : ''}
                </div>
                <div id="con-4">
                    <span id="t" ${item.classes === "No Classes" ? `style="color: #6b6b6b;"` : ''}>
                        ${item.classes}
                    </span> 
                    <img src="/quantum screen assets/quantum screen assets/icons/arrow-down.svg" alt="">
                </div>
                <div id="con-5">
                ${item.students ? `<span>${item.students} Students</span>` : ''}
                ${item.dateFrom ? `<span>${item.dateFrom}` : ''}
                ${item.dateTo ?  `- ${item.dateTo}</span>` : ''}
                </div>
            </div>
            
        </div>
        <hr style="clear: both;color:	#BEBEBE;margin: 20px 20px 20px 0 ;">
        <div class="box2">
            <div >
                <img src="/quantum screen assets/quantum screen assets/icons/preview.svg" alt="">
            </div>
            <div >
                <img src="/quantum screen assets/quantum screen assets/icons/manage course.svg" alt="">
            </div>
            <div >
                <img src="/quantum screen assets/quantum screen assets/icons/grade submissions.svg" alt="">
            </div>
            <div >
                <img src="/quantum screen assets/quantum screen assets/icons/reports.svg" alt="">
            </div>
        </div>
    </div>`
    ).join('')}`
    document.getElementsByClassName('items')[0].innerHTML = items
})