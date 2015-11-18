import Ember from 'ember';
import TaskManagerInitializer from '../../../initializers/task-manager';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | task manager', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  TaskManagerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
