import restful from 'node-restful';
const mongoose = restful.mongoose;
import { questionSchema, Question } from './question';
export {
    questionSchema,
    Question,
    connect,

}
function connect(uri){
    mongoose.connect(uri);
    // plug in the promise library:
    mongoose.Promise = global.Promise;


    mongoose.connection.on('error', (err) => {
        console.error(`Mongoose connection error: ${err}`);
        process.exit(1);
    });
};
