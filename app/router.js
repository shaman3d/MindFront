import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mind-день-из-жизни-l');
  this.route('i-i-s-mind-день-из-жизни-e',
  { path: 'i-i-s-mind-день-из-жизни-e/:id' });
  this.route('i-i-s-mind-день-из-жизни-e.new',
  { path: 'i-i-s-mind-день-из-жизни-e/new' });
  this.route('i-i-s-mind-моя-жизнь-l');
  this.route('i-i-s-mind-моя-жизнь-e',
  { path: 'i-i-s-mind-моя-жизнь-e/:id' });
  this.route('i-i-s-mind-моя-жизнь-e.new',
  { path: 'i-i-s-mind-моя-жизнь-e/new' });
  this.route('i-i-s-mind-привычка-l');
  this.route('i-i-s-mind-привычка-e',
  { path: 'i-i-s-mind-привычка-e/:id' });
  this.route('i-i-s-mind-привычка-e.new',
  { path: 'i-i-s-mind-привычка-e/new' });
});

export default Router;
