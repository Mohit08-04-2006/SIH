document.getElementById('b1').addEventListener('click', function() {
    document.body.innerHTML = '';


    var Content = document.createElement('div');
    Content.innerHTML = '<h1>Welcome Admin</h1>\
    <div class="inp">\
    <input type="email" placeholder="dce@gmail.com">\
    <button class="btn2">Sign in</button>\
    <button class="btn2">Switch to Sign Up</button>\
    </div>';

    document.body.appendChild(Content);

});
