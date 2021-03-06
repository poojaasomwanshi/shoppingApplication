import { FormControl } from "@angular/forms";
export class PasswordValidator{
    static passwordValidators(control:FormControl):any{
      return new Promise((resolve)=>{
          setTimeout(()=>{
              if(control.value.minLength()==5 && control.value.maxLength()==7){
                  resolve({
                      'username taken':true,
                  });
              }else{
                  resolve(null);
              }
          },2000)
      })

    }
}