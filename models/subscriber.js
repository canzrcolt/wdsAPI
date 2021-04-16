import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subscribedToChannel: {
    type: String,
    require: true,
  },
  subscribeDate: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;
