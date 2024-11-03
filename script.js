function showContent(contentId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

    const buttons = document.querySelectorAll('.navbar button');
    buttons.forEach(button => button.classList.remove('active'));

    const selectedButton = document.querySelector(`.navbar button[onclick="showContent('${contentId}')"]`);
    selectedButton.classList.add('active');
}
