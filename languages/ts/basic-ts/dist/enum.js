"use strict";
// Enum with unitialized
var Role;
(function (Role) {
    Role[Role["student"] = 0] = "student";
    Role[Role["teacher"] = 1] = "teacher";
    Role[Role["admin"] = 2] = "admin";
})(Role || (Role = {}));
console.log(Role.admin); // log 2
//Role.student = 'student' // Error: Cannot assign to 'student' because it is a read-only property.
// Enum with fully initialized
var newRole;
(function (newRole) {
    newRole["student"] = "student";
    newRole["teacher"] = "teacher";
    newRole["admin"] = "admin";
})(newRole || (newRole = {}));
console.log(newRole.admin); // log 'admin'
