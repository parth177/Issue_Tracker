const Issue = require('../models/issue');

// for create new issue/Bug  and store in mongoDB
module.exports.create = async function (req, res) {
  try {
    // console.log(req.body);
    let issues = await Issue.create(req.body);
    let labels;

    if (req.xhr) {
      return res.status(200).json({
        data: {
          issue: issues,
        },
      });
    }
  } catch (e) {
    console.log('err', e);
  }
};

//Filter issue based on author, title and lables
module.exports.filter = async function (req, res) {
  console.log(req.body);
  const { author, title, labels } = req.body;
  console.log(author);
  try {
    const query = {};
    if (author) {
      query.author = author;
    }
    if (title) {
      query.$or = [
        { title: { $regex: title } },
        { description: { $regex: title } },
      ];
    }
    if (labels) {
      query.labels = { $in: labels };
    }
    console.log(query);
    const filterRec = await Issue.find(query);
    return res.status(200).json({
      data: {
        issue: filterRec,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

// Delete issue  using issue ID
module.exports.delete = async function (req, res) {
  try {
    let issue = await Issue.findById(req.params.id);
    issue.deleteOne();
    return res.redirect('back');
  } catch (e) {
    console.log('err', e);
  }
};
