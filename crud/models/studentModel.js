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

const createDoc = async () => {
  try {
    const rahulDoc = new StudentModel({
      name: "rahul",
      age: 30,
      fees: 6000.6,
      hobbies: ["cricket", "dancing"],
      isActive: false,
      comments: [{ value: "Nice Post" }],
    });

    const sumanDoc = new StudentModel({
      name: "Suman",
      age: 34,
      fees: 7000.6,
      hobbies: ["coding", "cricket"],
      isActive: true,
      comments: [{ value: "Very interesting app" }],
    });

    // insertMany
    const result = await StudentModel.insertMany([rahulDoc, sumanDoc]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default createDoc;
