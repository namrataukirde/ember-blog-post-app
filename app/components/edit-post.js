import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  actions: {
    editPost(post){
      this.set('isEditing', true);
      this.set('newTitle', post.get('title'));
      this.set('newContent', post.get('content'));
    },
    savePost(post){
      post.set('title', this.get('newTitle'));
      post.set('content', this.get('newContent'));
      post.save();
      this.set('isEditing', false);
    },
    cancel(post){
      post.rollbackAttributes();
      this.set('isEditing', false);
    }
  }
});