
  const mongoose = require('mongoose');
  mongoose.connect("mongodb://localhost:27017/fruitsDB");
  // or as an es module:
  // import { MongoClient } from 'mongodb'
  
  // Connection URL

  
  // Database Name
  
  main().catch(err => console.log(err));

async function main() {
  const fruitSchema = new mongoose.Schema ({

    name: {
      type: String,
      required: ["Please Check Your Data Entry ,No Name Specified"]
    },
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
    review: String

  });

  const Fruit = mongoose.model("Fruit",fruitSchema);
  const fruit = new Fruit ({
     rating: 10,
     review: "Peaches are so yummy"
  });

  //fruit.save();

 const personSchema = new mongoose.Schema ({

  name: String,
  age: Number,
  favouriteFruit: fruitSchema

});

const Person = mongoose.model("Person",personSchema);


const mango = new Fruit({
  name: "Mango",
  score: 4,
  review: "sweet Fruit"
});

mango.save();

Person.updateOne({name: "John"},{name: "Donalt"},{favouriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Successfully Update The DOcument");
  }
});


// const person = new Person ({
//    name: "Donalt",
//    age: 22,
//    favouriteFruit: pineapple
// });

// person.save();

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 2,
//   review: "pretty solid kiwi"
// });

// const orange = new Fruit ({
//   name: "Orange",
//   rating: 5,
//   review: "pretty solid orange"
// });

// const banana = new Fruit ({
//   name: "banana",
//   rating: 10,
//   review: "pretty solid banana"
// });

// // Fruit.insertMany([kiwi,orange,banana],function(err){
// //   if(err){
// //     console.log(err);
// //   }
// //   else{
// //     console.log("Successfully saved all fruits to fruitsDB");
// //   }
// // });

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }
  else{
    
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});


// Fruit.updateOne({_id:"628d058de3de22d80f24bc48"}, {name: "Peach"}, function(err){
//          if(err){
//            console.log(err);
//          }
//          else{
//            console.log("SUccessfully Inserted Document");
//          }
// });




// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log("Peach is Deleted Successfully");
//   }
// });


// Person.deleteMany({ name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("people delete successfully");
//   }

// } );









}
  

    


  
  
  
  
