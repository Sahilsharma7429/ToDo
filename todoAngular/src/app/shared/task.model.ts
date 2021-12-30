export class Task {
    _id!: string;
    name!:string;
    task!: string;
    Created_date!: Date;
    status!: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }];
     
      
}
