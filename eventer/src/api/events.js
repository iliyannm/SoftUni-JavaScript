import { get, post, del, put } from './api.js';

export async function getAllEvents() {
    return get('/data/events?sortBy=_createdOn%20desc');
}

export async function getEventById(id) {
    return get('/data/events/' + id)
}

export async function createEvent(event) {
    return post('/data/events', event);
}

export async function deleteEvent(id) {
    return del('/data/events/' + id);
}

export async function updateEvent(id, event) {
    return put('/data/events/' + id, event);
}