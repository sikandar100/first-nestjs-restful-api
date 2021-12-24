import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@UseFilters(HttpExceptionFilter)
@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);

    if (!request.headers.authorization) {
      throw new HttpException('Not UAthorized', HttpStatus.FORBIDDEN);
    }
    //write your own jwt verify logic as given in the comment. just so you can
    //validate the request run time and use the auth guard properly.


    //this is just an example code below

    // let bearerToken = request.headers.authorization;
    // let [type, token] = bearerToken.split(' ');
    // console.log(token);

    // let test2 = jwt.decode(token);
    // //let test = jwt.verify(request.headers.authorization, jwtConstants.secret);
    // console.log(test2);
    return true;
  }
}
