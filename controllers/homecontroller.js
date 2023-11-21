const Project = require('../models/projects');

// Render home page with list of projects 
module.exports.home = async function (req, res) {
  let projects = await Project.find({});

  return res.render('home', {
    title: 'Home',
    projects: projects,
  });
};
