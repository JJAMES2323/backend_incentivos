import { workLogsRepository } from "./work-logs.repository";
import { CreateWorkLogDto, UpdateWorkLogDto } from "./work-logs.dto";
import { EmployeesRepository } from "../employees/employees.repository";

export class WorkLogsService {
    constructor(private repo = new workLogsRepository(), private employeesRepo = new EmployeesRepository()){}

    async create (data: CreateWorkLogDto){
        const workLog = await this.repo.findByEmployeeAndDate(data.employee_id, data.work_date);
        if (workLog){
            throw new Error("Ya existe un registro para este empleado en esta fecha");
        } 
        const employee = await this.employeesRepo.findById(parseInt(data.employee_id));
        if (!employee){
            throw new Error("El empleado no existe");
        }
        if (employee.module !== data.module){
            throw new Error (`El empleado no pertenece al modulo ${data.module}`);
        }
        const newWorkLog = await this.repo.create(data);
        return {
            id: newWorkLog.id,
            employee_id: newWorkLog.employee_id,
            module: newWorkLog.module,
            work_date: newWorkLog.work_date,
            minutes_worked: newWorkLog.minutes_worked,
            minutes_downtime: newWorkLog.minutes_downtime
        }
    }
    
}

