{
  console.log('ok');
  let createProject = function () {
    let newProjectForm = $('#new-project-form');
    console.log(newProjectForm);
    newProjectForm.submit(function (e) {
      alert('abc');
      e.preventDefault();
      $.ajax({
        type: 'post',
        url: '/project/create',
        data: newProjectForm.serialize(),
        success: function (data) {
          console.log(data);
          // let newpost = createNewPostDom(data.data.post);
          // $('#posts-list-container>ul').prepend(newpost);
          // deletePost($(' .delete-post', newpost));
        },
        error: function (err) {},
      });
    });
  };
  createProject();
  // let createNewPostDom = function (post) {
  //   return `<li id="post-${post._id}">
  //   <p>

  //     <small>
  //       <a class="delete-post" href="/posts/destroy/${post._id}">X</a>
  //     </small>
  //      ${post.content}
  //     <br />
  //     <small> ${post.user.name} </small>
  //   </p>
  //   <div class="post-comments">

  //     <form action="/comments/create" method="POST">
  //       <input
  //         type="text"
  //         name="content"
  //         placeholder="Type Here to add comment..."
  //         required
  //       />
  //       <input type="hidden" name="post" value="${post._id}" />
  //       <input type="submit" value="Add Comment" />
  //     </form>
  //   </div>
  // </li>
  // `;
  // };
}
