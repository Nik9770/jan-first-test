/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((user) => {
    if (user.profession === "developer") {
      console.log(user.name);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((user) => {
    if (user.profession === "developer") {
      console.log(user.name);
    }
  });
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  let newArr = arr.filter((user) => {
    return user.profession !== "admin";
  });
  console.log(newArr);
}

function concatenateArray() {
  let arr2 = [
    { id: 4, name: "vaibhav", age: "27", profession: "employee" },
    { id: 5, name: "tanuj", age: "25", profession: "entrepreneur" },
    { id: 6, name: "ashu", age: "24", profession: "broker" },
  ];
  let newArr = arr.concat(arr2);
  console.log(newArr);
}
