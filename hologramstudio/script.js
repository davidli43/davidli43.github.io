document.addEventListener('DOMContentLoaded', function() {
    const videoList = document.getElementById('video-list');
    const videos = []; // Array to store video elements

    // Replace the filenames with your own MP4 video files
    const videoFiles = [
        'holograms/Release_Candle_Static_07161_holo_thumbnail.mp4',
        'holograms/Release_Brady_Charlie_Static_07161_holo_thumbnail.mp4',
        'holograms/Release_Basketball_Static_07261_holo_thumbnail.mp4',
        'holograms/Release_Phone_Static_07161_holo_thumbnail.mp4',
        'holograms/Release_Basketball_Static_07262_holo_thumbnail.mp4',
        'holograms/Release_Simba_Static_07161_holo_thumbnail.mp4',
        'holograms/Release_Balloon_Static_07161_holo_thumbnail.mp4',
        'holograms/Release_Candle_Static_07112_holo_thumbnail.mp4',
        'holograms/Release_Balloon_Static_07162_holo_thumbnail.mp4',
        'holograms/Release_Candle_Static_07111_holo_thumbnail.mp4',
        'holograms/Release_Simba_Static_07162_holo_thumbnail.mp4',
        'holograms/Release_Candle_Static_07113_holo_thumbnail.mp4',

        'holograms/Release_Awakening_Static_04142_holo_thumbnail.mp4',
        'holograms/Release_Violin__Static_04141_holo_thumbnail.mp4',
        'holograms/Release_Dancer_Fang_Static_04141_holo_thumbnail.mp4',
        'holograms/Release_Dancer_Ladenheim_Static_04141_holo_thumbnail.mp4',
        'holograms/Release_Dancer_Spanos_Static_04141_holo_thumbnail.mp4',
        'holograms/Release_Saxophone_Static_04272_holo_thumbnail.mp4',
        'holograms/Release_Violin_Static_04272_holo_thumbnail.mp4',
        'holograms/Release_Dancer_Spanos_Static_04142_holo_thumbnail.mp4',
        'holograms/Release_Dancer_Fang_Static_04142_holo_thumbnail.mp4',
        'holograms/Release_Violin__Static_04143_holo_thumbnail.mp4'
    ];

    videoFiles.forEach(function(filename) {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        const video = document.createElement('video');
        video.src = filename;
        video.autoplay = false; // Disable autoplay initially
        video.loop = true;
        video.muted = true;
        video.style.width = '100%';
        video.style.height = 'auto';

        videoItem.appendChild(video);
        videoList.appendChild(videoItem);

        videos.push(video); // Add the video element to the videos array
    });

    // Helper function to play/pause video based on visibility
    function handleVideoVisibility(entries) {
        entries.forEach((entry) => {
            const video = entry.target;

            if (entry.isIntersecting) {
                if (video.paused) {
                    video.play();
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }

    // Create an Intersection Observer to handle video visibility
    const observer = new IntersectionObserver(handleVideoVisibility, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust threshold as needed (0.5 means at least 50% visible)
    });

    // Observe all video elements
    videos.forEach((video) => {
        observer.observe(video);
    });
});
