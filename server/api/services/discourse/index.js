import Conversation from '../conversation';
import handleDiscourse from './discourse.handler';

class DiscourseService {
  message({
    input,
    context
  }) {
    return Conversation
      .message({input, context})
      .flatMap(handleDiscourse);
  }
}
const service = new DiscourseService();
export default service;