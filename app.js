// Employee registration form
const employeeForm = document.getElementById('employee-form');
const employeeList = document.getElementById('employee-list');

// Create an array to store employees
let employees = [];

// Event listener for form submission
employeeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const position = e.target[1].value;
    const about = e.target[2].value;
    const joiningDate = e.target[3].value;

    // Create a new employee object
    const newEmployee = {
        name,
        position,
        about,
        joiningDate,
    };

    // Add employee to the list
    employees.push(newEmployee);

    // Reset the form
    e.target.reset();

    // Render the updated employee list
    renderEmployeeList();
});

// Render employee list dynamically
function renderEmployeeList() {
    employeeList.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.classList.add('hover:bg-gray-100', 'transition', 'duration-200');

        row.innerHTML = `
            <td class="px-6 py-4">${employee.name}</td>
            <td class="px-6 py-4">${employee.position}</td>
            <td class="px-6 py-4">${employee.about}</td>
            <td class="px-6 py-4">${employee.joiningDate}</td>
            <td class="px-6 py-4">
                <button onclick="deleteEmployee(${index})" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">Delete</button>
            </td>
        `;
        employeeList.appendChild(row);
    });
}

// Delete employee from the list
function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeList();
}
