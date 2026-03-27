export interface CreateEmployeesDTO {
    document: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    module: string;
}

export interface UpdateEmployeesDTO {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    module?: string;
}