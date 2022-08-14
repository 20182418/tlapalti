const typed= new Typed('.typed',{
    strings:[
        '<i class="place">INNOVACION</i>',
        '<i class="place">INVESTIGACION</i>',
        '<i class="place">CIENCIAS</i>',
        '<i class="place">ARTE</i>',
        '<i class="place">CREATIVIDAD</i>',
        '<i class="place">ORIGINALIDAD</i>',
        '<i class="place">HUMANIDADES</i>',
        '<i class="place">PROGRESO</i>',
        '<i class="place">LIBERTAD</i>',
      
    ],
    stringsElement:'#cadenas-texto',
    typeSpeed: 80,
    startDelay:100,
    backSpeed:75,
    smartBackspace:true,
    shuffle:false,
    backDelay:1500,
    loop:true,
    showCursor: true,
    cursorChar:'|',
    contentType:'html'
});
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    ul.style.display = "block";
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    if (input.value == "") {
    	ul.style.display = "none";
    }
}
