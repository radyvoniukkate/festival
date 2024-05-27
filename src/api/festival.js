import axios from './index.js';

const BASE_URL = 'http://localhost:8080/festival';
const AUTH_URL = 'http://localhost:8080/auth';

export async function getAllParticipants() {
  try {
    const response = await axios.get(`${BASE_URL}/participants`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch participants: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getParticipantById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/participants/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch participant with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createParticipant(participant) {
  try {
    const response = await axios.post(`${BASE_URL}/participants`, participant);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create participant: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function updateParticipant(id, updatedParticipant) {
  try {
    const response = await axios.put(
      `${BASE_URL}/participants/${id}`,
      updatedParticipant
    );
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update participant with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteParticipant(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/participants/${id}`);
    return response.status === 204; // HTTP 204 No Content indicates successful deletion
  } catch (error) {
    throw new Error(
      `Failed to delete participant with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getAllTasks() {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch tasks: ${error.response?.statusText || error.message}`
    );
  }
}

export async function getTaskById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch task with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createTask(task) {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create task: ${error.response?.statusText || error.message}`
    );
  }
}

export async function updateTask(id, task) {
  try {
    const response = await axios.put(`${BASE_URL}/tasks/${id}`, task);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update task with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteTask(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/tasks/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete task with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getAllCriteria() {
  try {
    const response = await axios.get(`${BASE_URL}/criteria`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch criteria: ${error.response?.statusText || error.message}`
    );
  }
}

export async function getCriteriaById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/criteria/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch criteria with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createCriteria(criteria) {
  try {
    const response = await axios.post(`${BASE_URL}/criteria`, criteria);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create criteria: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function updateCriteria(id, criteria) {
  try {
    const response = await axios.put(`${BASE_URL}/criteria/${id}`, criteria);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update criteria with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteCriteria(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/criteria/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete criteria with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getAllJury() {
  try {
    const response = await axios.get(`${BASE_URL}/jury`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch jury members: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getJuryById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/jury/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch jury member with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createJury(jury) {
  try {
    const response = await axios.post(`${BASE_URL}/jury`, jury);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create jury member: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function updateJury(id, jury) {
  try {
    const response = await axios.put(`${BASE_URL}/jury/${id}`, jury);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update jury member with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteJury(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/jury/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete jury member with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getAllPrizes() {
  try {
    const response = await axios.get(`${BASE_URL}/prizes`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch prizes: ${error.response?.statusText || error.message}`
    );
  }
}

export async function getPrizeById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/prizes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch prize with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createPrize(prize) {
  try {
    const response = await axios.post(`${BASE_URL}/prizes`, prize);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create prize: ${error.response?.statusText || error.message}`
    );
  }
}

export async function updatePrize(id, prize) {
  try {
    const response = await axios.put(`${BASE_URL}/prizes/${id}`, prize);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update prize with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deletePrize(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/prizes/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete prize with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getHostById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/host/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch host with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createHost(host) {
  try {
    const response = await axios.post(`${BASE_URL}/host`, host);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create host: ${error.response?.statusText || error.message}`
    );
  }
}

export async function updateHost(id, host) {
  try {
    const response = await axios.put(`${BASE_URL}/host/${id}`, host);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update host with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteHost(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/host/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete host with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}
export async function getAllRequisites() {
  try {
    const response = await axios.get(`${BASE_URL}/requisites`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch requisites: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getRequisitesById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/requisites/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch requisites with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createRequisites(requisites) {
  try {
    const response = await axios.post(`${BASE_URL}/requisites`, requisites);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create requisites: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function updateRequisites(id, requisites) {
  try {
    const response = await axios.put(
      `${BASE_URL}/requisites/${id}`,
      requisites
    );
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update requisites with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteRequisites(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/requisites/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete requisites with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getAllEquipment() {
  try {
    const response = await axios.get(`${BASE_URL}/equipment`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch equipment: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getEquipmentById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/equipment/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch equipment with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createEquipment(equipment) {
  try {
    const response = await axios.post(`${BASE_URL}/equipment`, equipment);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create equipment: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function updateEquipment(id, equipment) {
  try {
    const response = await axios.put(`${BASE_URL}/equipment/${id}`, equipment);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update equipment with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteEquipment(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/equipment/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete equipment with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}
export async function getAllVenues() {
  try {
    const response = await axios.get(`${BASE_URL}/venue`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch venues: ${error.response?.statusText || error.message}`
    );
  }
}

export async function getVenueById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/venue/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch venue with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createVenue(venue) {
  try {
    const response = await axios.post(`${BASE_URL}/venue`, venue);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create venue: ${error.response?.statusText || error.message}`
    );
  }
}

export async function updateVenue(id, venue) {
  try {
    const response = await axios.put(`${BASE_URL}/venue/${id}`, venue);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update venue with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteVenue(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/venue/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete venue with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function getAllAudience() {
  try {
    const response = await axios.get(`${BASE_URL}/audience`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch audience: ${error.response?.statusText || error.message}`
    );
  }
}

export async function getAudienceById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/audience/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to fetch audience with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function createAudience(audience) {
  try {
    const response = await axios.post(`${BASE_URL}/audience`, audience);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to create audience: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function updateAudience(id, audience) {
  try {
    const response = await axios.put(`${BASE_URL}/audience/${id}`, audience);
    return response.data;
  } catch (error) {
    throw new Error(
      `Failed to update audience with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}

export async function deleteAudience(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/audience/${id}`);
    return response.status === 204;
  } catch (error) {
    throw new Error(
      `Failed to delete audience with ID ${id}: ${
        error.response?.statusText || error.message
      }`
    );
  }
}
export async function signUp(user) {
  try {
    const response = await fetch(`${AUTH_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.text();
  } catch (error) {
    throw new Error(`Failed to sign up user: ${error.message}`);
  }
}

export async function logIn(user) {
  try {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    throw new Error(`Failed to log in user: ${error.message}`);
  }
}

export async function exampleUsage() {
  try {
    // Sign up a new user
    let signUpResponse = await axios.post(`${AUTH_URL}/signup`, {
      username: 'newuser',
      password: 'password123',
    });
    console.log('Sign Up Response:', signUpResponse.data);

    // Log in the user
    let logInResponse = await axios.post(`${AUTH_URL}/login`, {
      username: 'newuser',
      password: 'password123',
    });
    console.log('Log In Response:', logInResponse.data);

    // Create a new participant
    let newParticipant = { name: 'Jane Doe', email: 'jane@example.com' };
    let createdParticipant = await createParticipant(newParticipant);
    console.log('Created Participant:', createdParticipant);

    // Get all participants
    let participants = await getAllParticipants();
    console.log('All Participants:', participants);

    // Get a participant by ID
    let participant = await getParticipantById(1);
    console.log('Participant with ID 1:', participant);

    // Update a participant
    let updatedParticipant = await updateParticipant(1, {
      name: 'Jane Doe Updated',
      email: 'jane_updated@example.com',
    });
    console.log('Updated Participant:', updatedParticipant);

    // Delete a participant
    let deleteResponse = await deleteParticipant(1);
    console.log('Delete Response:', deleteResponse);

    // Similarly, you can use other functions for tasks, criteria, jury, prizes, host, requisites, equipment, venue, and audience.
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function exampleTasksUsage() {
  try {
    // Create a new task
    let newTask = { name: 'New Task', description: 'Task description' };
    let createdTask = await axios.post(`${BASE_URL}/tasks`, newTask);
    console.log('Created Task:', createdTask.data);

    // Get all tasks
    let tasks = await axios.get(`${BASE_URL}/tasks`);
    console.log('All Tasks:', tasks.data);

    // Get a task by ID
    let task = await axios.get(`${BASE_URL}/tasks/1`);
    console.log('Task with ID 1:', task.data);

    // Update a task
    let updatedTask = await axios.put(`${BASE_URL}/tasks/1`, {
      name: 'Updated Task',
      description: 'Updated description',
    });
    console.log('Updated Task:', updatedTask.data);

    // Delete a task
    let deleteResponse = await axios.delete(`${BASE_URL}/tasks/1`);
    console.log('Delete Task Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with tasks:', error);
  }
}

export async function exampleCriteriaUsage() {
  try {
    // Create a new criteria
    let newCriteria = {
      name: 'New Criteria',
      description: 'Criteria description',
    };
    let createdCriteria = await axios.post(`${BASE_URL}/criteria`, newCriteria);
    console.log('Created Criteria:', createdCriteria.data);

    // Get all criteria
    let allCriteria = await axios.get(`${BASE_URL}/criteria`);
    console.log('All Criteria:', allCriteria.data);

    // Get criteria by ID
    let criteria = await axios.get(`${BASE_URL}/criteria/1`);
    console.log('Criteria with ID 1:', criteria.data);

    // Update criteria
    let updatedCriteria = await axios.put(`${BASE_URL}/criteria/1`, {
      name: 'Updated Criteria',
      description: 'Updated description',
    });
    console.log('Updated Criteria:', updatedCriteria.data);

    // Delete criteria
    let deleteResponse = await axios.delete(`${BASE_URL}/criteria/1`);
    console.log('Delete Criteria Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with criteria:', error);
  }
}

export async function examplePrizesUsage() {
  try {
    // Create a new prize
    let newPrize = { name: 'New Prize', description: 'Prize description' };
    let createdPrize = await axios.post(`${BASE_URL}/prizes`, newPrize);
    console.log('Created Prize:', createdPrize.data);

    // Get all prizes
    let prizes = await axios.get(`${BASE_URL}/prizes`);
    console.log('All Prizes:', prizes.data);

    // Get a prize by ID
    let prize = await axios.get(`${BASE_URL}/prizes/1`);
    console.log('Prize with ID 1:', prize.data);

    // Update a prize
    let updatedPrize = await axios.put(`${BASE_URL}/prizes/1`, {
      name: 'Updated Prize',
      description: 'Updated description',
    });
    console.log('Updated Prize:', updatedPrize.data);

    // Delete a prize
    let deleteResponse = await axios.delete(`${BASE_URL}/prizes/1`);
    console.log('Delete Prize Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with prizes:', error);
  }
}
export async function exampleHostUsage() {
  try {
    // Create a new host
    let newHost = { name: 'New Host', email: 'host@example.com' };
    let createdHost = await axios.post(`${BASE_URL}/host`, newHost);
    console.log('Created Host:', createdHost.data);

    // Get a host by ID
    let host = await axios.get(`${BASE_URL}/host/1`);
    console.log('Host with ID 1:', host.data);

    // Update a host
    let updatedHost = await axios.put(`${BASE_URL}/host/1`, {
      name: 'Updated Host',
      email: 'updated_host@example.com',
    });
    console.log('Updated Host:', updatedHost.data);

    // Delete a host
    let deleteResponse = await axios.delete(`${BASE_URL}/host/1`);
    console.log('Delete Host Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with host:', error);
  }
}

export async function exampleRequisitesUsage() {
  try {
    // Create a new requisites
    let newRequisites = {
      name: 'New Requisites',
      description: 'Requisites description',
    };
    let createdRequisites = await axios.post(
      `${BASE_URL}/requisites`,
      newRequisites
    );
    console.log('Created Requisites:', createdRequisites.data);

    // Get all requisites
    let requisites = await axios.get(`${BASE_URL}/requisites`);
    console.log('All Requisites:', requisites.data);

    // Get requisites by ID
    let requisite = await axios.get(`${BASE_URL}/requisites/1`);
    console.log('Requisites with ID 1:', requisite.data);

    // Update requisites
    let updatedRequisites = await axios.put(`${BASE_URL}/requisites/1`, {
      name: 'Updated Requisites',
      description: 'Updated description',
    });
    console.log('Updated Requisites:', updatedRequisites.data);

    // Delete requisites
    let deleteResponse = await axios.delete(`${BASE_URL}/requisites/1`);
    console.log('Delete Requisites Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with requisites:', error);
  }
}

export async function exampleEquipmentUsage() {
  try {
    // Create new equipment
    let newEquipment = {
      name: 'New Equipment',
      description: 'Equipment description',
    };
    let createdEquipment = await axios.post(
      `${BASE_URL}/equipment`,
      newEquipment
    );
    console.log('Created Equipment:', createdEquipment.data);

    // Get all equipment
    let equipment = await axios.get(`${BASE_URL}/equipment`);
    console.log('All Equipment:', equipment.data);

    // Get equipment by ID
    let equipmentItem = await axios.get(`${BASE_URL}/equipment/1`);
    console.log('Equipment with ID 1:', equipmentItem.data);

    // Update equipment
    let updatedEquipment = await axios.put(`${BASE_URL}/equipment/1`, {
      name: 'Updated Equipment',
      description: 'Updated description',
    });
    console.log('Updated Equipment:', updatedEquipment.data);

    // Delete equipment
    let deleteResponse = await axios.delete(`${BASE_URL}/equipment/1`);
    console.log('Delete Equipment Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with equipment:', error);
  }
}

export async function exampleVenueUsage() {
  try {
    // Create a new venue
    let newVenue = { name: 'New Venue', description: 'Venue description' };
    let createdVenue = await axios.post(`${BASE_URL}/venue`, newVenue);
    console.log('Created Venue:', createdVenue.data);

    // Get all venues
    let venues = await axios.get(`${BASE_URL}/venue`);
    console.log('All Venues:', venues.data);

    // Get a venue by ID
    let venue = await axios.get(`${BASE_URL}/venue/1`);
    console.log('Venue with ID 1:', venue.data);

    // Update a venue
    let updatedVenue = await axios.put(`${BASE_URL}/venue/1`, {
      name: 'Updated Venue',
      description: 'Updated description',
    });
    console.log('Updated Venue:', updatedVenue.data);

    // Delete a venue
    let deleteResponse = await axios.delete(`${BASE_URL}/venue/1`);
    console.log('Delete Venue Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with venue:', error);
  }
}

export async function exampleAudienceUsage() {
  try {
    // Create a new audience
    let newAudience = {
      name: 'New Audience',
      description: 'Audience description',
    };
    let createdAudience = await axios.post(`${BASE_URL}/audience`, newAudience);
    console.log('Created Audience:', createdAudience.data);

    // Get all audience
    let audiences = await axios.get(`${BASE_URL}/audience`);
    console.log('All Audience:', audiences.data);

    // Get audience by ID
    let audience = await axios.get(`${BASE_URL}/audience/1`);
    console.log('Audience with ID 1:', audience.data);

    // Update audience
    let updatedAudience = await axios.put(`${BASE_URL}/audience/1`, {
      name: 'Updated Audience',
      description: 'Updated description',
    });
    console.log('Updated Audience:', updatedAudience.data);

    // Delete audience
    let deleteResponse = await axios.delete(`${BASE_URL}/audience/1`);
    console.log('Delete Audience Response:', deleteResponse.data);
  } catch (error) {
    console.error('Error with audience:', error);
  }
}
