import { createEvent } from '../api/events.js';
import { html } from '../lib.js'

const createTemplate = (onSubmit) => html`
        <section id="create">
          <div @submit=${onSubmit} class="form">
            <h2>Add Event</h2>
            <form class="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>`;

export function createView(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const ev = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'), 
            category: formData.get('category'), 
            description: formData.get('description'), 
            date: formData.get('date')
          } ;

        if (ev.name == '' || ev.imageUrl == '' || ev.category == '' || ev.description == '' || ev.date == '') {
            return alert('All fields are required!');
        }

        await createEvent(ev);
        event.target.reset();
        ctx.page.redirect('/events');
    }
}