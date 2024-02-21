import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './contexts/accounts/accounts.module';
import { CartsModule } from './contexts/carts/carts.module';
import { OrdersModule } from './contexts/orders/orders.module';
import { ProductsModule } from './contexts/products/products.module';
import { PrismaModule } from './db/prisma/prisma.module';
import { AuthMiddleware } from './middlewares/auth.middleware';

//decorator
// 팩토리:데코레이터를 찍어내는 함수
// 괄호가 있는 것도 있고 없는 것도 있는데
// 괄호 열고 닫고는 내부적으로 괄호없는 데코레이터를 만들어..?

// 싱글톤
// 클래스를만들어놓고 딱 인스턴스 하나만 만들고 돌려쓰기=> 인스턴스는 하나의 객체. 그 안의 데이터를 모두가 공유...??
// 싱글톤은 db커넥션 한번만..?

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    AccountsModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    PrismaModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
