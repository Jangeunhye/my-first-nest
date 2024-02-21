import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//controller는 req받고 res보내는 것의 책임을 가지고 있는 녀석. 라우팅 하는애.
// 이 데코레이션은 controller역할을 주는 것.
@Controller()
export class AppController {
  //nest가 초기화할때 앱서비스를 알아서 찾아서 넣어줘(앱서비스같이)
  //this.appService = appService도 해줘 생략된 것
  constructor(private readonly appService: AppService) {}

  // decorator는 꾸며주는애...기능들이 덧붙여져....
  // decorator 사용가능한 것들
  // 1. 클래스
  // 2. 메서드
  // 3. 프로퍼티
  // 4. 파라미터

  //get방식의 request handler
  @Get()
  // 여기 인자에 path 적으면 그 경로되는거야
  //dynamic route 하고싶으면 콜론으로 :/postId 처럼
  getHello(): string {
    return this.appService.getHello();
  }
}
