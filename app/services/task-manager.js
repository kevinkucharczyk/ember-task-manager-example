import Ember from 'ember';

export default Ember.Service.extend({
  tasks: null,

  alerter: null,
  monitor: null,

  init() {
    this._super(...arguments);
    this.set('tasks', Ember.A());
  },

  _taskStarted(task) {
    this.get('tasks').pushObject(task);
    if(this.get('monitor')) {
      this.get('monitor').addTask(task);
    }
  },

  _taskFinished(task) {
    task.set('finished', true);
    if(this.get('alerter')) {
      this.get('alerter').addAlert(task.get('alert'));
    }
  },

  addListener(type, component) {
    this.set(type, component);
    if(type === 'monitor' && component) {
      this.get('tasks').map(task => {
        component.addTask(task);
      });
    }
  },

  destroyListener(type) {
    this.set(type, null);
  },

  runTask(task) {
    this._taskStarted(task);
    task.run().then(() => {
      this._taskFinished(task);
    });
  }
});
