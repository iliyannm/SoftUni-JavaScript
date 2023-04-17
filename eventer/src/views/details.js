import { deleteEvent, getEventById } from '../api/events.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (ev, isOwner, loggedUser, onDelete) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${ev.imageUrl}" alt="example1" />
            <p id="details-title">${ev.name}</p>
            <p id="details-category">
              Category: <span id="categories">${ev.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${ev.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span
                  >${ev.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">0</span> times.</h3>

            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${ev._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="#" id="delete-btn">Delete</a>
            </div>`
                : ''}
            
            ${!isOwner && loggedUser ? html`<a href="" id="go-btn">Going</a>` : ''}


          </div>
        </section>`;

export async function detailsView(ctx) {
    const ev = await getEventById(ctx.params.id);
    const userData = getUserData();
    let loggedUser = false;
    if (userData != undefined) {
      loggedUser = true;
    }
    const isOwner = userData?.id == ev._ownerId;

    ctx.render(detailsTemplate(ev, isOwner, loggedUser, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this event?');

        if (choice) {
            await deleteEvent(ctx.params.id);
            ctx.page.redirect('/events');
        }
    }
}