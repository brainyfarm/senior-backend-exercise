import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { InMemoryOrderRepository } from './order.repository';
import { CreateOrderDto } from '../application/create-order.dto';
import { Order } from '../domain/order';

@Controller('order')
export class OrderController {
  constructor(private readonly orderRepository: InMemoryOrderRepository) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    const { productId, quantity, userId } = createOrderDto;
    const order = new Order({
      id: (this.orderRepository as any).orders.length + 1,
      productId,
      quantity,
      userId,
    });

    await this.orderRepository.save(order);
    return order;
  }

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    const order = await this.orderRepository.findById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }
}
