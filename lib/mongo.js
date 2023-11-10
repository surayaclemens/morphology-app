import mongoose from 'mongoose';
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(uri);
            console.log('db connected')
        }

    } catch(error) {
        console.log(error)
    }

}

export default connectDB;
