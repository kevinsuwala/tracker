const Session = require('../models').sessions;

module.exports = {
  create(req, res) {
    return Session
      .create({
        UserId: req.body.userId,
        description: req.body.description,
        endTime: req.body.endTime,
        startTime: req.body.startTime,
      })
      .then((session) => res.status(201).send(session))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Session
      .findAll({
      })
      .then((sessions) => res.status(200).send(sessions))
      .catch((error) => { console.log(error) && res.status(400).send(error)});
  },

  retrieve(req, res) {
    return Session
      .findById(req.params.sessionId, {
      })
      .then((session) => {
        if (!session) {
          return res.status(404).send({
            message: 'Session Not Found',
          });
        }
        return res.status(200).send(session);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Session
      .findById(req.params.sessionId, {
      })
      .then(session => {
        if (!session) {
          return res.status(404).send({
            message: 'Session Not Found',
          });
        }
        return session
          .update({
            description: req.body.description || session.description,
            endTime: req.body.endTime || session.endTime,
            startTime: req.body.startTime || session.startTime,
          })
          .then(() => res.status(200).send(session))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Session
      .findById(req.params.sessionId)
      .then(session => {
        if (!session) {
          return res.status(400).send({
            message: 'Session Not Found',
          });
        }
        return session
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

