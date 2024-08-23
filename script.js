   document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form data:', data); // Debug: Log the form data

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': 'L5gu0ydGppsC-MjSyEeUdDreYEhmqj-JELHN2S4z'
            },
            body: JSON.stringify(data)
        };

        console.log('Request body:', options.body); // Debug: Log the request body

        fetch('https://app.nocodb.com/api/v2/tables/md4ac8jt587hq9x/records', options)
            .then(response => {
                console.log('Response status:', response.status);
                return response.json();
            })
            .then(response => {
                console.log('Success:', response);
                alert('Thank you for signing up!');
                document.getElementById('signupForm').reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            });
    });
