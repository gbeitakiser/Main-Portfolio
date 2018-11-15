$(function () {
// ========================================
// Variables
// ========================================

// Page Headers 
var bioHeader = "About Me"
var portfolioHeader = "Portfolio"
var contactHeader = "Contact Me"



// ========================================
// Bio Page Writing
var bioPageInfo1 = "Hey there! My name is Gabriel. I was born in Oakland, California but moved to San Jose, " + 
"Costa Rica when I was three. After attending kindergarten there, I moved to Tucson, Arizona when I was 5 and stayed there through college. " + 
"I studied sustainable architecture and city planning at the University of Arizona and graduated with a B.S. in " +
"Sustainable Built Environments."

var bioPageInfo2 = "After graduating and interning with Tucson's Office of Integrated Planning, I realized that I love to write and grew impatient with the bureaucracy " +
"of city government. I took a 180-degree turn and found a job as an automobile journalist in San Francisco, where I currently reside. " +
"I test cars and write about them for a living, but I have an unquenchable thirst for learning " +
"and an outright obsession with technology and the many ways it shapes our world. That thirst led me to attend this coding bootcamp " +
"where I aim to learn how to interact with computers on a deeper level."

var bioPageInfo3 = "Let me be clear, my focus isn’t just technology but on how to change the underlying systems that govern our society and dictate " +
"the direction of our species. I see a great need to adapt and evolve these systems to help us confront the problems we face as a society. " +
"Technology is an ally and a powerful tool that can help us solve problems like climate change and wealth inequality. " +
"I want to learn the language of computers so that I can advance these causes."
// ========================================


// ========================================
// Functions And States
// ========================================


// ========
// Bio Page
function bioPage () {
    $("#section-title").empty()
    $("#section-image").empty()
    $("#section-text").empty()

    $("#section-title").append(bioHeader)
    var profilePic = $("<img>")
    profilePic.attr({"src": "assets/images/ProfilePic.jpg", "id": "profilePic", "alt": "Gabriel Beita-Kiser"})
    $("#section-image").append(profilePic)
    $("#section-content").append("<p id='p1'>" + bioPageInfo1 + "</p>")
    $("#section-content").append("<br>")
    $("#section-content").append("<p id='p2'>" + bioPageInfo2 + "</p>")
    $("#section-content").append("<br>")
    $("#section-content").append("<p id='p3'>" + bioPageInfo3 + "</p>")
}

// ==============
// Portfolio Page
function portfolioPage () {
    $("#section-title").empty()
    $("#section-image").empty()
    $("#section-content").empty()

    $("#section-title").append(portfolioHeader)

}

// ============
// Contact Page
function contactPage () {
    $("#section-title").empty()
    $("#section-image").empty()
    $("#section-content").empty()

    $("#section-title").append(contactHeader)
    

}


// ========================================
// Click Functions
// ========================================

// ???????????????????????????????????
// ???????????????????????????????????

// $(".nav").on("click", function () {
//     var idNumber = $(this).attr("id")
//     console.log(idNumber)
// })

// ???????????????????????????????????
// ???????????????????????????????????



// ===============
// Bio Click
$("#nav1").on("click", function () {
        bioPage()
    })
// ===============


// ===============
// Portfolio Click
$("#nav2").on("click", function () {
    portfolioPage()
})
// ===============


// ===============
// Contact Click
$("#nav3").on("click", function () {
    contactPage()
})
// ===============

// bioPage()

})