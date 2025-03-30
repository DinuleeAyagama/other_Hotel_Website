<script>
        // Mobile menu toggle
        document.querySelector('.menu-btn').addEventListener('click', function() {
            const navbar = document.querySelector('#navbar ul');
            navbar.classList.toggle('show');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navbar ul li a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    document.querySelector('#navbar ul').classList.remove('show');
                }
            });
        });
    </script>