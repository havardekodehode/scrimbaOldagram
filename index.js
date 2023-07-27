const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function renderMobile(){
    const header = document.createElement("header");
    const logo = document.createElement("img"); logo.classList="logo"; logo.src = "images/logo.png"
    const avatar = document.createElement("img"); avatar.classList = "avatar"; avatar.src = "images/user-avatar.png"
  
    header.append(logo, avatar)

    const main = document.createElement("main");

    for(let post of posts){
        const section = document.createElement("section")

        const userInfo = document.createElement("div"); userInfo.classList = "userInfo"
        const avatar = document.createElement("img"); avatar.classList="avatar"; avatar.src = post.avatar
        const nameAndLocation = document.createElement("div"); nameAndLocation.classList="nameAndLocationContainer"
        const name = document.createElement("p"); name.classList="name"; name.textContent = post.name
        const location = document.createElement("p"); location.classList= "location"; location.textContent = post.location
        nameAndLocation.append(name, location)
        userInfo.append(avatar, nameAndLocation)


        const img = document.createElement("img"); img.classList="postImage"; img.src = post.post; img.alt="Image of "+post.name
     

        const actionContainer = document.createElement("div"); actionContainer.classList="actionContainer"
        const likeBtn = document.createElement("img"); likeBtn.src = "images/icon-heart.png"
        const commentBtn = document.createElement("img"); commentBtn.src = "images/icon-comment.png"
        const dmBtn = document.createElement("img"); dmBtn.src = "images/icon-dm.png"
        actionContainer.append(likeBtn, commentBtn, dmBtn)

        const postResponse = document.createElement("div"); postResponse.classList="postResponse"
        const likes = document.createElement("p"); likes.innerText=post.likes + "likes"; likes.classList="likes"
        const userAndCommentContainer = document.createElement("div"); userAndCommentContainer.classList = "userAndCommentContainer"
        const user = document.createElement("p"); user.innerText=post.username; user.classList = "user"
        const comment = document.createElement("p"); comment.innerText=post.comment; comment.classList="comment"
        userAndCommentContainer.append(user, comment)
        postResponse.append(likes, userAndCommentContainer)

        section.append(userInfo, img, actionContainer, postResponse)
        main.append(section)
    }

    document.body.append(header, main)
}

const mediaQuery = window.matchMedia('(max-width: 350px)')

mediaQuery.matches?renderMobile():console.log("Viewport width is larger than 355px")


    

    




