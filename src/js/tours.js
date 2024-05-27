import { createParticipant, createTask } from '../api/festival.js';

const BASE_URL = 'http://localhost:8080/festival';

document.addEventListener('DOMContentLoaded', function () {
  let isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  let currentParticipants = []; // Store currently displayed participants
  const logoutBtn = document.getElementById('logoutBtn');
  const loginLink = document.getElementById('loginLink');

  const updateButtonVisibility = () => {
    document
      .querySelectorAll('.editBtn, .deleteBtn, #addBtn')
      .forEach(button => {
        button.style.display = isAuthenticated ? 'inline-block' : 'none';
      });
  };

  if (loginLink && logoutBtn) {
    if (isAuthenticated) {
      loginLink.style.display = 'none';
      logoutBtn.style.display = 'block';
    }

    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('isAuthenticated');
      isAuthenticated = false;
      updateButtonVisibility();
      window.location.href = './index.html';
    });
  }

  const modal = document.getElementById('myModal');
  const btn = document.getElementById('addBtn');
  const span = document.getElementsByClassName('close')[0];
  const form = document.getElementById('createForm');
  const tableBody = document.querySelector('#participantsTable tbody');
  const sortBtnId = document.getElementById('sortBtnId');
  const sortBtnScore = document.getElementById('sortBtn');
  const sortBtnDate = document.getElementById('sortBtnDate');
  const tour1Btn = document.getElementById('tour1');
  const tour2Btn = document.getElementById('tour2');
  const tour3Btn = document.getElementById('tour3');
  let editMode = false;

  btn.onclick = function () {
    console.log('Open modal for adding participant');
    editMode = false;
    form.reset();
    document.getElementById('participantId').value = '';
    modal.style.display = 'block';
  };

  span.onclick = function () {
    console.log('Close modal');
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      console.log('Close modal on outside click');
      modal.style.display = 'none';
    }
  };

  const loadParticipants = () => {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    currentParticipants = participants;
    reloadTable(participants);
  };

  const addRowToTable = participant => {
    console.log('Adding row for participant:', participant);
    const row = document.createElement('tr');
    row.setAttribute('data-id', participant.id);
    row.innerHTML = `
            <td>${participant.id}</td>
            <td>${participant.name}</td>
            <td>${participant.email}</td>
            <td>${participant.task}</td>
            <td>${participant.averageScore}</td>
            <td>${participant.datetime}</td>
            <td class="action-buttons">
                <button class="editBtn" style="display: ${
                  isAuthenticated ? 'inline-block' : 'none'
                }">Редагувати</button>
                <button class="deleteBtn" style="display: ${
                  isAuthenticated ? 'inline-block' : 'none'
                }">Видалити</button>
            </td>
        `;
    tableBody.appendChild(row);

    row.querySelector('.editBtn').addEventListener('click', function () {
      if (isAuthenticated) {
        console.log('Edit participant:', participant);
        editMode = true;
        openEditModal(participant);
      }
    });

    row.querySelector('.deleteBtn').addEventListener('click', function () {
      if (isAuthenticated) {
        console.log('Delete participant:', participant.id);
        deleteParticipant(participant.id);
      }
    });
  };

  const getNextId = () => {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    return participants.length
      ? participants[participants.length - 1].id + 1
      : 1;
  };

  const saveParticipant = participant => {
    console.log('Save participant:', participant);
    let participants = JSON.parse(localStorage.getItem('participants')) || [];
    if (editMode) {
      participants = participants.map(p =>
        p.id === participant.id ? participant : p
      );
    } else {
      participant.id = getNextId();
      participants.push(participant);
    }
    localStorage.setItem('participants', JSON.stringify(participants));
  };

  const deleteParticipant = id => {
    console.log('Delete participant with id:', id);
    let participants = JSON.parse(localStorage.getItem('participants')) || [];
    participants = participants.filter(p => p.id !== id);
    localStorage.setItem('participants', JSON.stringify(participants));
    document.querySelector(`tr[data-id="${id}"]`).remove();
  };

  const openEditModal = participant => {
    console.log('Open edit modal for participant:', participant);
    document.getElementById('participantId').value = participant.id;
    document.getElementById('name').value = participant.name;
    document.getElementById('email').value = participant.email;
    document.getElementById('task').value = participant.task;
    const scores = participant.scores || [0, 0, 0, 0];
    document.getElementById('score1').value = scores[0];
    document.getElementById('score2').value = scores[1];
    document.getElementById('score3').value = scores[2];
    document.getElementById('score4').value = scores[3];
    document.getElementById('datetime').value = participant.datetime;
    modal.style.display = 'block';
  };

  form.onsubmit = function (event) {
    event.preventDefault();
    console.log('Form submitted');

    const id = parseInt(form.participantId.value, 10) || null;
    const score1 = parseFloat(form.score1.value);
    const score2 = parseFloat(form.score2.value);
    const score3 = parseFloat(form.score3.value);
    const score4 = parseFloat(form.score4.value);
    const averageScore = ((score1 + score2 + score3 + score4) / 4).toFixed(2);

    const participant = {
      id: id,
      name: form.name.value,
      email: form.email.value,
      task: form.task.value,
      averageScore: averageScore,
      datetime: form.datetime.value,
      scores: [score1, score2, score3, score4],
    };

    saveParticipant(participant);
    modal.style.display = 'none';
    form.reset();
    tableBody.innerHTML = '';
    loadParticipants();
  };

  const sortById = () => {
    console.log('Sort by ID');
    currentParticipants.sort((a, b) => a.id - b.id);
    reloadTable(currentParticipants);
  };

  const sortByScore = () => {
    console.log('Sort by score');
    currentParticipants.sort((a, b) => b.averageScore - a.averageScore);
    reloadTable(currentParticipants);
  };

  const sortByDate = () => {
    console.log('Sort by date');
    currentParticipants.sort(
      (a, b) => new Date(a.datetime) - new Date(b.datetime)
    );
    reloadTable(currentParticipants);
  };

  const reloadTable = participants => {
    console.log('Reload table with participants:', participants);
    tableBody.innerHTML = '';
    participants.forEach(participant => addRowToTable(participant));
    updateButtonVisibility();
  };

  sortBtnId.addEventListener('click', sortById);
  sortBtnScore.addEventListener('click', sortByScore);
  sortBtnDate.addEventListener('click', sortByDate);

  // Event handlers for tour buttons
  tour1Btn.addEventListener('click', () => {
    loadParticipants();
  });

  tour2Btn.addEventListener('click', () => {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    currentParticipants = participants.filter(p => p.averageScore > 5);
    localStorage.setItem(
      'tour2Participants',
      JSON.stringify(currentParticipants)
    ); // Save filtered participants for tour2
    reloadTable(currentParticipants);
  });

  tour3Btn.addEventListener('click', () => {
    const participants =
      JSON.parse(localStorage.getItem('tour2Participants')) || [];
    currentParticipants = participants.filter(p => p.averageScore > 7);
    localStorage.setItem(
      'tour3Participants',
      JSON.stringify(currentParticipants)
    ); // Save filtered participants for tour3
    reloadTable(currentParticipants);
  });

  loadParticipants();
  updateButtonVisibility(); // Ensure button visibility is updated on page load
});
