import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../domain/order.repository';
import { Order } from '../domain/order';

@Injectable()
export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  async save(order: Order): Promise<void> {
    this.orders.push(order);
  }

  async findById(id: string): Promise<Order | undefined> {
    return this.orders.find((order) => order.id === id);
  }
}
