function kiemTraRong(value, select, name) {
    var valid = true;
    if (value === '') {
        document.querySelector(select).innerHTML = name + ' Không dc dể trống';
        valid = false;
    } else {
        document.querySelector(select).innerHTML = '';
    }
    return valid;
}