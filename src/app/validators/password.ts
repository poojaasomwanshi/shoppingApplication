import { FormControl } from "@angular/forms";
export class PasswordValidator{
    static passwordValidators(control:FormControl):any{
      return new Promise((resolve)=>{
          setTimeout(()=>{
              if(control.value.toLowerCase()==='greg'){
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