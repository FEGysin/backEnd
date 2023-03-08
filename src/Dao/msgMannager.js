import MsgModel from "../models/message.model";
class MsgMannager {
  constructor() {
    this.messages = [];
  }
  addMsg = () => {
    return MsgModel.create(user, message);
  };
  getMgs = () => {
    return MsgModel.find({});
  };
}
const MsgManager = new MsgMannager();
export default MsgManager;
