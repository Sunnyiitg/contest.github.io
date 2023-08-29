let url = "https://kontests.net/api/v1/all";
let contestBox=document.querySelector("#contestBox");
var images={
        CodeChef: "./platform/codechef.jpg",
        CodeForces: "./platform/codeforces.webp",
        GeeksForGeeks: "./platform/gfg.webp",
        HackerEarth: "./platform/hackerearth.jpg",
        HackerRank: "./platform/hackerrank.webp",
        LeetCode: "./platform/leetcode.webp"
}
async function fetchData()
{
        const response = await fetch(url);
        const data = await response.json();
        inner_html="";
        for(contest of data)
        {
            console.log(contest.site);
            let SITE=contest.site;
            let SRC="";
            if(SITE in images) SRC=images[SITE];
            if(!(SITE in images)) SRC="bg.jpg";
        //     console.log(SITE,SRC,typeof SRC,"FOUND");
            inner_html += `
            <div class="w-auto card">
                <img src= ${SRC} alt="image load failed" class="image">
                <h5>Contest Name: </h5><p>${contest.name}</p>
                <h5>Start Time: </h5><p>${contest.start_time}</p>
                <h5>End Time: </h5><p>${contest.end_time}</p>
                <h5>Contest Duration:  </h5><p>${contest.duration}</p>
                <h5>In 24 Hourse:  </h5><p>${contest.in_24_hours}</p>
                <h5>On Platform:  </h5><p>${contest.site}</p>
                <a href=${contest.url}><button>Visit Page</button></a>
            </div>
            `;
        }
        contestBox.innerHTML=inner_html;
}
fetchData();
console.log("-------done BC-------");


/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }