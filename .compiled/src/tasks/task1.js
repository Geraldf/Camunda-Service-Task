"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyTask = undefined;

var _camundaExternalTaskClientJs = require("camunda-external-task-client-js");

class MyTask {

    async doWork({ task, taskService }) {
        // Put your business logic
        // complete the task
        const date = new Date();
        const invoice = await new _camundaExternalTaskClientJs.File({ localPath: "./assets/invoice.txt" }).load();
        const minute = date.getMinutes();
        const variables = new _camundaExternalTaskClientJs.Variables().setAll({ invoice, date });

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
exports.MyTask = MyTask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YXNrcy90YXNrMS5qcyJdLCJuYW1lcyI6WyJNeVRhc2siLCJkb1dvcmsiLCJ0YXNrIiwidGFza1NlcnZpY2UiLCJkYXRlIiwiRGF0ZSIsImludm9pY2UiLCJGaWxlIiwibG9jYWxQYXRoIiwibG9hZCIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJ2YXJpYWJsZXMiLCJWYXJpYWJsZXMiLCJzZXRBbGwiLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLE1BQU1BLE1BQU4sQ0FBWTs7QUFFZixVQUFNQyxNQUFOLENBQWEsRUFBRUMsSUFBRixFQUFRQyxXQUFSLEVBQWIsRUFBbUM7QUFDL0I7QUFDQTtBQUNBLGNBQU1DLE9BQU8sSUFBSUMsSUFBSixFQUFiO0FBQ0EsY0FBTUMsVUFBVSxNQUFNLElBQUlDLGlDQUFKLENBQVMsRUFBRUMsV0FBVyxzQkFBYixFQUFULEVBQWdEQyxJQUFoRCxFQUF0QjtBQUNBLGNBQU1DLFNBQVNOLEtBQUtPLFVBQUwsRUFBZjtBQUNBLGNBQU1DLFlBQVksSUFBSUMsc0NBQUosR0FBZ0JDLE1BQWhCLENBQXVCLEVBQUVSLE9BQUYsRUFBV0YsSUFBWCxFQUF2QixDQUFsQjs7QUFFQTtBQUNBLFlBQUlNLFNBQVMsQ0FBVCxLQUFlLENBQW5CLEVBQXNCO0FBQ3RCO0FBQ0Esa0JBQU1QLFlBQVlZLFFBQVosQ0FBcUJiLElBQXJCLEVBQTJCVSxTQUEzQixDQUFOO0FBQ0MsU0FIRCxNQUdPO0FBQ1A7QUFDQSxrQkFBTVQsWUFBWVksUUFBWixDQUFxQmIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUNVLFNBQWpDLENBQU47QUFDQztBQUNKO0FBbEJjO1FBQU5aLE0sR0FBQUEsTSIsImZpbGUiOiJ0YXNrMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZSxWYXJpYWJsZXN9IGZyb20gXCJjYW11bmRhLWV4dGVybmFsLXRhc2stY2xpZW50LWpzXCJcbmV4cG9ydCBjbGFzcyBNeVRhc2t7XG5cbiAgICBhc3luYyBkb1dvcmsoeyB0YXNrLCB0YXNrU2VydmljZSB9KXtcbiAgICAgICAgLy8gUHV0IHlvdXIgYnVzaW5lc3MgbG9naWNcbiAgICAgICAgLy8gY29tcGxldGUgdGhlIHRhc2tcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGludm9pY2UgPSBhd2FpdCBuZXcgRmlsZSh7IGxvY2FsUGF0aDogXCIuL2Fzc2V0cy9pbnZvaWNlLnR4dFwiIH0pLmxvYWQoKTtcbiAgICAgICAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IG5ldyBWYXJpYWJsZXMoKS5zZXRBbGwoeyBpbnZvaWNlLCBkYXRlIH0pO1xuICAgIFxuICAgICAgICAvLyBjaGVjayBpZiBtaW51dGUgaXMgZXZlblxuICAgICAgICBpZiAobWludXRlICUgMiA9PT0gMCkge1xuICAgICAgICAvLyBmb3IgZXZlbiBtaW51dGVzLCBzdG9yZSB2YXJpYWJsZXMgaW4gdGhlIHByb2Nlc3Mgc2NvcGVcbiAgICAgICAgYXdhaXQgdGFza1NlcnZpY2UuY29tcGxldGUodGFzaywgdmFyaWFibGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZm9yIG9kZCBtaW51dGVzLCBzdG9yZSB2YXJpYWJsZXMgaW4gdGhlIHRhc2sgbG9jYWwgc2NvcGVcbiAgICAgICAgYXdhaXQgdGFza1NlcnZpY2UuY29tcGxldGUodGFzaywgbnVsbCwgdmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=