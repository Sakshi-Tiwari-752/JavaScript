  // ************************************** ARRAY PART 2 *********************************

  const my_name = ["Sakshi", "Aastha", "Aarti", "Rachna", "Swati"];
  const f_name = ["Vidhi", "Tanu", "Shashi", "Kashish"];

// combine 2 array
   my_name.push(f_name);
   console.log(my_name);    //output => ["Sakshi", "Aastha", "Aarti", "Rachna", "Swati", ["Vidhi", "Tanu", "Shashi", "Kashish"]] 
    console.log(my_name[0][5]);  //output => i
    console.log(my_name[5][3]);  //output => kashish
    console.log(my_name[3][4]);  //output => n


//  concat 2 arrays  (Combines two or more arrays. This method returns a new array without modifying any existing arrays)
 const all_name = my_name.concat(f_name);
  console.log(all_name);   // now all element of array (my_name and f_name) in a one array  output => ["Sakshi", "Aastha", "Aarti", "Rachna", "Swati", "Vidhi", "Tanu", "Shashi", "Kashish"]


// spread  (concat and spread operator are same both are perform same operation)
 const all_name1 = [...my_name, ...f_name];
 console.log(all_name1);


//  [.flat(depth) you can give infinity in the depth option it is automatically works]  (returns a new array with all sub- array elements concatenated into it recursively up to the specified depth)
const other_arr = [1, 2, 3, [5, 6], 8, 9, 0,[11, 34]];
const another_arr = other_arr.flat(Infinity);
console.log(another_arr);  //[1, 2, 3, 5, 6, 8, 9, 0, 11, 34]

 
// [.isArray()] CHECK ARRAY IS PRESENT OR NOT 
console.log (Array.isArray("sakshi"));  //output => false

// [.from()] it convert the value in the array
console.log(Array.from("sakshi"));    // output => ['s', 'a', 'k', 's', 'h', 'i']
console.log(Array.from({name: "sakshi"}));  //return empty array []


// [Array.of()] convert the variable in to the array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));   // output => [100, 200, 300]
