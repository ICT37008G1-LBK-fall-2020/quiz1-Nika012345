let students1 = [
    { id: 1, name: 'nika', gpa: 2.7 },
    { id: 2, name: 'gio', gpa: 3.9 },
    { id: 3, name: 'kaxa', gpa: 2.9 },
    { id: 4, name: 'shota', gpa: 4 },
    { id: 5, name: 'goga', gpa: 3 },
    { id: 6, name: 'kaxa', gpa: 3.6 }
]
let students2 = [
    { id: 7, name: 'nika', gpa: 3.8 },
    { id: 8, name: 'gaga', gpa: 2.8 },
    { id: 9, name: 'tiko', gpa: 3.2 },
    { id: 10, name: 'ana', gpa: 4 },
    { id: 11, name: 'mari', gpa: 4 },
    { id: 12, name: 'nini', gpa: 2.6 },
    { id: 13, name: 'qeti', gpa: 3.5 },
    { id: 14, name: 'koba', gpa: 2.6 },
    { id: 15, name: 'zaura', gpa: 3.2 }
]

function getTopStudents(studentsArray1, studentsArray2) {
    const sortedStudents = [...studentsArray1, ...studentsArray2].sort((st1, st2) => st2.gpa - st1.gpa);
    const minGpa = sortedStudents[4].gpa;
    let topStudents = [];
    for (let i = 0; i < sortedStudents.length; i++) {
        if (sortedStudents[i].gpa >= minGpa) {
            topStudents.unshift(sortedStudents[i]);
        } else {
            break;
        }
    }
    return topStudents;
}

console.log(getTopStudents(students1, students2));