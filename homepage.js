let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent=empPayrollList.length;
        createInnerHtml();
        localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')): [];
}


//Template literal ES6 feature
const createInnerHtml = () => {
    
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
            <tr>
                <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                <img name="${empPayrollData._id} onclick="remove(this)" src="/EmployeePayRoll/Assets/images.png" alt="delete" width="30" height="30" >
                <img  name="${empPayrollData._id} onclick="update(this)" src="/EmployeePayRoll/Assets/images (2).png" alt="edit"  width="30" height="30">
                </td>
            </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Kumudini Khairnar',
            _gender: 'Female',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '700000',
            _startDate: '2 Oct 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: "/EmployeePayRoll/Assets/Eclipse-1.png"
        },
        {
            _name: 'Prathmesh Khairnar',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Sales'
            ],
            _salary: '900000',
            _startDate: '12 Nov 2018',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: "/EmployeePayRoll/Assets/Eclipse-4.png"
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
