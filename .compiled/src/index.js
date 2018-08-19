"use strict";

const {
  Client,
  logger } = require("camunda-external-task-client-js");
const { MyTask } = require("./tasks/task1");

const myTask = new MyTask();
// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://nuc.local:9080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'invoiceCreator'
client.subscribe("invoiceCreator", myTask.doWork);
//   client.subscribe("invoiceCreator", async function({ task, taskService }) {
//     // Put your business logic
//     // complete the task
//     const date = new Date();
//     const invoice = await new File({ localPath: "./assets/invoice.txt" }).load();
//     const minute = date.getMinutes();
//     const variables = new Variables().setAll({ invoice, date });

//     // check if minute is even
//     if (minute % 2 === 0) {
//       // for even minutes, store variables in the process scope
//       await taskService.complete(task, variables);
//     } else {
//       // for odd minutes, store variables in the task local scope
//       await taskService.complete(task, null, variables);
//     }
//   });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDbGllbnQiLCJsb2dnZXIiLCJyZXF1aXJlIiwiTXlUYXNrIiwibXlUYXNrIiwiY29uZmlnIiwiYmFzZVVybCIsInVzZSIsImNsaWVudCIsInN1YnNjcmliZSIsImRvV29yayJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNO0FBQ0ZBLFFBREU7QUFFRkMsUUFGRSxLQUVVQyxRQUFRLGlDQUFSLENBRmhCO0FBR0UsTUFBTSxFQUFDQyxNQUFELEtBQVlELFFBQVEsZUFBUixDQUFsQjs7QUFFQSxNQUFNRSxTQUFTLElBQUlELE1BQUosRUFBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1FLFNBQVMsRUFBRUMsU0FBUyxtQ0FBWCxFQUFnREMsS0FBS04sTUFBckQsRUFBZjs7QUFFQTtBQUNBLE1BQU1PLFNBQVMsSUFBSVIsTUFBSixDQUFXSyxNQUFYLENBQWY7O0FBRUE7QUFDQUcsT0FBT0MsU0FBUCxDQUFpQixnQkFBakIsRUFBbUNMLE9BQU9NLE1BQTFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuICAgIENsaWVudCxcbiAgICBsb2dnZXIgIH0gPSByZXF1aXJlKFwiY2FtdW5kYS1leHRlcm5hbC10YXNrLWNsaWVudC1qc1wiKTtcbiAgY29uc3Qge015VGFza30gID0gcmVxdWlyZShcIi4vdGFza3MvdGFzazFcIik7XG4gIFxuICBjb25zdCBteVRhc2sgPSBuZXcgTXlUYXNrKCk7XG4gIC8vIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDbGllbnQ6XG4gIC8vICAtICdiYXNlVXJsJzogdXJsIHRvIHRoZSBXb3JrZmxvdyBFbmdpbmVcbiAgLy8gIC0gJ2xvZ2dlcic6IHV0aWxpdHkgdG8gYXV0b21hdGljYWxseSBsb2cgaW1wb3J0YW50IGV2ZW50c1xuICBjb25zdCBjb25maWcgPSB7IGJhc2VVcmw6IFwiaHR0cDovL251Yy5sb2NhbDo5MDgwL2VuZ2luZS1yZXN0XCIsIHVzZTogbG9nZ2VyIH07XG4gIFxuICAvLyBjcmVhdGUgYSBDbGllbnQgaW5zdGFuY2Ugd2l0aCBjdXN0b20gY29uZmlndXJhdGlvblxuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KGNvbmZpZyk7XG4gIFxuICAvLyBzdXNic2NyaWJlIHRvIHRoZSB0b3BpYzogJ2ludm9pY2VDcmVhdG9yJ1xuICBjbGllbnQuc3Vic2NyaWJlKFwiaW52b2ljZUNyZWF0b3JcIiwgbXlUYXNrLmRvV29yayk7XG4vLyAgIGNsaWVudC5zdWJzY3JpYmUoXCJpbnZvaWNlQ3JlYXRvclwiLCBhc3luYyBmdW5jdGlvbih7IHRhc2ssIHRhc2tTZXJ2aWNlIH0pIHtcbi8vICAgICAvLyBQdXQgeW91ciBidXNpbmVzcyBsb2dpY1xuLy8gICAgIC8vIGNvbXBsZXRlIHRoZSB0YXNrXG4vLyAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyAgICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IG5ldyBGaWxlKHsgbG9jYWxQYXRoOiBcIi4vYXNzZXRzL2ludm9pY2UudHh0XCIgfSkubG9hZCgpO1xuLy8gICAgIGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuLy8gICAgIGNvbnN0IHZhcmlhYmxlcyA9IG5ldyBWYXJpYWJsZXMoKS5zZXRBbGwoeyBpbnZvaWNlLCBkYXRlIH0pO1xuICBcbi8vICAgICAvLyBjaGVjayBpZiBtaW51dGUgaXMgZXZlblxuLy8gICAgIGlmIChtaW51dGUgJSAyID09PSAwKSB7XG4vLyAgICAgICAvLyBmb3IgZXZlbiBtaW51dGVzLCBzdG9yZSB2YXJpYWJsZXMgaW4gdGhlIHByb2Nlc3Mgc2NvcGVcbi8vICAgICAgIGF3YWl0IHRhc2tTZXJ2aWNlLmNvbXBsZXRlKHRhc2ssIHZhcmlhYmxlcyk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIC8vIGZvciBvZGQgbWludXRlcywgc3RvcmUgdmFyaWFibGVzIGluIHRoZSB0YXNrIGxvY2FsIHNjb3BlXG4vLyAgICAgICBhd2FpdCB0YXNrU2VydmljZS5jb21wbGV0ZSh0YXNrLCBudWxsLCB2YXJpYWJsZXMpO1xuLy8gICAgIH1cbi8vICAgfSk7Il19