import mongoose, {Schema, Document} from 'mongoose';    

export interface IUser extends Document {
    email: string;
    username: string;
    password: string;
}

const UserSchema : Schema <IUser> = new Schema({
username: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
},
})
export default mongoose.models.User as mongoose.Model<IUser> || mongoose.model<IUser>('User', UserSchema);