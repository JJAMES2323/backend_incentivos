export interface CreateOrderDTO {
    reference_id: string;
    quantity: number;
    module: string;
}

export interface UpdateOrderDTO  {
    quantity?: number;
    module?: string;
    status?: string  
}

