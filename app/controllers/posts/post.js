import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    editPost(post){
      this.set('isEditing', true);
    },
    savePost(post){
      post.save();
      this.set('isEditing',false);
    }
  }
});