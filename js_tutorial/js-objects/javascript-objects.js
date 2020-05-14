/*Write a function to create a user object from the arguments given.
Take the following details as an argument: name, email, age and phone number*/

let classOfObjects = {
  class: "Class A",
  teacher: "Mary",
  students: [
    {
      name: "Arjun",
      age: 36,
      id: 04,
      marks: [
        { Subject: "English", marks: 45 },
        { Subject: "Mathematics", marks: 48 },
        { Subject: "Physics", marks: 39 },
        { Subject: "Computer", marks: 46 },
        { Subject: "Chemistry", marks: 40 },
      ],
    },
    {
      name: "Akhil",
      age: 45,
      id: 05,
      marks: [
        { Subject: "English", marks: 43 },
        { Subject: "Mathematics", marks: 40 },
        { Subject: "Physics", marks: 39 },
        { Subject: "Computer", marks: 48 },
        { Subject: "Chemistry", marks: 41 },
      ],
    },
    {
      name: "Armaan",
      age: 13,
      id: 06,
      marks: [
        { Subject: "English", marks: 32 },
        { Subject: "Mathematics", marks: 17 },
        { Subject: "Physics", marks: 98 },
        { Subject: "Computer", marks: 65 },
        { Subject: "Chemistry", marks: 23 },
      ],
    },
    {
      name: "Don",
      age: 34,
      id: 07,
      marks: [
        { Subject: "English", marks: 56 },
        { Subject: "Mathematics", marks: 32 },
        { Subject: "Physics", marks: 45 },
        { Subject: "Computer", marks: 12 },
        { Subject: "Chemistry", marks: 67 },
      ],
    },
  ],
};

//1. Add student - It should accept name, id
const addStudent = (studentName ,studentID ) => {
  classOfObjects.students.push({name: studentName, id: studentID});
  return classOfObjects;
}
    
console.log(addStudent("Armaan" ,06));
//2. Enter mark for a student
const addStudentMark = (data) => {
  for (let i = 0; i < classOfObjects.students.length; i++) {
    if (classOfObjects.students[i].id === data.id) {
      classOfObjects.students[i].marks.push({Subject: data.Subject,marks: data.marks});
    }
  }
  return classOfObjects.students[0].marks;
}

console.log(addStudentMark({id: 04 ,Subject: "Malayalam" ,marks: 44}));
//3. Enter mark for a subject for multiple students

const addMultipleStudentMarks = (element) => {
  for (let i = 0; i < classOfObjects.students.length; i++) {
    if (classOfObjects.students[i].id === element.id) {
      classOfObjects.students[i].marks.push({Subject: element.Subject ,marks: element.marks});
    }
  }
  return classOfObjects.students[1].marks
}

console.log(addMultipleStudentMarks({id: 05 ,Subject: "Malayalam" ,marks: 43}));

let arrayOfObjects = [{id: 04 ,Subject: "Malayalam" ,marks: 45} ,{id: 05 ,Subject: "Malayalam" ,marks: 43}];
for (let j = 0; j < arrayOfObjects.length; j++) {
  addMultipleStudentMarks(arrayOfObjects[j]);
}
//4. Edit mark for a particular subject of a student
const editMarkOfSubject = (details) => {
  for (let i = 0; i < classOfObjects.students.length; i++) {
    if (classOfObjects.students[i].id === details.id) {
      for (let j = 0; j < classOfObjects.students[i].marks.length; j++) {
        if (classOfObjects.students[i].marks[j].Subject === details.Subject) {
          classOfObjects.students[i].marks[j].marks = details.marks;
        }
      }
    }
  }
  return classOfObjects.students[0].marks;
};

console.log(editMarkOfSubject({ id: 04, Subject: "Mathematics", marks: 32 }));
//5. Change the class teacher of a class
const changeClassTeacher = (data) => {
  classOfObjects.teacher = data.teacher;
  return classOfObjects;
}

console.log(changeClassTeacher({teacher: "Ann"}));
//6. Remove a student from a class
const removeStudent = (Element) => {
  for (let i = 0; i < classOfObjects.students.length; i++) {
    if (classOfObjects.students[i].id === Element.id) {
      classOfObjects.students.splice(i ,1);
    }
  }
  return classOfObjects;
}

console.log(removeStudent({id: 05}));
//7. Delete a subject entry from every students
const deleteSubjectForAllStudent = (details) => {
  for (let i = 0; i < classOfObjects.students.length; i++) {
    if (classOfObjects.students[i].id === details.id) {
      for (let k = 0; k < classOfObjects.students[i].marks.length; k++) {
        if (classOfObjects.students[i].marks[k].Subject === details.Subject) {
          classOfObjects.students[i].marks.splice(k ,1);
        }
      }
    }
  }
  return classOfObjects.students[0].marks;
};

console.log(deleteSubjectForAllStudent({id: 04 ,Subject: "English"}));

let arrayOfObjects = [{id: 04 ,Subject: "English"} ,{id: 05 ,Subject: "English"}]
for(let j = 0; j < arrayOfObjects.length; j++) {
  deleteSubjectForAllStudent(arrayOfObjects[j]);
}
//8.  Find the topper of a class given a subject
const findTopperOfClass = (data) => {
  let greatest = -1;
  let name = "";
  for (let i = 0; i < classOfObjects.students.length; i++) {
    for (let k = 0; k < classOfObjects.students[i].marks.length; k++) {
      if (
        classOfObjects.students[i].marks[k].Subject === data &&
        greatest < classOfObjects.students[i].marks[k].marks
      ) {
        greatest = classOfObjects.students[i].marks[k].marks;
        name = classOfObjects.students[i].name;
      }
    }
  }
  return name;
};

console.log(findTopperOfClass("Computer"));
//9. Find the average mark for a given subject
const findTopperOfClass = (data) => {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < classOfObjects.students.length; i++) {
    for (let k = 0; k < classOfObjects.students[i].marks.length; k++) {
      if (classOfObjects.students[i].marks[k].Subject === data) {
        sum += classOfObjects.students[i].marks[k].marks;
        average = sum / classOfObjects.students.length;
      }
    }   
  }   
  return average;
}

console.log(`The average of the mark for the subject is ${findTopperOfClass("Mathematics")}`);
//10. Sort and display the list of students in any order - ordered by name, mark etc
//1.Sorting by name.
const sortByName = () => {
  return classOfObjects.students.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
console.log(sortByName());
//2.Sorting by marks.
let arrayOfNames = [];
const sortByMark = (data) => {
  for (let i = 0; i < classOfObjects.students.length; i++) {
    for (let j = 0; j < classOfObjects.students[i].marks.length; j++) {
      if (classOfObjects.students[i].marks[j].Subject === data) {
        arrayOfNames.push({
          name: classOfObjects.students[i].name,
          marks: classOfObjects.students[i].marks[j].marks,
        });
      }
    }
  }
  return arrayOfNames.sort(sorting = (a, b) => {
    return b.marks - a.marks;
  });
};
console.log(sortByMark("English"));
