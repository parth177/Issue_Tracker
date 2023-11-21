const Project = require('../models/projects');
const Issue = require('../models/issue');


// create new Project
module.exports.create = async function (req, res) {
  try {
    let project = await Project.create(req.body);
    if (project) {
      console.log(project);
      return res.redirect('back');
    }
  } catch (e) {
    console.log('err', e);
  }
};

//delete project using project id

module.exports.delete = async function (req, res) {
  try {
    let project = await Project.findById(req.params.id);
    project.deleteOne();
    return res.redirect('back');
  } catch (e) {
    console.log('err', e);
  }
};


// view issues of specific projects
module.exports.viewIssue = async function (req, res) {
  try {
    let project = await Project.findById(req.params.id);
    let issues = await Issue.find({
      project: req.params.id,
    }).sort({ createdAt: 'desc' });
    console.log(issues);

    return res.render('issues', {
      title: 'Issues',
      project: project,
      issues: issues,
    });
  } catch (e) {
    console.log(e);
  }
};
