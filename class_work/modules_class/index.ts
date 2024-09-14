//creat student data
 import {getStudentdata,getonsitestudentlist,getstudentrn,isstudentonsite} from "./student.js"

 

 const result = getStudentdata ()
 console.log("result",result);
 
 const onsitestudent = getonsitestudentlist()
 console.log("getonsitestudentlist",onsitestudent);

 const result2 = getstudentrn(416781)
 console.log("OnsiteStudent",result2);

 const result3 = isstudentonsite(416787)
 console.log(result3);
 
 
 
















