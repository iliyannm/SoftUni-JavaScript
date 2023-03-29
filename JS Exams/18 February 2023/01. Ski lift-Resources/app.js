window.addEventListener('load', solve);

function solve() {
    const input = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count'),
    }

    const lists = {
        previewList: document.querySelector('.ticket-info-list'),
        confrimList: document.querySelector('.confirm-ticket')
    }

    const nextBtn = document.getElementById('next-btn')
    nextBtn.addEventListener('click', buyTicket);

    function buyTicket(event) {
        event.preventDefault();

        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const peopleCount = input.peopleCount.value;
        const fromDate = input.fromDate.value;
        const daysCount = input.daysCount.value;

        const li = document.createElement('li');
        li.className = 'ticket';
        li.innerHTML = `<article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${fromDate}</p>
        <p>For ${daysCount} days</p>
        <p>For ${peopleCount} people</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>`;

        const editBtn = li.querySelector('.edit-btn')
        const continueBtn = li.querySelector('.continue-btn')
        editBtn.addEventListener('click', editEvent);
        continueBtn.addEventListener('click', continueEvent);

        lists.previewList.appendChild(li);

        input.firstName.value = '';
        input.lastName.value = '';
        input.peopleCount.value = '';
        input.fromDate.value = '';
        input.daysCount.value = '';

        nextBtn.disabled = true;

        function editEvent() {
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.peopleCount.value = peopleCount;
            input.fromDate.value = fromDate;
            input.daysCount.value = daysCount;

            li.remove();

            nextBtn.disabled = false;
        }

        function continueEvent() {
            editBtn.remove();
            continueBtn.remove();
            li.innerHTML += `<button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>`
            lists.confrimList.appendChild(li);

            const confirm = li.querySelector('.confirm-btn')
            const cancel = li.querySelector('.cancel-btn')
            confirm.addEventListener('click', confirmEvent);
            cancel.addEventListener('click', cancelEvent);

            function confirmEvent() {
                nextBtn.disabled = false;
                li.remove();
                const body = document.getElementById('body');
                const main = document.getElementById('main');
                main.remove();
                body.innerHTML += `<h1 id="thank-you">Thank you, have a nice day!</h1>
                <button id="back-btn">Back</button>`

                const backBtn = document.getElementById('back-btn');
                backBtn.addEventListener('click', goBack);

                function goBack() {
                    body.innerHTML = ``;
                    body.innerHTML += main.innerHTML;
                }
            }

            function cancelEvent() {
                li.remove();
                nextBtn.disabled = false;
            }
        }
    }
}
