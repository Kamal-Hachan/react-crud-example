import axios from 'axios';



class EmployeeService {

    // getEmployees(){
    //     return axios.get('');
    // }

    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }

    getEmployeeById(employeeId){
        return axios.get('/user/'+ employeeId);
    }

    // updateEmployee(employee, employeeId){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }
}

export default new EmployeeService()