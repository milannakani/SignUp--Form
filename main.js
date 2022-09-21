function checkpass(form) {
    const pw1 = form.password.value;
    const pw2 = form.confirm_password.value;
    const match = document.querySelector(".passmatch");
    if (pw1 !== pw2) {
        match.textContent = "*Password do not match";
        return false;
    }
    else {
        return true;
    }
}
