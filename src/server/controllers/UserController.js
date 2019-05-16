const User = require("../models/UserModel");
const cuid = require("cuid");
// const sanitizeHtml = require("sanitize-html");
// const slug = require("slug");

/*
 * Add a user
 * @param req
 * @param res
 * @returns void
 */
async function addUser(req, res) {
  const { name, surname, email, eventDate } = req.body;
  const id = cuid();
  if (!name || !surname || !email || !eventDate) {
    res.status(403).end();
  }

  const user = new User({
    id,
    name,
    surname,
    email,
    eventDate
  });

  // Sanitize inputs
  // user.name = sanitizeHtml(user.name);
  // user.surname = sanitizeHtml(user.surname);
  // user.email = sanitizeHtml(user.email);
  // user.eventDate = sanitizeHtml(user.eventDate);

  // user.slug = slug(user.name.toLowerCase(), { lowercase: true });
  user.cuid = cuid();
  user.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user: saved });
  });
}

/*
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
async function getUser(req, res) {
  User.findOne({ id: req.params.id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

/*
 * Delete user
 * @param req
 * @param res
 * @returns void
 */
async function deleteUser(req, res) {
  User.findOne({ id: req.params.id }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    user.remove(() => {
      res.status(200).end();
    });
  });
}

/* Edit user
 * @param req
 * @param res
 * @returns void
 */

async function editUser(req, res) {
  User.update({ id: req.params.id }, req.body.user).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}

module.exports = {
  addUser,
  getUser,
  deleteUser,
  editUser
};
