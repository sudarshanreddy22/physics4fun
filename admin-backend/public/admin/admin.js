const API = '/api';
let TOKEN = sessionStorage.getItem('p4f_token') || '';
let EDIT_ID = null;

const SUBTYPES = {
  descriptive: [['2marks', '2 Marks'], ['3marks', '3 Marks'], ['case', 'Case-Based']],
  objective: [['mcq', 'MCQ'], ['tof', 'True/False'], ['fib', 'Fill in Blanks'], ['match', 'Matching']],
  pyq: [['mcq', 'MCQ'], ['ar', 'Assertion-Reason'], ['2', '2 Marks'], ['3', '3 Marks'], ['4', '4 Marks'], ['5', '5 Marks']]
};

const $ = id => document.getElementById(id);

function authHeaders(extra) {
  return Object.assign({ Authorization: 'Bearer ' + TOKEN }, extra || {});
}

async function authFetch(url, opts = {}) {
  opts.headers = authHeaders(opts.headers);
  const res = await fetch(API + url, opts);
  if (res.status === 401) { logout(); throw new Error('Session expired, please log in again'); }
  return res;
}

function showDashboard(user) {
  $('loginScreen').classList.add('hidden');
  $('dashboard').classList.remove('hidden');
  $('whoami').textContent = user.name + ' (' + user.role + ')';
  populateSubtypes();
}

function logout() {
  TOKEN = ''; sessionStorage.removeItem('p4f_token'); sessionStorage.removeItem('p4f_user');
  $('dashboard').classList.add('hidden');
  $('loginScreen').classList.remove('hidden');
}

/* ── LOGIN ── */
$('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  $('loginError').textContent = '';
  try {
    const res = await fetch(API + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: $('loginUsername').value, password: $('loginPassword').value })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Login failed');
    TOKEN = data.token;
    sessionStorage.setItem('p4f_token', TOKEN);
    sessionStorage.setItem('p4f_user', JSON.stringify(data.user));
    showDashboard(data.user);
  } catch (err) {
    $('loginError').textContent = err.message;
  }
});

$('logoutBtn').addEventListener('click', logout);

/* ── SUBTYPE DROPDOWN ── */
function populateSubtypes() {
  const section = $('fSection').value;
  const sel = $('fSubtype');
  sel.innerHTML = SUBTYPES[section].map(([v, label]) => `<option value="${v}">${label}</option>`).join('');
}
$('fSection').addEventListener('change', populateSubtypes);

/* ── LOAD QUESTIONS ── */
$('loadBtn').addEventListener('click', loadQuestions);

function currentFilter() {
  return {
    board: $('fBoard').value,
    grade: $('fGrade').value.trim(),
    chapterSlug: $('fChapterSlug').value.trim(),
    section: $('fSection').value,
    subtype: $('fSubtype').value
  };
}

async function loadQuestions() {
  const f = currentFilter();
  if (!f.grade || !f.chapterSlug) { alert('Enter Grade and Chapter Slug first'); return; }
  const qs = new URLSearchParams(f).toString();
  const res = await authFetch('/questions?' + qs);
  const data = await res.json();
  $('countLabel').textContent = '(' + data.total + ')';
  renderList(data.items);
}

