import { getAllEvents } from '../api/events.js';
import { html } from '../lib.js'

const catalogTemplate = (events) => html`
<h2>Current Events</h2>
<section id="dashboard">
        ${events.length == 0 
        ? html`<h4>No Events yet.</h4>`
        : events.map(eventCard)}		
	</div>
</section> `;

const eventCard = (event) => html`
<div class="event">
            <img src="${event.imageUrl}" alt="example1" />
            <p class="title">
              ${event.name}
            </p>
            <p class="date">${event.date}</p>
            <a class="details-btn" href="/events/${event._id}">Details</a>
</div>`;

export async function catalogView(ctx) {
    const events = await getAllEvents();

    ctx.render(catalogTemplate(events));
}