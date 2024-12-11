const employee = {
    name: "sam",
    streetAddress: "32 Cottage St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
    ...employee,
    [key]: value
   }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee}
    delete updatedEmployee[key]
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}





































// const employee = {
//     name: "Sam",
//     streetAddress: "1818 Washington St",
// }

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return {
//         ...employee,
//         [key]: value,
//     };
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//     let newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }