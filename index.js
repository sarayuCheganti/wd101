function submitForm(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('Password').value;
            const dob = document.getElementById('date-of-birth').value;
            const acceptTerms = document.getElementById('acceptterms').checked;

            if (!emailIsValid(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const age = calculateAge(new Date(dob));
            if (age < 18 || age > 55) {
                alert('Age must be between 18 and 55.');
                return;
            }

            const tableBody = document.getElementById('table_body');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${password}</td>
                <td>${dob}</td>
            `;
            tableBody.appendChild(newRow);

            // Clear the form
            document.getElementById('form').reset();
        }

        function emailIsValid(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function calculateAge(birthday) { // birthday is a date
            const ageDifMs = Date.now() - birthday.getTime();
            const ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }