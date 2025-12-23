// Get modal elements
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeBtn = document.getElementsByClassName('close')[0];

// Get all video links
const videoLinks = document.querySelectorAll('.video-link');

// Add click event to all video links
videoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const videoId = this.getAttribute('data-video-id');
        openVideo(videoId);
    });
});

// Function to open video in modal
function openVideo(videoId) {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoPlayer.src = embedUrl;
    modal.style.display = 'block';
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close video modal
function closeVideo() {
    modal.style.display = 'none';
    videoPlayer.src = '';
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking the X button
closeBtn.onclick = closeVideo;

// Close modal when clicking outside the video
window.onclick = function(event) {
    if (event.target === modal) {
        closeVideo();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeVideo();
    }
});
