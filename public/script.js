const API = "http://localhost:5000/api";

async function loadEmployees() {
    const res = await fetch(`${API}/employees`);
    const data = await res.json();

    const list = document.getElementById("employeeList");

    list.innerHTML = data.map(emp => `
        <div>
            <h3>${emp.name}</h3>
            <p>${emp.email}</p>
            <p>${emp.department}</p>
            <p>${emp.role || ""}</p>
        </div>
        <hr>
    `).join("");
}

document.getElementById("employeeForm")
.addEventListener("submit", async (e) => {
    e.preventDefault();

    await fetch(`${API}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            department: department.value,
            role: role.value
        })
    });

    e.target.reset();
    loadEmployees();
});

loadEmployees();