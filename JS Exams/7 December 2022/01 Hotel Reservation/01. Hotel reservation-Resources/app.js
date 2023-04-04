window.addEventListener('load', solve);

function solve() {
    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        dateIn: document.getElementById('date-in'),
        dateOut: document.getElementById('date-out'),
        peopleCount: document.getElementById('people-count')
    }

    const lists = {
        info: document.querySelector('.info-list'),
        confirm: document.querySelector('.confirm-list')
    }

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', makeReservation);

    function makeReservation(event) {
        event.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const dateIn = input.dateIn.value;
        const dateOut = input.dateOut.value;
        const peopleCount = input.peopleCount.value;

        if (firstName == '' 
        || lastName == '' 
        || dateIn == '' 
        || dateOut == '' 
        || peopleCount == '' 
        || new Date(dateIn) >= new Date(dateOut)) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'reservation-content';
        li.innerHTML = `<article>
          <h3>Name: ${firstName} ${lastName}</h3>
          <p>From date: ${dateIn}</p>
          <p>To date: ${dateOut}</p>
          <p>For ${peopleCount} people</p>
          </article>
          <button class="edit-btn">Edit</button>
          <button class="continue-btn">Continue</button>`;

        const editBtn = li.querySelector('.edit-btn')
        const continueBtn = li.querySelector('.continue-btn')
        editBtn.addEventListener('click', toEdit);
        continueBtn.addEventListener('click', toContinue);

        lists.info.appendChild(li);

        nextBtn.disabled = true;

        input.firstName.value = '';
        input.lastName.value = '';
        input.dateIn.value = '';
        input.dateOut.value = '';
        input.peopleCount.value = '';

        function toEdit() {
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.dateIn.value = dateIn;
            input.dateOut.value = dateOut;
            input.peopleCount.value = peopleCount;

            nextBtn.disabled = false;

            li.remove()
        };

        function toContinue() {
            lists.confirm.appendChild(li);
            editBtn.remove();
            continueBtn.remove();
            li.innerHTML += `<button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>`

            const confirm = li.querySelector('.confirm-btn')
            const cancel = li.querySelector('.cancel-btn')
            confirm.addEventListener('click', confirmEvent);
            cancel.addEventListener('click', cancelEvent);
            const verification = document.getElementById('verification')

            function confirmEvent() {
                li.remove();
                nextBtn.disabled = false;
                verification.textContent = 'Confirmed';
                verification.setAttribute('class', 'reservation-confirmed');
                
            }

            function cancelEvent() {
                li.remove();
                nextBtn.disabled = false;
                verification.textContent = 'Cancelled';
                verification.setAttribute('class', 'reservation-cancelled');
            }
        };
    }
}