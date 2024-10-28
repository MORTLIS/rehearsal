const tabButtons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Filter switching in the "Courses" tab
const filterButtons = document.querySelectorAll('.filter-btn');
const filterContents = document.querySelectorAll('.filter-content');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.filter).classList.add('active');
    });
});