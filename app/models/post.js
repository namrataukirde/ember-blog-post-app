import DS from 'ember-data';
 
var Post = DS.Model.extend({
  title: DS.attr("string"),
  content: DS.attr("string")
});

Post.reopenClass({
  FIXTURES: [{
    id: 1,
    title: "hello",
    content: "How are you?"
  },
  {
    id: 2,
    title: "good",
    content: "you can do it."
  }]
});

export default Post;
