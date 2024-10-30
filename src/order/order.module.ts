import { Module } from '@nestjs/common';
import { OrderController } from './infrastructure/order.controller';
import { InMemoryOrderRepository } from './infrastructure/order.repository';

@Module({
  controllers: [OrderController],
  providers: [InMemoryOrderRepository],
})
export class OrderModule {}
