import { html } from '../lib.js'
import { getEventById } from '../api/events.js'
import { updateEvent } from '../api/events.js';


const editTemplate = (ev, onSubmit) => html`
        <section id="edit">
          <div @submit=${onSubmit} class="form">
            <h2>Edit Event</h2>
            <form class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
                .value=${ev.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
                .value=${ev.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
                .value=${ev.category}
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
                .value=${ev.description}
              ></textarea>
              
              <label for="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
              .value=${ev.date}
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>`;

export async function editView(ctx) {
    const ev = await getEventById(ctx.params.id);
    ctx.render(editTemplate(ev, onSubmit));

    async function onSubmit(event) {
        console.log('here');
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

        await updateEvent(ctx.params.id, ev);
        event.target.reset();
        ctx.page.redirect('/events/' + ctx.params.id);
    }
}