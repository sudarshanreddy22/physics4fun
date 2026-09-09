# Physics4Fun — Teacher Admin Backend

Node.js + Express + MongoDB backend for managing question content (MCQs, 2-marks,
3-marks, case-based, PYQs, etc.) per **board → grade → chapter → section**, with
real server-side teacher login and single or bulk Excel/JSON add & delete.

## 1. Install & configure

```bash
cd admin-backend
npm install
cp .env.example .env        # then edit MONGO_URI and JWT_SECRET
```

## 2. Create your first teacher account

There's no public sign-up route on purpose — accounts are created from the server:

```bash
node scripts/seedTeacher.js myteacher "StrongPass123" "Mrs. Sharma" admin
```
(last argument `admin` is optional — admins can also create more teacher accounts
via `POST /api/auth/teachers`; leave it off for a normal `teacher` account.)

## 3. Run it

```bash
npm start          # or: npm run dev  (auto-restart)
```

Admin panel: **http://localhost:4000/admin**
API base: **http://localhost:4000/api**

## How content is organised

Every question-type document has:
`board, grade, chapterSlug, section (descriptive/objective/pyq), subtype`

- **descriptive** → `2marks`, `3marks`, `case`
- **objective** → `mcq`, `tof`, `fib`, `match`
- **pyq** → `mcq`, `ar`, `2`, `3`, `4`, `5`

This mirrors your site's `boards/{board}/grade{N}/{chapterSlug}/...` folder layout.

## API summary (all except `/auth/login` require `Authorization: Bearer <token>`)

| Method | Route | Purpose |
|---|---|---|
| POST | `/api/auth/login` | Teacher login → JWT |
| POST | `/api/auth/teachers` | (admin only) create a teacher account |
| GET | `/api/questions?board=&grade=&chapterSlug=&section=&subtype=` | List/filter |
| POST | `/api/questions` | Add one question |
| PUT | `/api/questions/:id` | Edit one |
| DELETE | `/api/questions/:id` | Delete one |
| DELETE | `/api/questions` | Bulk delete — body `{ids:[...]}` or full filter |
| POST | `/api/questions/bulk-import` | Bulk add/update from an uploaded `.xlsx` / `.csv` / `.json` file |

### Bulk import file format

Recognised columns (case-insensitive; any left blank in the file fall back to the
board/grade/chapter/section/subtype chosen in the admin panel):

`board, grade, chapterSlug, chapterName, section, subtype (or "type"), question, optionA, optionB, optionC, optionD, answer, explanation, marks, assertion, reason, order`

See `sample-import.json` and `sample-import.csv` in this folder for ready-to-edit
templates. Re-uploading the same file updates existing questions instead of
duplicating them (matched on board+grade+chapter+section+subtype+question text).

## Next step (optional)

The live site (`topics-c12.html`) currently loads each chapter's questions from
static `.js` files. To make the admin panel's changes show up there instantly,
its `loadDesc()` / `loadObjective()` / PYQ loaders would need to fetch from
`GET /api/questions?...` instead of injecting `<script src="...descriptive.js">`.
That's a separate change to the front-end file — say the word and I'll wire it up.
