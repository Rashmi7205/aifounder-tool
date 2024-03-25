import mongoose from 'mongoose';
export const connectToDb = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL!);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (error:any) {
            console.log("Something Went wrong:",error.message) ;       
    }    
};