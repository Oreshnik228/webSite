document.getElementById('nav_dog').addEventListener('click', function() {
    var Dog = document.getElementById('Dog');
    var Cat = document.getElementById('Cat');
    Dog.style.display = 'block';
    Cat.style.display = 'none';
});
document.getElementById('nav_cat').addEventListener('click', function() {
    var Dog = document.getElementById('Dog');
    var Cat = document.getElementById('Cat');
    Cat.style.display = 'block';
    Dog.style.display = 'none';
});