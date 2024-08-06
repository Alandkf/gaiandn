document.getElementById('searchInput').addEventListener('input', function () {
    document.getElementById('searchForm').submit();
});

// Set focus to the input box after the page loads
window.addEventListener('load', function () {
    const searchInput = document.getElementById('searchInput');
    searchInput.focus();
    // Move cursor to the end of the input value
    const value = searchInput.value;
    searchInput.value = '';
    searchInput.value = value;
});



function toggleSidebar() {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.toggle('collapsed');
            }

            document.getElementById('toggleBtn').addEventListener('click', toggleSidebar);

            function checkWidth() {
                const sidebar = document.getElementById('sidebar');
                if (window.innerWidth <= 1048) {
                    sidebar.classList.add('collapsed');
                } else {
                    sidebar.classList.remove('collapsed');
                }
            }

            window.addEventListener('resize', checkWidth);
            window.addEventListener('load', checkWidth);
