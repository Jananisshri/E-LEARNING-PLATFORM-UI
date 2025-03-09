function handleCourseClick(courseId) {
    localStorage.setItem("selectedCourse", courseId);
    window.location.href = "elearning2.html"; // Ensure it matches the file name
}

window.onload = function() {
    const selectedCourse = localStorage.getItem("selectedCourse");
    const courseTitle = document.getElementById("courseTitle");
    const videoContainer = document.getElementById("videoContainer");
    
    if (selectedCourse === 'course1') {
        courseTitle.textContent = "JavaScript Basics";
        videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/wo9eK3GU3p8" frameborder="0" allowfullscreen></iframe>';
    } else if (selectedCourse === 'course2') {
        courseTitle.textContent = "HTML & CSS";
        videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/pQN-8KqO7Ws" frameborder="0" allowfullscreen></iframe>';
    }

    document.getElementById("trackProgress").onclick = function() {
        alert(`${courseTitle.textContent} marked as completed!`);
        document.getElementById("progressMessage").textContent = "Progress Saved!";
    };
};