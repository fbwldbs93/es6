const follow = checkFollow();
const alert = checkAlert();

const settings = {
    notifications : {
        follow : follow,
        alert : alert
    }
}


//======= 축약할 수 있음! =========

const settings = {
    notifications : {
        follow,
        alert
    }
}