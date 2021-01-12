document.addEventListener('keyup', function get_random_color() {
        var letters = 'ABCDE'.split('');
        var color = '#';
        for (var i = 0; i < 3; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }
) 