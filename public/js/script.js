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