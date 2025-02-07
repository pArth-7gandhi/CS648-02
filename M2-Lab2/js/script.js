window.addEventListener("load", function () {
    $("empForm").reset();
    const form = window.document.getElementById('empForm');
    form.addEventListener('submit', logSubmit);
    function logSubmit (event) {
        event.preventDefault();
        const id = form.elements.id.value;
        const ext = form.elements.ext.value;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const department = form.elements.department.value;
    
        console.log('ID: ', id);
        console.log('Name:', name);
        console.log('Extension:', ext);
        console.log('Email:', email);
        console.log('Department:', department);
    }
});

var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
}
