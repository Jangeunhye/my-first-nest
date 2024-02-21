import { Injectable } from '@nestjs/common';

//주입할수있는 애로 만들어야해서. 의존성주입을 위해서!
// 그리고 inject에 사용되는 애들을 provider라고 한다.

//의존성 주입은 nest가한다.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
