import { OrdersRepository } from "./orders.repository";
import { CreateOrderDTO, UpdateOrderDTO } from "./orders.Dto";

export class OrdersService {
    constructor(private repo = new OrdersRepository()){}

    async create(data: CreateOrderDTO){
    const modules = await this.repo.modules();


    if (!modules.includes(data.module)){
        throw new Error(`El modulo ${data.module} no existe`);
    }
    const order = await this.repo.create(data);
    return {
        id: order.id,
        reference_id: order.reference_id,
        quantity: order.quantity,
        quantity_pending: order.quantity_pending,
        module: order.module
    }
}
    async findAll(){
        return await this.repo.findAll();
    }
    async update(id: string, data: UpdateOrderDTO){
        // falta validar cauntas unidades se han producido
        const order = await this.repo.findById(id);
        if(!order){
            throw new Error("No se encontro la orden de produccion")
        }
if (order.status === "CANCELADA"){
            throw new Error ("Esta orden esta eliminada")
        }
        return this.repo.update(id, data)
    }
    async delete (id: string){
        const order = await this.repo.findById(id);
        if(!order){
            throw new Error("No se encontro la orden de produccion")
        }
        if (order.status === "CANCELADA"){
            throw new Error ("Ya esta orden fue cancelada")
        }
        await this.repo.delete(id)
        return {message: "Orden cancelada exitosamente"}
    }
}