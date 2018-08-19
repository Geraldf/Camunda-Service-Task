

export class Task1 {

    async doTask(task, taskService) {
        const date = new Date();
        const invoice = await new File({ localPath: "./invoice.txt" }).load();
        const minute = date.getMinutes();
        const variables = new Variables().setAll({ invoice, date });
      
        // check if minute is even
        if (minute % 2 === 0) {
          // for even minutes, store variables in the process scope
          await taskService.complete(task, variables);
        } else {
          // for odd minutes, store variables in the task local scope
          await taskService.complete(task, null, variables);
        } 
    }
    
}