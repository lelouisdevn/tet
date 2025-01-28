const username = "";
const password = "";

const user_list = [
    {email: "huynhminhtuan", password: "hmt"},
    {email: "tranmienkhanhha", password: "tmkh"},
    {email: "doanngocphuong", password: "dnp"},
]

class User {
    constructor(username, passwd) {
        this.user_name = username;
        this.password = passwd;
    }
    check_user_authorised() {
        console.log(this)
        for (let index = 0; index < user_list.length; index++) {
            if (user_list[index].email == this.user_name.toLowerCase() && user_list[index].password == this.password.toLowerCase()) {
                return true;
            };
        }
        return false;
    }
    log_in_with_email() {
        console.log(this);
        clear_fields_on_submitted();
        if (this.check_user_authorised()) {
            setTimeout(() => {
                change_to_profile1();
            }, 1500);
        } else {
            show_errors_on_login();
        }
    }
}

function show_errors_on_login() {
    $('#next-btn').html('Wrong username or password');
    setTimeout(() => {
        $('#next-btn').html('Sign in');
    }, 1500);
}

function clear_fields_on_submitted() {
    $('#username').val('');
    $('#password').val('');
}
const profile = `

<div class="sq-grid-it-container">
    <div class="sq-fm-til poppins-medium">Log in with your <br/>Personal Credentials</div>
        <div class="sq-fm-ctn">
            <div class="sq-fm-form">
                <input type="text" placeholder="Your name in no spaces and accents: ....." id="username">
            </div>
            <div class="sq-fm-form">
                <input type="password" placeholder="Your password: ....." id="password">
            </div>
        </div>
        <div class="sq-fm-ftr">
            <div class="sq-fm-form">
                <button id="next-btn">Next</button>
        </div>
    </div>
</div>
`;

var button = `
   <button id="slider-button" onClick="next()">Want to see more?</button>
`
var title = `
<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1 title poppins-medium">
                            <i>Tet Holiday 2025</i>
                        </div>
                        <div class="sq-grid-it poppins-small expand-1">
                            <div class="">Press play to go</div>
                        </div>
                    </div>
                    <div class="rt-cnr">
                        @thaingo1202
                    </div>
                    </div>
`

var gallery = `
<div class="sq-grid grid-nine">
                        <div class="sq-grid-it expand-1 poppins-medium title">
                            <i>The Present</i>
                            <div style="position: absolute; margin: 0 10px; right: 0; top: 0;">
                            <i class="fa fa-arrow-right poppins-medium" style="font-size: 30px!important;"></i>
                            </div>
                        </div>
                        
                        <div class="sq-grid-it">
                            <img class="gallery" id="gallery" src="metadata/resources/images/mt.jpg" alt="">
                            <div class="poppins-small">Tuấn </div>
                        </div>
                        <div class="sq-grid-it">
                            <img class="gallery" id="gallery" src="metadata/resources/images/np.jpg" alt="">
                            <div class="poppins-small">:3</div>
                        </div>
                        <div class="sq-grid-it">
                            <img class="gallery" id="gallery" src="metadata/resources/images/kh.jpg" alt="">
                            <div class="poppins-small">Hạ</div>
                        </div>
                    </div>
`
function load_login_form() {
    $('#content-body').html(profile);
    let audio_obj = document.getElementById("audio-ctrl");
    audio_obj.pause();
}
function change_to_profile1() {
    $('.content').children().hide();
    $('.content').css({
        "display": "none",
    })
    $('#sq-bdr').css({
        "height": "50%"
    })
    $('#content-body').html(title);
    $('#audio-ctrl').css({
        "opacity": 1
    })
}

function main() {
    $('#next-btn').on('click', function () {
        $('#next-btn').html('Signing you in...')
        let usrname = $('#username').val();
        let passwd = $('#password').val();
        em = new User(usrname, passwd)
        console.log(em)
        em.log_in_with_email();
        $('audio').on('play', () => {
            // $('#content-body').html(mystery_of_love_content);
            $('.sq-bdr').addClass('bigger-container')
            $('#sq-bdr').css({
                "height": ""
            })
            $('#audio-ctrl').css({
                "opacity": 0
            })
            jump_to_gallery();
        })
    });
}

function jump_to_gallery() {
    $('#content-body').html(gallery);
    $('.fa-arrow-right').on('click', function () {
        let audio_obj = document.getElementById("audio-ctrl");
        audio_obj.pause();
        show_ending();
    })
}

var gift = `
<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1 poppins-medium">You're way too fast ✨✨</div>
                        <div style="position: absolute; margin: 10px; right: 0">
                            <i class="fa fa-close poppins-medium" style="font-size: 30px!important;"></i>
                        </div>
                        <div class="sq-grid-it expand-1">
                                                    <img src="metadata/resources/images/gift.jpg" alt="" style="border-radius: 20px; width: 45%;">
                                                </div>
                                                <div class="sq-grid-it expand-1">
                                                    Must be New Year Eve, thanks for beside me
                                                </div>
                        </div>
`

var ending = `
<div class="sq-grid grid-three">
                        <div class="sq-grid-it expand-1 poppins-medium">
                        Happy New Year 🥰🥰
                        </div>
                        <div class="sq-grid-it expand-1">
                            <iframe  style="border-radius: 10px" width="560" height="315" src="https://www.youtube.com/embed/sTOEb_3H4rU?&autoplay=1&amp;controls=0&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        
                    </div>
`

function show_gift_view() {
    $('.sq-bdr').addClass('bigger-container')
    $('#content-body').html(gift);
    $('.fa-close').on('click', () => {
        let audio_obj = document.getElementById("audio-ctrl");
        audio_obj.pause();
        show_ending()
    })
}
// show_gift_view()

function show_ending () {
    $('.sq-bdr').removeClass('bigger-container');
    $('#content-body').html(ending)
}

// show_ending()

/* MAIN */
load_login_form();
main();
// 