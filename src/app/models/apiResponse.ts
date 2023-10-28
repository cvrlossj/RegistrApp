export class ApiResponse<type>{
    msg:string = '';
    data:type[] = [];
    sucess:boolean = false;
    isFailed:boolean = false;
}