function renderList(items) {
  const wrap = $('qList');
  if (!items.length) { wrap.innerHTML = '<p class="hint">No questions found for this filter.</p>'; return; }
  wrap.innerHTML = items.map(q => `
    <div class="q-item">
      <div>
        <div class="q-text">${escapeHtml(q.question)}</div>
        <div class="q-meta">${q.subtype}${q.marks ? ' · ' + q.marks + ' marks' : ''}${q.answer ? ' · Ans: ' + escapeHtml(String(q.answer)) : ''}</div>
      </div>
      <div class="q-actions">
        <button onclick='editQuestion(${JSON.stringify(JSON.stringify(q))})'>Edit</button>
        <button class="del" onclick="deleteQuestion('${q._id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ── SINGLE ADD / EDIT ── */
function editQuestion(jsonStr) {
  const q = JSON.parse(jsonStr);
  EDIT_ID = q._id;
  $('qQuestion').value = q.question || '';
  $('qOptA').value = (q.options && q.options[0] && q.options[0].text) || '';
  $('qOptB').value = (q.options && q.options[1] && q.options[1].text) || '';
  $('qOptC').value = (q.options && q.options[2] && q.options[2].text) || '';
  $('qOptD').value = (q.options && q.options[3] && q.options[3].text) || '';
  $('qAnswer').value = q.answer || '';
  $('qMarks').value = q.marks || '';
  $('qExplanation').value = q.explanation || '';
  $('qAssertion').value = q.assertion || '';
  $('qReason').value = q.reason || '';
  window.scrollTo({ top: $('singleForm').getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
}

async function deleteQuestion(id) {
  if (!confirm('Delete this question?')) return;
  await authFetch('/questions/' + id, { method: 'DELETE' });
  loadQuestions();
}

$('singleForm').addEventListener('submit', async e => {
  e.preventDefault();
  const f = currentFilter();
  if (!f.grade || !f.chapterSlug) { $('singleMsg').textContent = 'Select Grade and Chapter Slug above first.'; return; }

  const options = [$('qOptA').value, $('qOptB').value, $('qOptC').value, $('qOptD').value]
    .map((t, i) => t ? { key: 'ABCD'[i], text: t } : null)
    .filter(Boolean);

  const body = {
    ...f,
    chapterName: $('fChapterName').value.trim() || undefined,
    question: $('qQuestion').value,
    options: options.length ? options : undefined,
    answer: $('qAnswer').value || undefined,
    marks: $('qMarks').value ? Number($('qMarks').value) : undefined,
    explanation: $('qExplanation').value || undefined,
    assertion: $('qAssertion').value || undefined,
    reason: $('qReason').value || undefined
  };

  const url = EDIT_ID ? '/questions/' + EDIT_ID : '/questions';
  const method = EDIT_ID ? 'PUT' : 'POST';
  const res = await authFetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await res.json();
  if (!res.ok) { $('singleMsg').textContent = data.error || 'Failed to save'; return; }

  $('singleMsg').textContent = EDIT_ID ? 'Updated ✔' : 'Added ✔';
  EDIT_ID = null;
  e.target.reset();
  loadQuestions();
});

/* ── BULK DELETE ── */
$('bulkDeleteBtn').addEventListener('click', async () => {
  const f = currentFilter();
  if (!f.grade || !f.chapterSlug) { alert('Select Grade and Chapter Slug above first'); return; }
  if (!confirm(`Delete ALL "${f.subtype}" questions for ${f.board} grade ${f.grade} / ${f.chapterSlug}? This cannot be undone.`)) return;

  const res = await authFetch('/questions', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
  const data = await res.json();
  alert('Deleted: ' + data.deletedCount);
  loadQuestions();
});

/* ── BULK IMPORT ── */
$('bulkUploadBtn').addEventListener('click', async () => {
  const file = $('bulkFile').files[0];
  if (!file) { alert('Choose a file first'); return; }
  const f = currentFilter();

  const fd = new FormData();
  fd.append('file', file);
  fd.append('board', f.board);
  fd.append('grade', f.grade);
  fd.append('chapterSlug', f.chapterSlug);
  fd.append('chapterName', $('fChapterName').value.trim());
  fd.append('section', f.section);
  fd.append('subtype', f.subtype);

  $('bulkResult').textContent = 'Uploading…';
  const res = await authFetch('/questions/bulk-import', { method: 'POST', body: fd });
  const data = await res.json();
  $('bulkResult').textContent = JSON.stringify(data, null, 2);
  loadQuestions();
});

/* ── INIT ── */
(function init() {
  const savedUser = sessionStorage.getItem('p4f_user');
  if (TOKEN && savedUser) showDashboard(JSON.parse(savedUser));
})();
