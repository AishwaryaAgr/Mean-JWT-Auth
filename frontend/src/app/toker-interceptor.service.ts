import { Injectable } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokerInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req,next){
    let tokenizedReq = req.clone();
    setHeader:{
      Autherization: 'Bearer xx.yy.zz'
    }
    return next.handle(tokenizedReq)
  }
}
