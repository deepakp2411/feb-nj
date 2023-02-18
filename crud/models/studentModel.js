import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  //   _id: Number,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 10,
    max: 50,
  },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000.5,
  },
  hobbies: {
    type: Array,
  },
  isActive: {
    type: Boolean,
  },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: {
    type: Date,
    default: Date.now,
  },
});

const StudentModel = mongoose.model("student", studentSchema);

// export default StudentModel;

// compiling new document

//

// const createDoc = async (nm, ag, fe, hob, isact, com) => {
//   try {
//     const studentDoc = new StudentModel({
//       name: nm,
//       age: ag,
//       fees: fe,
//       hobbies: hob,
//       isActive: isact,
//       comments: com,
//     });

//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const createDoc = async () => {
//   try {
//     const rahulDoc = new StudentModel({
//       name: "rahul",
//       age: 30,
//       fees: 6000.6,
//       hobbies: ["cricket", "dancing"],
//       isActive: false,
//       comments: [{ value: "Nice Post" }],
//     });

//     const sumanDoc = new StudentModel({
//       name: "Suman",
//       age: 34,
//       fees: 7000.6,
//       hobbies: ["coding", "cricket"],
//       isActive: true,
//       comments: [{ value: "Very interesting app" }],
//     });

//     // insertMany
//     const result = await StudentModel.insertMany([rahulDoc, sumanDoc]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default createDoc;



// Retrieve All Document 

const getAllDoc = async () => {
//    const result =  await StudentModel.find()
// //    console.log(result)
//    result.forEach((item) => {
//     console.log(item)

//    })


// retrieve only specific fields

// include -----------
// const result = await StudentModel.find().select('name age') // include
// const result = await StudentModel.find().select(['name','age']) // include
// const result = await StudentModel.find().select({name:1,hobbies:1}) // include

// exclude --------

// const result = await StudentModel.find().select('-name -comments') // exclude chhodkar
// const result = await StudentModel.find().select(['-name',-'age']) // exclude chhodkar
// const result = await StudentModel.find().select({name:0,age:0}) // exclude chhodkar


// include 

// const result = await StudentModel.find({} , 'name age')



// get single doc ------------- single ------

// const result = await StudentModel.findById("63edfbfd5b7e1093a24c35e7")

// only specific name and age
// const result = await StudentModel.findById("63edfbfd5b7e1093a24c35e7", 'name age')

// ---- Retrieve by field

// const result = await StudentModel.find({name:'Deepak'})
// const result = await StudentModel.find({age:20})
// const result = await StudentModel.find({name: 'Deepak'}).select('name age')

// ------- Limit Data ------- <

// const result = await StudentModel.find().limit(4)
// const result = await StudentModel.find({},null, {limit: 3})

// ---- skip Doc ---- >

// const result = await StudentModel.find().skip(1)
// const result = await StudentModel.find({},null,{skip: 2})

// --- Count Doc ---- >

// const result = await StudentModel.find().countDocuments()

// sort doc 
// const result = await StudentModel.find().sort({age:1}) /// increasing order
// const result = await StudentModel.find().sort({name:-1}) /// decreasing order


// Mix All Doc

// const result = await StudentModel.find().select('name age').sort({age:-1}).limit(2)
// const result = await StudentModel.find({}, {name: 1,age:1}, {limit: 1,sort: {age:-1}})

// comparison operator ------------- ***********

// const result = await StudentModel.find({age: {$gt: 31}})
// const result = await StudentModel.find({age: {$gte: 31}})
// const result = await StudentModel.find({age: {$lt: 21}})
// const result = await StudentModel.find({age: {$lte: 21}})
// const result = await StudentModel.find({age: {$ne: 21}})
// const result = await StudentModel.find({age: {$in: [21,20]}}) // including in array
// const result = await StudentModel.find({age: {$nin: [21,20]}}) // not in array

// Logical Operator -------- > *********

// const result = await StudentModel.find({$and: [{age: 21}, {fees:6500.50}]})
// const result = await StudentModel.find({$or: [{age: 20}, {fees:650.50}]})

const result = await StudentModel.find({$or : [{ age : {$gte: 34}}, {fees:700.6}]})




console.log(result)
}

export { getAllDoc }